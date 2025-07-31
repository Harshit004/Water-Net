import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const PrematureEjaculation = () => {
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
      title: 'Premature Ejaculation',
      breadcrumb: "Men's Health",
      breadcrumbHref: '/consultations/mens-health',
    },
    image: '/Sub Category/Men\u2019s Health/Premature Ejaculation.jpg',
    description: `Title: Premature Ejaculation — Regain Control, Naturally\n\nPremature ejaculation is the inability to control ejaculation, leading to distress and relationship concerns. Ayurveda sees premature ejaculation as a sign of aggravated Vata or Pitta dosha, depleted Shukra Dhatu (reproductive tissue), and stress. Through nervine and aphrodisiac herbs, dietary changes, and lifestyle practices, Ayurveda helps restore control and confidence.\n\nH1: Ayurvedic Perspective on Premature Ejaculation\nPremature ejaculation is often linked to Vata (movement/air) or Pitta (fire) imbalances, which disturb nervous control and reproductive function. Triggers include anxiety, stress, overexcitement, or weakness of reproductive tissues.\n\nCommon Symptoms:\n- Inability to control ejaculation\n- Short duration of intercourse\n- Anxiety or distress\n- Low confidence\n- Relationship concerns\n- Fatigue or weakness\n\nH2: Ayurvedic Healing Approach\n- Ashwagandha and Shilajit for stamina\n- Kapikacchu for nervous control\n- Nourishing, grounding foods\n- Mindful breathing and relaxation\n- Stress management and rest\n- Regular routines and sleep\n\nH2: Benefits of Ayurvedic Care\n- Improved control and stamina\n- Reduced anxiety and distress\n- Enhanced confidence and satisfaction\n- Natural support for reproductive health\n- Greater vitality and well-being\n\n🌿 Regain Control, Naturally\nPremature ejaculation is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your confidence and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    meta: {
      title: 'Ayurvedic Consultation for Premature Ejaculation | Book Online',
      description: 'Book your personalized Ayurvedic consultation online for Premature Ejaculation. Natural healing with herbs, diet, and lifestyle changes for lasting relief.',
      keywords: 'Premature Ejaculation Ayurveda, Premature Ejaculation Treatment, Book Ayurveda Online, Ayurvedic Consultation Premature Ejaculation, Natural Healing, Ayurveda Remedies, Premature Ejaculation Relief, Holistic Wellness'
    }
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default PrematureEjaculation;
