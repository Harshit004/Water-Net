import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const PoorCirculation = () => {
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
      id: 'trikatu',
      name: 'Trikatu (Ginger, Black Pepper, Long Pepper)',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/trikatu-benefits-1.jpg',
      price: '₹249 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Poor Circulation',
      breadcrumb: 'Heart & Circulatory Health',
      breadcrumbHref: '/consultations/heart-circulatory-health',
    },
    image: '/Sub Category/Heart & Circulatory Health/Poor Circulation.jpg',
    description: `Title: Poor Circulation — Restore Flow, Restore Vitality\n\nPoor circulation can cause cold extremities, numbness, swelling, and fatigue. Ayurveda sees poor circulation as a sign of aggravated Vata or Kapha dosha, sluggish Agni, and toxin (Ama) buildup. Through circulation-boosting herbs, warming foods, and lifestyle practices, Ayurveda helps restore healthy blood flow and energy.\n\nH1: Ayurvedic Perspective on Poor Circulation\nPoor circulation is often linked to Vata (movement/air) or Kapha (water/earth) imbalances, which slow blood flow and cause stagnation. Triggers include inactivity, cold exposure, poor diet, or underlying health issues.\n\nCommon Symptoms:\n- Cold hands and feet\n- Numbness or tingling\n- Swelling in extremities\n- Fatigue or heaviness\n- Slow wound healing\n- Varicose veins\n\nH2: Ayurvedic Healing Approach\n- Arjuna and Guggulu for vascular support\n- Trikatu for stimulating circulation\n- Warming, spiced foods and teas\n- Regular exercise and movement\n- Abhyanga (oil massage) for blood flow\n- Avoiding cold, heavy, or processed foods\n\nH2: Benefits of Ayurvedic Care\n- Improved blood flow and warmth\n- Reduced swelling and numbness\n- Enhanced energy and vitality\n- Faster healing and recovery\n- Better cardiovascular resilience\n- Natural support for healthy circulation\n\n🌿 Restore Your Flow\nPoor circulation is your body's way of asking for movement and warmth. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your circulation and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default PoorCirculation;
