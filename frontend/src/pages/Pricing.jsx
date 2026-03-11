import React, { useEffect, useState } from 'react';
import { Check, Star, Crosshair, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockData } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Pricing = () => {
  const [gameType, setGameType] = useState('lasertag');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentPricing = gameType === 'lasertag' ? mockData.pricingLasertag : mockData.pricingPaintball;

  return (
    <div className="pricing-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">TARIFE</h1>
            <p className="page-subtitle">Pachete flexibile pentru fiecare tip de jucător</p>

            {/* Game Type Toggle */}
            <div className="game-type-toggle" data-testid="pricing-game-toggle">
              <button
                className={`toggle-btn ${gameType === 'lasertag' ? 'active' : ''}`}
                onClick={() => setGameType('lasertag')}
                data-testid="pricing-lasertag-btn"
              >
                <Crosshair className="toggle-icon" />
                Lasertag
              </button>
              <button
                className={`toggle-btn ${gameType === 'paintball' ? 'active' : ''}`}
                onClick={() => setGameType('paintball')}
                data-testid="pricing-paintball-btn"
              >
                <Target className="toggle-icon" />
                Paintball
              </button>
            </div>

            <p className="payment-warning">
              ⚠️ Rezervările se vor confirma doar după achitarea avansului de 50% din totalul rezervării</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-main-section">
        <div className="container">
          <div className="pricing-grid-full">
            {currentPricing.map((pkg) => (
              <Card key={pkg.id} className={`pricing-card-full ${pkg.popular ? 'popular-full' : ''}`}>
                {pkg.popular && (
                  <div className="popular-ribbon">
                    <Star className="ribbon-icon" />
                    <span>CEL MAI POPULAR</span>
                  </div>
                )}
                <CardHeader className="pricing-header">
                  <CardTitle className="pricing-title-full">{pkg.name}</CardTitle>
                  <div className="pricing-price-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div className="pricing-price-row">
                      {pkg.price.includes('RON') ? (
                        <>
                          <span className="pricing-price-full">{pkg.price.split('RON')[0]}RON</span>
                          {pkg.price.includes('/') && <span className="pricing-price-suffix">{pkg.price.split('RON')[1]}</span>}
                        </>
                      ) : (
                        <span className="pricing-price-full pricing-price-special">{pkg.price}</span>
                      )}
                    </div>
                    <CardDescription className="pricing-desc">
                      {pkg.id === 3 ? 'Joc intens toata ziua' : '90 minute de joc intens'}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pricing-content pricing-content-flex">
                  <ul className="pricing-features-full">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="pricing-feature-full">
                        <Check className="check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {pkg.name !== 'Refill' && (
                    <Link to={`/rezervari?pachet=${encodeURIComponent(pkg.name)}&tip=${gameType}`}>
                      <Button className={pkg.popular ? 'btn-primary full-width' : 'btn-secondary full-width'}>
                        REZERVĂ ACUM
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="info-section">
        <div className="container">
          <div className="info-grid">
            <Card className="info-card">
              <CardContent className="info-content">
                <h3 className="info-title">Reduceri Speciale</h3>
                <p className="info-text">
                  Pentru evenimente private oferim reduceri.
                  Contactează-ne pentru oferte personalizate!
                </p>
              </CardContent>
            </Card>
            <Card className="info-card">
              <CardContent className="info-content">
                <h3 className="info-title">Ce este inclus</h3>
                <p className="info-text">
                  Toate rezervările includ echipament complet, instructaj de siguranță,
                  și acces la facilitățile noastre moderne.
                </p>
              </CardContent>
            </Card>
            <Card className="info-card">
              <CardContent className="info-content">
                <h3 className="info-title">Metode de plată</h3>
                <p className="info-text">
                  Acceptăm plata cu numerar și card bancar la locație.
                  Rezervarea se poate face online sau telefonic.
                  Avans perceput pentru fiecare rezervare - minim 50%.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
