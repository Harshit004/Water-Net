
import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const PCOSPCODPage = () => {
  const suggestedProducts = [
    {
      id: 'shatavari',
      name: 'Shatavari Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/shatavari-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'ashoka',
      name: 'Ashoka Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashoka-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'lodhra',
      name: 'Lodhra Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/lodhra-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'PCOS/PCOD',
      breadcrumb: 'Hormonal Balance & Endocrine Health',
      breadcrumbHref: '/consultations/hormonal-balance-endocrine-health',
    },
    image: '/Sub Category/Hormonal Balance & Endocrine Health/PCOS  PCOD.jpg',
    description: `Title: PCOS/PCOD — Restore Hormonal Harmony, Naturally\n\nPCOS/PCOD (Polycystic Ovary Syndrome/Disorder) affects hormonal balance, cycles, and fertility. Ayurveda sees PCOS/PCOD as a sign of aggravated Kapha or Vata dosha, impaired Agni, and hormonal imbalance. Through hormone-balancing herbs, dietary changes, and lifestyle practices, Ayurveda helps restore healthy cycles and reproductive vitality.\n\nH1: Ayurvedic Perspective on PCOS/PCOD\nPCOS/PCOD is often linked to Kapha (water/earth) or Vata (air/space) imbalances, which disrupt hormone production and ovarian function. Triggers include poor diet, inactivity, stress, or genetic factors.\n\nCommon Symptoms:\n- Irregular or missed periods\n- Weight gain or difficulty losing weight\n- Acne or skin changes\n- Excess hair growth\n- Mood swings or irritability\n- Fertility challenges\n\nH2: Ayurvedic Healing Approach\n- Shatavari and Ashoka for hormonal balance\n- Lodhra for ovarian and uterine health\n- Low-glycemic, whole foods\n- Regular exercise and movement\n- Mindful eating and portion control\n- Stress management and rest\n\nH2: Benefits of Ayurvedic Care\n- Improved cycle regularity\n- Reduced symptoms and discomfort\n- Enhanced mood and energy\n- Better reproductive resilience\n- Natural support for hormonal health\n- Greater vitality and well-being\n\n🌿 Restore Your Harmony\nPCOS/PCOD is your body's way of asking for balance. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your hormonal harmony and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    meta: {
      title: 'Ayurvedic PCOS/PCOD Solutions | BookMyAyurveda',
      description: 'Natural Ayurvedic care for PCOS/PCOD. Restore hormonal balance, healthy cycles, and fertility with expert consultations and herbal protocols.',
      keywords: 'Ayurveda, PCOS, PCOD, hormonal balance, fertility, Kapha, Vata, Shatavari, Ashoka, Lodhra',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default PCOSPCODPage;
