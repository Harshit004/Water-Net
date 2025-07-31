import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const SportsInjuriesRecovery = () => {
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
      id: 'maharasnadi',
      name: 'Maharasnadi Kwath',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/maharasnadi-benefits-1.jpg',
      price: '₹299 / 200ml',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Sports Injuries & Recovery',
      breadcrumb: 'Joint & Bone Health',
      breadcrumbHref: '/consultations/joint-bone-health',
    },
    image: "/Sub Category/Joint & Bone Health/Sports Injuries  Recovery.jpg",
    description: `Title: Sports Injuries & Recovery — Heal & Rebuild, Naturally\n\nSports injuries cause pain, swelling, and limited mobility. Ayurveda sees sports injuries as a sign of aggravated Vata or Pitta dosha, tissue damage, and impaired Agni. Through healing herbs, nourishing foods, and restorative practices, Ayurveda helps restore tissue repair and resilience.\n\nH1: Ayurvedic Perspective on Sports Injuries\nSports injuries are often linked to Vata (movement/air) or Pitta (fire) imbalances, which disturb tissue repair and increase inflammation. Triggers include trauma, overuse, poor recovery, or nutritional deficiencies.\n\nCommon Symptoms:\n- Pain or swelling\n- Reduced mobility\n- Bruising or tenderness\n- Weakness or instability\n- Slow recovery\n- Difficulty with activity\n\nH2: Ayurvedic Healing Approach\n- Ashwagandha and Bala for tissue repair\n- Maharasnadi for joint and muscle support\n- Protein-rich, nourishing foods\n- Gentle movement and stretching\n- Abhyanga (oil massage) for comfort\n- Restorative sleep and routines\n\nH2: Benefits of Ayurvedic Care\n- Faster healing and recovery\n- Reduced pain and swelling\n- Improved mobility and strength\n- Natural support for tissue health\n- Greater vitality and well-being\n\n🌿 Heal & Rebuild, Naturally\nSports injuries are your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your tissue health and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default SportsInjuriesRecovery;
