import React, { useState, useEffect, useMemo } from 'react';
import './Products.css';
import ScrollAnimation from './ScrollAnimation';

const productCategories = [
  {
    id: 'spice-studio',
    label: 'Spices & Masala',
    title: 'Signature Spice Studio',
    description: 'Street-style lal chutney, golden haldi and premium masala blends curated for restaurants and retail jars.',
    cta: 'Download Spice Deck',
    products: [
      {
        id: 'red-chutney-masala',
        name: 'Lal Lasun Chutney Base',
        icon: '🌶️',
        badge: 'Street Favourite',
        category: 'Spices & Condiments',
        accent: 'spice',
        summary: 'Ready-to-mix red chutney concentrate inspired by Kathiyawadi tiffin counters.',
        description: 'Smoky Kashmiri chilli, roasted garlic and sesame tempered together for instant red chutney batches.',
        tags: ['Instant mix', 'Oil roasted', 'Vegan'],
        quickStat: { label: 'Heat Level', value: 'Medium / Hot' },
        specs: {
          heatProfile: '25K SHU medium-hot',
          packaging: '1kg | 5kg | 15kg pails',
          shelfLife: '12 months'
        },
        features: [
          'Sun-dried chilli with cold-pressed groundnut oil',
          'Stone-ground texture for smooth sandwich spread',
          'Stabilized with natural vinegar for longer holding'
        ],
        detailedDescription: 'Kitchen teams just add warm oil or curd to instantly finish lahsun chutney for farsan, vada pav and Punjabi sandwiches. The blend keeps colour locked even in hot buffets and cloud-kitchen deliveries.',
        applications: ['Tiffin services', 'Farsan units', 'Quick service restaurants', 'Cloud kitchens'],
        certifications: ['FSSAI', 'HACCP', 'HALAL']
      },
      {
        id: 'golden-haldi',
        name: 'Golden Haldi Powder',
        icon: '🟡',
        badge: 'Colour Lock',
        category: 'Spices & Condiments',
        accent: 'spice',
        summary: 'High-curcumin turmeric milled under nitrogen for bright colour and smooth mouthfeel.',
        description: 'Farm-direct Salem turmeric fingers with >4% curcumin, steam sterilized and milled to 80 mesh.',
        tags: ['Steam sterilized', 'Farm traceable', 'Daily use'],
        quickStat: { label: 'Curcumin', value: '4%+' },
        specs: {
          curcumin: '>4% average',
          meshSize: '80 mesh',
          shelfLife: '24 months'
        },
        features: [
          'Nitrogen-cooled grinding locks volatile oils',
          'No artificial colour or anti-caking agents',
          'Custom pack sizes from 100g pouches to 25kg bags'
        ],
        detailedDescription: 'Ideal for private label haldi packs, ayurvedic beverages and ready meals. The powder disperses without lumping, making it perfect for sauces and instant mixes.',
        applications: ['Retail masala brands', 'Health beverages', 'Sauce plants', 'Ready meal kits'],
        certifications: ['FSSAI', 'BRCGS', 'US FDA']
      },
      {
        id: 'chaat-masala',
        name: 'Street Style Chaat Masala',
        icon: '🥗',
        badge: 'Chef Crafted',
        category: 'Spices & Condiments',
        accent: 'spice',
        summary: 'Tangy, zingy sprinkle for salads, fruits, farsan and beverage rims.',
        description: 'Balanced blend of black salt, dry mango, cumin and citrus oil for consistent chaat flavour.',
        tags: ['Low sodium', 'Small batch', 'Ready sprinkle'],
        quickStat: { label: 'Batch Size', value: '50 kg' },
        specs: {
          sodium: '30% lower than market avg',
          packaging: '250g | 1kg | 10kg',
          shelfLife: '18 months'
        },
        features: [
          'Dehydrated lemon oil micro-encapsulated for aroma',
          'No MSG, gluten free and vegan friendly',
          'Custom grind options for beverage shakers'
        ],
        detailedDescription: 'Perfect for cafe chains, fruit bars and farsan counters that need the same tangy hit every day. The blend sticks to fritters without clumping thanks to our humidity controlled finishing.',
        applications: ['Fruit bars', 'Salad kits', 'Ready-to-eat chaats', 'Beverage garnish'],
        certifications: ['FSSAI', 'ISO 22000', 'HALAL']
      }
    ]
  },
  {
    id: 'kathol-dals',
    label: 'Kathol & Pulses',
    title: 'Protein Kathol Collection',
    description: 'Moong, tuver and assorted kathol cleaned on double sortex lines for export and institutional packs.',
    cta: 'Get Pulses Sheet',
    products: [
      {
        id: 'moong-dal',
        name: 'Moong Dal (Split Green)',
        icon: '🌱',
        badge: 'Protein Rich',
        category: 'Kathol & Pulses',
        accent: 'kathol',
        summary: 'Bold size moong dal split with uniform colour and 11% moisture control.',
        description: 'Single-polish moong dal sourced from Saurashtra belts, ideal for namkeen and dal fry.',
        tags: ['Double sortex', 'Low moisture', 'Protein 24g'],
        quickStat: { label: 'Moisture', value: '≤ 11%' },
        specs: {
          moisture: '≤ 11%',
          size: '3.5 mm bold grain',
          packaging: '25kg | 50kg'
        },
        features: [
          'Two-stage optical sorting removes discoloured grains',
          'Food-grade lining inside every PP bag',
          'Available in both polished and chilkewali formats'
        ],
        detailedDescription: 'Perfect for ready mixes, namkeen coatings and daily dal service. The dal cooks in under 12 minutes maintaining bright yellow colour.',
        applications: ['HoReCa kitchens', 'Ready mix brands', 'Namkeen factories', 'Bulk repackers'],
        certifications: ['FSSAI', 'APEDA', 'ISO 22000']
      },
      {
        id: 'tuver-dal',
        name: 'Tuver/Toor Dal',
        icon: '🫘',
        badge: 'Daily Staple',
        category: 'Kathol & Pulses',
        accent: 'kathol',
        summary: 'Polished tuver dal with natural aroma, perfect for Gujarati, Kathiyawadi and South Indian menus.',
        description: 'Procured during fresh harvest windows to retain natural oils and sweet notes.',
        tags: ['Origin Saurashtra', 'Low breakage', 'Sortex ++'],
        quickStat: { label: 'Origin', value: 'Saurashtra' },
        specs: {
          moisture: '≤ 12%',
          polishing: 'Single & double',
          shelfLife: '12 months'
        },
        features: [
          'Uniform soaking time for cloud kitchen batching',
          'Custom fumigation + nitrogen flush on request',
          'Meets GCC residue norms'
        ],
        detailedDescription: 'Ideal for dal tadka, sambhar bases and instant mixes. Each lot ships with lab reports covering moisture, infestation and pesticide residue.',
        applications: ['Oil & gas camps', 'Ready meal units', 'House brand retail packs', 'Export bulk'],
        certifications: ['FSSAI', 'HACCP', 'US FDA']
      },
      {
        id: 'kathol-mix',
        name: 'Mixed Kathol Combo',
        icon: '🥣',
        badge: 'Value Pack',
        category: 'Kathol & Pulses',
        accent: 'kathol',
        summary: 'Curated combo of rajma, chana, black eye beans and green peas for retail hampers.',
        description: 'Multi-pack kathol in pre-portioned stand-up pouches with resealable zippers.',
        tags: ['Private label', 'Ready hamper', 'Retail friendly'],
        quickStat: { label: 'Variants', value: '4-in-1' },
        specs: {
          varieties: 'Rajma | Chana | Chawli | Vatana',
          packaging: '4x500g | 2kg combo',
          shelfLife: '15 months'
        },
        features: [
          'Nitrogen flushed for extended freshness',
          'Window pouches with bilingual artwork support',
          'SKU level barcode + traceability'
        ],
        detailedDescription: 'Great for gifting, gourmet stores and modern trade shelves. Each pouch highlights cooking tips and protein counts for quick consumer education.',
        applications: ['Modern trade', 'Corporate gifting', 'E-commerce brands', 'Meal kits'],
        certifications: ['FSSAI', 'ISO 22000', 'BRCGS']
      }
    ]
  },
  {
    id: 'dehydrated',
    label: 'Dehydrated Powders',
    title: 'Functional Ingredient Powders',
    description: 'Consistent onion and garlic powders for seasoning plants, instant mixes and culinary bases.',
    cta: 'Ask For Samples',
    products: [
      {
        id: 'onion-powder',
        name: 'Onion Powder',
        icon: '🧅',
        badge: 'Best Seller',
        category: 'Dehydrated Powders',
        accent: 'dehydrated',
        summary: '40-60 mesh onion powder with natural sweetness and low moisture.',
        description: 'Premium dehydrated onion powder processed with gentle air drying.',
        tags: ['Steam dried', '40-60 mesh', 'Bulk ready'],
        quickStat: { label: 'Moisture', value: '≤ 6%' },
        specs: {
          moisture: '≤ 6%',
          meshSize: '40-60 mesh',
          shelfLife: '24 months'
        },
        features: [
          '100% natural with no preservatives',
          'ISO 22000 and HACCP certified facility',
          'Custom pack sizes for OEM sachets'
        ],
        detailedDescription: 'Advanced dehydration retains flavour while extending shelf life. Offered in 25kg bulk bags through to private label pouches.',
        applications: ['Food processing', 'Seasoning blends', 'Restaurant industry', 'Retail products'],
        certifications: ['ISO 22000', 'HACCP', 'FSSAI', 'Export Quality']
      },
      {
        id: 'garlic-powder',
        name: 'Garlic Powder',
        icon: '🧄',
        badge: 'Premium',
        category: 'Dehydrated Powders',
        accent: 'dehydrated',
        summary: 'Fine grind garlic powder rich in allicin for flavour-packed blends.',
        description: 'Finely ground garlic powder with intense flavour and strong aroma.',
        tags: ['Allicin rich', 'Gluten free', 'Fine grind'],
        quickStat: { label: 'Mesh', value: '40-80' },
        specs: {
          moisture: '≤ 8%',
          meshSize: '40-80 mesh',
          shelfLife: '18 months'
        },
        features: [
          'Rich in antioxidants and functional compounds',
          'Pure, natural and HACCP compliant',
          'Global export ready with documentation support'
        ],
        detailedDescription: 'Made from carefully selected garlic bulbs to maintain nutritional value and flavour. Offered in blends for health supplements, seasoning and pharma.',
        applications: ['Health supplements', 'Food seasoning', 'Pharmaceutical', 'Cosmetics'],
        certifications: ['HACCP', 'ISO 22000', 'FSSAI', 'Organic Certified']
      }
    ]
  },
  {
    id: 'value-added',
    label: 'Value Added Foods',
    title: 'Ready Consumption Range',
    description: 'Snack, spread and protein skus that complement spices and pulses for a 360° catalogue.',
    cta: 'Share Full Catalogue',
    products: [
      {
        id: 'premium-chips',
        name: 'Premium Food Chips',
        icon: '🥔',
        badge: 'New',
        category: 'Snacking Range',
        accent: 'value',
        summary: 'Air-crisp chips in 5+ flavours with OEM packaging support.',
        description: 'Crunchy and delicious chips made from the finest ingredients.',
        tags: ['5+ flavors', 'OEM packs', 'Air crisp'],
        quickStat: { label: 'Flavours', value: '5+' },
        specs: {
          flavors: '5+ varieties',
          packaging: 'Bulk & retail',
          shelfLife: '12 months'
        },
        features: [
          'Multiple flavours including global favourites',
          'Custom packaging and private label ready',
          'OEM manufacturing with low MOQs'
        ],
        detailedDescription: 'Crafted using advanced manufacturing for consistent crunch. Ideal for snacks, accompaniments and food service applications.',
        applications: ['Snack industry', 'Food service', 'Retail markets', 'Export markets'],
        certifications: ['FSSAI', 'ISO 22000', 'HACCP', 'Export Quality']
      },
      {
        id: 'artisan-peanut-butter',
        name: 'Artisan Peanut Butter',
        icon: '🥜',
        badge: 'Energy Rich',
        category: 'Nut & Protein Spreads',
        accent: 'value',
        summary: 'Micro-batch peanut butter in creamy and crunchy profiles.',
        description: 'Slow-roasted peanuts stone-ground into silky spreads.',
        tags: ['25g protein', 'Palm-oil free', 'Creamy & crunchy'],
        quickStat: { label: 'Protein', value: '25g/100g' },
        specs: {
          protein: '25g / 100g',
          texture: 'Smooth | Crunchy',
          shelfLife: '18 months'
        },
        features: [
          'Zero palm oil and fillers',
          'High protein, vegan formulation',
          'Retail and HoReCa pack sizes'
        ],
        detailedDescription: 'Crafted in micro batches to lock in aroma while maintaining export grade stability. Custom sweetness and viscosity available.',
        applications: ['Retail & private label', 'Food service', 'Bakery fillings', 'Sports nutrition'],
        certifications: ['FSSAI', 'ISO 22000', 'US FDA', 'Vegan Friendly']
      },
      {
        id: 'protein-beans',
        name: 'Protein-Rich Beans',
        icon: '🥫',
        badge: 'Protein Boost',
        category: 'Beans & Pulses',
        accent: 'value',
        summary: 'Kidney, black and chickpea beans with double sortex cleaning.',
        description: 'Export-grade beans sourced from traceable farms with strict moisture control.',
        tags: ['Kidney & chickpea', 'Color sorted', '50kg sacks'],
        quickStat: { label: 'Varieties', value: '6+' },
        specs: {
          varieties: '6+ types',
          moisture: '≤ 12%',
          packaging: '25kg | 50kg'
        },
        features: [
          'Triple-stage cleaning & metal detection',
          'Custom moisture barriers for long haul export',
          'Flexible contracting for yearly demand'
        ],
        detailedDescription: 'Beans undergo grading and fumigation to preserve freshness during export. Ideal for canning, ready meals and bulk trade.',
        applications: ['Canning units', 'Retail packs', 'Ready meals', 'Bulk traders'],
        certifications: ['FSSAI', 'ISO 22000', 'APEDA', 'USDA Organic']
      }
    ]
  }
];

const Products = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const flattenedProducts = useMemo(
    () => productCategories.flatMap((category) => category.products),
    []
  );

  const formatSpecLabel = (label) => {
    if (label === 'meshSize') return 'Mesh Size';
    if (label === 'shelfLife') return 'Shelf Life';
    return label
      .replace(/([A-Z])/g, ' $1')
      .replace(/^\w/, (char) => char.toUpperCase());
  };

  const openModal = (productId) => {
    const product = flattenedProducts.find((p) => p.id === productId);
    if (!product) return;
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
        
        <div className="product-category-wrapper">
          {productCategories.map((category, catIndex) => (
            <div key={category.id} className="product-category-section">
              <ScrollAnimation
                animation="fade-in-up"
                delay={0.1 * (catIndex + 1)}
              >
                <div className="category-header">
                  <div>
                    <span className="category-chip">{category.label}</span>
                    <h3 className="category-title">{category.title}</h3>
                    <p className="category-description">{category.description}</p>
                  </div>
                  <div className="category-meta">
                    <span className="category-count">
                      {category.products.length} SKU
                      {category.products.length > 1 ? 's' : ''}
                    </span>
                    <button className="category-cta-btn" type="button">
                      {category.cta}
                    </button>
                  </div>
                </div>
              </ScrollAnimation>

              <div className="product-card-grid">
                {category.products.map((product, index) => (
                  <ScrollAnimation
                    key={product.id}
                    animation="fade-in-up"
                    delay={0.05 * (index + 1)}
                  >
                    <article
                      className={`product-card accent-${product.accent || 'default'}`}
                      onClick={() => openModal(product.id)}
                    >
                      <div className="product-card-top">
                        <span className="product-card-icon">{product.icon}</span>
                        <div className="product-card-heading">
                          <span className="product-card-badge">{product.badge}</span>
                          <h4>{product.name}</h4>
                          <p className="product-card-summary">{product.summary}</p>
                        </div>
                      </div>

                      <div className="product-card-tags">
                        {product.tags.map((tag) => (
                          <span key={tag} className="product-card-tag">{tag}</span>
                        ))}
                      </div>

                      {product.quickStat && (
                        <div className="product-card-footer">
                          <span className="product-card-spec">
                            <strong>{product.quickStat.label}:</strong> {product.quickStat.value}
                          </span>
                          <button
                            type="button"
                            className="product-card-btn"
                            onClick={(event) => {
                              event.stopPropagation();
                              openModal(product.id);
                            }}
                          >
                            View Details
                          </button>
                        </div>
                      )}
                    </article>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      {isModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <div className={`modal-icon-wrapper accent-${selectedProduct.accent || 'default'}`}>
                <span className="modal-icon">{selectedProduct.icon}</span>
                <span className="modal-badge">{selectedProduct.badge}</span>
              </div>
              <div className="modal-title-section">
                <span className="modal-category-chip">{selectedProduct.category}</span>
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
                        {formatSpecLabel(key)}:
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

              {selectedProduct.tags && (
                <div className="modal-section">
                  <h3>Quick Tags</h3>
                  <div className="modal-tags">
                    {selectedProduct.tags.map((tag) => (
                      <span key={tag} className="modal-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              )}

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
