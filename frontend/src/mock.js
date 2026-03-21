// Mock data pentru LaserTag Moisei

export const mockData = {
  hero: {
    title: "Combat Zone Moisei",
    subtitle: "Alege-ți aventura: adrenalina Lasertag-ului sau strategia Paintball-ului, totul într-un singur loc!",
    description: "Alătură-te unei aventuri captivante în arena noastră exterioară. Jocuri intense, echipament de ultimă generație și distracție garantată pentru toate vârstele."
  },
  
  about: {
    history: "Combat Zone Moisei a fost înființată în 2026 cu scopul de a oferi o experiență unică de divertisment în regiunea Maramureșului istoric. În acest an, am devenit destinația preferată pentru petreceri, team building-uri și sesiuni de joc pline de adrenalină.",
    mission: "Misiunea noastră este să oferim fiecărui aventurier o experiență de neuitat, fie că alege precizia tehnologiei Lasertag sau strategia intensă a Paintball-ului. Construim un spațiu unde distracția întâlnește competiția sănătoasă, oferind momente pline de energie într-un mediu sigur, modern și profesional.",
    team: [
      { name: "Romeo Chiriac", role: "Fondator & Manager", description: "Arhitectul aventurii și tehnologiei noastre." },
      { name: "Raluca Chiriac", role: "Co-Fondator & Organizator", description: "Expertul din spatele fiecărei petreceri reușite." }
    ],
    facilities: [
      "Arenă tactică de 2500mp cu obstacole strategice",
      "Echipament Premium: Lasertag digital & Paintball tactic",
      "Sisteme de scor live și monitorizare a misiunii",
      "Zonă de relaxare climatizată pentru pauze între lupte",
      "Fundal sonor rustic și atmosferă naturală de munte",
      "Decor autentic integrat în peisajul montan",
      "Vestiare moderne și spațiu generos pentru luat masa"
    ]
  },
  
  // Reguli Lasertag
  rulesLasertag: [
    {
      title: "Echipament și Pregătire",
      rules: [
        "Purtați echipamentul de protecție furnizat pe toată durata jocului",
        "Verificați că vesta și arma sunt corect poziționate înainte de start",
        "Ascultați cu atenție briefing-ul instructorului",
        "Păstrați echipamentul în stare bună - nu-l aruncați sau loviți"
      ]
    },
    {
      title: "Conduită în Arenă",
      rules: [
        "Nu alergați - deplasarea se face în ritm alert dar controlat",
        "Nu împingeți și nu atingeți fizic adversarii",
        "Nu acoperiți senzorii vestei cu mâinile sau alte obiecte",
        "Respectați limitele marcate ale arenei",
        "În caz de urgență, ridicați ambele mâini și strigați 'STOP'"
      ]
    },
    {
      title: "Regulile Jocului",
      rules: [
        "Scopul este să acumulați cât mai multe puncte lovind senzorii adversarilor",
        "Când sunteți lovit, vesta se dezactivează timp de 5 secunde",
        "Nu blocați pasajele sau intrările strategice",
        "Jucați fair-play - competiția este distracția, nu conflictul",
        "Respectați semnalele sonore de start și final ale jocului"
      ]
    },
    {
      title: "Restricții și Siguranță",
      rules: [
        "Vârsta minimă: 8 ani (cu supraveghere adult pentru 8-12 ani)",
        "Nu este permis accesul cu alimente, băuturi sau obiecte personale în arenă",
        "Nu sunt permise telefoane mobile în timpul jocului",
        "Persoanele cu probleme medicale (cardiace, epilepsie) trebuie să anunțe personalul",
        "Îmbrăcăminte recomandată: haine comode și încălțăminte sport"
      ]
    }
  ],

  // Reguli Paintball
  rulesPaintball: [
    {
      title: "Echipament și Pregătire",
      rules: [
        "Masca de protecție trebuie purtată OBLIGATORIU în arenă - nu o scoateți niciodată",
        "Salopeta de protecție vă protejează de vânătăi - purtați-o corect",
        "Verificați că arma este în siguranță (barrel sock) înainte de a intra în arenă",
        "Ascultați briefing-ul instructorului cu atenție - regulile sunt pentru siguranța voastră"
      ]
    },
    {
      title: "Conduită în Arenă",
      rules: [
        "Nu trageți de la distanță mai mică de 5 metri - lovitura poate fi dureroasă",
        "Nu împingeți și nu atingeți fizic adversarii",
        "Nu scoateți masca de protecție în arenă - NICIODATĂ",
        "Respectați limitele marcate ale arenei",
        "În caz de urgență, ridicați ambele mâini și strigați 'STOP' - jocul se oprește imediat"
      ]
    },
    {
      title: "Regulile Jocului",
      rules: [
        "Când sunteți lovit și vopseaua explodează, sunteți eliminat - ridicați mâna și părăsiți arena",
        "Lovituri pe echipament sau armă nu contează - doar pe corp",
        "Nu ștergeți vopseaua pentru a continua jocul - aceasta este trișat",
        "Jucați fair-play - competiția este distracția, nu conflictul",
        "Respectați semnalele de start și final ale instructorului"
      ]
    },
    {
      title: "Restricții și Siguranță",
      rules: [
        "Vârsta minimă: 15 ani - pentru siguranța tuturor, nu se face excepție",
        "Nu este permis accesul cu alimente, băuturi sau obiecte personale în arenă",
        "Nu sunt permise telefoane mobile în timpul jocului",
        "Persoanele cu probleme medicale (cardiace, epilepsie) trebuie să anunțe personalul",
        "Îmbrăcăminte recomandată: haine vechi pe care nu vă pare rău să le pătați, încălțăminte sport"
      ]
    }
  ],

  // Compatibilitate cu codul vechi
  rules: [
    {
      title: "Echipament și Pregătire",
      rules: [
        "Purtați echipamentul de protecție furnizat pe toată durata jocului",
        "Verificați că vesta și arma sunt corect poziționate înainte de start",
        "Ascultați cu atenție briefing-ul instructorului",
        "Păstrați echipamentul în stare bună - nu-l aruncați sau loviți"
      ]
    },
    {
      title: "Conduită în Arenă",
      rules: [
        "Nu alergați - deplasarea se face în ritm alert dar controlat",
        "Nu împingeți și nu atingeți fizic adversarii",
        "Nu acoperiți senzorii vestei cu mâinile sau alte obiecte",
        "Respectați limitele marcate ale arenei",
        "În caz de urgență, ridicați ambele mâini și strigați 'STOP'"
      ]
    },
    {
      title: "Regulile Jocului",
      rules: [
        "Scopul este să acumulați cât mai multe puncte lovind senzorii adversarilor",
        "Când sunteți lovit, vesta se dezactivează timp de 5 secunde",
        "Nu blocați pasajele sau intrările strategice",
        "Jucați fair-play - competiția este distracția, nu conflictul",
        "Respectați semnalele sonore de start și final ale jocului"
      ]
    },
    {
      title: "Restricții și Siguranță",
      rules: [
        "Vârsta minimă: 8 ani (cu supraveghere adult pentru 8-12 ani)",
        "Nu este permis accesul cu alimente, băuturi sau obiecte personale în arenă",
        "Nu sunt permise telefoane mobile în timpul jocului",
        "Persoanele cu probleme medicale (cardiace, epilepsie) trebuie să anunțe personalul",
        "Îmbrăcăminte recomandată: haine comode și încălțăminte sport"
      ]
    }
  ],
  
  // Prețuri Lasertag
  pricingLasertag: [
    {
      id: 1,
      name: "Pachet Simplu",
      price: "100 RON/persoană",
      duration: "90 minute joc intens",
      features: [
        "Acces la arenă pentru 6-12 persoane",
        "Echipament complet inclus",
        "Organizare pe echipe",
        "Rezerve de apă la discreție",
        "Scor individual afișat",
        "3 sesiuni de joc (3 runde/30 minute)"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Pachet Full",
      price: "150 RON/persoană",
      duration: "90 minute joc intens",
      features: [
        "Acces pentru 6-12 persoane",
        "Echipament complet inclus",
        "Organizare pe echipe",
        "O rezervă de pizza sau crispy pentru fiecare",
        "Apă sau sucuri la discreție",
        "3 sesiuni de joc (3 runde/30 minute)"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Evenimente Private",
      price: "Ofertă la cerere",
      duration: "Joc intens toată ziua",
      features: [
        "Arenă exclusivă pentru grupul tău",
        "Până la 12 persoane",
        "Instructor dedicat",
        "Turneu personalizat",
        "Sesiuni de joc, cât te țin picioarele",
        "Zonă privată de odihnă",
        "Pachete refresh incluse"
      ],
      popular: false
    }
  ],

  // Prețuri Paintball
  pricingPaintball: [
    {
      id: 1,
      name: "Pachet Paintball",
      price: "120 RON/persoană",
      duration: "90 minute joc intens",
      features: [
        "Acces pentru 6-12 persoane",
        "Vârstă minimă: 15 ani",
        "Echipament complet inclus (mască, armă, salopetă)",
        "300 bile paintball incluse",
        "Organizare pe echipe sau individual",
        "Apă la discreție",
        "Sesiune de joc de 1.5 ore sau epuizarea bilelor"
      ],
      popular: true
    },
    {
      id: 2,
      name: "Refill",
      price: "30 RON/100 bile",
      duration: "",
      features: [
        "Refill necesar pentru continuarea jocului după epuizarea bilelor inițiale",
        "Bile de paintball de calitate superioară pentru o experiență optimă",
        "Disponibil în timpul jocului pentru a menține adrenalina la cote maxime"
      ],
      popular: false
    },
    {
      id: 3,
      name: "Evenimente Private",
      price: "Ofertă la cerere",
      duration: "Joc intens toată ziua",
      features: [
        "Arenă exclusivă pentru grupul tău",
        "Până la 12 persoane",
        "Instructor dedicat",
        "Turneu personalizat",
        "Zonă privată de odihnă",
        "Pachete refresh incluse"
      ],
      popular: false
    }
  ],

  // Compatibilitate cu codul vechi
  pricing: [
    {
      id: 1,
      name: "Pachet Simplu",
      price: "125 RON/persoană",
      duration: "90 minute joc intens",
      features: [
        "Acces la arenă pentru 6-12 persoane",
        "Echipament complet inclus",
        "Organizare pe echipe",
        "Rezerve de apă la discreție",
        "Scor individual afișat",
        "3 sesiuni de joc (3 runde/30 minute)"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Pachet Full",
      price: "175 RON/persoană",
      duration: "90 minute joc intens",
      features: [
        "Acces pentru 6-12 persoane",
        "Echipament complet inclus",
        "Organizare pe echipe",
        "O rezervă de pizza sau crispy pentru fiecare",
        "Apă sau sucuri la discreție",
        "3 sesiuni de joc (3 runde/30 minute)"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Evenimente Private",
      price: "Ofertă la cerere",
      duration: "Joc intens toată ziua",
      features: [
        "Arenă exclusivă pentru grupul tău",
        "Până la 12 persoane",
        "Instructor dedicat",
        "Turneu personalizat",
        "Sesiuni de joc, cât te țin picioarele",
        "Zonă privată de odihnă",
        "Pachete refresh incluse"
      ],
      popular: false
    }
  ],
  
  gallery: [
    {
    id: 1,
    url: "/Images/Image1.JPG",
    title: "Adrenalină în teren",
    description: "Lupte intense de lasertag și paintball"
    },
    {
      id: 2,
      url: "/Images/Image2.JPG",
      title: "Arena Moisei",
      description: "Configurație tactică în decor rustic"
    },
    {
      id: 3,
      url: "/Images/Image3.JPG",
      title: "Misiuni de echipă",
      description: "Strategie și aventură sub cerul liber"
    },
    {
      id: 4,
      url: "/Images/Image4.JPG",
      title: "Arsenal Premium",
      description: "Echipamente digitale și markere profesionale"
    },
    {
      id: 5,
      url: "/Images/Image5.JPG",
      title: "Amurg tactic",
      description: "Atmosferă magică pentru jocuri de seară"
    }
  ],
  
  testimonials: [
    {
      id: 1,
      name: "Gabriel S.R.",
      rating: 5,
      text: "Experiență extraordinară! Arena este modernă, personalul prietenos și jocul extrem de captivant. Am venit cu prietenii și ne-am distrat de minune. Cu siguranță vom reveni!",
      date: "14 martie 2026"
    },
    {
      id: 2,
      name: "Ana-Maria Gheorghe",
      rating: 5,
      text: "Am organizat aici petrecerea de ziua fiului meu și a fost perfect! Copiii s-au distrat enorm, instructorii au fost foarte atenți și profesioniști. Recomand cu încredere!",
      date: "14 martie 2026"
    },
    {
      id: 3,
      name: "Cristian Moldovan",
      rating: 5,
      text: "Cel mai tare team building pe care l-am avut vreodată! Echipamentul este top, arena e bine gândită cu multe ascunzișuri. Atmosphere cu lumini neon e super cool. 10/10!",
      date: "14 martie 2026"
    }
  ],
  
  contact: {
    phone: "+40 765 351 019",
    email: "contact@combatzonemoisei.ro",
    whatsapp: "+40 765 351 019",
    address: "Str. Izvorul Dragoș nr. 671E, Moisei, Maramureș",
    schedule: {
      weekdays: "10:00 - 22:00",
      weekend: "10:00 - 22:00"
    },
    socialMedia: {
      facebook: "https://www.facebook.com/combat.zone.moisei",
      instagram: "https://www.instagram.com/combat.zone.moisei/",
      tiktok: "https://www.tiktok.com/@combat_zone_moisei"
    }
  }
};
