import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const LowTestosterone = () => {
  const suggestedProducts = [
    {
      id: 'ashwagandha',
      name: 'Ashwagandha Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashwagandha-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'shilajit',
      name: 'Shilajit Resin',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/shilajit-benefits-1.jpg',
      price: '₹499 / 20g',
    },
    {
      id: 'kapikacchu',
      name: 'Kapikacchu Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/kapikacchu-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Low Testosterone',
      breadcrumb: "Men's Health",
      breadcrumbHref: '/consultations/mens-health',
    },
    image: '/Sub Category/Men\u2019s Health/Low Testosterone  Energy.jpg',
    description: `Title: Low Testosterone — Restore Vitality, Naturally\n\nLow testosterone affects energy, mood, and reproductive health. Ayurveda sees low testosterone as a sign of aggravated Vata or Kapha dosha, depleted Shukra Dhatu (reproductive tissue), and stress. Through aphrodisiac and rejuvenative herbs, dietary changes, and lifestyle practices, Ayurveda helps restore hormonal balance and vitality.\n\nH1: Ayurvedic Perspective on Low Testosterone\nLow testosterone is often linked to Vata (movement/air) or Kapha (water/earth) imbalances, which disturb hormone production and reproductive function. Triggers include aging, stress, poor diet, or chronic illness.\n\nCommon Symptoms:\n- Low energy or stamina\n- Reduced libido\n- Mood changes or irritability\n- Poor muscle mass\n- Fatigue or weakness\n- Difficulty with daily activities\n\nH2: Ayurvedic Healing Approach\n- Ashwagandha and Shilajit for hormonal support\n- Kapikacchu for reproductive health\n- Nourishing, protein-rich foods\n- Mindful movement and exercise\n- Stress management and rest\n- Regular routines and sleep\n\nH2: Benefits of Ayurvedic Care\n- Improved energy and stamina\n- Enhanced libido and mood\n- Natural support for hormonal health\n- Greater vitality and well-being\n\n🌿 Restore Vitality, Naturally\nLow testosterone is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your hormonal health and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default LowTestosterone;
