import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const MuscleWeakness = () => {
  const suggestedProducts = [
    {
      id: 'ashwagandha',
      name: 'Ashwagandha Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashwagandha-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'bala',
      name: 'Bala Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/bala-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'shatavari',
      name: 'Shatavari Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/shatavari-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Muscle Weakness',
      breadcrumb: 'Joint & Bone Health',
      breadcrumbHref: '/consultations/joint-bone-health',
    },
    image: "/Sub Category/Joint & Bone Health/Muscle Weakness.jpg",
    description: `Title: Muscle Weakness — Regain Strength, Naturally\n\nMuscle weakness reduces mobility, stamina, and quality of life. Ayurveda sees muscle weakness as a sign of aggravated Vata or Pitta dosha, depleted Mamsa Dhatu (muscle tissue), and impaired Agni. Through muscle-nourishing herbs, dietary changes, and lifestyle practices, Ayurveda helps restore strength and resilience.\n\nH1: Ayurvedic Perspective on Muscle Weakness\nMuscle weakness is often linked to Vata (movement/air) or Pitta (fire) imbalances, which deplete muscle tissue and energy. Triggers include aging, poor diet, inactivity, or chronic illness.\n\nCommon Symptoms:\n- Muscle fatigue or weakness\n- Reduced stamina\n- Difficulty with daily activities\n- Poor posture or balance\n- Cramps or discomfort\n- Slow recovery after exertion\n\nH2: Ayurvedic Healing Approach\n- Ashwagandha and Bala for muscle strength\n- Shatavari for nourishment\n- Protein-rich, nourishing foods\n- Gentle exercise and stretching\n- Abhyanga (oil massage) for comfort\n- Restorative sleep and routines\n\nH2: Benefits of Ayurvedic Care\n- Improved muscle strength\n- Enhanced stamina and recovery\n- Natural support for muscle health\n- Greater vitality and well-being\n\n🌿 Regain Your Strength\nMuscle weakness is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your muscle health and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default MuscleWeakness;
