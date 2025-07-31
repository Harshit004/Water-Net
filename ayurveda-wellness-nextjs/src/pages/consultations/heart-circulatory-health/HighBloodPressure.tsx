import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const HighBloodPressure = () => {
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
      title: 'High Blood Pressure',
      breadcrumb: 'Heart & Circulatory Health',
      breadcrumbHref: '/consultations/heart-circulatory-health',
    },
    image: '/Sub Category/Heart & Circulatory Health/High Blood Pressure.jpg',
    description: `Title: High Blood Pressure — Balance Your Pressure, Balance Your Life\n\nHigh blood pressure (hypertension) is a common cardiovascular concern. Ayurveda sees high blood pressure as a sign of aggravated Vata or Pitta dosha, stress, and lifestyle imbalances. Through blood pressure-regulating herbs, calming routines, and dietary changes, Ayurveda helps restore healthy pressure and heart function.\n\nH1: Ayurvedic Perspective on High Blood Pressure\nHigh blood pressure is often linked to Vata (movement/air) or Pitta (fire) imbalances, which disturb the heart's rhythm and blood vessel tone. Triggers include stress, poor diet, inactivity, or underlying health issues.\n\nCommon Symptoms:\n- Elevated blood pressure readings\n- Headaches or dizziness\n- Chest discomfort or palpitations\n- Fatigue or restlessness\n- Shortness of breath\n- Anxiety or irritability\n\nH2: Ayurvedic Healing Approach\n- Arjuna for heart strength and blood pressure regulation\n- Brahmi and Jatamansi for calming the mind and nerves\n- Warming, spiced foods and teas\n- Mindful breathing and meditation\n- Limiting salt, stimulants, and stressors\n- Gentle exercise and regular routines\n\nH2: Benefits of Ayurvedic Care\n- Balanced blood pressure readings\n- Reduced anxiety and emotional reactivity\n- Improved energy and vitality\n- Better sleep and relaxation\n- Enhanced cardiovascular resilience\n- Natural support for heart health\n\n🌿 Balance Your Pressure, Balance Your Life\nHigh blood pressure is your body's way of asking for calm and balance. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your blood pressure and heart health from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default HighBloodPressure;
