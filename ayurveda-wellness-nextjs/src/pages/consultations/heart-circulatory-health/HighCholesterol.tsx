import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const HighCholesterol = () => {
  const suggestedProducts = [
    {
      id: 'guggulu',
      name: 'Guggulu Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/guggulu-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'arjuna',
      name: 'Arjuna Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/arjuna-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'triphala',
      name: 'Triphala (Amalaki, Haritaki, Bibhitaki)',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/triphala-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    subcategoryTitle: 'High Cholesterol',
    categoryTitle: 'Heart & Circulatory Health',
    categoryHref: '/consultations/heart-circulatory-health',
    image: '/Sub Category/Heart & Circulatory Health/High Cholesterol.jpg',
    description: `Title: High Cholesterol — Natural Lipid Management with Ayurveda\n\nHigh cholesterol is a sign of disturbed fat metabolism, primarily involving Kapha dosha accumulation and weakened Agni (digestive fire). When metabolism is sluggish, lipids accumulate in circulation and tissues. Ayurveda focuses on improving metabolism, reducing Kapha, and supporting healthy lipid processing.\n\nH1: Ayurvedic Perspective on High Cholesterol\nHigh cholesterol indicates disturbed fat metabolism, primarily involving Kapha dosha accumulation and weakened Agni (digestive fire). When metabolism is sluggish, lipids accumulate in circulation and tissues. Treatment focuses on improving metabolism, reducing Kapha, and supporting healthy lipid processing.\n\nCommon Symptoms:\n- Elevated cholesterol levels in blood tests\n- Chest discomfort or pain\n- Fatigue and low energy\n- Poor circulation symptoms\n- Risk of heart disease\n- Family history of cardiovascular issues\n\nH2: Ayurvedic Healing Approach\n- Cholesterol-regulating herbs like Guggulu, Arjuna, and Triphala\n- Metabolism-boosting spices and herbs\n- Low-fat, fiber-rich dietary recommendations\n- Regular exercise and physical activity\n- Weight management support\n- Liver-supporting herbal formulations\n\nH2: Benefits of Ayurvedic Care\n- Reduced total and LDL cholesterol\n- Improved HDL (good cholesterol) levels\n- Better cardiovascular risk profile\n- Enhanced metabolism and energy\n- Weight management support\n- Natural approach to lipid management\n\n🌿 Balance Cholesterol Naturally\nHigh cholesterol is your body's way of asking for metabolic balance. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore healthy lipid levels and cardiovascular wellness from the inside out. Book your session today for lasting heart health.`,
    suggestedProducts,
    bannerContent: {
      title: 'High Cholesterol',
      breadcrumb: 'Heart & Circulatory Health',
      breadcrumbHref: '/consultations/heart-circulatory-health',
    },
    meta: {
      title: 'Ayurvedic High Cholesterol Solutions | BookMyAyurveda',
      description: 'Manage high cholesterol naturally with Ayurveda. Personalized herbal care, lifestyle tips, and expert consultations for heart health.',
      keywords: 'Ayurveda, high cholesterol, heart health, Kapha, Agni, Guggulu, Arjuna, Triphala',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default HighCholesterol;
