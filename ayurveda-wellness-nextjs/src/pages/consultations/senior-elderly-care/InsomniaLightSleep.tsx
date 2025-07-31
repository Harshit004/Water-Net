import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const InsomniaLightSleep = () => {
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
    subcategoryTitle: 'Insomnia & Light Sleep',
    categoryTitle: 'Senior & Elderly Care',
    categoryHref: '/consultations/senior-elderly-care',
    image: '/Sub Category/Senior & Elderly Care/Insomnia  Light Sleep.jpg',
    description: `Title: Insomnia & Light Sleep — Rest Deeply, Naturally\n\nInsomnia and light sleep are common in the elderly, affecting energy, mood, and health. Ayurveda sees sleep issues as a sign of aggravated Vata or Pitta dosha, depleted Ojas (vitality), and mind-body imbalance. Through calming and restorative herbs, dietary changes, and lifestyle practices, Ayurveda helps restore restful sleep and resilience.\n\nH1: Ayurvedic Perspective on Insomnia\nInsomnia is often linked to Vata (movement/air) or Pitta (fire) imbalances, which disturb mind-body harmony and energy. Triggers include aging, stress, anxiety, poor routines, or chronic illness.\n\nCommon Symptoms:\n- Difficulty falling or staying asleep\n- Light, unrefreshing sleep\n- Fatigue or low energy\n- Irritability or mood swings\n- Poor concentration\n- Restlessness or anxiety\n\nH2: Ayurvedic Healing Approach\n- Tagara and Brahmi for restful sleep\n- Jatamansi for nervous system support\n- Nourishing, grounding foods\n- Mindful breathing and meditation\n- Gentle exercise and relaxation\n- Regular routines and sleep\n\nH2: Benefits of Ayurvedic Care\n- Improved sleep quality\n- Reduced fatigue and irritability\n- Enhanced energy and resilience\n- Natural support for mind-body health\n- Greater vitality and well-being\n\n🌿 Rest Deeply, Naturally\nInsomnia is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your sleep and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    bannerContent: {
      title: 'Insomnia & Light Sleep',
      breadcrumb: 'Senior & Elderly Care',
      breadcrumbHref: '/consultations/senior-elderly-care',
    },
    meta: {
      title: 'Ayurvedic Insomnia & Sleep Solutions | BookMyAyurveda',
      description: 'Improve sleep quality naturally with Ayurveda. Personalized herbal care, lifestyle tips, and expert consultations for restful sleep.',
      keywords: 'Ayurveda, insomnia, sleep, elderly care, Vata, Pitta, Tagara, Brahmi, Jatamansi',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default InsomniaLightSleep;
