import React, { useState } from 'react';
import './Products.css';

const myProducts = [
  { id: 'onion-powder', name: 'DEHYDRATED ONION POWDER', images: ['https://5.imimg.com/data5/SELLER/Default/2023/8/336341696/BW/OJ/FE/190643305/onion-powder.jpeg',],  },
  { id: 'garlic-powder', name: 'DEHYDRATED GARLIC POWDER', images: ['https://t3.ftcdn.net/jpg/04/03/29/38/360_F_403293835_yv2pImRN8zbKmsNp0pwXxvrVKSlfkZtZ.jpg',], },
  { id: 'Potato', name: "DEHYDRATED POTATO POWDER", images: ["https://t4.ftcdn.net/jpg/05/86/78/83/360_F_586788305_4J7M5VWFf7sOHCKl271F2RKomqtqj38y.jpg", ], },
  { id: 'Mint', name: "DEHYDRATED MINT POWDER", images: ["https://5.imimg.com/data5/TO/XS/DP/SELLER-71826193/dehydrated-mint-leaves-500x500.jpg", ],  },
  { id: 'turmeric-powder', name: 'TURMERIC POWDER', images: ['https://www.viralspices.com/wp-content/uploads/2024/11/Untitled-1-624x312.jpg', ],   },
  { id: 'cumin-powder', name: 'CUMIN POWDER', images: ['https://t3.ftcdn.net/jpg/17/92/81/88/360_F_1792818877_8ElnWfdvWyTSUN21nFwnDVja5wKKhnL0.jpg', ],  },
  { id: 'coriander-powder', name: 'CORIANDER POWDER', images: ['https://www.shutterstock.com/image-photo/coriander-powder-wooden-bowl-isolated-600nw-2414032011.jpg',], },
  { id: 'red-chili-powder', name: 'RED CHILI POWDER', images: ['https://t4.ftcdn.net/jpg/06/68/59/49/360_F_668594985_30FQV0Mhp8TDVpFQWHYG0QuGM99zChDp.jpg', ], },
];

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState(4);

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
          <p className="section-subtitle">Exported to 50+ countries worldwide</p>
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
                <button className="learn-more-btn">Learn More</button>
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
