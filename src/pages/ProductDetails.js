import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProductDetails.css';

const productVariants = {
  'white-onion-powder': {
    category: 'white-onion',
    categoryName: 'White Onion',
    image: 'https://img.sanishtech.com/u/8cba785b78eea5a4c92bedfc8180ca05.jpg'
  },
  'red-onion-powder': {
    category: 'red-onion',
    categoryName: 'Red Onion',
    image: 'https://img.sanishtech.com/u/228d921ef2f5a7c0c27115077ef7812e.png'
  },
  'garlic-powder': {
    category: 'garlic',
    categoryName: 'Garlic',
    image: 'https://img.sanishtech.com/u/2efd7c2730497c37e14e814a73ab7ac6.jpg'
  }
};

const getProductVariants = (category) => {
  const categoryMap = {
    'white-onion': 'White',
    'red-onion': 'Red',
    'garlic': 'Golden Brown'
  };

  const colorName = categoryMap[category];
  const imageMap = {
    'white-onion': 'https://img.sanishtech.com/u/90de0a3286d54ded6616da768f843461.png',
    'red-onion': 'https://img.sanishtech.com/u/70dbbbe574847427d279d18fee62e766.png',
    'garlic': 'https://img.sanishtech.com/u/2efd7c2730497c37e14e814a73ab7ac6.jpg'
  };

  if (category === 'red-onion' || category === 'white-onion' || category === 'pink-onion') {
    const isRed = category === 'red-onion';
    return [
      {
        id: `${category}-flakes`,
        name: `Dehydrated ${colorName} Onion Flakes/Kibbled`,
        image: imageMap[category],
        details: {
          size: isRed ? '8 to 15 mm' : '8 To 15 MM',
          placeOfOrigin: 'Gujarat, India',
          color: colorName,
          aroma: 'Strong Aroma represents Indian Origin product',
          packing: isRed ? '25 Kg. strong Poly bag inside cartoon' : '14 KG, Strong poly bag inside carton',
          qualities: 'A - Grade, Commercial grade'
        }
      },
      {
        id: `${category}-chopped`,
        name: `Dehydrated ${colorName} Onion Chopped`,
        image: imageMap[category],
        details: {
          size: isRed ? '3 to 5 mm' : '3 To 5 MM',
          placeOfOrigin: 'Gujarat, India',
          color: colorName,
          aroma: 'Strong Aroma represents Indian Origin product',
          packing: isRed ? '20 Kg. & 25 Kg. strong Poly bag inside cartoon' : '20 KG, Strong poly bag inside carton',
          qualities: 'A - Grade, Commercial grade'
        }
      },
      {
        id: `${category}-minced`,
        name: `Dehydrated ${colorName} Onion Minced`,
        image: imageMap[category],
        details: {
          size: isRed ? '1 to 5 mm' : '1 To 3 MM',
          placeOfOrigin: 'Gujarat, India',
          color: colorName,
          aroma: 'Strong Aroma represents Indian Origin product',
          packing: isRed ? '20 Kg. & 25 Kg. strong Poly bag inside cartoon' : '20 KG, Strong poly bag inside carton',
          qualities: 'A - Grade, Commercial grade'
        }
      },
      {
        id: `${category}-granules`,
        name: `Dehydrated ${colorName} Onion Granules`,
        image: imageMap[category],
        details: {
          size: isRed ? '40 to 80 mesh, 40 to 60 mesh, 40 to 80 mesh' : '0.5 To 1 MM',
          placeOfOrigin: 'Gujarat, India',
          color: colorName,
          aroma: 'Strong Aroma represents Indian Origin product',
          packing: isRed ? '20 Kg. & 25 Kg. strong Poly bag inside cartoon' : '20 KG, Strong poly bag inside carton',
          qualities: 'A - Grade, Commercial grade'
        }
      },
      {
        id: `${category}-powder`,
        name: `Dehydrated ${colorName} Onion Powder`,
        image: imageMap[category],
        details: {
          size: isRed ? '80 to 100 mesh, 100 to 120 mesh' : '80 To 100 Mesh',
          placeOfOrigin: 'Gujarat, India',
          color: colorName,
          aroma: 'Strong Aroma represents Indian Origin product',
          packing: isRed ? '20 Kg. strong Poly bag inside cartoon' : '20 KG, Strong poly bag inside carton',
          qualities: 'A - Grade, Commercial grade'
        }
      }
    ];
  }

  if (category === 'garlic') {
    return [
      {
        id: 'garlic-cloves',
        name: 'Dehydrated Garlic Cloves',
        image: imageMap[category],
        details: {
          size: '5 to 10 mm',
          placeOfOrigin: 'Gujarat, India',
          color: 'Golden Brown',
          aroma: 'Strong Aroma represents Indian Origin product',
          packing: '14 Kg. strong Poly bag inside cartoon',
          qualities: 'A - Grade, Commercial grade'
        }
      },
      {
        id: 'garlic-chopped',
        name: 'Dehydrated Garlic Chopped',
        image: imageMap[category],
        details: {
          size: '3 to 5 mm',
          placeOfOrigin: 'Gujarat, India',
          color: 'Golden Brown',
          aroma: 'Strong Aroma represents Indian Origin product',
          packing: '20 Kg. and 25 Kg. strong Poly bag inside cartoon',
          qualities: 'A - Grade, Commercial grade'
        }
      },
      {
        id: 'garlic-minced',
        name: 'Dehydrated Garlic Minced',
        image: imageMap[category],
        details: {
          size: '1 to 3 mm',
          placeOfOrigin: 'Gujarat, India',
          color: 'Golden Brown',
          aroma: 'Strong Aroma represents Indian Origin product',
          packing: '20 Kg. and 25 Kg. strong Poly bag inside cartoon',
          qualities: 'A - Grade, Commercial grade'
        }
      },
      {
        id: 'garlic-granules',
        name: 'Dehydrated Garlic Granules',
        image: imageMap[category],
        details: {
          size: '40 to 80 mesh, 40 to 60 mesh, 40 to 80 mesh',
          placeOfOrigin: 'Gujarat, India',
          color: 'Golden Brown',
          aroma: 'Strong Aroma represents Indian Origin product',
          packing: '20 Kg. and 25 kg. strong Poly bag inside cartoon',
          qualities: 'A - Grade, Commercial grade'
        }
      },
      {
        id: 'garlic-powder',
        name: 'Dehydrated Garlic Powder',
        image: imageMap[category],
        details: {
          size: '80 to 100 mesh, 100 to 120 mesh',
          placeOfOrigin: 'Gujarat, India',
          color: 'Golden Brown',
          aroma: 'Strong Aroma represents Indian Origin product',
          packing: '20 Kg. and 25 kg. strong Poly bag inside cartoon',
          qualities: 'A - Grade, Commercial grade'
        }
      }
    ];
  }

  return [
    {
      id: `${category}-flakes`,
      name: `Dehydrated ${colorName}  Flakes/Kibbled`,
      image: imageMap[category],
      details: {
        size: '8 To 15 MM',
        placeOfOrigin: 'Gujarat - India',
        color: colorName,
        aroma: 'Strong Aroma Represents, Indian Origin Products',
        packing: '14 KG, Strong poly bag inside carton',
        quality: 'A-grade, Commercial Grade',
        minQuantityOrdered: '20 FCL 7-8 MT, 40FCL H/C 17-18 MT or as per customer requirement'
      }
    },
    {
      id: `${category}-chopped`,
      name: `Dehydrated ${colorName} Onion Chopped`,
      image: imageMap[category],
      details: {
        size: '3 To 5 MM',
        placeOfOrigin: 'Gujarat - India',
        color: colorName,
        aroma: 'Strong Aroma Represents, Indian Origin Products',
        packing: '20 KG, Strong poly bag inside carton',
        quality: 'A-grade, Commercial Grade',
        minQuantityOrdered: '20 FCL 14-15 MT, 40FCL H/C 25-30 MT or as per customer requirement'
      }
    },
    {
      id: `${category}-minced`,
      name: `Dehydrated ${colorName} Onion Minced`,
      image: imageMap[category],
      details: {
        size: '1 To 3 MM',
        placeOfOrigin: 'Gujarat - India',
        color: colorName,
        aroma: 'Strong Aroma Represents, Indian Origin Products',
        packing: '20 KG, Strong poly bag inside carton',
        quality: 'A-grade, Commercial Grade',
        minQuantityOrdered: '20 FCL 14-15 MT, 40FCL H/C 25-30 MT or as per customer requirement'
      }
    },
    {
      id: `${category}-granules`,
      name: `Dehydrated ${colorName} Onion Granules`,
      image: imageMap[category],
      details: {
        size: '0.5 To 1 MM',
        placeOfOrigin: 'Gujarat - India',
        color: colorName,
        aroma: 'Strong Aroma Represents, Indian Origin Products',
        packing: '20 KG, Strong poly bag inside carton',
        quality: 'A-grade, Commercial Grade',
        minQuantityOrdered: '20 FCL 14-15 MT, 40FCL H/C 25-30 MT or as per customer requirement'
      }
    },
    {
      id: `${category}-powder`,
      name: `Dehydrated ${colorName} Onion Powder`,
      image: imageMap[category],
      details: {
        size: '80 To 100 Mesh',
        placeOfOrigin: 'Gujarat - India',
        color: colorName,
        aroma: 'Strong Aroma Represents, Indian Origin Products',
        packing: '20 KG, Strong poly bag inside carton',
        quality: 'A-grade, Commercial Grade',
        minQuantityOrdered: '20 FCL 14-15 MT, 40FCL H/C 25-30 MT or as per customer requirement'
      }
    }
  ];
};

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get the category from productId
  const productInfo = productVariants[productId];
  
  if (!productInfo) {
    return (
      <>
        <Navbar />
        <div className="product-details-container">
          <div className="not-found">
            <h2>Product Not Found</h2>
            <button onClick={() => navigate('/')} className="back-btn">
              Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const variants = getProductVariants(productInfo.category);

  return (
    <>
      <Navbar />
      <div className="product-details-container">
        <button onClick={() => navigate('/')} className="back-btn">
          ← Back to Products
        </button>

        <div className="category-header">
          <h1 className="category-title">Dehydrated {productInfo.categoryName} Variants</h1>
          <p className="category-subtitle">All sizes and specifications available</p>
        </div>

        <div className="products-variants-grid">
          {variants.map((product) => (
            <div key={product.id} className="product-card-detail">
              <div className="product-image-section">
                <img src={product.image} alt={product.name} className="product-detail-image" />
              </div>

              <div className="product-details-section">
                <h2 className="product-title">{product.name}</h2>

                <table className="details-table">
                  <thead>
                    <tr>
                      <th>Specification</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(product.details).map(([key, value]) => {
                      const label = key === 'size' ? 'Size' :
                                    key === 'placeOfOrigin' ? 'Place of Origin' :
                                    key === 'color' ? 'Color' :
                                    key === 'aroma' ? 'Aroma' :
                                    key === 'packing' ? 'Packing' :
                                    key === 'quality' || key === 'qualities' ? 'Qualities' :
                                    key === 'minQuantityOrdered' ? 'Min Quantity Ordered' : key;
                      return (
                        <tr key={key}>
                          <td className="detail-label">{label}</td>
                          <td className="detail-value">{value}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
