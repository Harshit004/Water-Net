import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const StressManagement = () => {
  const suggestedProducts = [
    {
      id: 'brahmi',
      name: 'Brahmi Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/brahmi-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'ashwagandha',
      name: 'Ashwagandha Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashwagandha-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'jatamansi',
      name: 'Jatamansi Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/jatamansi-benefits-1.jpg',
      price: '₹349 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Stress Management',
      breadcrumb: "Men's Health",
      breadcrumbHref: '/consultations/mens-health',
    },
    image: "/Sub Category/Men's Health/Stress Management.jpg",
    description: `Title: Stress Management — Find Calm, Naturally\n\nStress affects mind, body, and relationships. Ayurveda sees stress as a sign of aggravated Vata or Pitta dosha, depleted Ojas (vitality), and nervous system imbalance. Through adaptogenic and calming herbs, dietary changes, and lifestyle practices, Ayurveda helps restore calm and resilience.\n\nH1: Ayurvedic Perspective on Stress\nStress is often linked to Vata (movement/air) or Pitta (fire) imbalances, which disturb mind-body harmony and energy. Triggers include overwork, emotional strain, poor sleep, or chronic illness.\n\nCommon Symptoms:\n- Anxiety or restlessness\n- Irritability or anger\n- Fatigue or low energy\n- Sleep disturbances\n- Poor concentration\n- Muscle tension\n\nH2: Ayurvedic Healing Approach\n- Brahmi and Ashwagandha for calm and resilience\n- Jatamansi for nervous system support\n- Nourishing, grounding foods\n- Mindful breathing and meditation\n- Gentle exercise and relaxation\n- Regular routines and sleep\n\nH2: Benefits of Ayurvedic Care\n- Improved calm and focus\n- Reduced anxiety and irritability\n- Enhanced energy and resilience\n- Natural support for mind-body health\n- Greater vitality and well-being\n\n🌿 Find Calm, Naturally\nStress is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your calm and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default StressManagement;
