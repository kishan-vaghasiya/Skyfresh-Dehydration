import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProductDetails.css';

const myProducts = [
  { id: 'onion-powder', name: 'Onion Powder', images: ['https://m.media-amazon.com/images/I/61aFPnRZOtL._SL1024_.jpg', 'https://images.jdmagicbox.com/quickquotes/images_main/mtc0ntkyodyzmq-1745928631-6843c713.png', 'https://eximtunnel.com/wp-content/uploads/2024/02/dehydrated-red-onion-powder.jpg'], category: 'Dehydrated Powders', badge: 'Best Seller', description: 'High-quality dehydrated onion powder perfect for cooking.' },
  { id: 'garlic-powder', name: 'Garlic Powder', images: ['https://5.imimg.com/data5/SELLER/Default/2024/12/476403454/QI/DB/JZ/45577315/dehydrated-garlic-powder-export-quality-500x500.png', 'https://example.com/garlic1.jpg', 'https://example.com/garlic2.jpg'], category: 'Dehydrated Powders', badge: 'Premium', description: 'Premium dehydrated garlic powder for authentic flavor.' },
  { id: 'turmeric-powder', name: 'Turmeric Powder', images: ['https://thumbs.dreamstime.com/b/hands-sprinkle-golden-powder-over-dark-bowl-yellow-falls-down-abstract-photo-displays-culinary-food-spice-dust-gold-celebration-407685058.jpg', 'https://example.com/turmeric1.jpg', 'https://example.com/turmeric2.jpg'], category: 'Spices & Masala', badge: 'Golden Haldi', description: 'Pure turmeric powder with natural curcumin.' },
  { id: 'cumin-powder', name: 'Cumin Powder', images: ['https://t3.ftcdn.net/jpg/17/39/85/48/360_F_1739854856_TjVGEkMghChYVLIWFMJZStZP8YH1Cp9E.jpg', 'https://example.com/cumin1.jpg', 'https://example.com/cumin2.jpg'], category: 'Spices & Masala', badge: 'Popular', description: 'Aromatic cumin powder for Indian cuisine.' },
  { id: 'coriander-powder', name: 'Coriander Powder', images: ['https://png.pngtree.com/thumb_back/fh260/background/20240613/pngtree-coriander-powder-in-wooden-bowl-with-seeds-on-black-background-image_15749568.jpg', 'https://example.com/coriander1.jpg', 'https://example.com/coriander2.jpg'], category: 'Spices & Masala', badge: 'Fresh', description: 'Fresh coriander powder for enhanced taste.' },
  { id: 'red-chili-powder', name: 'Red Chili Powder', images: ['https://thumbs.dreamstime.com/b/chilli-powder-red-pepper-chilli-powder-red-pepper-wooden-background-selective-focus-288799257.jpg', 'https://example.com/chili1.jpg', 'https://example.com/chili2.jpg'], category: 'Spices & Masala', badge: 'Hot', description: 'Spicy red chili powder for heat lovers.' },
  { id: 'moong-dal', name: 'Moong Dal', images: ['https://thumbs.dreamstime.com/b/split-moong-dals-split-moong-dals-glass-jar-black-background-245785191.jpg', 'https://example.com/moong1.jpg', 'https://example.com/moong2.jpg'], category: 'Kathol & Pulses', badge: 'Protein Rich', description: 'Nutritious split moong dal.' },
  { id: 'chana-dal', name: 'Chana Dal', images: ['https://thumbs.dreamstime.com/b/split-chickpea-also-know-as-chana-dal-dried-lentils-toor-heap-yellow-chickpeas-raw-lentil-indian-beans-isolated-black-248965448.jpg', 'https://example.com/chana1.jpg', 'https://example.com/chana2.jpg'], category: 'Kathol & Pulses', badge: 'Daily Staple', description: 'Essential chana dal for daily meals.' },
  { id: 'soya-paneer', name: "Soya paneer", images: ["https://www.ffce.in/wp-content/uploads/2025/01/Soya-Paneer.jpg", "https://example.com/soya1.jpg", "https://example.com/soya2.jpg"], category: "Kathol & Pulses", badge: "Healthy", description: "Healthy soya paneer alternative." },
  { id: 'peanut', name: "Peanut", images: ["https://png.pngtree.com/thumb_back/fh260/background/20250429/pngtree-peanut-butter-and-peanut-pellets-image_17229219.jpg", "https://example.com/peanut1.jpg", "https://example.com/peanut2.jpg"], category: "Kathol & Pulses", badge: "Healthy", description: "Crunchy peanuts for snacking." },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = myProducts.find(p => p.id === id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;