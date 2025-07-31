import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const Depression = () => {
  const suggestedProducts = [
    {
      id: 'brahmi',
      name: 'Brahmi Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/brahmi-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'ashwagandha',
      name: 'Ashwagandha Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashwagandha-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'jatamansi',
      name: 'Jatamansi Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/jatamansi-benefits-1.jpg',
      price: '₹349 / 100g',
    },
  ];

  const subcategoryData = {
    subcategoryTitle: 'Depression',
    categoryTitle: 'Mental Health & Sleep',
    categoryHref: '/consultations/mental-health-sleep',
    image: '/Sub Category/Mental Health & Sleep/Depression (mild to moderate).jpg',
    description: `Title: Depression — Uplift Your Mind, Naturally\n\nDepression affects mood, motivation, and daily life. Ayurveda sees depression as a sign of aggravated Vata or Kapha dosha, depleted Ojas (vitality), and mind-body imbalance. Through adaptogenic and uplifting herbs, dietary changes, and lifestyle practices, Ayurveda helps restore emotional balance and resilience.\n\nH1: Ayurvedic Perspective on Depression\nDepression is often linked to Vata (movement/air) or Kapha (water/earth) imbalances, which disturb mind-body harmony and energy. Triggers include stress, trauma, poor sleep, or chronic illness.\n\nCommon Symptoms:\n- Low mood or sadness\n- Loss of interest or motivation\n- Fatigue or low energy\n- Sleep disturbances\n- Poor concentration\n- Feelings of hopelessness\n\nH2: Ayurvedic Healing Approach\n- Brahmi and Ashwagandha for mood and resilience\n- Jatamansi for nervous system support\n- Nourishing, grounding foods\n- Mindful breathing and meditation\n- Gentle exercise and relaxation\n- Regular routines and sleep\n\nH2: Benefits of Ayurvedic Care\n- Improved mood and motivation\n- Reduced sadness and fatigue\n- Enhanced energy and resilience\n- Natural support for mind-body health\n- Greater vitality and well-being\n\n🌿 Uplift Your Mind, Naturally\nDepression is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your emotional health and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    bannerContent: {
      title: 'Depression',
      breadcrumb: 'Mental Health & Sleep',
      breadcrumbHref: '/consultations/mental-health-sleep',
    },
    meta: {
      title: 'Ayurvedic Depression Support & Remedies | BookMyAyurveda',
      description: 'Ayurvedic care for depression: herbal remedies, lifestyle changes, and expert consultations. Restore emotional balance and vitality naturally.',
      keywords: 'Ayurveda, depression, mood, emotional health, Vata, Kapha, Ojas, Brahmi, Ashwagandha, Jatamansi',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default Depression;
