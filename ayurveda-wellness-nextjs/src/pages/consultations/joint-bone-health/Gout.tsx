import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const Gout = () => {
  const suggestedProducts = [
    {
      id: 'guggulu',
      name: 'Guggulu Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/guggulu-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'punarnava',
      name: 'Punarnava Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/punarnava-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'giloy',
      name: 'Giloy Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/giloy-benefits-1.jpg',
      price: '₹249 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Gout',
      breadcrumb: 'Joint & Bone Health',
      breadcrumbHref: '/consultations/joint-bone-health',
    },
    image: '/Sub Category/Joint & Bone Health/Gout.jpg',
    description: `Title: Gout — Soothe Flare-Ups, Naturally\n\nGout causes sudden, severe joint pain and swelling, often in the big toe. Ayurveda sees gout as a sign of aggravated Pitta and Vata dosha, impaired Agni, and uric acid buildup. Through anti-inflammatory herbs, detoxification, and lifestyle practices, Ayurveda helps restore comfort and prevent flare-ups.\n\nH1: Ayurvedic Perspective on Gout\nGout is often linked to Pitta (fire) and Vata (movement/air) imbalances, which disturb joint function and increase inflammation. Triggers include rich foods, alcohol, dehydration, or stress.\n\nCommon Symptoms:\n- Sudden joint pain or swelling\n- Redness or warmth\n- Reduced mobility\n- Tenderness to touch\n- Fatigue or malaise\n- Difficulty with daily activities\n\nH2: Ayurvedic Healing Approach\n- Guggulu and Punarnava for joint support\n- Giloy for detoxification\n- Cooling, nourishing foods\n- Adequate hydration\n- Gentle exercise and stretching\n- Stress management and rest\n\nH2: Benefits of Ayurvedic Care\n- Reduced pain and swelling\n- Improved joint mobility\n- Enhanced energy and resilience\n- Natural support for joint health\n- Greater vitality and well-being\n\n🌿 Soothe Flare-Ups, Naturally\nGout is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your comfort and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default Gout;
