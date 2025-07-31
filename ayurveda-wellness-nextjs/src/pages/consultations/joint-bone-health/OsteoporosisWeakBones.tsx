import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const OsteoporosisWeakBones = () => {
  const suggestedProducts = [
    {
      id: 'hadjod',
      name: 'Hadjod Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/hadjod-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'ashwagandha',
      name: 'Ashwagandha Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashwagandha-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'laksha',
      name: 'Laksha Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/laksha-benefits-1.jpg',
      price: '₹249 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Osteoporosis & Weak Bones',
      breadcrumb: 'Joint & Bone Health',
      breadcrumbHref: '/consultations/joint-bone-health',
    },
    image: "/Sub Category/Joint & Bone Health/Osteoporosis  Weak Bones.jpg",
    description: `Title: Osteoporosis & Weak Bones — Strengthen Your Structure, Naturally\n\nOsteoporosis and weak bones increase the risk of fractures and pain. Ayurveda sees these as signs of aggravated Vata or Pitta dosha, depleted Asthi Dhatu (bone tissue), and impaired Agni. Through bone-strengthening herbs, nourishing foods, and lifestyle practices, Ayurveda helps restore bone density and resilience.\n\nH1: Ayurvedic Perspective on Osteoporosis & Weak Bones\nOsteoporosis is often linked to Vata (movement/air) or Pitta (fire) imbalances, which deplete bone tissue and minerals. Triggers include aging, poor diet, inactivity, or hormonal changes.\n\nCommon Symptoms:\n- Bone pain or tenderness\n- Frequent fractures\n- Weakness or fatigue\n- Poor posture or height loss\n- Dental issues\n- Difficulty with daily activities\n\nH2: Ayurvedic Healing Approach\n- Hadjod and Laksha for bone strength\n- Ashwagandha for nourishment\n- Calcium-rich, nourishing foods\n- Gentle exercise and weight-bearing activity\n- Abhyanga (oil massage) for comfort\n- Stress management and rest\n\nH2: Benefits of Ayurvedic Care\n- Improved bone density\n- Reduced pain and fracture risk\n- Enhanced energy and resilience\n- Natural support for bone health\n- Greater vitality and well-being\n\n🌿 Strengthen Your Structure, Naturally\nOsteoporosis and weak bones are your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your bone health and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default OsteoporosisWeakBones;
