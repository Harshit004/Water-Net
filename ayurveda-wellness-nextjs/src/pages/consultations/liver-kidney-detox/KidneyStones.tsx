import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const KidneyStones = () => {
  const suggestedProducts = [
    {
      id: 'punarnava',
      name: 'Punarnava Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/punarnava-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'gokshura',
      name: 'Gokshura Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/gokshura-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'varuna',
      name: 'Varuna Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/varuna-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Kidney Stones',
      breadcrumb: 'Liver, Kidney & Detox',
      breadcrumbHref: '/consultations/liver-kidney-detox',
    },
    image: '/Sub Category/Liver, Kidney & Detox/Kidney Stones (prevention and management).jpg',
    description: `Title: Kidney Stones — Dissolve & Prevent, Naturally\n\nKidney stones cause pain, discomfort, and urinary issues. Ayurveda sees kidney stones as a sign of aggravated Vata or Pitta dosha, impaired Agni, and mineral imbalance. Through stone-dissolving herbs, dietary changes, and lifestyle practices, Ayurveda helps restore urinary comfort and prevent recurrence.\n\nH1: Ayurvedic Perspective on Kidney Stones\nKidney stones are often linked to Vata (movement/air) or Pitta (fire) imbalances, which disturb mineral metabolism and urinary flow. Triggers include dehydration, poor diet, chronic illness, or genetic factors.\n\nCommon Symptoms:\n- Flank or abdominal pain\n- Blood in urine\n- Frequent urination\n- Nausea or vomiting\n- Difficulty passing urine\n- Fatigue or malaise\n\nH2: Ayurvedic Healing Approach\n- Punarnava and Gokshura for urinary support\n- Varuna for stone dissolution\n- Hydrating, alkalizing foods\n- Adequate hydration\n- Gentle exercise and movement\n- Stress management and rest\n\nH2: Benefits of Ayurvedic Care\n- Reduced pain and discomfort\n- Improved urinary flow\n- Enhanced energy and resilience\n- Natural support for urinary health\n- Greater vitality and well-being\n\n🌿 Dissolve & Prevent, Naturally\nKidney stones are your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your urinary health and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default KidneyStones;
