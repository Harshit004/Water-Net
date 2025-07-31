import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const WeakDigestion = () => {
  const suggestedProducts = [
    {
      id: 'trikatu',
      name: 'Trikatu Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/trikatu-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'hingwashtak',
      name: 'Hingwashtak Churna',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/hingwashtak-benefits-1.jpg',
      price: '₹199 / 100g',
    },
    {
      id: 'pippali',
      name: 'Pippali Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/pippali-benefits-1.jpg',
      price: '₹249 / 100g',
    },
  ];

  const subcategoryData = {
    subcategoryTitle: 'Weak Digestion',
    categoryTitle: 'Senior & Elderly Care',
    categoryHref: '/consultations/senior-elderly-care',
    image: '/Sub Category/Senior & Elderly Care/Weak Digestion.jpg',
    description: `Title: Weak Digestion — Rekindle Your Agni, Naturally\n\nWeak digestion is common in the elderly, affecting energy, nutrition, and well-being. Ayurveda sees weak digestion as a sign of aggravated Vata or Kapha dosha, impaired Agni, and toxin (Ama) buildup. Through digestive herbs, dietary changes, and lifestyle practices, Ayurveda helps restore digestive fire and resilience.\n\nH1: Ayurvedic Perspective on Weak Digestion\nWeak digestion is often linked to Vata (movement/air) or Kapha (water/earth) imbalances, which disturb metabolism and nutrient absorption. Triggers include aging, poor diet, inactivity, or chronic illness.\n\nCommon Symptoms:\n- Bloating or gas\n- Poor appetite\n- Fatigue or heaviness\n- Constipation or irregular bowels\n- Indigestion or discomfort\n- Weight changes\n\nH2: Ayurvedic Healing Approach\n- Trikatu and Hingwashtak for digestive fire\n- Pippali for metabolism\n- Warm, spiced foods\n- Mindful eating and routines\n- Gentle exercise and movement\n- Stress management and rest\n\nH2: Benefits of Ayurvedic Care\n- Improved digestion and appetite\n- Reduced bloating and discomfort\n- Enhanced energy and nutrition\n- Natural support for metabolic health\n- Greater vitality and well-being\n\n🌿 Rekindle Your Agni, Naturally\nWeak digestion is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your digestive health and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    bannerContent: {
      title: 'Weak Digestion',
      breadcrumb: 'Senior & Elderly Care',
      breadcrumbHref: '/consultations/senior-elderly-care',
    },
    meta: {
      title: 'Ayurvedic Weak Digestion Solutions | BookMyAyurveda',
      description: 'Improve digestion naturally with Ayurveda. Personalized herbal care, lifestyle tips, and expert consultations for better digestive health.',
      keywords: 'Ayurveda, weak digestion, elderly care, Vata, Kapha, Trikatu, Hingwashtak, Pippali',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default WeakDigestion;
