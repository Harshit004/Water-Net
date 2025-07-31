import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const FrequentColdCough = () => {
  const suggestedProducts = [
    {
      id: 'tulsi',
      name: 'Tulsi Drops',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/tulsi-benefits-1.jpg',
      price: '₹199 / 30ml',
    },
    {
      id: 'sitopaladi',
      name: 'Sitopaladi Churna',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/sitopaladi-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'yastimadhu',
      name: 'Yastimadhu (Licorice) Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/licorice-benefits-1.jpg',
      price: '₹249 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Frequent Colds / Infections',
      breadcrumb: 'Immunity & Respiratory Health',
      breadcrumbHref: '/consultations/immunity-respiratory-health',
    },
    image: '/Sub Category/Immunity & Respiratory Health/Frequent Colds  Infections.jpg',
    description: `Title: Frequent Cold & Cough — Strengthen Your Defenses, Naturally\n\nFrequent colds and coughs signal a weakened immune system and respiratory irritation. Ayurveda sees these as signs of aggravated Kapha and Vata dosha, impaired Agni, and toxin (Ama) buildup. Through immune-boosting herbs, dietary changes, and lifestyle practices, Ayurveda helps restore natural resistance and respiratory comfort.\n\nH1: Ayurvedic Perspective on Frequent Cold & Cough\nFrequent colds and coughs are often linked to Kapha (water/earth) and Vata (air/space) imbalances, which increase mucus and disturb immune function. Triggers include weather changes, poor diet, stress, or recurrent infections.\n\nCommon Symptoms:\n- Runny or stuffy nose\n- Sore throat or cough\n- Sneezing or congestion\n- Fatigue or low energy\n- Frequent infections\n- Difficulty recovering\n\nH2: Ayurvedic Healing Approach\n- Tulsi and Sitopaladi for immune support\n- Yastimadhu for soothing airways\n- Warm, spiced foods and teas\n- Avoiding cold, heavy, or processed foods\n- Steam inhalation and chest massage\n- Regular exercise and breathing practices\n\nH2: Benefits of Ayurvedic Care\n- Fewer colds and coughs\n- Improved immune resilience\n- Enhanced energy and recovery\n- Natural support for respiratory health\n- Greater vitality and well-being\n\n🌿 Strengthen Your Defenses\nFrequent colds and coughs are your body's way of asking for immune support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your immunity and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    meta: {
      title: 'Ayurvedic Consultation for Frequent Colds / Infections | Book Online',
      description: 'Book your personalized Ayurvedic consultation online for Frequent Colds / Infections. Natural healing with herbs, diet, and lifestyle changes for lasting relief.',
      keywords: 'Frequent Colds / Infections Ayurveda, Frequent Colds / Infections Treatment, Book Ayurveda Online, Ayurvedic Consultation Frequent Colds / Infections, Natural Healing, Ayurveda Remedies, Frequent Colds / Infections Relief, Holistic Wellness'
    }
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default FrequentColdCough;
