import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const VaricoseVeins = () => {
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
      id: 'gotu-kola',
      name: 'Gotu Kola Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/gotu-kola-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Varicose Veins',
      breadcrumb: 'Heart & Circulatory Health',
      breadcrumbHref: '/consultations/heart-circulatory-health',
    },
    image: '/Sub Category/Heart & Circulatory Health/Varicose Veins.jpg',
    description: `Title: Varicose Veins — Gentle Ayurvedic Support for Vascular Health\n\nVaricose veins are swollen, twisted veins that often appear in the legs. Ayurveda sees varicose veins as a sign of aggravated Vata or Kapha dosha, weak vessel walls, and poor circulation. Through vascular-strengthening herbs, lifestyle changes, and supportive therapies, Ayurveda helps restore vein health and comfort.\n\nH1: Ayurvedic Perspective on Varicose Veins\nVaricose veins are often linked to Vata (movement/air) or Kapha (water/earth) imbalances, which weaken vessel walls and slow blood flow. Triggers include prolonged standing, inactivity, obesity, or genetic factors.\n\nCommon Symptoms:\n- Swollen, twisted, or bulging veins\n- Leg heaviness or aching\n- Swelling or cramping\n- Itching or skin changes\n- Restless legs\n- Fatigue or discomfort after standing\n\nH2: Ayurvedic Healing Approach\n- Guggulu and Arjuna for vascular strength\n- Gotu Kola for vein tone and healing\n- Abhyanga (oil massage) for circulation\n- Elevating legs and gentle movement\n- Avoiding prolonged standing or sitting\n- Warming, spiced foods and teas\n\nH2: Benefits of Ayurvedic Care\n- Reduced swelling and discomfort\n- Improved vein tone and appearance\n- Enhanced circulation and energy\n- Less fatigue and heaviness\n- Better vascular resilience\n- Natural support for vein health\n\n🌿 Support Your Veins\nVaricose veins are your body's way of asking for vascular support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your vein health and comfort from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default VaricoseVeins;
