import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const FattyLiver = () => {
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
      title: 'Fatty Liver',
      breadcrumb: 'Liver, Kidney & Detox',
      breadcrumbHref: '/consultations/liver-kidney-detox',
    },
    image: '/Sub Category/Liver, Kidney & Detox/Fatty Liver.jpg',
    description: `Title: Fatty Liver — Restore & Protect, Naturally\n\nFatty liver is the accumulation of fat in liver cells, affecting function and health. Ayurveda sees fatty liver as a sign of aggravated Kapha or Pitta dosha, impaired Agni, and toxin (Ama) buildup. Through liver-supportive herbs, dietary changes, and lifestyle practices, Ayurveda helps restore liver health and metabolic balance.\n\nH1: Ayurvedic Perspective on Fatty Liver\nFatty liver is often linked to Kapha (water/earth) or Pitta (fire) imbalances, which disturb fat metabolism and detoxification. Triggers include poor diet, alcohol, obesity, or medications.\n\nCommon Symptoms:\n- Fatigue or sluggishness\n- Digestive discomfort\n- Abdominal fullness\n- Mild jaundice\n- Weight gain or difficulty losing weight\n- Poor appetite\n\nH2: Ayurvedic Healing Approach\n- Bhumi Amla and Punarnava for liver support\n- Katuki for detoxification\n- Bitter, cleansing foods\n- Adequate hydration\n- Gentle exercise and weight management\n- Stress management and rest\n\nH2: Benefits of Ayurvedic Care\n- Improved liver function\n- Enhanced detoxification\n- Better metabolic balance\n- Natural support for liver health\n- Greater vitality and well-being\n\n🌿 Restore & Protect, Naturally\nFatty liver is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your liver health and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default FattyLiver;
