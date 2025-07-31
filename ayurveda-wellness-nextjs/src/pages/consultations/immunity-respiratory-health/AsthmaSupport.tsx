import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const AsthmaSupport = () => {
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
      title: 'Asthma (mild to moderate)',
      breadcrumb: 'Immunity & Respiratory Health',
      breadcrumbHref: '/consultations/immunity-respiratory-health',
    },
    image: '/Sub Category/Immunity & Respiratory Health/Asthma (mild to moderate).jpg',
    description: `Title: Asthma Support — Breathe with Ease, Naturally\n\nAsthma is a chronic condition causing airway inflammation and breathing difficulty. Ayurveda sees asthma as a sign of aggravated Vata and Kapha dosha, impaired Agni, and hypersensitive airways. Through bronchodilator herbs, dietary changes, and lifestyle practices, Ayurveda helps restore clear breathing and respiratory comfort.\n\nH1: Ayurvedic Perspective on Asthma\nAsthma is often linked to Vata (movement/air) and Kapha (water/earth) imbalances, which disturb airway function and increase mucus. Triggers include allergens, infections, weather changes, or stress.\n\nCommon Symptoms:\n- Wheezing or breathlessness\n- Chest tightness or discomfort\n- Cough or mucus\n- Fatigue or low energy\n- Difficulty exercising\n- Frequent flare-ups\n\nH2: Ayurvedic Healing Approach\n- Vasaka and Talisadi for bronchodilation\n- Yastimadhu for soothing airways\n- Warm, spiced foods and teas\n- Avoiding cold, heavy, or processed foods\n- Steam inhalation and chest massage\n- Regular exercise and breathing practices\n\nH2: Benefits of Ayurvedic Care\n- Improved breathing comfort\n- Reduced wheezing and flare-ups\n- Enhanced energy and resilience\n- Natural support for respiratory health\n- Greater vitality and well-being\n\n🌿 Breathe with Ease, Naturally\nAsthma is your body's way of asking for respiratory support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your breathing and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    meta: {
      title: 'Ayurvedic Consultation for Asthma (mild to moderate) | Book Online',
      description: 'Book your personalized Ayurvedic consultation online for Asthma (mild to moderate). Natural healing with herbs, diet, and lifestyle changes for lasting relief.',
      keywords: 'Asthma (mild to moderate) Ayurveda, Asthma (mild to moderate) Treatment, Book Ayurveda Online, Ayurvedic Consultation Asthma (mild to moderate), Natural Healing, Ayurveda Remedies, Asthma (mild to moderate) Relief, Holistic Wellness'
    }
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default AsthmaSupport;
