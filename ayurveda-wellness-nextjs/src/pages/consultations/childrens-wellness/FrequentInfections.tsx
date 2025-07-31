import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const FrequentInfections = () => {
  const suggestedProducts = [
    {
      id: 'guduchi',
      name: 'Guduchi (Tinospora cordifolia)',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/guduchi-benefits-1.jpg',
      price: '₹349 / 100g',
    },
    {
      id: 'amalaki',
      name: 'Amalaki (Indian Gooseberry)',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/amalaki-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'tulsi',
      name: 'Tulsi (Holy Basil)',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/tulsi-benefits-1.jpg',
      price: '₹199 / 100g',
    },
    {
      id: 'chyawanprash',
      name: 'Chyawanprash','imageUrl': 'https://www.ayurvedum.com/wp-content/uploads/2018/07/chyawanprash-benefits-1.jpg',
      price: '₹399 / 500g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Frequent Infections',
      breadcrumb: "Children's Wellness",
      breadcrumbHref: '/consultations/childrens-wellness',
    },
    image: "/Sub Category/Children's Wellness/Immunity  Frequent Infections.jpg",
    description: `Title: Frequent Infections in Children — Building Natural Immunity Through Ayurveda\n\nChildren with weak immunity often suffer from recurring colds, fevers, and infections that disrupt their growth and development. Ayurveda views frequent infections as a sign of weakened Ojas (vital immunity) and imbalanced doshas. Through immune-strengthening herbs, nutritional support, and lifestyle practices, Ayurveda helps build lasting resistance naturally.\n\nH1: Ayurvedic Perspective on Frequent Infections\nFrequent infections in children indicate weakened Ojas (vital immunity) and imbalanced doshas, particularly Kapha affecting respiratory health and Vata causing irregular immune responses. Poor digestion often leads to Ama (toxin) accumulation, further compromising immunity. Treatment focuses on strengthening Ojas, balancing doshas, improving digestion, and building natural resistance through immune-supportive herbs and lifestyle practices.\n\nCommon Symptoms:\n- Recurring colds and upper respiratory infections\n- Frequent fever episodes\n- Slow recovery from illness\n- Low energy and fatigue\n- Poor resistance to seasonal changes\n- Frequent ear or throat infections\n\nH2: Ayurvedic Healing Approach\n- Guduchi (Tinospora cordifolia) for immune strengthening\n- Amalaki (Indian gooseberry) rich in vitamin C\n- Tulsi (Holy basil) for respiratory health and immunity\n- Chyawanprash as a comprehensive immune tonic\n- Warm, nourishing foods with immune-boosting spices\n- Adequate sleep and regular daily routines\n\nH2: Benefits of Ayurvedic Care\n- Reduced frequency of infections and illness\n- Faster recovery when illness occurs\n- Improved energy levels and vitality\n- Stronger respiratory health\n- Better adaptation to seasonal changes\n- Enhanced overall resistance and immunity\n\n🌿 Build Immunity Naturally\nFrequent infections are your child's way of asking for deeper immune support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your child's immunity and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default FrequentInfections;
