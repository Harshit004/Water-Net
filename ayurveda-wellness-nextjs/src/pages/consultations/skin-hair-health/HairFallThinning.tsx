import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const HairFallThinning = () => {
  const subcategoryData = {
    subcategoryTitle: 'Hair Fall & Thinning',
    categoryTitle: 'Skin & Hair Health',
    categoryHref: '/consultations/skin-hair-health',
    image: '/Sub Category/Skin & Hair Health/Hair Fall  Hair Thinning.jpg',
    description: `Title: Hair Fall & Thinning — Strengthen Your Roots, Naturally\n\nHair fall and thinning affect confidence, comfort, and hair health. Ayurveda sees these as signs of aggravated Pitta or Vata dosha, impaired Agni, and nutritional deficiency. Through hair-nourishing herbs, dietary changes, and lifestyle practices, Ayurveda helps restore strong, healthy hair.\n\nH1: Ayurvedic Perspective on Hair Fall & Thinning\nHair fall and thinning are often linked to Pitta (fire) or Vata (air/space) imbalances, which disturb hair nutrition and growth. Triggers include stress, poor diet, harsh treatments, or genetics.\n\nCommon Symptoms:\n- Excessive daily hair fall\n- Thinning hair density\n- Weak and brittle hair\n- Slow hair growth\n- Patchy hair loss\n- Dry and damaged hair\n- Scalp sensitivity\n- Loss of hair volume\n\nH2: Ayurvedic Healing Approach\n- Bhringraj oil for nourishment\n- Fenugreek for strengthening\n- Amla for antioxidants\n- Specialized scalp massage\n- Herbal hair masks\n- Stress management\n- Nutritional therapy\n- Yoga and pranayama\n\nH2: Benefits of Ayurvedic Care\n- Reduced hair fall\n- Improved thickness and density\n- Stronger, healthier hair\n- Enhanced growth rate\n- Better scalp health\n- Natural shine and luster\n- Prevented premature loss\n- Boosted confidence\n\n🌿 Strengthen Your Roots, Naturally\nHair fall is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your hair health and confidence from the inside out. Book your session today for lasting wellness.`,
    bannerContent: {
      title: 'Hair Fall & Thinning',
      breadcrumb: 'Skin & Hair Health',
      breadcrumbHref: '/consultations/skin-hair-health',
    },
    meta: {
      title: 'Ayurvedic Hair Fall & Thinning Solutions | BookMyAyurveda',
      description: 'Stop hair fall and thinning naturally with Ayurveda. Personalized herbal care, lifestyle tips, and expert consultations for strong, healthy hair.',
      keywords: 'Ayurveda, hair fall, thinning, hair health, Pitta, Vata, Bhringraj, Fenugreek, Amla',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default HairFallThinning;
