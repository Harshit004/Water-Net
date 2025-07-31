import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const JointDegeneration = () => {
  const suggestedProducts = [
    {
      id: 'shallaki',
      name: 'Shallaki Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/shallaki-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'guggulu',
      name: 'Guggulu Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/guggulu-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'ashwagandha',
      name: 'Ashwagandha Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashwagandha-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Joint Degeneration',
      breadcrumb: 'Senior & Elderly Care',
      breadcrumbHref: '/consultations/senior-elderly-care',
    },
    image: "/Sub Category/Senior & Elderly Care/Joint Degeneration.jpg",
    description: `Title: Joint Degeneration — Support Mobility, Naturally\n\nJoint degeneration is common in the elderly, affecting mobility, comfort, and independence. Ayurveda sees joint degeneration as a sign of aggravated Vata or Kapha dosha, depleted Ojas (vitality), and tissue weakness. Through joint-supportive herbs, dietary changes, and lifestyle practices, Ayurveda helps restore joint health and resilience.\n\nH1: Ayurvedic Perspective on Joint Degeneration\nJoint degeneration is often linked to Vata (movement/air) or Kapha (water/earth) imbalances, which disturb tissue function and increase degeneration. Triggers include aging, poor diet, inactivity, or chronic illness.\n\nCommon Symptoms:\n- Joint pain or stiffness\n- Reduced mobility\n- Swelling or discomfort\n- Fatigue or weakness\n- Difficulty with daily activities\n- Loss of independence\n\nH2: Ayurvedic Healing Approach\n- Shallaki and Guggulu for joint support\n- Ashwagandha for tissue strength\n- Nourishing, anti-inflammatory foods\n- Gentle exercise and movement\n- Mindful rest and routines\n- Stress management and sleep\n\nH2: Benefits of Ayurvedic Care\n- Improved joint comfort and mobility\n- Enhanced energy and resilience\n- Natural support for joint health\n- Greater vitality and well-being\n\n🌿 Support Mobility, Naturally\nJoint degeneration is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your joint health and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default JointDegeneration;
