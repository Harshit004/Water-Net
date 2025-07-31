import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const Palpitations = () => {
  const suggestedProducts = [
    {
      id: 'arjuna',
      name: 'Arjuna Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/arjuna-benefits-1.jpg',
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
    bannerContent: {
      title: 'Palpitations',
      breadcrumb: 'Heart & Circulatory Health',
      breadcrumbHref: '/consultations/heart-circulatory-health',
    },
    image: '/Sub Category/Heart & Circulatory Health/Palpitations.jpg',
    description: `Title: Palpitations — Calm Your Heart, Naturally\n\nPalpitations are sensations of a racing, pounding, or irregular heartbeat. Ayurveda views palpitations as a sign of aggravated Vata or Pitta dosha, often triggered by stress, anxiety, or lifestyle imbalances. Through calming herbs, mind-body practices, and heart-nourishing routines, Ayurveda helps restore natural heart rhythm and emotional balance.\n\nH1: Ayurvedic Perspective on Palpitations\nPalpitations are often linked to Vata (movement/air) or Pitta (fire) imbalances, which disturb the heart's rhythm and nervous system. Triggers include stress, caffeine, dehydration, emotional turmoil, or underlying health issues.\n\nCommon Symptoms:\n- Sensation of racing, pounding, or irregular heartbeat\n- Anxiety or restlessness\n- Chest discomfort or fluttering\n- Dizziness or lightheadedness\n- Shortness of breath\n- Fatigue or weakness\n\nH2: Ayurvedic Healing Approach\n- Arjuna for heart strength and rhythm\n- Brahmi and Jatamansi for calming the mind and nerves\n- Warm, nourishing foods and hydration\n- Mindful breathing and meditation\n- Limiting stimulants and stressors\n- Gentle exercise and regular routines\n\nH2: Benefits of Ayurvedic Care\n- Calmer, more regular heart rhythm\n- Reduced anxiety and emotional reactivity\n- Improved energy and vitality\n- Better sleep and relaxation\n- Enhanced cardiovascular resilience\n- Natural support for heart health\n\n🌿 Calm Your Heart, Naturally\nPalpitations are your body's way of asking for calm and balance. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your heart's rhythm and peace from the inside out. Book your session today for lasting heart wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default Palpitations;
