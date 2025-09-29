import React, { useState, useEffect } from 'react';
import './About.css';
import ScrollAnimation from './ScrollAnimation';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className={`section-header ${isLoaded ? 'fade-in-up' : ''}`}>
          <h2 className="section-title">About Skytech International</h2>
          <p className="section-subtitle">Your trusted partner in premium food exports</p>
        </div>

        <div className="about-content">
          <ScrollAnimation animation="fade-in-left" delay={0.1}>
            <div className="about-text">
              <div className="about-intro">
                <h3>5+ Years of Excellence in Food Export</h3>
                <p>
                  Based in Vapi, Gujarat, we specialize in exporting premium quality onion powder, 
                  garlic powder, and food chips to over 50 countries worldwide. Our commitment to 
                  quality, reliability, and customer satisfaction has made us a trusted partner 
                  for 1000+ clients globally.
                </p>
              </div>

              <div className="about-values">
                <h4>Our Core Values</h4>
                <div className="values-grid">
                  <div className="value-item">
                    <div className="value-icon">🌱</div>
                    <h5>Quality First</h5>
                    <p>100% natural, premium quality products with no preservatives</p>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">🤝</div>
                    <h5>Trust & Reliability</h5>
                    <p>Consistent delivery and transparent business practices</p>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">🌍</div>
                    <h5>Global Reach</h5>
                    <p>Exporting to 50+ countries with efficient logistics</p>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">⚡</div>
                    <h5>Innovation</h5>
                    <p>Continuous improvement in processes and product quality</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-right" delay={0.2}>
            <div className="about-visual">
              <div className="company-timeline">
                <h4>Our Journey</h4>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-year">2008</div>
                    <div className="timeline-content">
                      <h5>Company Founded</h5>
                      <p>Started with a vision to export premium Indian food products globally</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2012</div>
                    <div className="timeline-content">
                      <h5>First International Client</h5>
                      <p>Successfully exported to our first international market</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2018</div>
                    <div className="timeline-content">
                      <h5>500+ Clients Milestone</h5>
                      <p>Reached 500+ satisfied clients across 30+ countries</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2023</div>
                    <div className="timeline-content">
                      <h5>1000+ Clients & 50+ Countries</h5>
                      <p>Expanded to 50+ countries with 1000+ happy clients worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fade-in-up" delay={0.3}>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99%</div>
              <div className="stat-label">Quality Rating</div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default About;
