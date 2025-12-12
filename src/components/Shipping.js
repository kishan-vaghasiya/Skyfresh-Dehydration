import React, { useState, useEffect } from 'react';
import './Shipping.css';
import ScrollAnimation from './ScrollAnimation';

const Shipping = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="shipping" className="shipping-section">
      <div className="container">
        <div className={`section-header ${isLoaded ? 'fade-in-up' : ''}`}>
          <h2 className="section-title">Global Shipping & Export</h2>
          <p className="section-subtitle">Reliable sea freight to destinations worldwide</p>
        </div>
        
        <div className="shipping-content">
          <ScrollAnimation animation="fade-in-left" delay={0.1}>
            <div className="shipping-info">
              <h3>Sea Container Shipping</h3>
              <p>We use modern sea containers to ensure your products reach their destination safely and efficiently.</p>
              
              <div className="shipping-features">
                
                <ScrollAnimation animation="fade-in-up" delay={0.3}>
                  <div className="feature-item">
                    <div className="feature-icon">🌡️</div>
                    <div className="feature-text">
                      <h4>Temperature Controlled</h4>
                      <p>Maintains optimal conditions for food products</p>
                    </div>
                  </div>
                </ScrollAnimation>
                
                <ScrollAnimation animation="fade-in-up" delay={0.4}>
                  <div className="feature-item">
                    <div className="feature-icon">📦</div>
                    <div className="feature-text">
                      <h4>Secure Packaging</h4>
                      <p>Protective packaging for long journeys</p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in-right" delay={0.2}>
            <div className="shipping-visual">
              <div className="container-ship">
                <div className="ship-body">
                  <div className="ship-deck"></div>
                  <div className="ship-containers">
                    <div className="container-box container-1">
                      <div className="container-door"></div>
                      <div className="container-label">SkyFresh</div>
                    </div>
                    <div className="container-box container-2">
                      <div className="container-door"></div>
                      <div className="container-label">FOOD</div>
                    </div>
                    <div className="container-box container-3">
                      <div className="container-door"></div>
                      <div className="container-label">EXPORT</div>
                    </div>
                  </div>
                </div>
                <div className="ship-waves">
                  <div className="wave wave-1"></div>
                  <div className="wave wave-2"></div>
                  <div className="wave wave-3"></div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        
        <div className={`flags-section ${isLoaded ? 'fade-in-up' : ''}`}>
          <h3>We Export To</h3>
          <div className="flags-grid">
            <div className="flag-item">
              <div className="flag flag-usa">🇺🇸</div>
              <span>United States</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-uk">🇬🇧</div>
              <span>United Kingdom</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-germany">🇩🇪</div>
              <span>Germany</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-france">🇫🇷</div>
              <span>France</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-canada">🇨🇦</div>
              <span>Canada</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-australia">🇦🇺</div>
              <span>Australia</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-japan">🇯🇵</div>
              <span>Japan</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-singapore">🇸🇬</div>
              <span>Singapore</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-uae">🇦🇪</div>
              <span>UAE</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-south-korea">🇰🇷</div>
              <span>South Korea</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-russia">🇷🇺</div>
              <span>Russia</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-indonesia">🇮🇩</div>
              <span>Indonesia</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-mexico">🇲🇽</div>
              <span>Mexico</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-brazil">🇧🇷</div>
              <span>Brazil</span>
            </div>
            <div className="flag-item">
              <div className="flag flag-malaysia">🇲🇾</div>
              <span>Malaysia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
