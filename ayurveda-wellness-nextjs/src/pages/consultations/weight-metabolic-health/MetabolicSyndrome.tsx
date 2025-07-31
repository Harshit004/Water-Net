import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const MetabolicSyndrome = () => {
  const suggestedProducts = [
    {
      id: 'triphala',
      name: 'Triphala Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/triphala-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'guggulu',
      name: 'Guggulu Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/guggulu-benefits-1.jpg',
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
    subcategoryTitle: 'Metabolic Syndrome',
    categoryTitle: 'Weight & Metabolic Health',
    categoryHref: '/consultations/weight-metabolic-health',
    image: '/Sub Category/Weight & Metabolic Health/Metabolic Syndrome.jpg',
    description: `Title: Metabolic Syndrome — Restore Balance, Naturally\n\nMetabolic syndrome is a cluster of conditions affecting weight, blood sugar, and heart health. Ayurveda sees metabolic syndrome as a sign of aggravated Kapha or Pitta dosha, impaired Agni, and toxin (Ama) buildup. Through metabolism-boosting herbs, dietary changes, and lifestyle practices, Ayurveda helps restore healthy metabolic balance.\n\nH1: Ayurvedic Perspective on Metabolic Syndrome\nMetabolic syndrome is often linked to Kapha (water/earth) or Pitta (fire) imbalances, which disturb metabolism and circulation. Triggers include poor diet, inactivity, stress, or genetic factors.\n\nCommon Symptoms:\n- Weight gain or central obesity\n- High blood sugar or cholesterol\n- Fatigue or heaviness\n- Poor circulation\n- Brain fog or forgetfulness\n- Difficulty losing weight\n\nH2: Ayurvedic Healing Approach\n- Triphala and Guggulu for metabolic support\n- Arjuna for heart health\n- Low-glycemic, high-fiber foods\n- Regular exercise and movement\n- Mindful eating and portion control\n- Stress management and rest\n\nH2: Benefits of Ayurvedic Care\n- Improved metabolic balance\n- Enhanced energy and circulation\n- Natural support for heart health\n- Greater vitality and well-being\n\n🌿 Restore Balance, Naturally\nMetabolic syndrome is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your metabolic health from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    bannerContent: {
      title: 'Metabolic Syndrome',
      breadcrumb: 'Weight & Metabolic Health',
      breadcrumbHref: '/consultations/weight-metabolic-health',
    },
    meta: {
      title: 'Ayurvedic Metabolic Syndrome Solutions | BookMyAyurveda',
      description: 'Restore metabolic balance naturally with Ayurveda. Personalized herbal care, lifestyle tips, and expert consultations for metabolic health.',
      keywords: 'Ayurveda, metabolic syndrome, weight health, Kapha, Pitta, Triphala, Guggulu, Arjuna',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default MetabolicSyndrome;
