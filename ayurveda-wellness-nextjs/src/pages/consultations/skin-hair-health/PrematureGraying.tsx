import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const PrematureGraying = () => {
  const subcategoryData = {
    subcategoryTitle: 'Premature Graying',
    categoryTitle: 'Skin & Hair Health',
    categoryHref: '/consultations/skin-hair-health',
    image: "/Sub Category/Skin & Hair Health/Premature Graying.jpg",
    description: `Title: Premature Graying — Preserve Your Color, Naturally\n\nPremature graying affects confidence, comfort, and hair health. Ayurveda sees this as a sign of aggravated Pitta dosha, impaired Agni, and melanin depletion. Through melanin-boosting herbs, dietary changes, and lifestyle practices, Ayurveda helps restore natural hair color and vitality.\n\nH1: Ayurvedic Perspective on Premature Graying\nPremature graying is often linked to Pitta (fire) imbalances, which disturb hair pigmentation and nutrition. Triggers include genetics, stress, poor diet, or harsh treatments.\n\nCommon Symptoms:\n- Gray or white hairs appearing early\n- Loss of natural hair color\n- Patches of gray hair\n- Progressive color fading\n- Dry and brittle gray hair\n- Premature aging appearance\n- Loss of hair luster\n- Genetic pattern acceleration\n\nH2: Ayurvedic Healing Approach\n- Curry leaves for melanin\n- Black sesame for pigmentation\n- Amla for antioxidants\n- Bhringraj oil for nourishment\n- Specialized hair masks\n- Stress management\n- Nutritional therapy\n- Yoga and meditation\n\nH2: Benefits of Ayurvedic Care\n- Slowed progression of graying\n- Restored natural color\n- Improved hair health\n- Enhanced melanin production\n- Stronger, healthier hair\n- Delayed aging appearance\n- Better stress management\n- Overall vitality\n\n🌿 Preserve Your Color, Naturally\nPremature graying is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your hair health and confidence from the inside out. Book your session today for lasting wellness.`,
    bannerContent: {
      title: 'Premature Graying',
      breadcrumb: 'Skin & Hair Health',
      breadcrumbHref: '/consultations/skin-hair-health',
    },
    meta: {
      title: 'Ayurvedic Premature Graying Solutions | BookMyAyurveda',
      description: 'Prevent and reverse premature graying naturally with Ayurveda. Personalized herbal care, lifestyle tips, and expert consultations for healthy, youthful hair.',
      keywords: 'Ayurveda, premature graying, hair color, Pitta, Curry leaves, Black sesame, Amla, Bhringraj',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default PrematureGraying;
