import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const IrregularPainfulPeriods = () => {
  const suggestedProducts = [
    {
      id: 'ashoka',
      name: 'Ashoka Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashoka-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'shatavari',
      name: 'Shatavari Capsules',
      imageUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
      price: '₹1,499',
    },
    {
      id: 'lodhra',
      name: 'Lodhra Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/lodhra-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'dashamoola',
      name: 'Dashamoola Powder',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/dashamoola-benefits-1.jpg',
      price: '₹349 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Irregular or Painful Periods',
      breadcrumb: "Women's Health",
      breadcrumbHref: '/consultations/womens-health',
    },
    image: '/Sub Category/Women\u2019s Health/Irregular or Painful Periods.jpg',
    description: `Title: When Your Periods Disrupt Your Life — Rebalance Naturally with Ayurveda\n\nUnpredictable cycles, painful cramps, mood swings, or missing periods aren't 'normal' — they're signs your body is out of sync. Find long-term relief through natural hormonal rhythm restoration.\n\nH1: Ayurvedic Perspective on Menstrual Irregularities\nMenstrual health is governed by the smooth flow of Apana Vata — the downward-moving energy responsible for elimination and reproduction. When Apana Vata is disturbed, it causes irregular timing, painful flow, or emotional imbalance. Ayurveda restores balance across your body, mind, and cycle by addressing the root doshic imbalances rather than just treating periods as a separate event.\n\nCommon Symptoms:\n- Irregular periods (missed, early, or delayed)\n- Painful cramps (dysmenorrhea)\n- Spotting between cycles\n- Clotting or inconsistent flow\n- Emotional swings before or during periods\n- Backache, nausea, or fatigue during menstruation\n- Difficulty predicting ovulation or fertility concerns\n\nH2: Ayurvedic Healing Approach\n- Gentle digestive cleanse (Shodhana) for irregular periods\n- Basti (herbal enema) and Abhyanga (oil massage) for pain relief\n- Ashoka, Shatavari, Lodhra, and Dashamoola for hormone regulation\n- Classical formulations like Ashokarishta or Kumaryasava\n- Nagkesar, Amalaki, and Chandan for heavy flow management\n- Brahmi, Jatamansi, and Ashwagandha for mood balance\n\nH2: Benefits of Ayurvedic Care\n- Regular, predictable menstrual cycles\n- Significant reduction in menstrual pain and cramping\n- Balanced mood and emotional stability\n- Improved energy levels throughout the cycle\n- Better hormonal communication and flow\n- Enhanced overall reproductive health\n\n🌿 Restore Your Cycle, Restore Your Life\nIrregular or painful periods are your body's way of asking for deeper balance. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your cycle and well-being from the inside out. Book your session today for lasting relief and harmony.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default IrregularPainfulPeriods;
