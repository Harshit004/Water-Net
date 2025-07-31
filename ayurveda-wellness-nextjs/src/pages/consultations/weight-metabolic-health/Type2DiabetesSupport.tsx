import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const Type2DiabetesSupport = () => {
  const suggestedProducts = [
    {
      id: 'jamun',
      name: 'Jamun Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/jamun-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'karela',
      name: 'Karela Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/karela-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'triphala',
      name: 'Triphala Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/triphala-benefits-1.jpg',
      price: '₹249 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Type 2 Diabetes Support',
      breadcrumb: 'Weight & Metabolic Health',
      breadcrumbHref: '/consultations/weight-metabolic-health',
    },
    image: '/Sub Category/Weight & Metabolic Health/Type 2 Diabetes Support.jpg',
    description: `Title: Type 2 Diabetes Support — Balance Your Sugar, Naturally\n\nType 2 diabetes affects blood sugar, energy, and long-term health. Ayurveda sees type 2 diabetes as a sign of aggravated Kapha or Pitta dosha, impaired Agni, and toxin (Ama) buildup. Through blood sugar-regulating herbs, dietary changes, and lifestyle practices, Ayurveda helps restore healthy glucose metabolism and vitality.\n\nH1: Ayurvedic Perspective on Type 2 Diabetes\nType 2 diabetes is often linked to Kapha (water/earth) or Pitta (fire) imbalances, which disturb metabolism and insulin function. Triggers include poor diet, inactivity, stress, or genetic factors.\n\nCommon Symptoms:\n- Fatigue or low energy\n- Cravings for sweets\n- Weight gain or difficulty losing weight\n- Mood swings or irritability\n- Increased thirst or urination\n- Brain fog or forgetfulness\n\nH2: Ayurvedic Healing Approach\n- Jamun and Karela for blood sugar regulation\n- Triphala for detoxification\n- Low-glycemic, whole foods\n- Regular exercise and movement\n- Mindful eating and portion control\n- Stress management and rest\n\nH2: Benefits of Ayurvedic Care\n- Improved blood sugar balance\n- Reduced cravings and weight gain\n- Enhanced energy and mood\n- Better metabolic resilience\n- Natural support for glucose health\n- Greater vitality and well-being\n\n🌿 Balance Your Sugar, Naturally\nType 2 diabetes is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your blood sugar health and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default Type2DiabetesSupport;
