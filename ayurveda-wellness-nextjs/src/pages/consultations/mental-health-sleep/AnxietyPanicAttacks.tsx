import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const AnxietyPanicAttacks = () => {
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
    subcategoryTitle: 'Anxiety & Panic Attacks',
    categoryTitle: 'Mental Health & Sleep',
    categoryHref: '/consultations/mental-health-sleep',
    image: '/Sub Category/Mental Health & Sleep/Anxiety & Panic Attacks.jpg',
    description: `Title: Anxiety & Panic Attacks — Find Calm, Naturally\n\nAnxiety and panic attacks affect mind, body, and relationships. Ayurveda sees anxiety as a sign of aggravated Vata or Pitta dosha, depleted Ojas (vitality), and nervous system imbalance. Through adaptogenic and calming herbs, dietary changes, and lifestyle practices, Ayurveda helps restore calm and resilience.\n\nH1: Ayurvedic Perspective on Anxiety\nAnxiety is often linked to Vata (movement/air) or Pitta (fire) imbalances, which disturb mind-body harmony and energy. Triggers include overwork, emotional strain, poor sleep, or chronic illness.\n\nCommon Symptoms:\n- Anxiety or restlessness\n- Irritability or anger\n- Fatigue or low energy\n- Sleep disturbances\n- Poor concentration\n- Muscle tension\n\nH2: Ayurvedic Healing Approach\n- Brahmi and Ashwagandha for calm and resilience\n- Jatamansi for nervous system support\n- Nourishing, grounding foods\n- Mindful breathing and meditation\n- Gentle exercise and relaxation\n- Regular routines and sleep\n\nH2: Benefits of Ayurvedic Care\n- Improved calm and focus\n- Reduced anxiety and irritability\n- Enhanced energy and resilience\n- Natural support for mind-body health\n- Greater vitality and well-being\n\n🌿 Find Calm, Naturally\nAnxiety is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your calm and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    bannerContent: {
      title: 'Anxiety & Panic Attacks',
      breadcrumb: 'Mental Health & Sleep',
      breadcrumbHref: '/consultations/mental-health-sleep',
    },
    meta: {
      title: 'Ayurvedic Anxiety & Panic Attack Relief | BookMyAyurveda',
      description: 'Discover natural Ayurvedic solutions for anxiety and panic attacks. Personalized herbal protocols, lifestyle guidance, and expert consultations for calm and resilience.',
      keywords: 'Ayurveda, anxiety, panic attacks, stress relief, herbal remedies, mental health, Vata, Pitta, Ojas, Brahmi, Ashwagandha, Jatamansi',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default AnxietyPanicAttacks;
