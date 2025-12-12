import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './ProductDetails.css';

const myProducts = [
  { id: 'onion-powder', name: 'Onion Powder', images: ['https://m.media-amazon.com/images/I/61aFPnRZOtL._SL1024_.jpg', 'https://images.jdmagicbox.com/quickquotes/images_main/mtc0ntkyodyzmq-1745928631-6843c713.png', 'https://eximtunnel.com/wp-content/uploads/2024/02/dehydrated-red-onion-powder.jpg'], category: 'Dehydrated Powders', badge: 'Best Seller', description: 'High-quality dehydrated onion powder perfect for cooking.', benefits: 'Rich in antioxidants, enhances flavor in dishes.', usage: 'Perfect for soups, stews, and seasoning blends.', storage: 'Store in a cool, dry place away from direct sunlight.', price: '₹450/kg', weight: '1kg', origin: 'India', packaging: 'Vacuum sealed bags' },
  { id: 'garlic-powder', name: 'Garlic Powder', images: ['https://5.imimg.com/data5/SELLER/Default/2024/12/476403454/QI/DB/JZ/45577315/dehydrated-garlic-powder-export-quality-500x500.png', 'https://mstayna.in/wp-content/uploads/2024/06/bowl-dry-garlic-powder-rosemary-white-background_781325-19494.jpg', 'https://dailyfarmer.in/cdn/shop/articles/SEOon_garlic-powder-cloves-feature_25ab90b2-f5c4-4346-b10c-26af5ef5d51f.jpg?v=1744262375'], category: 'Dehydrated Powders', badge: 'Premium', description: 'Premium dehydrated garlic powder for authentic flavor.', benefits: 'Boosts immune system, adds pungent flavor.', usage: 'Ideal for marinades, sauces, and spice mixes.', storage: 'Keep in an airtight container in a cool, dark place.', price: '₹500/kg', weight: '1kg', origin: 'India', packaging: 'Vacuum sealed bags' },
  { id: 'turmeric-powder', name: 'Turmeric Powder', images: ['https://thumbs.dreamstime.com/b/hands-sprinkle-golden-powder-over-dark-bowl-yellow-falls-down-abstract-photo-displays-culinary-food-spice-dust-gold-celebration-407685058.jpg', 'https://media.istockphoto.com/id/965503302/photo/turmeric-powder-and-roots.jpg?s=612x612&w=0&k=20&c=97n0pa3_llc9itGE-nlUJEz5vWwowjA3FF2rNByQmIQ=', ], category: 'Spices & Masala', badge: 'Golden Haldi', description: 'Pure turmeric powder with natural curcumin.', benefits: 'Anti-inflammatory properties, natural colorant.', usage: 'Used in curries, rice dishes, and golden milk.', storage: 'Store in a cool, dry place to maintain potency.', price: '₹300/kg', weight: '1kg', origin: 'India', packaging: 'Sealed packets' },
  { id: 'cumin-powder', name: 'Cumin Powder', images: ['https://t3.ftcdn.net/jpg/17/39/85/48/360_F_1739854856_TjVGEkMghChYVLIWFMJZStZP8YH1Cp9E.jpg', 'https://m.media-amazon.com/images/I/81Fx1lQ-xoL._AC_UF350,350_QL80_.jpg', ], category: 'Spices & Masala', badge: 'Popular', description: 'Aromatic cumin powder for Indian cuisine.', benefits: 'Aids digestion, aromatic spice.', usage: 'Essential for dals, vegetables, and meat dishes.', storage: 'Keep in an airtight container away from moisture.', price: '₹350/kg', weight: '1kg', origin: 'India', packaging: 'Sealed packets' },
  { id: 'coriander-powder', name: 'Coriander Powder', images: ['https://png.pngtree.com/thumb_back/fh260/background/20240613/pngtree-coriander-powder-in-wooden-bowl-with-seeds-on-black-background-image_15749568.jpg', 'https://example.com/coriander1.jpg', 'https://example.com/coriander2.jpg'], category: 'Spices & Masala', badge: 'Fresh', description: 'Fresh coriander powder for enhanced taste.', benefits: 'Rich in vitamins, freshens breath.', usage: 'Perfect for chutneys, pickles, and spice blends.', storage: 'Store in a cool, dry place to preserve aroma.', price: '₹250/kg', weight: '1kg', origin: 'India', packaging: 'Sealed packets' },
  { id: 'red-chili-powder', name: 'Red Chili Powder', images: ['https://thumbs.dreamstime.com/b/chilli-powder-red-pepper-chilli-powder-red-pepper-wooden-background-selective-focus-288799257.jpg', 'https://5.imimg.com/data5/SELLER/Default/2024/7/435203277/JU/FD/NG/226110488/red-chilli-powder-500x500.jpg'], category: 'Spices & Masala', badge: 'Hot', description: 'Spicy red chili powder for heat lovers.', benefits: 'Increases metabolism, adds heat.', usage: 'Great for curries, snacks, and marinades.', storage: 'Keep in a sealed container to maintain spice level.', price: '₹400/kg', weight: '1kg', origin: 'India', packaging: 'Sealed packets' },
  { id: 'moong-dal', name: 'Moong Dal', images: ['https://thumbs.dreamstime.com/b/split-moong-dals-split-moong-dals-glass-jar-black-background-245785191.jpg', 'https://nuttyyogi.com/cdn/shop/products/MOOONG.jpg?v=1606373709'], category: 'Kathol & Pulses', badge: 'Protein Rich', description: 'Nutritious split moong dal.', benefits: 'High in protein, easy to digest.', usage: 'Used in dals, soups, and snacks.', storage: 'Store in a dry place to prevent moisture.', price: '₹120/kg', weight: '1kg', origin: 'India', packaging: 'Jute bags' },
  { id: 'chana-dal', name: 'Chana Dal', images: ['https://thumbs.dreamstime.com/b/split-chickpea-also-know-as-chana-dal-dried-lentils-toor-heap-yellow-chickpeas-raw-lentil-indian-beans-isolated-black-248965448.jpg', 'https://vibrantliving.in/cdn/shop/files/ChanaDalSplit.jpg?crop=center&height=1200&v=1731059251&width=1200'], category: 'Kathol & Pulses', badge: 'Daily Staple', description: 'Essential chana dal for daily meals.', benefits: 'Good source of fiber, versatile in cooking.', usage: 'Perfect for curries, snacks, and salads.', storage: 'Keep in a cool, dry area.', price: '₹100/kg', weight: '1kg', origin: 'India', packaging: 'Jute bags' },
  { id: 'soya-paneer', name: "Soya paneer", images: ["https://www.ffce.in/wp-content/uploads/2025/01/Soya-Paneer.jpg", "https://img2.exportersindia.com/product_images/bc-full/2022/4/7317016/soya-paneer-1650992084-6250169.jpg"], category: "Kathol & Pulses", badge: "Healthy", description: "Healthy soya paneer alternative.", benefits: 'Plant-based protein, low in calories.', usage: 'Use in curries, stir-fries, and vegetarian dishes.', storage: 'Refrigerate after opening.', price: '₹200/kg', weight: '1kg', origin: 'India', packaging: 'Plastic packaging' },
  { id: 'peanut', name: " ", images: ["https://png.pngtree.com/thumb_back/fh260/background/20250429/pngtree-peanut-butter-and-peanut-pellets-image_17229219.jpg", "https://png.pngtree.com/png-vector/20240913/ourmid/pngtree-jar-of-peanut-butter-png-image_12928019.png"], category: "Kathol & Pulses", badge: "Healthy", description: "Crunchy peanuts for snacking.", benefits: 'Healthy fats, good for heart health.', usage: 'Enjoy as snacks, in desserts, or as butter.', storage: 'Store in a cool, dry place.', price: '₹180/kg', weight: '1kg', origin: 'India', packaging: 'Sacks' },
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