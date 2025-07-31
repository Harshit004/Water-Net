import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const LiverDetox = () => {
  const suggestedProducts = [
    {
      id: 'bhumi-amla',
      name: 'Bhumi Amla Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/bhumi-amla-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'punarnava',
      name: 'Punarnava Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/punarnava-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'katuki',
      name: 'Katuki Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/katuki-benefits-1.jpg',
      price: '₹249 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Liver Detox (alcohol, drugs, toxins)',
      breadcrumb: 'Liver, Kidney & Detox',
      breadcrumbHref: '/consultations/liver-kidney-detox',
    },
    image: '/Sub Category/Liver, Kidney & Detox/Liver Detox (alcohol, drugs, toxins).jpg',
    description: `Title: Liver Detox — Cleanse & Renew, Naturally\n\nLiver detox supports the body's natural cleansing and metabolic functions. Ayurveda sees liver congestion as a sign of aggravated Pitta or Kapha dosha, impaired Agni, and toxin (Ama) buildup. Through detoxifying herbs, dietary changes, and lifestyle practices, Ayurveda helps restore liver health and vitality.\n\nH1: Ayurvedic Perspective on Liver Detox\nLiver congestion is often linked to Pitta (fire) or Kapha (water/earth) imbalances, which disturb detoxification and metabolism. Triggers include poor diet, alcohol, medications, or stress.\n\nCommon Symptoms:\n- Fatigue or sluggishness\n- Digestive discomfort\n- Skin issues or acne\n- Bitter taste in mouth\n- Headaches or irritability\n- Poor appetite\n\nH2: Ayurvedic Healing Approach\n- Bhumi Amla and Punarnava for liver support\n- Katuki for detoxification\n- Bitter, cleansing foods\n- Adequate hydration\n- Gentle exercise and sweating\n- Stress management and rest\n\nH2: Benefits of Ayurvedic Care\n- Improved liver function\n- Enhanced detoxification\n- Clearer skin and digestion\n- Natural support for metabolic health\n- Greater vitality and well-being\n\n🌿 Cleanse & Renew, Naturally\nLiver detox is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your liver health and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    meta: {
      title: 'Ayurveda Support for Liver Detox (alcohol, drugs, toxins) | Book Consultation',
      description: 'Book your personalized Ayurvedic consultation online for Liver Detox (alcohol, drugs, toxins). Natural healing with herbs, diet, and lifestyle changes for lasting relief.',
      keywords: 'Liver Detox (alcohol, drugs, toxins) Ayurveda, Liver Detox (alcohol, drugs, toxins) Treatment, Book Ayurveda Online, Ayurvedic Consultation Liver Detox (alcohol, drugs, toxins), Natural Healing, Ayurveda Remedies, Liver Detox (alcohol, drugs, toxins) Relief, Holistic Wellness'
    }
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default LiverDetox;
