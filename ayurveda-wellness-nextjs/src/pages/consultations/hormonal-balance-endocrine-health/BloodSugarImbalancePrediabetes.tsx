import React from 'react';
import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const BloodSugarImbalancePrediabetes = () => {
  const suggestedProducts = [
    {
      id: 'jamun',
      name: 'Jamun Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/jamun-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'karela',
      name: 'Karela Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/karela-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'triphala',
      name: 'Triphala Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/triphala-benefits-1.jpg',
      price: '₹249 / 100g',
    },
  ];

  const subcategoryData = {
    subcategoryTitle: 'Blood Sugar Imbalance / Prediabetes',
    categoryTitle: 'Hormonal Balance & Endocrine Health',
    categoryHref: '/consultations/hormonal-balance-endocrine-health',
    image: '/Sub Category/Hormonal Balance & Endocrine Health/Blood Sugar Imbalance  Prediabetes.jpg',
    description: `Title: Blood Sugar Imbalance / Prediabetes — Restore Balance, Naturally\n\nBlood sugar imbalance and prediabetes are early warning signs of metabolic dysfunction. Ayurveda sees these conditions as signs of aggravated Kapha and Pitta doshas, impaired Agni (digestive fire), and tissue dysfunction. Through blood sugar-regulating herbs, dietary changes, and lifestyle practices, Ayurveda helps restore metabolic balance and prevent progression to diabetes.\n\nH1: Ayurvedic Perspective on Blood Sugar Imbalance\nBlood sugar imbalance is often linked to Kapha (water/earth) and Pitta (fire) imbalances, which disturb insulin sensitivity and glucose metabolism. Triggers include poor diet, stress, inactivity, or genetic factors.\n\nCommon Symptoms:\n- Fluctuating blood sugar levels\n- Fatigue or energy crashes\n- Increased thirst or hunger\n- Difficulty losing weight\n- Brain fog or concentration issues\n- Frequent urination\n\nH2: Ayurvedic Healing Approach\n- Jamun and Karela for blood sugar regulation\n- Triphala for metabolic support\n- Low-glycemic, balanced diet\n- Regular exercise and movement\n- Stress management and sleep\n- Digestive fire enhancement\n\nH2: Benefits of Ayurvedic Care\n- Improved blood sugar stability\n- Enhanced insulin sensitivity\n- Natural support for metabolic health\n- Greater energy and vitality\n\n🌿 Restore Balance, Naturally\nBlood sugar imbalance is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your metabolic health from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    bannerContent: {
      title: 'Blood Sugar Imbalance / Prediabetes',
      breadcrumb: 'Hormonal Balance & Endocrine Health',
      breadcrumbHref: '/consultations/hormonal-balance-endocrine-health',
    },
    meta: {
      title: 'Ayurvedic Blood Sugar Imbalance / Prediabetes Solutions | BookMyAyurveda',
      description: 'Restore blood sugar balance naturally with Ayurveda. Personalized herbal care, lifestyle tips, and expert consultations for metabolic health.',
      keywords: 'Ayurveda, blood sugar, prediabetes, metabolic health, Kapha, Pitta, Jamun, Karela, Triphala',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default BloodSugarImbalancePrediabetes;
