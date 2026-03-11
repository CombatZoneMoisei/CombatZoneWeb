import requests
from datetime import datetime, timedelta
from typing import List, Dict, Any, Optional
import csv
from io import StringIO
import os
import time

# --- CONFIGURARE ---
# URL-ul pentru tab-ul "Lasertag"
SHEET_URL_LASERTAG = os.environ.get(
    'GOOGLE_SHEETS_URL_LASERTAG',
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSRv3VttVsbFUj1YPoYYrc1_CVrQYT5SeZEOh8CeSYmlOawZEtnOWu-9JvyuR77xmfSnoVdXi8FVSYG/pub?gid=716083886&single=true&output=csv'
)

# URL-ul pentru tab-ul "Paintball"
SHEET_URL_PAINTBALL = os.environ.get(
    'GOOGLE_SHEETS_URL_PAINTBALL',
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSRv3VttVsbFUj1YPoYYrc1_CVrQYT5SeZEOh8CeSYmlOawZEtnOWu-9JvyuR77xmfSnoVdXi8FVSYG/pub?gid=33968318&single=true&output=csv'
)

SESSION_DURATION_MINUTES = int(os.environ.get('SESSION_DURATION_MINUTES', '90'))
OPERATING_HOURS_START = int(os.environ.get('OPERATING_HOURS_START', '10'))
OPERATING_HOURS_END = int(os.environ.get('OPERATING_HOURS_END', '21'))
SLOT_INTERVAL_MINUTES = int(os.environ.get('SLOT_INTERVAL_MINUTES', '30'))


def _get_sheet_url(game_type: str) -> str:
    """Returnează URL-ul corect al sheet-ului în funcție de tipul de activitate"""
    if game_type == 'paintball':
        return SHEET_URL_PAINTBALL
    return SHEET_URL_LASERTAG  # Default: lasertag


def get_blocked_times(game_type: Optional[str] = None) -> List[Dict]:
    """
    Preia rezervările confirmate din Google Sheets.
    
    Args:
        game_type: 'lasertag' sau 'paintball'. 
                   Dacă None, preia din ambele tab-uri.
    
    Coloane așteptate în Sheet:
        Data | Ora | Nume Client | Telefon | Pachet | Status | Tip activitate
    """
    game_types_to_fetch = [game_type] if game_type else ['lasertag', 'paintball']
    all_blocked_slots = []

    for gt in game_types_to_fetch:
        sheet_url = _get_sheet_url(gt)
        
        try:
            # Cache busting pentru a forța Google să trimită datele noi
            separator = "&" if "?" in sheet_url else "?"
            url = f"{sheet_url}{separator}cache_update={int(time.time())}"

            print(f"DEBUG: Fetching {gt.upper()} reservations from: {url[:120]}...")

            response = requests.get(url, timeout=10)
            response.raise_for_status()

            print(f"DEBUG: [{gt}] Response status: {response.status_code}, length: {len(response.text)} chars")

            reader = csv.DictReader(StringIO(response.text))
            blocked_slots = []

            row_count = 0
            for row in reader:
                row_count += 1

                # Citim coloanele
                date_str = row.get('Data', '').strip()
                time_str = row.get('Ora', '').strip()
                status = row.get('Status', '').strip().lower()
                tip_activitate = row.get('Tip activitate', '').strip().lower()

                # Verificăm statusul - DOAR "confirmat" blochează
                if status != 'confirmat' or not date_str or not time_str:
                    if row_count <= 3:
                        print(f"DEBUG: [{gt}] Row {row_count} skipped - Data: {date_str}, Ora: {time_str}, Status: {status}")
                    continue

                # Filtrare suplimentară după tip activitate (dacă coloana există și e populată)
                if tip_activitate and game_type and tip_activitate != game_type:
                    continue

                try:
                    # Format așteptat: 25/03/2026 și 14:30
                    full_dt_str = f"{date_str} {time_str}"
                    start_time = datetime.strptime(full_dt_str, "%d/%m/%Y %H:%M")
                    end_time = start_time + timedelta(minutes=SESSION_DURATION_MINUTES)

                    blocked_slots.append({
                        'start_datetime': start_time,
                        'end_datetime': end_time,
                        'date_iso': start_time.strftime('%Y-%m-%d'),
                        'game_type': gt
                    })

                    print(f"DEBUG: [{gt}] Row {row_count} - Added: {date_str} {time_str}")
                except ValueError as ve:
                    print(f"DEBUG: [{gt}] Format invalid pentru rândul {row_count}: {date_str} {time_str} - {ve}")
                    continue

            print(f"INFO: [{gt}] S-au încărcat {len(blocked_slots)} rezervări confirmate din {row_count} rânduri totale.")
            all_blocked_slots.extend(blocked_slots)

        except Exception as e:
            print(f"ERROR: [{gt}] Eroare la sincronizarea cu Google Sheets: {e}")
            import traceback
            traceback.print_exc()

    return all_blocked_slots


# --- BLOCAJ MANUAL SEPARAT PE TIP ACTIVITATE ---
# Setează data până la care rezervările sunt blocate pentru fiecare tip.
# Pune None dacă nu vrei blocaj pentru acel tip.
MANUAL_BLOCK_UNTIL_LASERTAG = datetime(2026, 3, 31)   # Blocaj lasertag până pe 01/04/2026
MANUAL_BLOCK_UNTIL_PAINTBALL = datetime(2026, 3, 13)   # Blocaj paintball până pe 14/03/2026


def is_time_blocked(date_to_check: str, time_to_check: str, blocked_slots: List[Dict], game_type: str = 'lasertag') -> bool:
    """Verifică dacă intervalul se suprapune cu o rezervare existentă"""
    try:
        # 1. Blocaj manual separat pe tip de activitate
        check_date_dt = datetime.strptime(date_to_check, "%Y-%m-%d")

        if game_type == 'lasertag' and MANUAL_BLOCK_UNTIL_LASERTAG:
            if check_date_dt <= MANUAL_BLOCK_UNTIL_LASERTAG:
                return True
        elif game_type == 'paintball' and MANUAL_BLOCK_UNTIL_PAINTBALL:
            if check_date_dt <= MANUAL_BLOCK_UNTIL_PAINTBALL:
                return True

        proposed_start = datetime.strptime(f"{date_to_check} {time_to_check}", "%Y-%m-%d %H:%M")
        proposed_end = proposed_start + timedelta(minutes=SESSION_DURATION_MINUTES)

        # 2. Verificare suprapunere (Overlap logic)
        for slot in blocked_slots:
            if slot['date_iso'] == date_to_check:
                if proposed_start < slot['end_datetime'] and proposed_end > slot['start_datetime']:
                    return True

        return False
    except Exception:
        return False


def get_available_times_for_date(date_str: str, game_type: str = 'lasertag') -> Dict[str, Any]:
    """
    Funcția principală apelată de website.
    
    Args:
        date_str: Data în format YYYY-MM-DD
        game_type: 'lasertag' sau 'paintball'
    
    Returns:
        Dict cu sloturile disponibile și blocate DOAR pentru tipul de activitate specificat.
        Rezervările de la un tip NU afectează celălalt tip.
    """
    # Preia DOAR rezervările pentru tipul de activitate cerut
    blocked_slots = get_blocked_times(game_type=game_type)

    available = []
    blocked = []

    for hour in range(OPERATING_HOURS_START, OPERATING_HOURS_END):
        for minute in range(0, 60, SLOT_INTERVAL_MINUTES):
            t_str = f"{hour:02d}:{minute:02d}"

            if is_time_blocked(date_str, t_str, blocked_slots, game_type=game_type):
                blocked.append({'time': t_str, 'available': False})
            else:
                available.append({'time': t_str, 'available': True})

    return {
        'available': available,
        'blocked': blocked,
        'all_slots': sorted(available + blocked, key=lambda x: x['time']),
        'game_type': game_type
    }
