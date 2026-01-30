import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { imgPath } from '../assets/index.js';
import './Products.css';

const myProducts = [
  { id: 'red-onion-powder', name: 'DEHYDRATED RED ONION POWDER', imageKey: 'redonion' },
  { id: 'pink-onion-powder', name: 'DEHYDRATED PINK ONION POWDER', imageKey: 'pinkonion' },
  { id: 'white-onion-powder', name: 'DEHYDRATED WHITE ONION POWDER', imageKey: 'whiteonion' },
  { id: 'garlic-powder', name: 'DEHYDRATED GARLIC POWDER', imageKey: 'garlic' },
  { id: 'Potato', name: "DEHYDRATED POTATO POWDER", imageKey: 'potato' },
  { id: 'amchur-powder', name: 'NATURE AMCHUR POWDER', imageKey: 'amchur' },
  { id: 'Mint', name: "DEHYDRATED MINT POWDER", imageKey: 'mint' },
  { id: 'turmeric-powder', name: 'TURMERIC POWDER', imageKey: 'turmeric' },
  { id: 'cumin-powder', name: 'CUMIN POWDER', imageKey: 'cumin' },
  { id: 'coriander-powder', name: 'CORIANDER POWDER', imageKey: 'coriander' },
  { id: 'red-chili-powder', name: 'RED CHILI POWDER', imageKey: 'redchili' },
  { id: 'mango-pulp', name: 'KESAR MANGO PULP', imageKey: 'mangopulp' },
];

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState(4);
  const navigate = useNavigate();

  const productsToShow = myProducts.slice(0, visibleProducts);

  const handleShowMore = () => {
    setVisibleProducts(myProducts.length);
  };

  const handleShowLess = () => {
    setVisibleProducts(4);
  };

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Our Premium Products</h2>
          <p className="section-subtitle">Exported to 12+ countries worldwide</p>
        </div>

        <div className="products-grid">
          {productsToShow.map((product) => (
            <div 
              key={product.id} 
              className="product-card"
            >
              <div className="product-image-container">
                <img
                  src={imgPath[product.imageKey]}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                </div>
                <button 
                  className="learn-more-btn"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {visibleProducts < myProducts.length && (
          <div className="show-more-container">
            <button className="show-more-btn" onClick={handleShowMore}>
              Show More Products
            </button>
          </div>
        )}

        {visibleProducts === myProducts.length && (
          <div className="show-more-container">
            <button className="show-more-btn show-less-btn" onClick={handleShowLess}>
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
