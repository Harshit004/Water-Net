import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const Osteoarthritis = () => {
  const suggestedProducts = [
    {
      id: 'shallaki',
      name: 'Shallaki Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/shallaki-benefits-1.jpg',
      price: '₹299 / 100g',
    },
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
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Osteoarthritis',
      breadcrumb: 'Joint & Bone Health',
      breadcrumbHref: '/consultations/joint-bone-health',
    },
    image: '/Sub Category/Joint & Bone Health/Osteoarthritis.jpg',
    description: `Title: Osteoarthritis — Soothe Your Joints, Naturally\n\nOsteoarthritis causes joint pain, stiffness, and reduced mobility. Ayurveda sees osteoarthritis as a sign of aggravated Vata or Kapha dosha, impaired Agni, and degeneration of joint tissue. Through anti-inflammatory herbs, dietary changes, and lifestyle practices, Ayurveda helps restore joint comfort and function.\n\nH1: Ayurvedic Perspective on Osteoarthritis\nOsteoarthritis is often linked to Vata (movement/air) or Kapha (water/earth) imbalances, which disturb joint lubrication and increase degeneration. Triggers include aging, injury, overuse, or poor diet.\n\nCommon Symptoms:\n- Joint pain or stiffness\n- Swelling or crepitus\n- Reduced mobility\n- Morning discomfort\n- Fatigue or weakness\n- Difficulty with daily activities\n\nH2: Ayurvedic Healing Approach\n- Shallaki and Maharasnadi for joint support\n- Yograj Guggulu for inflammation\n- Warm, nourishing foods and teas\n- Gentle exercise and stretching\n- Abhyanga (oil massage) for comfort\n- Stress management and rest\n\nH2: Benefits of Ayurvedic Care\n- Reduced pain and swelling\n- Improved joint mobility\n- Enhanced energy and resilience\n- Natural support for joint health\n- Greater vitality and well-being\n\n🌿 Soothe Your Joints, Naturally\nOsteoarthritis is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your joint health and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default Osteoarthritis;
