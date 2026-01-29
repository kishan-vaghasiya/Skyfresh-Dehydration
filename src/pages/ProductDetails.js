import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pages/ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedVariant, setSelectedVariant] = useState(0);

  // Product database with actual variants for each product
  const productsDatabase = {
    'onion-powder': {
      name: 'DEHYDRATED ONION',
      mainImage: 'https://5.imimg.com/data5/SELLER/Default/2023/8/336341696/BW/OJ/FE/190643305/onion-powder.jpeg',
      variants: [
        {
          type: 'Kibbled',
          description: 'Coarse cut pieces (4-8 mesh), perfect for soups, stews and dry curries',
          image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/336341696/BW/OJ/FE/190643305/onion-powder.jpeg',
          specs: {
            'Size': '4-8 mesh',
            'Moisture': '< 8%',
            'Color': 'Golden brown',
            'Packing': '25kg bags',
            'Shelf Life': '2 years'
          }
        },
        {
          type: 'Chopped',
          description: 'Medium cut pieces (8-12 mesh), ideal for curries, rice dishes and sauces',
          image: 'https://images.unsplash.com/photo-1585518419759-8bda0e4dc57f?w=800',
          specs: {
            'Size': '8-12 mesh',
            'Moisture': '< 8%',
            'Color': 'Golden brown',
            'Packing': '25kg bags',
            'Shelf Life': '2 years'
          }
        },
        {
          type: 'Minced',
          description: 'Fine cut pieces (12-16 mesh), perfect for sauces, dressings and pastes',
          image: 'https://images.unsplash.com/photo-1587049261718-01a088ca69d7?w=800',
          specs: {
            'Size': '12-16 mesh',
            'Moisture': '< 8%',
            'Color': 'Golden brown',
            'Packing': '25kg bags',
            'Shelf Life': '2 years'
          }
        },
        {
          type: 'Granules',
          description: 'Small granular form (16-20 mesh), great for seasoning and instant use',
          image: 'https://images.unsplash.com/photo-1545501888-5f4c8d0a1a4d?w=800',
          specs: {
            'Size': '16-20 mesh',
            'Moisture': '< 8%',
            'Color': 'Light brown',
            'Packing': '25kg bags',
            'Shelf Life': '2 years'
          }
        },
        {
          type: 'Powder',
          description: 'Ultra-fine powder form (100 mesh), best for instant use and food manufacturing',
          image: 'https://images.unsplash.com/photo-1599599810694-e3c629ef60c7?w=800',
          specs: {
            'Size': '100 mesh',
            'Moisture': '< 6%',
            'Color': 'Light tan',
            'Packing': '25kg bags',
            'Shelf Life': '2.5 years'
          }
        }
      ],
      overview: 'Premium dehydrated onion with rich flavor profile. Perfect for all culinary applications from industrial to home cooking.',
      benefits: [
        '✓ 100% Natural - No additives or preservatives',
        '✓ Long shelf life - Up to 2 years',
        '✓ Easy to use - Instant rehydration',
        '✓ Consistent quality - Rigorous quality control',
        '✓ Cost effective - Reduces storage space',
        '✓ Versatile - Suitable for all cuisines'
      ]
    },
    'garlic-powder': {
      name: 'DEHYDRATED GARLIC',
      mainImage: 'https://t3.ftcdn.net/jpg/04/03/29/38/360_F_403293835_yv2pImRN8zbKmsNp0pwXxvrVKSlfkZtZ.jpg',
      variants: [
        {
          type: 'Kibbled',
          description: 'Coarse cut pieces with intense garlic flavor and aroma',
          image: 'https://t3.ftcdn.net/jpg/04/03/29/38/360_F_403293835_yv2pImRN8zbKmsNp0pwXxvrVKSlfkZtZ.jpg',
          specs: {
            'Size': '4-8 mesh',
            'Moisture': '< 7%',
            'Color': 'Cream white',
            'Packing': '25kg bags',
            'Shelf Life': '2-3 years'
          }
        },
        {
          type: 'Chopped',
          description: 'Medium pieces, ideal for paste and curry preparations',
          image: 'https://images.unsplash.com/photo-1599599810874-f0c1e1e3e9c6?w=800',
          specs: {
            'Size': '8-12 mesh',
            'Moisture': '< 7%',
            'Color': 'Cream white',
            'Packing': '25kg bags',
            'Shelf Life': '2-3 years'
          }
        },
        {
          type: 'Minced',
          description: 'Fine cut pieces for fine cooking and gourmet dishes',
          image: 'https://images.unsplash.com/photo-1599599810694-e3c629ef60c7?w=800',
          specs: {
            'Size': '12-16 mesh',
            'Moisture': '< 7%',
            'Color': 'Cream white',
            'Packing': '25kg bags',
            'Shelf Life': '2-3 years'
          }
        },
        {
          type: 'Granules',
          description: 'Small granules for even distribution in food products',
          image: 'https://images.unsplash.com/photo-1599599810962-f7a2c4f1a4d7?w=800',
          specs: {
            'Size': '16-20 mesh',
            'Moisture': '< 7%',
            'Color': 'Off white',
            'Packing': '25kg bags',
            'Shelf Life': '2-3 years'
          }
        },
        {
          type: 'Powder',
          description: 'Fine powder for instant garlic flavor and industrial food manufacturing',
          image: 'https://images.unsplash.com/photo-1599599810962-f7a2c4f1a4d7?w=800',
          specs: {
            'Size': '100 mesh',
            'Moisture': '< 6%',
            'Color': 'Pure white',
            'Packing': '25kg bags',
            'Shelf Life': '2-3 years'
          }
        }
      ],
      overview: 'Premium dehydrated garlic powder packed with natural flavor and potency. Perfect for all food products and cuisines.',
      benefits: [
        '✓ Potent flavor - No artificial additives',
        '✓ Extended shelf life - 2-3 years',
        '✓ Ready to use - No preparation needed',
        '✓ Pure quality - Strict quality standards',
        '✓ Economical - Better than fresh garlic',
        '✓ Global supply - Export quality certified'
      ]
    },
    'Potato': {
      name: 'DEHYDRATED POTATO POWDER',
      mainImage: 'https://t4.ftcdn.net/jpg/05/86/78/83/360_F_586788305_4J7M5VWFf7sOHCKl271F2RKomqtqj38y.jpg',
      variants: [
        {
          type: 'Powder',
          description: 'Ultra-fine powder for instant mashed potatoes and food manufacturing',
          image: 'https://t4.ftcdn.net/jpg/05/86/78/83/360_F_586788305_4J7M5VWFf7sOHCKl271F2RKomqtqj38y.jpg',
          specs: {
            'Size': '100 mesh',
            'Moisture': '< 8%',
            'Color': 'White',
            'Packing': '25kg bags',
            'Shelf Life': '1-2 years'
          }
        },
        {
          type: 'Flakes',
          description: 'Thin dehydrated flakes ready to rehydrate for quick mashed potatoes',
          image: 'https://images.unsplash.com/photo-1599599810962-f7a2c4f1a4d7?w=800',
          specs: {
            'Size': '2-4mm',
            'Moisture': '< 8%',
            'Color': 'White',
            'Packing': '25kg bags',
            'Shelf Life': '1-2 years'
          }
        },
        {
          type: 'Diced',
          description: 'Small dice cut potato pieces for soups and stews',
          image: 'https://images.unsplash.com/photo-1599599810694-e3c629ef60c7?w=800',
          specs: {
            'Size': '4-8mm',
            'Moisture': '< 10%',
            'Color': 'Light tan',
            'Packing': '25kg bags',
            'Shelf Life': '1-2 years'
          }
        }
      ],
      overview: 'High-quality dehydrated potato in multiple forms. Perfect for food manufacturers, restaurants, catering and home use.',
      benefits: [
        '✓ Nutrient rich - Retains natural nutrients',
        '✓ Quick prep - Just add water',
        '✓ Space saving - Compact storage',
        '✓ Waste free - No peeling required',
        '✓ Consistent texture - Professional quality',
        '✓ Bulk available - Wholesale pricing'
      ]
    },
    'Mint': {
      name: 'DEHYDRATED MINT POWDER',
      mainImage: 'https://5.imimg.com/data5/TO/XS/DP/SELLER-71826193/dehydrated-mint-leaves-500x500.jpg',
      variants: [
        {
          type: 'Whole Leaves',
          description: 'Whole dehydrated mint leaves with strong aroma and vibrant green color',
          image: 'https://5.imimg.com/data5/TO/XS/DP/SELLER-71826193/dehydrated-mint-leaves-500x500.jpg',
          specs: {
            'Size': '4-6 mesh',
            'Moisture': '< 8%',
            'Color': 'Green',
            'Packing': '5kg bags',
            'Shelf Life': '1-2 years'
          }
        },
        {
          type: 'Crushed',
          description: 'Crushed mint leaves perfect for beverages and teas',
          image: 'https://images.unsplash.com/photo-1599599810694-e3c629ef60c7?w=800',
          specs: {
            'Size': '8-10 mesh',
            'Moisture': '< 8%',
            'Color': 'Green',
            'Packing': '5kg bags',
            'Shelf Life': '1-2 years'
          }
        },
        {
          type: 'Powder',
          description: 'Ultra-fine powder for smoothies, desserts and instant mint flavor',
          image: 'https://images.unsplash.com/photo-1599599810962-f7a2c4f1a4d7?w=800',
          specs: {
            'Size': '100 mesh',
            'Moisture': '< 6%',
            'Color': 'Light green',
            'Packing': '5kg bags',
            'Shelf Life': '1 year'
          }
        }
      ],
      overview: 'Premium dehydrated mint with vibrant color and aromatic freshness. Perfect for beverages, desserts, and culinary use.',
      benefits: [
        '✓ Fresh aroma - Authentic mint flavor',
        '✓ Long shelf life - 1-2 years',
        '✓ Easy storage - Lightweight packaging',
        '✓ Health benefits - Natural cooling properties',
        '✓ Versatile use - Beverages to desserts',
        '✓ Quality assured - Food grade certified'
      ]
    },
    'turmeric-powder': {
      name: 'TURMERIC POWDER',
      mainImage: 'https://www.viralspices.com/wp-content/uploads/2024/11/Untitled-1-624x312.jpg',
      variants: [
        {
          type: 'Powder',
          description: 'Fine turmeric powder rich in curcumin with golden yellow color',
          image: 'https://www.viralspices.com/wp-content/uploads/2024/11/Untitled-1-624x312.jpg',
          specs: {
            'Size': '100 mesh',
            'Moisture': '< 8%',
            'Color': 'Bright golden',
            'Packing': '25kg bags',
            'Shelf Life': '2-3 years'
          }
        },
        {
          type: 'Ground Root',
          description: 'Ground turmeric root for authentic traditional cooking',
          image: 'https://images.unsplash.com/photo-1599599810694-e3c629ef60c7?w=800',
          specs: {
            'Size': '80 mesh',
            'Moisture': '< 10%',
            'Color': 'Golden yellow',
            'Packing': '25kg bags',
            'Shelf Life': '2-3 years'
          }
        },
        {
          type: 'Fine Particles',
          description: 'Fine particles ideal for paste and cosmetic applications',
          image: 'https://images.unsplash.com/photo-1599599810962-f7a2c4f1a4d7?w=800',
          specs: {
            'Size': '120 mesh',
            'Moisture': '< 8%',
            'Color': 'Bright golden',
            'Packing': '25kg bags',
            'Shelf Life': '2-3 years'
          }
        }
      ],
      overview: 'Premium quality turmeric powder rich in curcumin. Perfect for traditional and modern cuisines, medicines and cosmetics.',
      benefits: [
        '✓ High curcumin content - Natural health benefits',
        '✓ Pure quality - No fillers added',
        '✓ Vibrant color - Rich golden hue',
        '✓ Long shelf life - 2-3 years',
        '✓ Traditional recipe - Authentic taste',
        '✓ Export quality - International standards'
      ]
    },
    'cumin-powder': {
      name: 'CUMIN POWDER',
      mainImage: 'https://t3.ftcdn.net/jpg/17/92/81/88/360_F_1792818877_8ElnWfdvWyTSUN21nFwnDVja5wKKhnL0.jpg',
      variants: [
        {
          type: 'Powder',
          description: 'Fine powder from pure cumin seeds with warm aromatic flavor',
          image: 'https://t3.ftcdn.net/jpg/17/92/81/88/360_F_1792818877_8ElnWfdvWyTSUN21nFwnDVja5wKKhnL0.jpg',
          specs: {
            'Size': '100 mesh',
            'Moisture': '< 8%',
            'Color': 'Tan',
            'Packing': '25kg bags',
            'Shelf Life': '2-3 years'
          }
        },
        {
          type: 'Coarse Ground',
          description: 'Coarsely ground cumin for traditional cooking and tempering',
          image: 'https://images.unsplash.com/photo-1599599810694-e3c629ef60c7?w=800',
          specs: {
            'Size': '40 mesh',
            'Moisture': '< 9%',
            'Color': 'Light brown',
            'Packing': '25kg bags',
            'Shelf Life': '2-3 years'
          }
        },
        {
          type: 'Whole Seeds',
          description: 'Whole cumin seeds for traditional tempering and flavoring',
          image: 'https://images.unsplash.com/photo-1599599810962-f7a2c4f1a4d7?w=800',
          specs: {
            'Size': 'Whole',
            'Moisture': '< 9%',
            'Color': 'Brown',
            'Packing': '25kg bags',
            'Shelf Life': '2-3 years'
          }
        }
      ],
      overview: 'Pure cumin powder with distinctive warm flavor and aroma. Essential for Indian and Middle Eastern cuisines.',
      benefits: [
        '✓ Authentic flavor - True cumin taste',
        '✓ Digestive aid - Traditional uses',
        '✓ Pure ingredient - No additives',
        '✓ Long lasting - 2-3 years shelf life',
        '✓ Aromatic - Strong cumin aroma',
        '✓ Premium grade - Best quality'
      ]
    },
    'coriander-powder': {
      name: 'CORIANDER POWDER',
      mainImage: 'https://www.shutterstock.com/image-photo/coriander-powder-wooden-bowl-isolated-600nw-2414032011.jpg',
      variants: [
        {
          type: 'Powder',
          description: 'Fine powder from pure coriander seeds with citrusy aroma',
          image: 'https://www.shutterstock.com/image-photo/coriander-powder-wooden-bowl-isolated-600nw-2414032011.jpg',
          specs: {
            'Size': '100 mesh',
            'Moisture': '< 8%',
            'Color': 'Light tan',
            'Packing': '25kg bags',
            'Shelf Life': '2-3 years'
          }
        },
        {
          type: 'Coarse Powder',
          description: 'Coarsely ground coriander for spice blends and cooking',
          image: 'https://images.unsplash.com/photo-1599599810694-e3c629ef60c7?w=800',
          specs: {
            'Size': '40 mesh',
            'Moisture': '< 9%',
            'Color': 'Tan',
            'Packing': '25kg bags',
            'Shelf Life': '2-3 years'
          }
        },
        {
          type: 'Whole Seeds',
          description: 'Whole coriander seeds for traditional cooking and spice blends',
          image: 'https://images.unsplash.com/photo-1599599810962-f7a2c4f1a4d7?w=800',
          specs: {
            'Size': 'Whole',
            'Moisture': '< 9%',
            'Color': 'Brown',
            'Packing': '25kg bags',
            'Shelf Life': '2-3 years'
          }
        }
      ],
      overview: 'Premium coriander powder with aromatic, citrusy notes. Perfect for spice blends and everyday cooking.',
      benefits: [
        '✓ Aromatic flavor - Citrusy notes',
        '✓ Health benefits - Rich in antioxidants',
        '✓ Pure quality - No additives',
        '✓ Long shelf life - 2-3 years',
        '✓ Versatile - All cuisines',
        '✓ Export certified - Quality assured'
      ]
    },
    'red-chili-powder': {
      name: 'RED CHILI POWDER',
      mainImage: 'https://t4.ftcdn.net/jpg/06/68/59/49/360_F_668594985_30FQV0Mhp8TDVpFQWHYG0QuGM99zChDp.jpg',
      variants: [
        {
          type: 'Powder',
          description: 'Fine red chili powder with intense heat and vibrant color',
          image: 'https://t4.ftcdn.net/jpg/06/68/59/49/360_F_668594985_30FQV0Mhp8TDVpFQWHYG0QuGM99zChDp.jpg',
          specs: {
            'Size': '100 mesh',
            'Moisture': '< 7%',
            'Color': 'Bright red',
            'Packing': '25kg bags',
            'Shelf Life': '2-3 years'
          }
        },
        {
          type: 'Coarse Ground',
          description: 'Coarsely ground red chili for traditional cooking',
          image: 'https://images.unsplash.com/photo-1599599810694-e3c629ef60c7?w=800',
          specs: {
            'Size': '40 mesh',
            'Moisture': '< 8%',
            'Color': 'Deep red',
            'Packing': '25kg bags',
            'Shelf Life': '2-3 years'
          }
        },
        {
          type: 'Flakes',
          description: 'Red chili flakes for garnishing and adding spice to dishes',
          image: 'https://images.unsplash.com/photo-1599599810962-f7a2c4f1a4d7?w=800',
          specs: {
            'Size': '4-8mm',
            'Moisture': '< 8%',
            'Color': 'Deep red',
            'Packing': '25kg bags',
            'Shelf Life': '2-3 years'
          }
        }
      ],
      overview: 'Pure red chili powder with intense heat and rich color. Perfect for spicy cuisines and food coloring.',
      benefits: [
        '✓ Pure heat - Authentic chili flavor',
        '✓ Vibrant color - Natural red pigment',
        '✓ No additives - 100% natural',
        '✓ Long storage - 2-3 years',
        '✓ Metabolic benefits - Capsaicin rich',
        '✓ Premium quality - Export grade'
      ]
    },
    'mango-pulp': {
      name: 'NATURAL MANGO PULP',
      mainImage: 'https://media.istockphoto.com/id/1322109219/photo/mango-juice-or-shake-in-bowl.jpg?s=612x612&w=0&k=20&c=U2lehXQlcD_o6k1VN9OLMKZxxblSerYmtQnbtoXes9I=',
      variants: [
        {
          type: 'Powder',
          description: 'Spray-dried mango powder for instant mango flavor',
          image: 'https://media.istockphoto.com/id/1322109219/photo/mango-juice-or-shake-in-bowl.jpg?s=612x612&w=0&k=20&c=U2lehXQlcD_o6k1VN9OLMKZxxblSerYmtQnbtoXes9I=',
          specs: {
            'Size': '100 mesh',
            'Moisture': '< 10%',
            'Color': 'Light tan',
            'Packing': '25kg bags',
            'Shelf Life': '1.5 years'
          }
        },
        {
          type: 'Puree',
          description: 'Concentrated mango puree for beverages and desserts',
          image: 'https://images.unsplash.com/photo-1599599810694-e3c629ef60c7?w=800',
          specs: {
            'Size': 'Liquid concentrate',
            'Moisture': '< 15%',
            'Color': 'Golden yellow',
            'Packing': '5kg bags',
            'Shelf Life': '1 year'
          }
        },
        {
          type: 'Flakes',
          description: 'Dehydrated mango flakes for snacks and beverages',
          image: 'https://images.unsplash.com/photo-1599599810962-f7a2c4f1a4d7?w=800',
          specs: {
            'Size': '2-4mm',
            'Moisture': '< 12%',
            'Color': 'Golden',
            'Packing': '5kg bags',
            'Shelf Life': '1.5 years'
          }
        }
      ],
      overview: 'Premium natural mango pulp with authentic taste and nutritional value. Perfect for beverages, desserts, and confectionery.',
      benefits: [
        '✓ 100% Natural - No artificial colors',
        '✓ Rich flavor - Authentic mango taste',
        '✓ Nutrient dense - Vitamin and mineral rich',
        '✓ Shelf stable - Proper preservation',
        '✓ Versatile use - Drinks to desserts',
        '✓ Export quality - International certified'
      ]
    }
  };

  const product = productsDatabase[productId];

  if (!product) {
    return (
      <div className="product-not-found">
        <Navbar />
        <div className="not-found-content">
          <h1>Product Not Found</h1>
          <p>The product you're looking for doesn't exist.</p>
          <button className="back-btn" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const currentVariant = product.variants[selectedVariant];

  return (
    <div className="product-details-page">
      <Navbar />

      <div className="product-details-container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <button className="breadcrumb-link" onClick={() => navigate('/')}>
            Home
          </button>
          <span className="breadcrumb-separator">/</span>
          <button className="breadcrumb-link" onClick={() => navigate('/')}>
            Products
          </button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </div>

        {/* Main Product Section */}
        <div className="product-main">
          {/* Left Side - Image Gallery */}
          <div className="product-gallery">
            <div className="main-image-container">
              <img 
                src={currentVariant.image} 
                alt={currentVariant.type}
                className="main-image"
              />
              <span className="product-badge">{currentVariant.type}</span>
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="product-info-section">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-subtitle">{currentVariant.type} Form</p>

            {/* Overview */}
            <div className="product-overview">
              <h3>Product Overview</h3>
              <p>{product.overview}</p>
            </div>

            {/* Benefits */}
            <div className="product-benefits">
              <h3>Key Benefits</h3>
              <div className="benefits-grid">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* Variant Selection */}
            <div className="variant-selection">
              <h3>Available Forms</h3>
              <div className="variant-buttons">
                {product.variants.map((variant, index) => (
                  <button
                    key={index}
                    className={`variant-btn ${selectedVariant === index ? 'active' : ''}`}
                    onClick={() => setSelectedVariant(index)}
                  >
                    {variant.type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Variant Details Section */}
        <div className="variant-details">
          <div className="variant-content">
            {/* Left - Description */}
            <div className="variant-description">
              <h2>{currentVariant.type}</h2>
              <p className="description-text">{currentVariant.description}</p>

              {/* Specifications */}
              <div className="specifications">
                <h3>Specifications</h3>
                <div className="specs-grid">
                  {Object.entries(currentVariant.specs).map(([key, value]) => (
                    <div key={key} className="spec-item">
                      <span className="spec-label">{key}</span>
                      <span className="spec-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="variant-cta">
                <button className="inquiry-btn">
                  📧 Send Inquiry
                </button>
                <button className="contact-btn">
                  💬 Contact Us
                </button>
              </div>
            </div>

            {/* Right - Image */}
            <div className="variant-image">
              <img 
                src={currentVariant.image} 
                alt={currentVariant.type}
                className="variant-showcase-image"
              />
            </div>
          </div>
        </div>

        {/* Related Variants Section */}
        <div className="related-variants">
          <h2>All Available Forms</h2>
          <div className="variants-showcase">
            {product.variants.map((variant, index) => (
              <div 
                key={index}
                className={`variant-card ${selectedVariant === index ? 'active' : ''}`}
                onClick={() => setSelectedVariant(index)}
              >
                <div className="variant-card-image">
                  <img src={variant.image} alt={variant.type} />
                </div>
                <div className="variant-card-info">
                  <h4>{variant.type}</h4>
                  <p>{variant.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
