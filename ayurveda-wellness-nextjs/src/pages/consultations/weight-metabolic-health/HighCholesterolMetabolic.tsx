import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const HighCholesterolMetabolic = () => {
  const suggestedProducts = [
    {
      id: 'guggulu',
      name: 'Guggulu Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/guggulu-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'triphala',
      name: 'Triphala Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/triphala-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'arjuna',
      name: 'Arjuna Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/arjuna-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    subcategoryTitle: 'High Cholesterol & Metabolic Health',
    categoryTitle: 'Weight & Metabolic Health',
    categoryHref: '/consultations/weight-metabolic-health',
    image: "/Sub Category/Weight & Metabolic Health/High Cholesterol  Metabolic Syndrome.jpg",
    description: `Title: High Cholesterol & Metabolic Health — Balance Your Lipids, Naturally\n\nHigh cholesterol and metabolic imbalance affect heart health and energy. Ayurveda sees these as signs of aggravated Kapha or Pitta dosha, impaired Agni, and toxin (Ama) buildup. Through lipid-lowering herbs, dietary changes, and lifestyle practices, Ayurveda helps restore healthy cholesterol and metabolic balance.\n\nH1: Ayurvedic Perspective on High Cholesterol\nHigh cholesterol is often linked to Kapha (water/earth) or Pitta (fire) imbalances, which disturb fat metabolism and circulation. Triggers include poor diet, inactivity, stress, or genetic factors.\n\nCommon Symptoms:\n- Elevated cholesterol or triglycerides\n- Fatigue or heaviness\n- Weight gain or difficulty losing weight\n- Poor circulation\n- Chest discomfort\n- Brain fog or forgetfulness\n\nH2: Ayurvedic Healing Approach\n- Guggulu and Triphala for lipid balance\n- Arjuna for heart support\n- Low-fat, high-fiber foods\n- Regular exercise and movement\n- Mindful eating and portion control\n- Stress management and rest\n\nH2: Benefits of Ayurvedic Care\n- Improved cholesterol and lipid balance\n- Enhanced energy and circulation\n- Natural support for heart health\n- Greater vitality and well-being\n\n🌿 Balance Your Lipids, Naturally\nHigh cholesterol is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your cholesterol and metabolic health from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    bannerContent: {
      title: 'High Cholesterol & Metabolic Health',
      breadcrumb: 'Weight & Metabolic Health',
      breadcrumbHref: '/consultations/weight-metabolic-health',
    },
    meta: {
      title: 'Ayurvedic High Cholesterol & Metabolic Solutions | BookMyAyurveda',
      description: 'Balance cholesterol and metabolic health naturally with Ayurveda. Personalized herbal care, lifestyle tips, and expert consultations for heart health.',
      keywords: 'Ayurveda, high cholesterol, metabolic health, Kapha, Pitta, Guggulu, Triphala, Arjuna',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default HighCholesterolMetabolic;
