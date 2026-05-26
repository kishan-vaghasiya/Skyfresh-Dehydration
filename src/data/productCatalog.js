import { imgPath, productImages } from '../assets/index.js';

const ORIGIN = 'Gujarat, India';
const GRADE = 'A-Grade, Commercial Grade';

const onionVariantImages = (hero, images) => {
  if (images && typeof images === 'object' && images.flakes) {
    return images;
  }
  const kibble = images || hero;
  return {
    flakes: kibble,
    chopped: hero,
    minced: hero,
    granules: hero,
    powder: hero,
  };
};

const onionVariants = (colorName, imageKey, variantImages) => {
  const hero = imgPath[imageKey];
  const images = onionVariantImages(hero, variantImages);
  const isRed = colorName === 'Red';

  return [
    {
      id: 'flakes',
      type: 'Flakes / Kibbled',
      name: `Dehydrated ${colorName} Onion Flakes`,
      image: images.flakes,
      specs: [
        { label: 'Size', value: '8 to 15 mm' },
        { label: 'Origin', value: ORIGIN },
        { label: 'Color', value: colorName },
        { label: 'Packing', value: isRed ? '25 kg poly bag in carton' : '14 kg poly bag in carton' },
        { label: 'Grade', value: GRADE },
      ],
    },
    {
      id: 'chopped',
      type: 'Chopped',
      name: `Dehydrated ${colorName} Onion Chopped`,
      image: images.chopped,
      specs: [
        { label: 'Size', value: '3 to 5 mm' },
        { label: 'Origin', value: ORIGIN },
        { label: 'Color', value: colorName },
        { label: 'Packing', value: '20–25 kg poly bag in carton' },
        { label: 'Grade', value: GRADE },
      ],
    },
    {
      id: 'minced',
      type: 'Minced',
      name: `Dehydrated ${colorName} Onion Minced`,
      image: images.minced,
      specs: [
        { label: 'Size', value: isRed ? '1 to 5 mm' : '1 to 3 mm' },
        { label: 'Origin', value: ORIGIN },
        { label: 'Color', value: colorName },
        { label: 'Packing', value: '20–25 kg poly bag in carton' },
        { label: 'Grade', value: GRADE },
      ],
    },
    {
      id: 'granules',
      type: 'Granules',
      name: `Dehydrated ${colorName} Onion Granules`,
      image: images.granules,
      specs: [
        { label: 'Size', value: isRed ? '40–80 mesh' : '0.5 to 1 mm' },
        { label: 'Origin', value: ORIGIN },
        { label: 'Color', value: colorName },
        { label: 'Packing', value: '20–25 kg poly bag in carton' },
        { label: 'Grade', value: GRADE },
      ],
    },
    {
      id: 'powder',
      type: 'Powder',
      name: `Dehydrated ${colorName} Onion Powder`,
      image: images.powder,
      specs: [
        { label: 'Size', value: isRed ? '80–120 mesh' : '80 to 100 mesh' },
        { label: 'Origin', value: ORIGIN },
        { label: 'Color', value: colorName },
        { label: 'Packing', value: '20–25 kg poly bag in carton' },
        { label: 'Grade', value: GRADE },
      ],
    },
  ];
};

const garlicVariants = () => {
  const hero = imgPath.garlic;
  return [
    {
      id: 'cloves',
      type: 'Cloves',
      name: 'Dehydrated Garlic Cloves',
      image: productImages.GarlicCloves || hero,
      specs: [
        { label: 'Size', value: '5 to 10 mm' },
        { label: 'Origin', value: ORIGIN },
        { label: 'Color', value: 'Golden Brown' },
        { label: 'Packing', value: '14 kg poly bag in carton' },
        { label: 'Grade', value: GRADE },
      ],
    },
    {
      id: 'chopped',
      type: 'Chopped',
      name: 'Dehydrated Garlic Chopped',
      image: productImages.GarlicChopped || hero,
      specs: [
        { label: 'Size', value: '3 to 5 mm' },
        { label: 'Origin', value: ORIGIN },
        { label: 'Color', value: 'Golden Brown' },
        { label: 'Packing', value: '20–25 kg poly bag in carton' },
        { label: 'Grade', value: GRADE },
      ],
    },
    {
      id: 'minced',
      type: 'Minced',
      name: 'Dehydrated Garlic Minced',
      image: productImages.GarlicMinced || hero,
      specs: [
        { label: 'Size', value: '1 to 3 mm' },
        { label: 'Origin', value: ORIGIN },
        { label: 'Color', value: 'Golden Brown' },
        { label: 'Packing', value: '20–25 kg poly bag in carton' },
        { label: 'Grade', value: GRADE },
      ],
    },
    {
      id: 'granules',
      type: 'Granules',
      name: 'Dehydrated Garlic Granules',
      image: productImages.GarlicGranules || hero,
      specs: [
        { label: 'Size', value: '40–80 mesh' },
        { label: 'Origin', value: ORIGIN },
        { label: 'Color', value: 'Golden Brown' },
        { label: 'Packing', value: '20–25 kg poly bag in carton' },
        { label: 'Grade', value: GRADE },
      ],
    },
    {
      id: 'powder',
      type: 'Powder',
      name: 'Dehydrated Garlic Powder',
      image: productImages.GarlicPowder || hero,
      specs: [
        { label: 'Size', value: '80–120 mesh' },
        { label: 'Origin', value: ORIGIN },
        { label: 'Color', value: 'Golden Brown' },
        { label: 'Packing', value: '20–25 kg poly bag in carton' },
        { label: 'Grade', value: GRADE },
      ],
    },
  ];
};

const powderOnly = (name, imageKey, mesh = '80 to 100 mesh') => [
  {
    id: 'powder',
    type: 'Powder',
    name,
    image: imgPath[imageKey],
    specs: [
      { label: 'Size', value: mesh },
      { label: 'Origin', value: ORIGIN },
      { label: 'Packing', value: '20–25 kg poly bag in carton' },
      { label: 'Grade', value: GRADE },
      { label: 'Aroma', value: 'Strong aroma — Indian origin' },
    ],
  },
];

export const PRODUCT_CATALOG = {
  'red-onion-powder': {
    title: 'Dehydrated Red Onion',
    tagline: 'Flakes · Chopped · Minced · Granules · Powder',
    heroImage: imgPath.redonion,
    variants: onionVariants('Red', 'redonion', {
      flakes: productImages.RedRedKibble,
      chopped: productImages.RedRedChopped,
      minced: productImages.RedRedMinced,
      granules: productImages.RedRedGranules,
      powder: productImages.RedRedPowder,
    }),
  },
  'white-onion-powder': {
    title: 'Dehydrated White Onion',
    tagline: 'Flakes · Chopped · Minced · Granules · Powder',
    heroImage: imgPath.whiteonion,
    variants: onionVariants('White', 'whiteonion', {
      flakes: productImages.WhiteKibbled,
      chopped: productImages.WhiteChopped,
      minced: productImages.WhiteMinced,
      granules: productImages.WhiteGranules,
      powder: productImages.WhitePowder,
    }),
  },
  'garlic-powder': {
    title: 'Dehydrated Garlic',
    tagline: 'Cloves · Chopped · Minced · Granules · Powder',
    heroImage: imgPath.garlic,
    variants: garlicVariants(),
  },
  Potato: {
    title: 'Dehydrated Potato',
    tagline: 'Flakes · Granules · Powder',
    heroImage: imgPath.potato,
    variants: [
      {
        id: 'flakes',
        type: 'Flakes',
        name: 'Dehydrated Potato Flakes',
        image: imgPath.potato,
        specs: [
          { label: 'Origin', value: ORIGIN },
          { label: 'Packing', value: '20–25 kg poly bag in carton' },
          { label: 'Grade', value: GRADE },
        ],
      },
      {
        id: 'granules',
        type: 'Granules',
        name: 'Dehydrated Potato Granules',
        image: imgPath.potato,
        specs: [
          { label: 'Origin', value: ORIGIN },
          { label: 'Packing', value: '20–25 kg poly bag in carton' },
          { label: 'Grade', value: GRADE },
        ],
      },
      {
        id: 'powder',
        type: 'Powder',
        name: 'Dehydrated Potato Powder',
        image: imgPath.potato,
        specs: [
          { label: 'Size', value: '80 to 100 mesh' },
          { label: 'Origin', value: ORIGIN },
          { label: 'Packing', value: '20–25 kg poly bag in carton' },
          { label: 'Grade', value: GRADE },
        ],
      },
    ],
  },
  'amchur-powder': {
    title: 'Nature Amchur Powder',
    tagline: 'Tangy dried mango — export quality',
    heroImage: imgPath.amchur,
    variants: powderOnly('Nature Amchur Powder', 'amchur'),
  },
  Mint: {
    title: 'Dehydrated Mint',
    tagline: 'Premium dried mint leaves & powder',
    heroImage: imgPath.mint,
    variants: [
      {
        id: 'leaves',
        type: 'Leaves',
        name: 'Dehydrated Mint Leaves',
        image: imgPath.mint,
        specs: [
          { label: 'Origin', value: ORIGIN },
          { label: 'Packing', value: '10–25 kg poly bag in carton' },
          { label: 'Grade', value: GRADE },
        ],
      },
      {
        id: 'powder',
        type: 'Powder',
        name: 'Dehydrated Mint Powder',
        image: imgPath.mint,
        specs: [
          { label: 'Size', value: '80 to 100 mesh' },
          { label: 'Origin', value: ORIGIN },
          { label: 'Packing', value: '20–25 kg poly bag in carton' },
          { label: 'Grade', value: GRADE },
        ],
      },
    ],
  },
  'turmeric-powder': {
    title: 'Turmeric Powder',
    tagline: 'Bright golden — Indian origin',
    heroImage: imgPath.turmeric,
    variants: powderOnly('Turmeric Powder', 'turmeric'),
  },
  'cumin-powder': {
    title: 'Cumin Powder',
    tagline: 'Aromatic ground cumin',
    heroImage: imgPath.cumin,
    variants: powderOnly('Cumin Powder', 'cumin'),
  },
  'coriander-powder': {
    title: 'Coriander Powder',
    tagline: 'Fresh-ground coriander seeds',
    heroImage: imgPath.coriander,
    variants: powderOnly('Coriander Powder', 'coriander'),
  },
  'red-chili-powder': {
    title: 'Red Chili Powder',
    tagline: 'Vibrant heat — export grade',
    heroImage: imgPath.redchili,
    variants: powderOnly('Red Chili Powder', 'redchili'),
  },
  'mango-pulp': {
    title: 'Kesar Mango Pulp',
    tagline: 'Premium Alphonso-style pulp for export',
    heroImage: imgPath.mangopulp,
    variants: [
      {
        id: 'pulp',
        type: 'Pulp',
        name: 'Kesar Mango Pulp',
        image: imgPath.mangopulp,
        specs: [
          { label: 'Origin', value: 'Gujarat & Maharashtra, India' },
          { label: 'Packing', value: 'Aseptic drums / cans — as per order' },
          { label: 'Grade', value: 'Export quality' },
          { label: 'Use', value: 'Beverages, desserts, food processing' },
        ],
      },
    ],
  },
};

export const getProductById = (productId) => PRODUCT_CATALOG[productId] || null;
