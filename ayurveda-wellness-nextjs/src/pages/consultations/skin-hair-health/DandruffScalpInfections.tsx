import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const DandruffScalpInfections = () => {
  const subcategoryData = {
    subcategoryTitle: 'Dandruff & Scalp Infections',
    categoryTitle: 'Skin & Hair Health',
    categoryHref: '/consultations/skin-hair-health',
    image: '/Sub Category/Skin & Hair Health/Dandruff  Scalp Infections.jpg',
    description: `Title: Dandruff & Scalp Infections — Soothe Your Scalp, Naturally\n\nDandruff and scalp infections affect comfort, confidence, and hair health. Ayurveda sees these as signs of aggravated Pitta or Kapha dosha, impaired Agni, and microbial imbalance. Through scalp-purifying herbs, dietary changes, and lifestyle practices, Ayurveda helps restore a healthy, comfortable scalp.\n\nH1: Ayurvedic Perspective on Dandruff & Scalp Infections\nDandruff and scalp infections are often linked to Pitta (fire) or Kapha (water/earth) imbalances, which disturb scalp metabolism and detoxification. Triggers include poor hygiene, stress, harsh products, or improper care.\n\nCommon Symptoms:\n- Visible white or yellow flakes\n- Itchy and irritated scalp\n- Scalp redness and inflammation\n- Greasy or oily scalp\n- Hair fall due to scalp issues\n- Fungal or bacterial infections\n- Unpleasant scalp odor\n- Scalp tenderness\n\nH2: Ayurvedic Healing Approach\n- Neem and Tea tree for antimicrobial action\n- Fenugreek for scalp conditioning\n- Specialized scalp cleansing\n- Medicated hair oils\n- Anti-inflammatory therapies\n- Proper scalp hygiene\n- Stress management\n\nH2: Benefits of Ayurvedic Care\n- Complete elimination of dandruff\n- Cleared scalp infections\n- Reduced itching and irritation\n- Improved scalp health\n- Prevented hair fall from scalp issues\n- Better hair growth environment\n- Enhanced confidence and comfort\n- Long-term scalp wellness\n\n🌿 Soothe Your Scalp, Naturally\nDandruff and scalp infections are your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your scalp health and confidence from the inside out. Book your session today for lasting wellness.`,
    bannerContent: {
      title: 'Dandruff & Scalp Infections',
      breadcrumb: 'Skin & Hair Health',
      breadcrumbHref: '/consultations/skin-hair-health',
    },
    meta: {
      title: 'Ayurvedic Dandruff & Scalp Infection Solutions | BookMyAyurveda',
      description: 'Eliminate dandruff and scalp infections naturally with Ayurveda. Personalized herbal care, lifestyle tips, and expert consultations for a healthy scalp.',
      keywords: 'Ayurveda, dandruff, scalp infections, scalp health, Pitta, Kapha, Neem, Tea tree, Fenugreek',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default DandruffScalpInfections;
