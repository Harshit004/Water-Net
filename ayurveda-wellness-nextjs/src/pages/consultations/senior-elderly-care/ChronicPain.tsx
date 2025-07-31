import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const ChronicPain = () => {
  const suggestedProducts = [
    {
      id: 'shallaki',
      name: 'Shallaki Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/shallaki-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'guggulu',
      name: 'Guggulu Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/guggulu-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'ashwagandha',
      name: 'Ashwagandha Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashwagandha-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    subcategoryTitle: 'Chronic Pain',
    categoryTitle: 'Senior & Elderly Care',
    categoryHref: '/consultations/senior-elderly-care',
    image: '/Sub Category/Senior & Elderly Care/Chronic Pain.jpg',
    description: `Title: Chronic Pain — Relieve & Restore, Naturally\n\nChronic pain is common in the elderly, affecting comfort, mobility, and quality of life. Ayurveda sees chronic pain as a sign of aggravated Vata or Kapha dosha, depleted Ojas (vitality), and tissue weakness. Through pain-relieving herbs, dietary changes, and lifestyle practices, Ayurveda helps restore comfort and resilience.\n\nH1: Ayurvedic Perspective on Chronic Pain\nChronic pain is often linked to Vata (movement/air) or Kapha (water/earth) imbalances, which disturb tissue function and increase discomfort. Triggers include aging, poor diet, inactivity, or chronic illness.\n\nCommon Symptoms:\n- Persistent pain or discomfort\n- Reduced mobility\n- Swelling or stiffness\n- Fatigue or weakness\n- Difficulty with daily activities\n- Loss of independence\n\nH2: Ayurvedic Healing Approach\n- Shallaki and Guggulu for pain relief\n- Ashwagandha for tissue strength\n- Nourishing, anti-inflammatory foods\n- Gentle exercise and movement\n- Mindful rest and routines\n- Stress management and sleep\n\nH2: Benefits of Ayurvedic Care\n- Improved comfort and mobility\n- Enhanced energy and resilience\n- Natural support for pain relief\n- Greater vitality and well-being\n\n🌿 Relieve & Restore, Naturally\nChronic pain is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your comfort and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    bannerContent: {
      title: 'Chronic Pain',
      breadcrumb: 'Senior & Elderly Care',
      breadcrumbHref: '/consultations/senior-elderly-care',
    },
    meta: {
      title: 'Ayurvedic Chronic Pain Solutions | BookMyAyurveda',
      description: 'Relieve chronic pain naturally with Ayurveda. Personalized herbal care, lifestyle tips, and expert consultations for comfort and mobility.',
      keywords: 'Ayurveda, chronic pain, elderly care, Vata, Kapha, Shallaki, Guggulu, Ashwagandha',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default ChronicPain;
