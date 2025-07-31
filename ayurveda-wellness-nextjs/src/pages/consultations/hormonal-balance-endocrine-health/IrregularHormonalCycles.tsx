import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const IrregularHormonalCycles = () => {
  const suggestedProducts = [
    {
      id: 'shatavari',
      name: 'Shatavari Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/shatavari-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'ashoka',
      name: 'Ashoka Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashoka-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'lodhra',
      name: 'Lodhra Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/lodhra-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    subcategoryTitle: 'Irregular Hormonal Cycles',
    categoryTitle: 'Hormonal Balance & Endocrine Health',
    categoryHref: '/consultations/hormonal-balance-endocrine-health',
    image: '/Sub Category/Hormonal Balance & Endocrine Health/Irregular Hormonal Cycles.jpg',
    description: `Title: Irregular Hormonal Cycles — Restore Rhythm, Restore Balance\n\nIrregular hormonal cycles affect mood, energy, and reproductive health. Ayurveda sees irregular cycles as a sign of aggravated Vata, Pitta, or Kapha dosha, impaired Agni, and hormonal imbalance. Through cycle-regulating herbs, dietary changes, and lifestyle practices, Ayurveda helps restore healthy hormonal rhythm and well-being.\n\nH1: Ayurvedic Perspective on Irregular Cycles\nIrregular cycles are often linked to Vata (movement/air), Pitta (fire), or Kapha (water/earth) imbalances, which disrupt hormonal signals and reproductive function. Triggers include stress, poor diet, toxins, or underlying health issues.\n\nCommon Symptoms:\n- Irregular or missed periods\n- Mood swings or irritability\n- Fatigue or low energy\n- Cramps or discomfort\n- Skin changes or acne\n- Weight fluctuations\n\nH2: Ayurvedic Healing Approach\n- Shatavari and Ashoka for hormonal balance\n- Lodhra for uterine health\n- Nourishing, grounding foods\n- Mindful movement and relaxation\n- Stress management and rest\n- Regular routines and sleep\n\nH2: Benefits of Ayurvedic Care\n- Improved cycle regularity\n- Reduced symptoms and discomfort\n- Enhanced mood and energy\n- Better reproductive resilience\n- Natural support for hormonal health\n- Greater vitality and well-being\n\n🌿 Restore Your Rhythm\nIrregular cycles are your body's way of asking for balance. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your hormonal rhythm and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    bannerContent: {
      title: 'Irregular Hormonal Cycles',
      breadcrumb: 'Hormonal Balance & Endocrine Health',
      breadcrumbHref: '/consultations/hormonal-balance-endocrine-health',
    },
    meta: {
      title: 'Ayurvedic Irregular Cycle Solutions | BookMyAyurveda',
      description: 'Ayurvedic care for irregular hormonal cycles. Restore rhythm and balance with expert consultations, herbal remedies, and lifestyle guidance.',
      keywords: 'Ayurveda, irregular cycles, hormonal balance, Vata, Pitta, Kapha, Shatavari, Ashoka, Lodhra',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default IrregularHormonalCycles;
