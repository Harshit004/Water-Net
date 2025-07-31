import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const MaleInfertility = () => {
  const suggestedProducts = [
    {
      id: 'ashwagandha',
      name: 'Ashwagandha Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashwagandha-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'shilajit',
      name: 'Shilajit Resin',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/shilajit-benefits-1.jpg',
      price: '₹499 / 20g',
    },
    {
      id: 'kapikacchu',
      name: 'Kapikacchu Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/kapikacchu-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Fertility / Low Sperm Count',
      breadcrumb: "Men's Health",
      breadcrumbHref: '/consultations/mens-health',
    },
    image: '/Sub Category/Men\u2019s Health/Fertility  Low Sperm Count.jpg',
    description: `Title: Male Infertility — Restore Fertility, Naturally\n\nMale infertility affects conception, confidence, and relationships. Ayurveda sees male infertility as a sign of aggravated Vata or Pitta dosha, depleted Shukra Dhatu (reproductive tissue), and stress. Through aphrodisiac and rejuvenative herbs, dietary changes, and lifestyle practices, Ayurveda helps restore fertility and reproductive health.\n\nH1: Ayurvedic Perspective on Male Infertility\nMale infertility is often linked to Vata (movement/air) or Pitta (fire) imbalances, which disturb sperm production and reproductive function. Triggers include stress, poor diet, toxins, or chronic illness.\n\nCommon Symptoms:\n- Low sperm count or motility\n- Difficulty conceiving\n- Fatigue or weakness\n- Low libido\n- Anxiety or distress\n- Relationship concerns\n\nH2: Ayurvedic Healing Approach\n- Ashwagandha and Shilajit for fertility support\n- Kapikacchu for sperm health\n- Nourishing, protein-rich foods\n- Mindful movement and exercise\n- Stress management and rest\n- Regular routines and sleep\n\nH2: Benefits of Ayurvedic Care\n- Improved sperm count and motility\n- Enhanced fertility and confidence\n- Natural support for reproductive health\n- Greater vitality and well-being\n\n🌿 Restore Fertility, Naturally\nMale infertility is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your fertility and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    meta: {
      title: 'Ayurvedic Consultation for Fertility / Low Sperm Count | Book Online',
      description: 'Book your personalized Ayurvedic consultation online for Fertility / Low Sperm Count. Natural healing with herbs, diet, and lifestyle changes for lasting relief.',
      keywords: 'Fertility / Low Sperm Count Ayurveda, Fertility / Low Sperm Count Treatment, Book Ayurveda Online, Ayurvedic Consultation Fertility / Low Sperm Count, Natural Healing, Ayurveda Remedies, Fertility / Low Sperm Count Relief, Holistic Wellness'
    }
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default MaleInfertility;
