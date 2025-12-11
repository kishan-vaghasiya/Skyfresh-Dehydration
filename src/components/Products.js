import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';

const myProducts = [
  { id: 'onion-powder', name: 'Onion Powder', images: ['https://m.media-amazon.com/images/I/61aFPnRZOtL._SL1024_.jpg', 'https://example.com/onion1.jpg', 'https://example.com/onion2.jpg'], category: 'Dehydrated Powders', badge: 'Best Seller', description: 'High-quality dehydrated onion powder perfect for cooking.' },
  { id: 'garlic-powder', name: 'Garlic Powder', images: ['https://5.imimg.com/data5/SELLER/Default/2024/12/476403454/QI/DB/JZ/45577315/dehydrated-garlic-powder-export-quality-500x500.png', 'https://mstayna.in/wp-content/uploads/2024/06/bowl-dry-garlic-powder-rosemary-white-background_781325-19494.jpg', 'https://dailyfarmer.in/cdn/shop/articles/SEOon_garlic-powder-cloves-feature_25ab90b2-f5c4-4346-b10c-26af5ef5d51f.jpg?v=1744262375'], category: 'Dehydrated Powders', badge: 'Premium', description: 'Premium dehydrated garlic powder for authentic flavor.' },
  { id: 'turmeric-powder', name: 'Turmeric Powder', images: ['https://thumbs.dreamstime.com/b/hands-sprinkle-golden-powder-over-dark-bowl-yellow-falls-down-abstract-photo-displays-culinary-food-spice-dust-gold-celebration-407685058.jpg', 'https://example.com/turmeric1.jpg', 'https://example.com/turmeric2.jpg'], category: 'Spices & Masala', badge: 'Golden Haldi', description: 'Pure turmeric powder with natural curcumin.' },
  { id: 'cumin-powder', name: 'Cumin Powder', images: ['https://t3.ftcdn.net/jpg/17/39/85/48/360_F_1739854856_TjVGEkMghChYVLIWFMJZStZP8YH1Cp9E.jpg', 'https://example.com/cumin1.jpg', 'https://example.com/cumin2.jpg'], category: 'Spices & Masala', badge: 'Popular', description: 'Aromatic cumin powder for Indian cuisine.' },
  { id: 'coriander-powder', name: 'Coriander Powder', images: ['https://png.pngtree.com/thumb_back/fh260/background/20240613/pngtree-coriander-powder-in-wooden-bowl-with-seeds-on-black-background-image_15749568.jpg', 'https://example.com/coriander1.jpg', 'https://example.com/coriander2.jpg'], category: 'Spices & Masala', badge: 'Fresh', description: 'Fresh coriander powder for enhanced taste.' },
  { id: 'red-chili-powder', name: 'Red Chili Powder', images: ['https://thumbs.dreamstime.com/b/chilli-powder-red-pepper-chilli-powder-red-pepper-wooden-background-selective-focus-288799257.jpg', 'https://example.com/chili1.jpg', 'https://example.com/chili2.jpg'], category: 'Spices & Masala', badge: 'Hot', description: 'Spicy red chili powder for heat lovers.' },
  { id: 'moong-dal', name: 'Moong Dal', images: ['https://thumbs.dreamstime.com/b/split-moong-dals-split-moong-dals-glass-jar-black-background-245785191.jpg', 'https://example.com/moong1.jpg', 'https://example.com/moong2.jpg'], category: 'Kathol & Pulses', badge: 'Protein Rich', description: 'Nutritious split moong dal.' },
  { id: 'chana-dal', name: 'Chana Dal', images: ['https://thumbs.dreamstime.com/b/split-chickpea-also-know-as-chana-dal-dried-lentils-toor-heap-yellow-chickpeas-raw-lentil-indian-beans-isolated-black-248965448.jpg', 'https://example.com/chana1.jpg', 'https://example.com/chana2.jpg'], category: 'Kathol & Pulses', badge: 'Daily Staple', description: 'Essential chana dal for daily meals.' },
  { id: 'soya-paneer', name: "Soya paneer", images: ["https://www.ffce.in/wp-content/uploads/2025/01/Soya-Paneer.jpg", "https://example.com/soya1.jpg", "https://example.com/soya2.jpg"], category: "Kathol & Pulses", badge: "Healthy", description: "Healthy soya paneer alternative." },
  { id: 'peanut', name: "Peanut", images: ["https://png.pngtree.com/thumb_back/fh260/background/20250429/pngtree-peanut-butter-and-peanut-pellets-image_17229219.jpg", "https://example.com/peanut1.jpg", "https://example.com/peanut2.jpg"], category: "Kathol & Pulses", badge: "Healthy", description: "Crunchy peanuts for snacking." },

];

const Products = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const carouselRef = useRef();

  const getVisibleCards = () => {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    return 3;
  };

  const getMoveDistance = () => {
    const gap = window.innerWidth <= 480 ? '1rem' : '1.5rem';
    return `calc((100% + ${gap}) / ${visibleCards})`;
  };

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(getVisibleCards());
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);

    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  useEffect(() => {
    setCurrentIndex(0); 
  }, [visibleCards]);

 useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => {
      const totalSlides = myProducts.length;

      // Continuous infinite scroll (NO JUMP)
      if (prev >= totalSlides) {
        if (carouselRef.current) {
          // remove animation before reset
          carouselRef.current.style.transition = "none";
        }

        const resetTo = prev - totalSlides; // reset index

        requestAnimationFrame(() => {
          setCurrentIndex(resetTo);

          requestAnimationFrame(() => {
            if (carouselRef.current) {
              // re-enable transition
              carouselRef.current.style.transition = "transform 0.5s ease";
            }
          });
        });

        return prev + 1;
      }

      return prev + 1;
    });
  }, 2000);

  return () => clearInterval(interval);
}, []);


  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Our Premium Products</h2>
          <p className="section-subtitle">Exported to 50+ countries worldwide</p>
        </div>

        <div className="product-carousel-section">
          <div className="carousel-container">
            <div
              className="product-carousel"
              ref={carouselRef}
              style={{
                transform: `translateX(calc(-${currentIndex} * ${getMoveDistance()}))`
              }}
            >
              {[...myProducts, ...myProducts].map((product, idx) => (
                <div key={`${product.id}-${idx}`} className="carousel-card" onClick={() => navigate(`/product/${product.id}`)}>
                  <div className="product-card-image-container">
                    <img src={product.images[0]} alt={product.name} className="product-card-image" />
                   </div>
                  <div className="product-card-content">
                    <h3 className="product-card-title">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
