import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const ProstateHealth = () => {
  const suggestedProducts = [
    {
      id: 'gokshura',
      name: 'Gokshura Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/gokshura-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'punarnava',
      name: 'Punarnava Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/punarnava-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'varuna',
      name: 'Varuna Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/varuna-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Prostate Health',
      breadcrumb: "Men's Health",
      breadcrumbHref: '/consultations/mens-health',
    },
    image: '/Sub Category/Men\u2019s Health/Prostate Health.jpg',
    description: `Title: Prostate Health — Support & Protect, Naturally\n\nProstate health is vital for urinary comfort and reproductive function. Ayurveda sees prostate issues as a sign of aggravated Vata or Kapha dosha, impaired Agni, and tissue congestion. Through prostate-supportive herbs, dietary changes, and lifestyle practices, Ayurveda helps restore comfort and urinary flow.\n\nH1: Ayurvedic Perspective on Prostate Health\nProstate issues are often linked to Vata (movement/air) or Kapha (water/earth) imbalances, which disturb tissue function and increase congestion. Triggers include aging, poor diet, inactivity, or chronic illness.\n\nCommon Symptoms:\n- Frequent urination\n- Weak urine stream\n- Difficulty starting or stopping\n- Pelvic discomfort\n- Fatigue or malaise\n- Difficulty with daily activities\n\nH2: Ayurvedic Healing Approach\n- Gokshura and Punarnava for prostate support\n- Varuna for detoxification\n- Nourishing, grounding foods\n- Adequate hydration\n- Gentle exercise and movement\n- Stress management and rest\n\nH2: Benefits of Ayurvedic Care\n- Improved urinary comfort\n- Enhanced energy and resilience\n- Natural support for prostate health\n- Greater vitality and well-being\n\n🌿 Support & Protect, Naturally\nProstate health is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your prostate health and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    meta: {
      title: 'Ayurvedic Consultation for Prostate Health | Book Online',
      description: 'Book your personalized Ayurvedic consultation online for Prostate Health. Natural healing with herbs, diet, and lifestyle changes for lasting relief.',
      keywords: 'Prostate Health Ayurveda, Prostate Health Treatment, Book Ayurveda Online, Ayurvedic Consultation Prostate Health, Natural Healing, Ayurveda Remedies, Prostate Health Relief, Holistic Wellness'
    }
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default ProstateHealth;
