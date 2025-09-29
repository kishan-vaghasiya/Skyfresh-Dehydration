import React, { useState, useEffect } from 'react';
import './Products.css';
import ScrollAnimation from './ScrollAnimation';

const Products = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Product data for modal details
  const productsData = [
    {
      id: 1,
      name: "Onion Powder",
      icon: "🧅",
      badge: "Best Seller",
      bgClass: "onion-bg",
      description: "Premium quality dehydrated onion powder with natural flavor and aroma. Perfect for food processing, seasoning, and culinary applications.",
      specs: {
        moisture: "≤ 6%",
        meshSize: "40-60 mesh",
        shelfLife: "24 months"
      },
      features: [
        "100% Natural & Organic",
        "No Preservatives Added",
        "ISO 22000 Certified",
        "Export Quality Standard"
      ],
      detailedDescription: "Our premium onion powder is carefully processed from the finest quality onions using advanced dehydration technology. This ensures maximum flavor retention while extending shelf life. Perfect for industrial food processing, restaurants, and home cooking. Available in various packaging sizes from 25kg bulk bags to retail packets.",
      applications: ["Food Processing", "Seasoning Blends", "Restaurant Industry", "Retail Products"],
      certifications: ["ISO 22000", "HACCP", "FSSAI", "Export Quality"]
    },
    {
      id: 2,
      name: "Garlic Powder",
      icon: "🧄",
      badge: "Premium",
      bgClass: "garlic-bg",
      description: "Finely ground garlic powder with intense flavor and health benefits. Rich in antioxidants and perfect for global food markets.",
      specs: {
        moisture: "≤ 8%",
        meshSize: "40-80 mesh",
        shelfLife: "18 months"
      },
      features: [
        "Rich in Antioxidants",
        "Pure & Natural",
        "HACCP Compliant",
        "Global Export Ready"
      ],
      detailedDescription: "Our garlic powder is made from premium quality garlic bulbs, carefully selected and processed to maintain maximum nutritional value and flavor. The powder is rich in allicin and other beneficial compounds, making it ideal for health-conscious consumers and food manufacturers worldwide.",
      applications: ["Health Supplements", "Food Seasoning", "Pharmaceutical", "Cosmetics"],
      certifications: ["HACCP", "ISO 22000", "FSSAI", "Organic Certified"]
    },
    {
      id: 3,
      name: "Premium Food Chips",
      icon: "🥔",
      badge: "New",
      bgClass: "chips-bg",
      description: "Crunchy and delicious food chips made from finest ingredients. Available in multiple flavors and bulk packaging options.",
      specs: {
        flavors: "5+ Varieties",
        packaging: "Bulk & Retail",
        shelfLife: "12 months"
      },
      features: [
        "Crispy Texture",
        "Multiple Flavors",
        "Custom Packaging",
        "OEM Available"
      ],
      detailedDescription: "Our premium food chips are crafted using the finest ingredients and cutting-edge manufacturing techniques. Available in various flavors including classic salted, spicy, cheese, and exotic flavors. Perfect for snacks, accompaniments, and food service applications.",
      applications: ["Snack Industry", "Food Service", "Retail Markets", "Export Markets"],
      certifications: ["FSSAI", "ISO 22000", "HACCP", "Export Quality"]
    }
  ];

  const openModal = (productId) => {
    const product = productsData.find(p => p.id === productId);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className={`section-header ${isLoaded ? 'fade-in-up' : ''}`}>
          <h2 className="section-title">Our Premium Products</h2>
          <p className="section-subtitle">Exported to 50+ countries worldwide</p>
        </div>
        
        <div className="products-grid">
          {productsData.map((product, index) => (
            <ScrollAnimation key={product.id} animation="fade-in-up" delay={0.1 * (index + 1)}>
              <div className="product-item">
                <div className="product-image">
                  <div className={`product-bg ${product.bgClass}`}></div>
                  <div className="product-icon-large">{product.icon}</div>
                  <div className="product-badge">{product.badge}</div>
                </div>
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-specs">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="spec-item">
                        <span className="spec-label">
                          {key === 'meshSize' ? 'Mesh Size:' : 
                           key === 'shelfLife' ? 'Shelf Life:' : 
                           key.charAt(0).toUpperCase() + key.slice(1)}:
                        </span>
                        <span className="spec-value">{value}</span>
                      </div>
                    ))}
                  </div>
                  <ul className="product-features">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>
                  <div className="product-actions">
                    <button className="product-btn primary">Get Quote</button>
                    <button 
                      className="product-btn secondary"
                      onClick={() => openModal(product.id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      {isModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <div className="modal-image">
                <div className={`product-bg ${selectedProduct.bgClass}`}></div>
                <div className="product-icon-large">{selectedProduct.icon}</div>
                <div className="product-badge">{selectedProduct.badge}</div>
              </div>
              <div className="modal-title-section">
                <h2 className="modal-title">{selectedProduct.name}</h2>
                <p className="modal-description">{selectedProduct.description}</p>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3>Detailed Description</h3>
                <p>{selectedProduct.detailedDescription}</p>
              </div>

              <div className="modal-section">
                <h3>Technical Specifications</h3>
                <div className="modal-specs">
                  {Object.entries(selectedProduct.specs).map(([key, value]) => (
                    <div key={key} className="modal-spec-item">
                      <span className="spec-label">
                        {key === 'meshSize' ? 'Mesh Size:' : 
                         key === 'shelfLife' ? 'Shelf Life:' : 
                         key.charAt(0).toUpperCase() + key.slice(1)}:
                      </span>
                      <span className="spec-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>Key Features</h3>
                <ul className="modal-features">
                  {selectedProduct.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3>Applications</h3>
                <div className="modal-applications">
                  {selectedProduct.applications.map((app, idx) => (
                    <span key={idx} className="application-tag">{app}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>Certifications</h3>
                <div className="modal-certifications">
                  {selectedProduct.certifications.map((cert, idx) => (
                    <span key={idx} className="certification-badge">{cert}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="modal-btn primary">Get Quote</button>
              <button className="modal-btn secondary" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
