import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Clock, Shield, Crosshair, Target, Check, X } from 'lucide-react';
import { mockData } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Home = () => {
  const [gameType, setGameType] = useState('lasertag');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentPricing = gameType === 'lasertag' ? mockData.pricingLasertag : mockData.pricingPaintball;
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <picture>
  <source media="(max-width: 767px)" srcSet="/hero-background-mobile.jpg" />
  <img src="/hero-background-desktop.jpg" alt="Combat Zone Moisei Arena" className="hero-image" />
</picture>

          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">{mockData.hero.title}</h1>
          <p className="hero-subtitle">{mockData.hero.subtitle}</p>
          <p className="hero-description">{mockData.hero.description}</p>
          <div className="hero-buttons">
            <Link to="/rezervari">
              <Button className="btn-primary">REZERVĂ ACUM</Button>
            </Link>
            <Link to="/tarife">
              <Button className="btn-secondary">VEZI TARIFE</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <Shield className="feature-icon" />
              <h3 className="feature-title">Siguranță Maximă</h3>
              <p className="feature-description">Echipament profesional și instructori experimentați pentru o experiență sigură.</p>
            </div>
            <div className="feature-card">
              <Users className="feature-icon" />
              <h3 className="feature-title">Pentru Toate Vârstele</h3>
              <p className="feature-description">Distracție garantată pentru copii, adolescenți și adulți.</p>
            </div>
            <div className="feature-card">
              <Clock className="feature-icon" />
              <h3 className="feature-title">Program Flexibil</h3>
              <p className="feature-description">Deschis zilnic (10:00 - 22:00) cu opțiuni de rezervare la orice oră.</p>
            </div>
            <div className="feature-card">
              <Star className="feature-icon" />
              <h3 className="feature-title">Tehnologie Avansată</h3>
              <p className="feature-description">Tehnologie premium în decor tactic montan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="pricing-preview-section">
        <div className="container">
          <h2 className="section-title">TARIFELE NOASTRE</h2>
            <p className="section-subtitle">Alege pachetul și activitatea potrivită pentru tine</p>

            {/* Game Type Toggle */}
            <div className="game-type-toggle" data-testid="home-game-toggle">
              <button
                className={`toggle-btn ${gameType === 'lasertag' ? 'active' : ''}`}
                onClick={() => setGameType('lasertag')}
                data-testid="home-lasertag-btn"
              >
                <Crosshair className="toggle-icon" />
                Lasertag
              </button>
              <button
                className={`toggle-btn ${gameType === 'paintball' ? 'active' : ''}`}
                onClick={() => setGameType('paintball')}
                data-testid="home-paintball-btn"
              >
                <Target className="toggle-icon" />
                Paintball
              </button>
            </div>

            <p className="payment-warning">
             ⚠️ Rezervările se vor confirma doar după achitarea avansului de 50% din totalul rezervării</p>
        <div className="pricing-grid">
            {currentPricing.map((pkg) =>
            <Card key={pkg.id} className={`pricing-card ${pkg.popular ? 'popular' : ''}`} style={{ minHeight: '600px', display: 'flex', flexDirection: 'column' }}>
                {pkg.popular && <div className="popular-ribbon">
                                    <Star className="ribbon-icon" />
                                    <span>CEL MAI POPULAR</span>
                                  </div>}
                <CardHeader>
                  <CardTitle className="pricing-card-title !font-semibold !text-center">{pkg.name}</CardTitle>
                  <div className="pricing-card-price">
                    {pkg.price.includes('RON') ?
                  <>
                        <span style={{ fontSize: '3rem' }}>{pkg.price.split('RON')[0]}RON</span>
                        {pkg.price.includes('/') && <span style={{ fontSize: '1.25rem', fontWeight: '500', marginLeft: '0' }}>{pkg.price.split('RON')[1]}</span>}
                      </> :

                  <span style={{ fontSize: '2rem' }}>{pkg.price}</span>
                  }
                  </div>
                  {pkg.duration && (
                    <div className="duration-indicator" style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      gap: '6px',
                      marginTop: '8px',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      backgroundColor: 'rgba(206, 255, 0, 0.1)',
                      width: 'fit-content',
                      margin: '8px auto 0'
                    }}>
                      <Clock style={{ width: '16px', height: '16px', color: '#ceff00', flexShrink: 0 }} />
                      <span style={{ 
                        color: '#ceff00', 
                        fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', 
                        fontWeight: '500',
                        whiteSpace: 'nowrap'
                      }}>{pkg.duration}</span>
                    </div>
                  )}
                  {pkg.name === 'Evenimente Private' && (
  <div style={{
    background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
    color: '#ffffff',
    padding: '12px 16px',
    borderRadius: '8px',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)',
    lineHeight: '1.4',
    marginTop: '12px',
    boxShadow: '0 2px 8px rgba(220, 38, 38, 0.4)',
  }}>
    🎯 Ofertă personalizată pentru școli, companii sau grupuri mari!
  </div>
)}
                </CardHeader>
                <CardContent style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <ul className="pricing-features">
  {pkg.features.map((feature, idx) =>
    <li key={idx} className="pricing-feature-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
      <Check style={{ width: '18px', height: '18px', color: '#ceff00', flexShrink: 0, marginTop: '2px' }} />
      <span>{feature}</span>
    </li>
  )}
</ul>
                  {pkg.name !== 'Refill' && pkg.name !== 'Evenimente Private' && (
                    <Link to={`/rezervari?pachet=${encodeURIComponent(pkg.name)}&tip=${gameType}`}>
                      <Button className="btn-primary full-width">REZERVĂ</Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
<section className="gallery-preview-section">
  <div className="container">
    <h2 className="section-title">COLECȚIE FOTO</h2>
    <p className="section-subtitle">Capturile noastre cu cele mai bune momente</p>
    <div className="gallery-grid">
      {mockData.gallery.map((image) => (
        <div key={image.id} className="gallery-item" onClick={() => setLightboxImage(image)}>
          <img src={image.url} alt={image.title} className="gallery-image" />
          <div className="gallery-overlay">
            <h4 className="gallery-title">{image.title}</h4>
            <p className="gallery-description">{image.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center">
      <Link to="/colectie-foto">
        <Button className="btn-secondary">VEZI TOATE FOTOGRAFIILE</Button>
      </Link>
    </div>
  </div>
</section>

{/* Lightbox */}
{lightboxImage && (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '20px',
      cursor: 'pointer',
    }}
    onClick={() => setLightboxImage(null)}
  >
    <button
      onClick={() => setLightboxImage(null)}
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'rgba(255,255,255,0.15)',
        border: 'none',
        borderRadius: '50%',
        width: '44px',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 10000,
      }}
    >
      <X style={{ color: '#fff', width: '24px', height: '24px' }} />
    </button>
    <img
      src={lightboxImage.url}
      alt={lightboxImage.title}
      style={{
        maxWidth: '90vw',
        maxHeight: '85vh',
        objectFit: 'contain',
        borderRadius: '8px',
      }}
      onClick={(e) => e.stopPropagation()}
    />
    <div style={{
      position: 'absolute',
      bottom: '30px',
      textAlign: 'center',
      color: '#fff',
    }}>
      <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '4px' }}>{lightboxImage.title}</h4>
      <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>{lightboxImage.description}</p>
    </div>
  </div>
)}


      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">CE SPUN CLIENȚII NOȘTRI</h2>
          <p className="section-subtitle">Experiențe reale de la jucătorii noștri</p>
          <div className="testimonials-grid">
            {mockData.testimonials.map((testimonial) =>
            <Card key={testimonial.id} className="testimonial-card">
                <CardContent className="testimonial-content">
                  <div className="testimonial-stars">
                    {[...Array(testimonial.rating)].map((_, i) =>
                  <Star key={i} className="star-icon filled" />
                  )}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <p className="author-name">{testimonial.name}</p>
                    <p className="author-date">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">GATA SĂ ÎNCEPI AVENTURA?</h2>
          <p className="cta-subtitle">Rezervă-ți locul acum și trăiește experiența Combat Zone!</p>
          <Link to="/rezervari">
            <Button className="btn-primary large">REZERVĂ ACUM</Button>
          </Link>
        </div>
      </section>
    </div>);

};

export default Home;
