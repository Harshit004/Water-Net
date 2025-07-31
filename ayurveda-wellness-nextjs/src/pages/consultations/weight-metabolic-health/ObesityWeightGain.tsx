import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const ObesityWeightGain = () => {
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
      id: 'vijaysar',
      name: 'Vijaysar Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/vijaysar-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    subcategoryTitle: 'Obesity & Weight Gain',
    categoryTitle: 'Weight & Metabolic Health',
    categoryHref: '/consultations/weight-metabolic-health',
    image: "/Sub Category/Weight & Metabolic Health/Obesity  Weight Gain.jpg",
    description: `Title: Obesity & Weight Gain — Achieve Balance, Naturally\n\nObesity and weight gain affect energy, confidence, and health. Ayurveda sees obesity as a sign of aggravated Kapha or Pitta dosha, impaired Agni, and toxin (Ama) buildup. Through weight-balancing herbs, dietary changes, and lifestyle practices, Ayurveda helps restore healthy weight and metabolic balance.\n\nH1: Ayurvedic Perspective on Obesity\nObesity is often linked to Kapha (water/earth) or Pitta (fire) imbalances, which disturb metabolism and fat storage. Triggers include poor diet, inactivity, stress, or genetic factors.\n\nCommon Symptoms:\n- Weight gain or central obesity\n- Fatigue or heaviness\n- Poor digestion\n- Low motivation\n- Joint discomfort\n- Difficulty losing weight\n\nH2: Ayurvedic Healing Approach\n- Triphala and Guggulu for weight balance\n- Vijaysar for metabolism\n- Low-calorie, high-fiber foods\n- Regular exercise and movement\n- Mindful eating and portion control\n- Stress management and rest\n\nH2: Benefits of Ayurvedic Care\n- Improved weight balance\n- Enhanced energy and motivation\n- Natural support for metabolic health\n- Greater vitality and well-being\n\n🌿 Achieve Balance, Naturally\nObesity is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your weight and metabolic health from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    bannerContent: {
      title: 'Obesity & Weight Gain',
      breadcrumb: 'Weight & Metabolic Health',
      breadcrumbHref: '/consultations/weight-metabolic-health',
    },
    meta: {
      title: 'Ayurvedic Obesity & Weight Gain Solutions | BookMyAyurveda',
      description: 'Achieve healthy weight balance naturally with Ayurveda. Personalized herbal care, lifestyle tips, and expert consultations for weight management.',
      keywords: 'Ayurveda, obesity, weight gain, metabolic health, Kapha, Pitta, Triphala, Guggulu, Vijaysar',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default ObesityWeightGain;
