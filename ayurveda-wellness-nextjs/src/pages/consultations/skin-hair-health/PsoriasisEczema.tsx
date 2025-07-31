import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const PsoriasisEczema = () => {
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
    subcategoryTitle: 'Psoriasis & Eczema',
    categoryTitle: 'Skin & Hair Health',
    categoryHref: '/consultations/skin-hair-health',
    image: '/Sub Category/Skin & Hair Health/Psoriasis  Eczema.jpg',
    description: `Title: Psoriasis & Eczema — Soothe Your Skin, Naturally\n\nPsoriasis and eczema affect comfort, confidence, and skin health. Ayurveda sees these as signs of aggravated Pitta or Kapha dosha, impaired Agni, and toxin (Ama) buildup. Through skin-purifying herbs, dietary changes, and lifestyle practices, Ayurveda helps restore calm, healthy skin.\n\nH1: Ayurvedic Perspective on Psoriasis & Eczema\nPsoriasis and eczema are often linked to Pitta (fire) or Kapha (water/earth) imbalances, which disturb skin metabolism and detoxification. Triggers include poor diet, stress, allergies, or improper skincare.\n\nCommon Symptoms:\n- Red, scaly patches\n- Itching or discomfort\n- Dry or oozing skin\n- Flare-ups with stress or diet\n- Sensitivity or irritation\n- Scarring or pigmentation\n\nH2: Ayurvedic Healing Approach\n- Neem and Manjistha for skin detox\n- Turmeric for inflammation\n- Light, cooling foods\n- Mindful skincare and hygiene\n- Stress management and rest\n- Regular routines and hydration\n\nH2: Benefits of Ayurvedic Care\n- Soothed, healthier skin\n- Reduced inflammation and flare-ups\n- Natural support for skin detox\n- Greater confidence and comfort\n- Lasting skin wellness\n\n🌿 Soothe Your Skin, Naturally\nPsoriasis and eczema are your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your skin health and confidence from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    bannerContent: {
      title: 'Psoriasis & Eczema',
      breadcrumb: 'Skin & Hair Health',
      breadcrumbHref: '/consultations/skin-hair-health',
    },
    meta: {
      title: 'Ayurvedic Psoriasis & Eczema Solutions | BookMyAyurveda',
      description: 'Soothe psoriasis and eczema naturally with Ayurveda. Personalized herbal care, lifestyle tips, and expert consultations for healthy, comfortable skin.',
      keywords: 'Ayurveda, psoriasis, eczema, skin health, Pitta, Kapha, Neem, Manjistha, Turmeric',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default PsoriasisEczema;
