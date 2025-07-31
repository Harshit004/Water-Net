import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const CardiacWeakness = () => {
  const suggestedProducts = [
    {
      id: 'arjuna',
      name: 'Arjuna Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/arjuna-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'guggulu',
      name: 'Guggulu Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/guggulu-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'punarnava',
      name: 'Punarnava Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/punarnava-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Cardiac Weakness',
      breadcrumb: 'Heart & Circulatory Health',
      breadcrumbHref: '/consultations/heart-circulatory-health',
    },
    image: '/Sub Category/Heart & Circulatory Health/High Blood Pressure.jpg',
    description: `Title: Cardiac Weakness — Strengthen Your Heart, Naturally\n\nCardiac weakness refers to reduced heart strength, stamina, or resilience. Ayurveda sees cardiac weakness as a sign of aggravated Vata or Kapha dosha, weak heart muscle, and poor circulation. Through heart-strengthening herbs, nourishing foods, and supportive routines, Ayurveda helps restore heart vitality and endurance.\n\nH1: Ayurvedic Perspective on Cardiac Weakness\nCardiac weakness is often linked to Vata (movement/air) or Kapha (water/earth) imbalances, which weaken the heart muscle and slow circulation. Triggers include chronic illness, poor diet, inactivity, or emotional stress.\n\nCommon Symptoms:\n- Fatigue or shortness of breath\n- Reduced exercise tolerance\n- Palpitations or irregular heartbeat\n- Swelling in legs or ankles\n- Dizziness or weakness\n- Poor recovery after exertion\n\nH2: Ayurvedic Healing Approach\n- Arjuna and Guggulu for heart strength\n- Punarnava for fluid balance and stamina\n- Nourishing, spiced foods and teas\n- Gentle exercise and movement\n- Abhyanga (oil massage) for circulation\n- Stress management and rest\n\nH2: Benefits of Ayurvedic Care\n- Improved heart strength and stamina\n- Reduced fatigue and swelling\n- Enhanced energy and recovery\n- Better cardiovascular resilience\n- Natural support for heart health\n- Greater vitality and endurance\n\n🌿 Strengthen Your Heart\nCardiac weakness is your body's way of asking for heart support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your heart's strength and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default CardiacWeakness;
