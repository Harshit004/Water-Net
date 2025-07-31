import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const JointPainStiffness = () => {
  const suggestedProducts = [
    {
      id: 'maharasnadi',
      name: 'Maharasnadi Kwath',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/maharasnadi-benefits-1.jpg',
      price: '₹299 / 200ml',
    },
    {
      id: 'yograj-guggulu',
      name: 'Yograj Guggulu Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/guggulu-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'shallaki',
      name: 'Shallaki Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/shallaki-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Joint Pain & Stiffness',
      breadcrumb: 'Joint & Bone Health',
      breadcrumbHref: '/consultations/joint-bone-health',
    },
    image: "/Sub Category/Joint & Bone Health/Joint Pain  Stiffness.jpg",
    description: `Title: Joint Pain & Stiffness — Move with Ease, Naturally\n\nJoint pain and stiffness limit mobility and comfort. Ayurveda sees these as signs of aggravated Vata, Pitta, or Kapha dosha, impaired Agni, and toxin (Ama) buildup. Through anti-inflammatory herbs, dietary changes, and lifestyle practices, Ayurveda helps restore joint flexibility and comfort.\n\nH1: Ayurvedic Perspective on Joint Pain & Stiffness\nJoint pain is often linked to Vata (movement/air), Pitta (fire), or Kapha (water/earth) imbalances, which disturb joint function and increase inflammation. Triggers include aging, injury, poor diet, or chronic stress.\n\nCommon Symptoms:\n- Joint pain or stiffness\n- Swelling or redness\n- Reduced mobility\n- Morning discomfort\n- Fatigue or weakness\n- Difficulty with daily activities\n\nH2: Ayurvedic Healing Approach\n- Maharasnadi and Yograj Guggulu for joint support\n- Shallaki for inflammation\n- Warm, nourishing foods and teas\n- Gentle exercise and stretching\n- Abhyanga (oil massage) for comfort\n- Stress management and rest\n\nH2: Benefits of Ayurvedic Care\n- Reduced pain and swelling\n- Improved joint mobility\n- Enhanced energy and resilience\n- Natural support for joint health\n- Greater vitality and well-being\n\n🌿 Move with Ease, Naturally\nJoint pain and stiffness are your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your joint health and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default JointPainStiffness;
