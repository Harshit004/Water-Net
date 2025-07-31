import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const DryOilySkin = () => {
  const suggestedProducts = [
    {
      id: 'kumkumadi',
      name: 'Kumkumadi Oil',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/kumkumadi-benefits-1.jpg',
      price: '₹399 / 15ml',
    },
    {
      id: 'aloe-vera',
      name: 'Aloe Vera Gel',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/aloe-vera-benefits-1.jpg',
      price: '₹199 / 100g',
    },
    {
      id: 'coconut-oil',
      name: 'Coconut Oil',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/coconut-oil-benefits-1.jpg',
      price: '₹149 / 100ml',
    },
  ];

  const subcategoryData = {
    subcategoryTitle: 'Dry & Oily Skin',
    categoryTitle: 'Skin & Hair Health',
    categoryHref: '/consultations/skin-hair-health',
    image: "/Sub Category/Skin & Hair Health/Dry  Oily Skin.jpg",
    description: `Title: Dry & Oily Skin — Balance Your Glow, Naturally\n\nDry and oily skin affect comfort, appearance, and confidence. Ayurveda sees these as signs of aggravated Vata or Kapha dosha, impaired Agni, and imbalance in skin nutrition. Through skin-balancing herbs, dietary changes, and lifestyle practices, Ayurveda helps restore healthy, radiant skin.\n\nH1: Ayurvedic Perspective on Dry & Oily Skin\nDry and oily skin are often linked to Vata (air) or Kapha (water/earth) imbalances, which disturb skin moisture and oil production. Triggers include poor diet, stress, harsh skincare, or weather.\n\nCommon Symptoms:\n- Dryness or flakiness\n- Excess oil or shine\n- Sensitivity or irritation\n- Dull or uneven tone\n- Prone to breakouts or roughness\n- Discomfort with weather changes\n\nH2: Ayurvedic Healing Approach\n- Kumkumadi and Aloe Vera for skin balance\n- Coconut oil for nourishment\n- Light, hydrating foods\n- Mindful skincare and routines\n- Stress management and rest\n- Regular hydration\n\nH2: Benefits of Ayurvedic Care\n- Balanced, radiant skin\n- Reduced dryness or oiliness\n- Natural support for skin health\n- Greater confidence and comfort\n- Lasting skin wellness\n\n🌿 Balance Your Glow, Naturally\nSkin imbalance is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your skin health and confidence from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    bannerContent: {
      title: 'Dry & Oily Skin',
      breadcrumb: 'Skin & Hair Health',
      breadcrumbHref: '/consultations/skin-hair-health',
    },
    meta: {
      title: 'Ayurvedic Dry & Oily Skin Solutions | BookMyAyurveda',
      description: 'Balance dry and oily skin naturally with Ayurveda. Personalized herbal care, lifestyle tips, and expert consultations for healthy, radiant skin.',
      keywords: 'Ayurveda, dry skin, oily skin, skin health, Vata, Kapha, Kumkumadi, Aloe Vera, Coconut Oil',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default DryOilySkin;
