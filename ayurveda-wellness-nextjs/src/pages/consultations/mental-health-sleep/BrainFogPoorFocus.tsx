import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const BrainFogPoorFocus = () => {
  const suggestedProducts = [
    {
      id: 'brahmi',
      name: 'Brahmi Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/brahmi-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'shankhpushpi',
      name: 'Shankhpushpi Syrup',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/shankhpushpi-benefits-1.jpg',
      price: '₹199 / 200ml',
    },
    {
      id: 'ashwagandha',
      name: 'Ashwagandha Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashwagandha-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    subcategoryTitle: 'Brain Fog & Poor Focus',
    categoryTitle: 'Mental Health & Sleep',
    categoryHref: '/consultations/mental-health-sleep',
    image: '/Sub Category/Mental Health & Sleep/Brain Fog  Poor Focus.jpg',
    description: `Title: Brain Fog & Poor Focus — Sharpen Your Mind, Naturally\n\nBrain fog and poor focus affect memory, productivity, and daily life. Ayurveda sees brain fog as a sign of aggravated Vata or Kapha dosha, depleted Ojas (vitality), and mind-body imbalance. Through adaptogenic and clarifying herbs, dietary changes, and lifestyle practices, Ayurveda helps restore mental clarity and resilience.\n\nH1: Ayurvedic Perspective on Brain Fog\nBrain fog is often linked to Vata (movement/air) or Kapha (water/earth) imbalances, which disturb mind-body harmony and energy. Triggers include overwork, stress, poor sleep, or chronic illness.\n\nCommon Symptoms:\n- Poor concentration or memory\n- Fatigue or low energy\n- Brain fog or forgetfulness\n- Sleep disturbances\n- Irritability or mood swings\n- Reduced productivity\n\nH2: Ayurvedic Healing Approach\n- Brahmi and Shankhpushpi for mental clarity\n- Ashwagandha for resilience\n- Nourishing, grounding foods\n- Mindful breathing and meditation\n- Gentle exercise and relaxation\n- Regular routines and sleep\n\nH2: Benefits of Ayurvedic Care\n- Improved focus and memory\n- Reduced fatigue and brain fog\n- Enhanced energy and resilience\n- Natural support for mind-body health\n- Greater vitality and well-being\n\n🌿 Sharpen Your Mind, Naturally\nBrain fog is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your mental health and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    bannerContent: {
      title: 'Brain Fog & Poor Focus',
      breadcrumb: 'Mental Health & Sleep',
      breadcrumbHref: '/consultations/mental-health-sleep',
    },
    meta: {
      title: 'Ayurvedic Brain Fog & Focus Remedies | BookMyAyurveda',
      description: 'Regain mental clarity and focus with Ayurvedic care. Herbal remedies, lifestyle tips, and expert consultations for brain fog and poor concentration.',
      keywords: 'Ayurveda, brain fog, poor focus, memory, concentration, Vata, Kapha, Ojas, Brahmi, Shankhpushpi, Ashwagandha',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default BrainFogPoorFocus;
