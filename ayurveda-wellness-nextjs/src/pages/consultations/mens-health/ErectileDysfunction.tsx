import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const ErectileDysfunction = () => {
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
      title: 'Erectile Dysfunction',
      breadcrumb: "Men's Health",
      breadcrumbHref: '/consultations/mens-health',
    },
    image: '/Sub Category/Men\u2019s Health/Erectile Dysfunction.jpg',
    description: `Title: Erectile Dysfunction — Restore Confidence, Naturally\n\nErectile dysfunction affects intimacy, confidence, and relationships. Ayurveda sees erectile dysfunction as a sign of aggravated Vata or Pitta dosha, depleted Shukra Dhatu (reproductive tissue), and stress. Through aphrodisiac and rejuvenative herbs, dietary changes, and lifestyle practices, Ayurveda helps restore erectile function and confidence.\n\nH1: Ayurvedic Perspective on Erectile Dysfunction\nErectile dysfunction is often linked to Vata (movement/air) or Pitta (fire) imbalances, which disturb blood flow and reproductive function. Triggers include stress, poor diet, anxiety, or chronic illness.\n\nCommon Symptoms:\n- Difficulty achieving or maintaining erection\n- Reduced libido\n- Anxiety or distress\n- Low confidence\n- Relationship concerns\n- Fatigue or weakness\n\nH2: Ayurvedic Healing Approach\n- Ashwagandha and Shilajit for stamina\n- Kapikacchu for reproductive health\n- Nourishing, protein-rich foods\n- Mindful breathing and relaxation\n- Stress management and rest\n- Regular routines and sleep\n\nH2: Benefits of Ayurvedic Care\n- Improved erectile function and stamina\n- Reduced anxiety and distress\n- Enhanced confidence and satisfaction\n- Natural support for reproductive health\n- Greater vitality and well-being\n\n🌿 Restore Confidence, Naturally\nErectile dysfunction is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your confidence and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default ErectileDysfunction;
