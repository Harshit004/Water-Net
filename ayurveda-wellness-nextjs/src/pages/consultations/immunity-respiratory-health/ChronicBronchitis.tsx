import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const ChronicBronchitis = () => {
  const suggestedProducts = [
    {
      id: 'vasaka',
      name: 'Vasaka Syrup',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/vasaka-benefits-1.jpg',
      price: '₹199 / 100ml',
    },
    {
      id: 'talisadi',
      name: 'Talisadi Churna',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/talisadi-benefits-1.jpg',
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
    image: "/Sub Category/Immunity & Respiratory Health/Chronic Bronchitis.jpg",
    description: `Title: Chronic Bronchitis — Breathe Easy, Naturally\n\nChronic bronchitis is a persistent inflammation of the airways, causing cough and mucus. Ayurveda sees chronic bronchitis as a sign of aggravated Kapha and Vata dosha, impaired Agni, and toxin (Ama) buildup. Through expectorant herbs, dietary changes, and lifestyle practices, Ayurveda helps restore clear breathing and respiratory comfort.\n\nH1: Ayurvedic Perspective on Chronic Bronchitis\nChronic bronchitis is often linked to Kapha (water/earth) and Vata (air/space) imbalances, which increase mucus and disturb airway function. Triggers include pollution, smoking, cold foods, or recurrent infections.\n\nCommon Symptoms:\n- Persistent cough with mucus\n- Wheezing or breathlessness\n- Chest discomfort\n- Fatigue or low energy\n- Frequent respiratory infections\n- Difficulty clearing airways\n\nH2: Ayurvedic Healing Approach\n- Vasaka and Talisadi for expectoration\n- Yastimadhu for soothing airways\n- Warm, spiced foods and teas\n- Avoiding cold, heavy, or processed foods\n- Steam inhalation and chest massage\n- Regular exercise and breathing practices\n\nH2: Benefits of Ayurvedic Care\n- Reduced cough and mucus\n- Improved breathing comfort\n- Enhanced energy and resilience\n- Fewer infections and flare-ups\n- Natural support for respiratory health\n- Greater vitality and well-being\n\n🌿 Breathe Easy, Naturally\nChronic bronchitis is your body's way of asking for respiratory support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your breathing and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    meta: {
      title: 'Ayurvedic Consultation for Frequent Colds / Infections | Book Online',
      description: 'Book your personalized Ayurvedic consultation online for Frequent Colds / Infections. Natural healing with herbs, diet, and lifestyle changes for lasting relief.',
      keywords: 'Frequent Colds / Infections Ayurveda, Frequent Colds / Infections Treatment, Book Ayurveda Online, Ayurvedic Consultation Frequent Colds / Infections, Natural Healing, Ayurveda Remedies, Frequent Colds / Infections Relief, Holistic Wellness'
    }
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default ChronicBronchitis;
