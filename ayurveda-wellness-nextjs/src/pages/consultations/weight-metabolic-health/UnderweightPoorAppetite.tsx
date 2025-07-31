import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const UnderweightPoorAppetite = () => {
  const suggestedProducts = [
    {
      id: 'ashwagandha',
      name: 'Ashwagandha Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashwagandha-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'chitrak',
      name: 'Chitrak Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/chitrak-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'vidarikand',
      name: 'Vidarikand Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/vidarikand-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Underweight & Poor Appetite',
      breadcrumb: 'Weight & Metabolic Health',
      breadcrumbHref: '/consultations/weight-metabolic-health',
    },
    image: '/Sub Category/Weight & Metabolic Health/Underweight  Poor Appetite.jpg',
    description: `Title: Underweight & Poor Appetite — Nourish & Build, Naturally\n\nUnderweight and poor appetite affect energy, immunity, and growth. Ayurveda sees underweight as a sign of aggravated Vata or Pitta dosha, impaired Agni, and poor tissue nutrition. Through nourishing herbs, dietary changes, and lifestyle practices, Ayurveda helps restore healthy weight and appetite.\n\nH1: Ayurvedic Perspective on Underweight\nUnderweight is often linked to Vata (movement/air) or Pitta (fire) imbalances, which disturb digestion and tissue building. Triggers include poor diet, stress, chronic illness, or high metabolism.\n\nCommon Symptoms:\n- Low body weight\n- Poor appetite\n- Fatigue or weakness\n- Slow growth or development\n- Poor immunity\n- Difficulty gaining weight\n\nH2: Ayurvedic Healing Approach\n- Ashwagandha and Vidarikand for nourishment\n- Chitrak for appetite\n- Calorie-dense, nourishing foods\n- Mindful eating and rest\n- Gentle exercise and routines\n- Stress management and sleep\n\nH2: Benefits of Ayurvedic Care\n- Improved weight and appetite\n- Enhanced energy and growth\n- Natural support for tissue health\n- Greater vitality and well-being\n\n🌿 Nourish & Build, Naturally\nUnderweight is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your weight and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default UnderweightPoorAppetite;
