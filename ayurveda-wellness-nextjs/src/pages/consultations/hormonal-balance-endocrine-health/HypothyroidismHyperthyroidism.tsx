import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const HypothyroidismHyperthyroidism = () => {
  const suggestedProducts = [
    {
      id: 'kanchanar-guggulu',
      name: 'Kanchanar Guggulu Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/kanchanar-guggulu-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'ashwagandha',
      name: 'Ashwagandha Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashwagandha-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'triphala',
      name: 'Triphala Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/triphala-benefits-1.jpg',
      price: '₹249 / 100g',
    },
  ];

  const subcategoryData = {
    subcategoryTitle: 'Hypothyroidism & Hyperthyroidism',
    categoryTitle: 'Hormonal Balance & Endocrine Health',
    categoryHref: '/consultations/hormonal-balance-endocrine-health',
    image: '/Sub Category/Hormonal Balance & Endocrine Health/Hypothyroidism  Hyperthyroidism.jpg',
    description: `Title: Hypothyroidism & Hyperthyroidism — Restore Thyroid Balance, Naturally\n\nThyroid imbalances affect metabolism, energy, and mood. Ayurveda sees hypothyroidism and hyperthyroidism as signs of aggravated Kapha, Vata, or Pitta dosha, impaired Agni, and toxin (Ama) buildup. Through thyroid-supportive herbs, dietary changes, and lifestyle practices, Ayurveda helps restore healthy thyroid function and hormonal balance.\n\nH1: Ayurvedic Perspective on Thyroid Imbalance\nThyroid disorders are often linked to Kapha (water/earth), Vata (air/space), or Pitta (fire) imbalances, which disrupt metabolism and hormone production. Triggers include stress, poor diet, toxins, or genetic factors.\n\nCommon Symptoms:\n- Fatigue or sluggishness (hypothyroid)\n- Weight gain or loss\n- Mood swings or anxiety\n- Hair loss or dry skin\n- Irregular cycles\n- Sensitivity to cold or heat\n\nH2: Ayurvedic Healing Approach\n- Kanchanar Guggulu for thyroid support\n- Ashwagandha for stress and hormone balance\n- Triphala for detoxification\n- Warming, spiced foods and teas\n- Regular exercise and movement\n- Stress management and rest\n\nH2: Benefits of Ayurvedic Care\n- Improved thyroid function\n- Balanced metabolism and energy\n- Reduced symptoms and discomfort\n- Enhanced mood and resilience\n- Natural support for hormonal health\n- Greater vitality and well-being\n\n🌿 Restore Your Thyroid Balance\nThyroid imbalances are your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your thyroid health and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    bannerContent: {
      title: 'Hypothyroidism & Hyperthyroidism',
      breadcrumb: 'Hormonal Balance & Endocrine Health',
      breadcrumbHref: '/consultations/hormonal-balance-endocrine-health',
    },
    meta: {
      title: 'Ayurvedic Thyroid Health Solutions | BookMyAyurveda',
      description: 'Ayurvedic support for hypothyroidism and hyperthyroidism. Restore thyroid balance, energy, and mood with expert consultations and herbal care.',
      keywords: 'Ayurveda, thyroid, hypothyroidism, hyperthyroidism, Kapha, Vata, Pitta, Kanchanar Guggulu, Ashwagandha, Triphala',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default HypothyroidismHyperthyroidism;
