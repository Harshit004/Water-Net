import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const SleepDisordersInsomnia = () => {
  const suggestedProducts = [
    {
      id: 'tagara',
      name: 'Tagara Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/tagara-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'brahmi',
      name: 'Brahmi Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/brahmi-benefits-1.jpg',
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
    subcategoryTitle: 'Sleep Disorders & Insomnia',
    categoryTitle: 'Mental Health & Sleep',
    categoryHref: '/consultations/mental-health-sleep',
    image: '/Sub Category/Mental Health & Sleep/Sleep Disorders  Insomnia.jpg',
    description: `Title: Sleep Disorders & Insomnia — Rest Deeply, Naturally\n\nSleep disorders and insomnia affect energy, mood, and health. Ayurveda sees sleep issues as a sign of aggravated Vata or Pitta dosha, depleted Ojas (vitality), and mind-body imbalance. Through calming and restorative herbs, dietary changes, and lifestyle practices, Ayurveda helps restore restful sleep and resilience.\n\nH1: Ayurvedic Perspective on Sleep Disorders\nSleep disorders are often linked to Vata (movement/air) or Pitta (fire) imbalances, which disturb mind-body harmony and energy. Triggers include stress, anxiety, poor routines, or chronic illness.\n\nCommon Symptoms:\n- Difficulty falling or staying asleep\n- Fatigue or low energy\n- Irritability or mood swings\n- Poor concentration\n- Restlessness or anxiety\n- Reduced productivity\n\nH2: Ayurvedic Healing Approach\n- Tagara and Brahmi for restful sleep\n- Jatamansi for nervous system support\n- Nourishing, grounding foods\n- Mindful breathing and meditation\n- Gentle exercise and relaxation\n- Regular routines and sleep\n\nH2: Benefits of Ayurvedic Care\n- Improved sleep quality\n- Reduced fatigue and irritability\n- Enhanced energy and resilience\n- Natural support for mind-body health\n- Greater vitality and well-being\n\n🌿 Rest Deeply, Naturally\nSleep disorders are your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your sleep and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    bannerContent: {
      title: 'Sleep Disorders & Insomnia',
      breadcrumb: 'Mental Health & Sleep',
      breadcrumbHref: '/consultations/mental-health-sleep',
    },
    meta: {
      title: 'Ayurvedic Sleep Disorder & Insomnia Help | BookMyAyurveda',
      description: 'Ayurvedic solutions for sleep disorders and insomnia. Herbal remedies, lifestyle changes, and expert consultations for restful, natural sleep.',
      keywords: 'Ayurveda, sleep disorders, insomnia, restful sleep, Vata, Pitta, Ojas, Tagara, Brahmi, Jatamansi',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default SleepDisordersInsomnia;
