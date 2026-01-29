import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';

const myProducts = [
  { id: 'onion-powder', name: 'DEHYDRATED ONION POWDER', images: ['https://img.sanishtech.com/u/228d921ef2f5a7c0c27115077ef7812e.png',],  },
  { id: 'garlic-powder', name: 'DEHYDRATED GARLIC POWDER', images: ['https://img.sanishtech.com/u/2efd7c2730497c37e14e814a73ab7ac6.jpg',], },
  { id: 'Potato', name: "DEHYDRATED POTATO POWDER", images: ["https://img.sanishtech.com/u/d01f4a8b4ae5d55f36ce2fc0ca88e542.jpg", ], },
   { id: 'amchur-powder', name: 'NATURE AMCHUR POWDER', images: ['https://img.sanishtech.com/u/37edd058e2d5d77d23e48dd83029d5a7.jpg', ], },
  { id: 'Mint', name: "DEHYDRATED MINT POWDER", images: ["https://img.sanishtech.com/u/da057461302311368e78c570cfbb7d72.jpg", ],  },
  { id: 'turmeric-powder', name: 'TURMERIC POWDER', images: ['https://img.sanishtech.com/u/ff6f114488624f769aac24358151e789.jpg', ],   },
  { id: 'cumin-powder', name: 'CUMIN POWDER', images: ['https://img.sanishtech.com/u/2edda56ad83323aea2d52199243fbb91.jpg', ],  },
  { id: 'coriander-powder', name: 'CORIANDER POWDER', images: ['https://img.sanishtech.com/u/39b3cfaeff523c9d538065391b6d5afa.jpg',], },
  { id: 'red-chili-powder', name: 'RED CHILI POWDER', images: ['https://img.sanishtech.com/u/020ea795f61e7ff3b7c5bc39aa7df0e1.jpg', ], },
 { id: 'mango-pulp', name: 'KESAR MANGO PULP', images: ['https://img.sanishtech.com/u/8dfbcfbdfe92e17109fc67dcba1c8678.jpg', ], },

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
          <p className="section-subtitle">Exported to 5+ countries worldwide</p>
        </div>

        <div className="products-grid">
          {productsToShow.map((product) => (
            <div 
              key={product.id} 
              className="product-card"
            >
              <div className="product-image-container">
                <img 
                  src={product.images[0]} 
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
