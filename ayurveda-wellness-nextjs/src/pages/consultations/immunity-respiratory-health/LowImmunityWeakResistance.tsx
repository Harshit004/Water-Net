import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const LowImmunityWeakResistance = () => {
  const suggestedProducts = [
    {
      id: 'amla',
      name: 'Amla Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/amla-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'giloy',
      name: 'Giloy Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/giloy-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'chawanprash',
      name: 'Chyawanprash',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/chyawanprash-benefits-1.jpg',
      price: '₹349 / 500g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Low Immunity & Weak Resistance',
      breadcrumb: 'Immunity & Respiratory Health',
      breadcrumbHref: '/consultations/immunity-respiratory-health',
    },
    image: '/Sub Category/Immunity & Respiratory Health/Low Immunity.jpg',
    description: `Title: Low Immunity & Weak Resistance — Build Your Defenses, Naturally\n\nLow immunity and weak resistance make you prone to frequent infections and slow recovery. Ayurveda sees these as signs of aggravated Vata, Kapha, or Pitta dosha, depleted Ojas (vitality), and impaired Agni. Through immune-boosting herbs, nourishing foods, and lifestyle practices, Ayurveda helps restore natural resistance and vitality.\n\nH1: Ayurvedic Perspective on Low Immunity\nLow immunity is often linked to Vata (movement/air), Kapha (water/earth), or Pitta (fire) imbalances, which weaken immune function and resilience. Triggers include poor diet, stress, lack of sleep, or chronic illness.\n\nCommon Symptoms:\n- Frequent infections\n- Slow recovery\n- Fatigue or low energy\n- Poor wound healing\n- Allergies or sensitivities\n- Weakness or malaise\n\nH2: Ayurvedic Healing Approach\n- Amla and Giloy for immune support\n- Chyawanprash for vitality\n- Nourishing, grounding foods\n- Restorative sleep and relaxation\n- Mindful breathing and meditation\n- Regular exercise and routines\n\nH2: Benefits of Ayurvedic Care\n- Fewer infections and faster recovery\n- Improved immune resilience\n- Enhanced energy and vitality\n- Natural support for immune health\n- Greater well-being and resilience\n\n🌿 Build Your Defenses\nLow immunity is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your immunity and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default LowImmunityWeakResistance;
