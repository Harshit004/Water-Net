import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const MemoryLossDementia = () => {
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
    subcategoryTitle: 'Memory Loss & Dementia',
    categoryTitle: 'Senior & Elderly Care',
    categoryHref: '/consultations/senior-elderly-care',
    image: '/Sub Category/Senior & Elderly Care/Memory Loss  Early Dementia.jpg',
    description: `Title: Memory Loss & Dementia — Sharpen Your Mind, Naturally\n\nMemory loss and dementia are common in the elderly, affecting independence, relationships, and quality of life. Ayurveda sees memory loss as a sign of aggravated Vata or Kapha dosha, depleted Ojas (vitality), and mind-body imbalance. Through adaptogenic and clarifying herbs, dietary changes, and lifestyle practices, Ayurveda helps restore mental clarity and resilience.\n\nH1: Ayurvedic Perspective on Memory Loss\nMemory loss is often linked to Vata (movement/air) or Kapha (water/earth) imbalances, which disturb mind-body harmony and energy. Triggers include aging, stress, poor sleep, or chronic illness.\n\nCommon Symptoms:\n- Poor concentration or memory\n- Confusion or forgetfulness\n- Fatigue or low energy\n- Sleep disturbances\n- Irritability or mood swings\n- Reduced independence\n\nH2: Ayurvedic Healing Approach\n- Brahmi and Shankhpushpi for mental clarity\n- Ashwagandha for resilience\n- Nourishing, grounding foods\n- Mindful breathing and meditation\n- Gentle exercise and relaxation\n- Regular routines and sleep\n\nH2: Benefits of Ayurvedic Care\n- Improved focus and memory\n- Reduced confusion and forgetfulness\n- Enhanced energy and resilience\n- Natural support for mind-body health\n- Greater vitality and well-being\n\n🌿 Sharpen Your Mind, Naturally\nMemory loss is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your mental health and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    bannerContent: {
      title: 'Memory Loss & Dementia',
      breadcrumb: 'Senior & Elderly Care',
      breadcrumbHref: '/consultations/senior-elderly-care',
    },
    meta: {
      title: 'Ayurvedic Memory Loss & Dementia Solutions | BookMyAyurveda',
      description: 'Improve memory and cognitive function naturally with Ayurveda. Personalized herbal care, lifestyle tips, and expert consultations for mental clarity.',
      keywords: 'Ayurveda, memory loss, dementia, elderly care, Vata, Kapha, Brahmi, Shankhpushpi, Ashwagandha',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default MemoryLossDementia;
