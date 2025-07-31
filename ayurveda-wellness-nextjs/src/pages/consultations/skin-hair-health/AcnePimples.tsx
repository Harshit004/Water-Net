import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const AcnePimples = () => {
  const suggestedProducts = [
    {
      id: 'neem',
      name: 'Neem Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/neem-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'manjistha',
      name: 'Manjistha Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/manjistha-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'turmeric',
      name: 'Turmeric Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/turmeric-benefits-1.jpg',
      price: '₹199 / 100g',
    },
  ];

  const subcategoryData = {
    subcategoryTitle: 'Acne & Pimples',
    categoryTitle: 'Skin & Hair Health',
    categoryHref: '/consultations/skin-hair-health',
    image: '/Sub Category/Skin & Hair Health/Acne  Pimples.jpg',
    description: `Title: Acne & Pimples — Clear Your Skin, Naturally\n\nAcne and pimples affect confidence, comfort, and skin health. Ayurveda sees acne as a sign of aggravated Pitta or Kapha dosha, impaired Agni, and toxin (Ama) buildup. Through skin-purifying herbs, dietary changes, and lifestyle practices, Ayurveda helps restore clear, healthy skin.\n\nH1: Ayurvedic Perspective on Acne\nAcne is often linked to Pitta (fire) or Kapha (water/earth) imbalances, which disturb skin metabolism and detoxification. Triggers include poor diet, stress, hormonal changes, or improper skincare.\n\nCommon Symptoms:\n- Red, inflamed pimples\n- Oily or congested skin\n- Blackheads or whiteheads\n- Scarring or pigmentation\n- Sensitivity or discomfort\n- Flare-ups with stress or diet\n\nH2: Ayurvedic Healing Approach\n- Neem and Manjistha for skin detox\n- Turmeric for inflammation\n- Light, cooling foods\n- Mindful skincare and hygiene\n- Stress management and rest\n- Regular routines and hydration\n\nH2: Benefits of Ayurvedic Care\n- Clearer, healthier skin\n- Reduced inflammation and breakouts\n- Natural support for skin detox\n- Greater confidence and comfort\n- Lasting skin wellness\n\n🌿 Clear Your Skin, Naturally\nAcne is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your skin health and confidence from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    bannerContent: {
      title: 'Acne & Pimples',
      breadcrumb: 'Skin & Hair Health',
      breadcrumbHref: '/consultations/skin-hair-health',
    },
    meta: {
      title: 'Ayurvedic Acne & Pimple Solutions | BookMyAyurveda',
      description: 'Clear acne and pimples naturally with Ayurveda. Personalized herbal care, lifestyle tips, and expert consultations for healthy, radiant skin.',
      keywords: 'Ayurveda, acne, pimples, skin health, Pitta, Kapha, Neem, Manjistha, Turmeric',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default AcnePimples;
