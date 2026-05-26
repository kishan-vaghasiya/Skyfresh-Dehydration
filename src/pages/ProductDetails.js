import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getProductById } from '../data/productCatalog';
import './ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = getProductById(productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  const goHome = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="pd-page">
          <div className="pd-not-found">
            <span className="pd-not-found-icon">📦</span>
            <h2>Product Not Found</h2>
            <p>The product you are looking for is not available.</p>
            <button type="button" onClick={() => navigate('/')} className="pd-btn pd-btn-primary">
              Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="pd-page">
        <section className="pd-hero">
          <div className="pd-hero-bg" aria-hidden="true" />
          <div className="pd-hero-inner">
            {/* <button type="button" onClick={goHome} className="pd-back">
              <span aria-hidden="true">←</span> Back to Products
            </button> */}

            <div className="pd-hero-content">
              <div className="pd-hero-text">
                <p className="pd-hero-label">Product Range</p>
                <h1 className="pd-hero-title">{product.title}</h1>
                <p className="pd-hero-tagline">{product.tagline}</p>
                <div className="pd-hero-meta">
                  <span className="pd-meta-chip">{product.variants.length} variants</span>
                  <span className="pd-meta-chip">Export grade</span>
                  <span className="pd-meta-chip">Gujarat, India</span>
                </div>
              </div>
              {/* <div className="pd-hero-visual">
                <div className="pd-hero-image-ring">
                  <img src={product.heroImage} alt={product.title} className="pd-hero-image" />
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section className="pd-variants">
          <div className="pd-variants-inner">
            <header className="pd-section-header">
              <h2>Available Forms</h2>
              <p>Each cut and mesh size is packed for bulk export — specifications below.</p>
            </header>

            <div className="pd-grid">
              {product.variants.map((variant, index) => (
                <article
                  key={variant.id}
                  className="pd-card"
                  style={{ animationDelay: `${index * 0.07}s` }}
                >
                  <div className="pd-card-accent" aria-hidden="true" />

                  <header className="pd-card-header">
                    <span className="pd-card-index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="pd-card-badge">{variant.type}</span>
                  </header>

                  <div className="pd-card-media">
                    <div className="pd-card-media-bg" aria-hidden="true" />
                    <div className="pd-card-media-frame">
                      <img
                        src={variant.image}
                        alt={variant.name}
                        className="pd-card-image"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="pd-card-content">
                    <h3 className="pd-card-title">{variant.name}</h3>
                    <div className="pd-card-divider" aria-hidden="true" />

                    <div className="pd-specs-box">
                      {variant.specs.map((spec) => (
                        <div key={spec.label} className="pd-spec-item">
                          <span className="pd-spec-icon" aria-hidden="true" />
                          <div className="pd-spec-text">
                            <span className="pd-spec-label">{spec.label}</span>
                            <span className="pd-spec-value">{spec.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <footer className="pd-card-footer">
                      <span className="pd-grade-pill">
                        <span className="pd-grade-dot" aria-hidden="true" />
                        Export Grade · A Quality
                      </span>
                    </footer>
                  </div>
                </article>
              ))}
            </div>

            <div className="pd-cta">
              <p>Need custom mesh, packing, or bulk pricing?</p>
              <button
                type="button"
                className="pd-btn pd-btn-primary"
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                }}
              >
                Contact Us for Quote
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
