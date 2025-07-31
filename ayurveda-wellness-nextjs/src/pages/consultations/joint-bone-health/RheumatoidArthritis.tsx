import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const RheumatoidArthritis = () => {
  const suggestedProducts = [
    {
      id: 'guggulu',
      name: 'Guggulu Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/guggulu-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'maharasnadi',
      name: 'Maharasnadi Kwath',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/maharasnadi-benefits-1.jpg',
      price: '₹299 / 200ml',
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
      title: 'Rheumatoid Arthritis',
      breadcrumb: 'Joint & Bone Health',
      breadcrumbHref: '/consultations/joint-bone-health',
    },
    image: '/Sub Category/Joint & Bone Health/Rheumatoid Arthritis.jpg',
    description: `Title: Rheumatoid Arthritis — Soothe Inflammation, Naturally\n\nRheumatoid arthritis causes joint pain, swelling, and stiffness. Ayurveda sees rheumatoid arthritis as a sign of aggravated Vata and Ama (toxins), impaired Agni, and immune imbalance. Through anti-inflammatory herbs, detoxification, and lifestyle practices, Ayurveda helps restore joint comfort and immune balance.\n\nH1: Ayurvedic Perspective on Rheumatoid Arthritis\nRheumatoid arthritis is often linked to Vata (movement/air) imbalances and Ama (toxins), which disturb joint function and increase inflammation. Triggers include immune dysfunction, poor diet, stress, or chronic illness.\n\nCommon Symptoms:\n- Joint pain or swelling\n- Morning stiffness\n- Reduced mobility\n- Fatigue or weakness\n- Warmth or redness in joints\n- Difficulty with daily activities\n\nH2: Ayurvedic Healing Approach\n- Guggulu and Maharasnadi for joint support\n- Shallaki for inflammation\n- Detoxifying, nourishing foods\n- Gentle exercise and stretching\n- Abhyanga (oil massage) for comfort\n- Stress management and rest\n\nH2: Benefits of Ayurvedic Care\n- Reduced pain and swelling\n- Improved joint mobility\n- Enhanced energy and resilience\n- Natural support for joint health\n- Greater vitality and well-being\n\n🌿 Soothe Inflammation, Naturally\nRheumatoid arthritis is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your joint health and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default RheumatoidArthritis;
