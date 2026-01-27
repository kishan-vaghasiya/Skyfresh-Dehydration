import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './ProductDetails.css';

const myProducts = [
  { id: 'onion-powder', name: 'Onion Powder', images: ['https://m.media-amazon.com/images/I/61aFPnRZOtL._SL1024_.jpg', 'https://images.jdmagicbox.com/quickquotes/images_main/mtc0ntkyodyzmq-1745928631-6843c713.png', 'https://eximtunnel.com/wp-content/uploads/2024/02/dehydrated-red-onion-powder.jpg'], category: 'Dehydrated Powders', badge: 'Best Seller', description: 'High-quality dehydrated onion powder perfect for cooking.', benefits: 'Rich in antioxidants, enhances flavor in dishes.', usage: 'Perfect for soups, stews, and seasoning blends.', storage: 'Store in a cool, dry place away from direct sunlight.', price: '₹450/kg', weight: '1kg', origin: 'India', packaging: 'Vacuum sealed bags' },
  { id: 'garlic-powder', name: 'Garlic Powder', images: ['https://5.imimg.com/data5/SELLER/Default/2024/12/476403454/QI/DB/JZ/45577315/dehydrated-garlic-powder-export-quality-500x500.png', 'https://mstayna.in/wp-content/uploads/2024/06/bowl-dry-garlic-powder-rosemary-white-background_781325-19494.jpg', 'https://dailyfarmer.in/cdn/shop/articles/SEOon_garlic-powder-cloves-feature_25ab90b2-f5c4-4346-b10c-26af5ef5d51f.jpg?v=1744262375'], category: 'Dehydrated Powders', badge: 'Premium', description: 'Premium dehydrated garlic powder for authentic flavor.', benefits: 'Boosts immune system, adds pungent flavor.', usage: 'Ideal for marinades, sauces, and spice mixes.', storage: 'Keep in an airtight container in a cool, dark place.', price: '₹500/kg', weight: '1kg', origin: 'India', packaging: 'Vacuum sealed bags' },
  { id: 'turmeric-powder', name: 'Turmeric Powder', images: ['https://thumbs.dreamstime.com/b/hands-sprinkle-golden-powder-over-dark-bowl-yellow-falls-down-abstract-photo-displays-culinary-food-spice-dust-gold-celebration-407685058.jpg', 'https://media.istockphoto.com/id/965503302/photo/turmeric-powder-and-roots.jpg?s=612x612&w=0&k=20&c=97n0pa3_llc9itGE-nlUJEz5vWwowjA3FF2rNByQmIQ=', ], category: 'Spices & Masala', badge: 'Golden Haldi', description: 'Pure turmeric powder with natural curcumin.', benefits: 'Anti-inflammatory properties, natural colorant.', usage: 'Used in curries, rice dishes, and golden milk.', storage: 'Store in a cool, dry place to maintain potency.', price: '₹300/kg', weight: '1kg', origin: 'India', packaging: 'Sealed packets' },
  { id: 'cumin-powder', name: 'Cumin Powder', images: ['https://t3.ftcdn.net/jpg/17/39/85/48/360_F_1739854856_TjVGEkMghChYVLIWFMJZStZP8YH1Cp9E.jpg', 'https://m.media-amazon.com/images/I/81Fx1lQ-xoL._AC_UF350,350_QL80_.jpg', ], category: 'Spices & Masala', badge: 'Popular', description: 'Aromatic cumin powder for Indian cuisine.', benefits: 'Aids digestion, aromatic spice.', usage: 'Essential for dals, vegetables, and meat dishes.', storage: 'Keep in an airtight container away from moisture.', price: '₹350/kg', weight: '1kg', origin: 'India', packaging: 'Sealed packets' },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = myProducts.find(p => p.id === id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleQuoteClick = () => {
    window.location.href = 'mailto:skyfreshdehydration@gmail.com';
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="product-details-container">
        <div className="product-images">
          <img src={product.images[selectedImageIndex]} alt={product.name} className="main-image" />
          <div className="thumbnails">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name} ${idx + 1}`}
                className={`thumbnail ${selectedImageIndex === idx ? 'active' : ''}`}
                onClick={() => setSelectedImageIndex(idx)}
              />
            ))}
          </div>
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="category">{product.category}</p>
          <span className="badge">{product.badge}</span>
          <p className="description">{product.description}</p>
          <p className="benefits"><strong>Benefits:</strong> {product.benefits}</p>
          <p className="usage"><strong>Usage:</strong> {product.usage}</p>
          <p className="storage"><strong>Storage:</strong> {product.storage}</p>
          <button className="contact-btn" onClick={handleQuoteClick}>Contact for Quote</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;