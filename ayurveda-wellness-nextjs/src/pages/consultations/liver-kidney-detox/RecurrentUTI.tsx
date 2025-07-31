import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const RecurrentUTI = () => {
  const suggestedProducts = [
    {
      id: 'punarnava',
      name: 'Punarnava Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/punarnava-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'gokshura',
      name: 'Gokshura Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/gokshura-benefits-1.jpg',
      price: '₹249 / 100g',
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
      title: 'Recurrent UTI',
      breadcrumb: 'Liver, Kidney & Detox',
      breadcrumbHref: '/consultations/liver-kidney-detox',
    },
    image: '/Sub Category/Liver, Kidney & Detox/Recurrent UTI.jpg',
    description: `Title: Recurrent UTI — Soothe & Prevent, Naturally\n\nRecurrent urinary tract infections (UTIs) cause discomfort, burning, and frequent urination. Ayurveda sees recurrent UTIs as a sign of aggravated Pitta or Vata dosha, impaired Agni, and toxin (Ama) buildup. Through urinary tract-supportive herbs, dietary changes, and lifestyle practices, Ayurveda helps restore comfort and prevent recurrence.\n\nH1: Ayurvedic Perspective on Recurrent UTI\nRecurrent UTIs are often linked to Pitta (fire) or Vata (movement/air) imbalances, which disturb urinary tract function and increase inflammation. Triggers include dehydration, poor hygiene, sexual activity, or chronic illness.\n\nCommon Symptoms:\n- Burning or pain during urination\n- Frequent urge to urinate\n- Cloudy or foul-smelling urine\n- Pelvic discomfort\n- Fatigue or malaise\n- Difficulty with daily activities\n\nH2: Ayurvedic Healing Approach\n- Punarnava and Gokshura for urinary support\n- Varuna for detoxification\n- Cooling, hydrating foods\n- Adequate hydration\n- Good hygiene practices\n- Stress management and rest\n\nH2: Benefits of Ayurvedic Care\n- Reduced pain and burning\n- Improved urinary comfort\n- Enhanced energy and resilience\n- Natural support for urinary health\n- Greater vitality and well-being\n\n🌿 Soothe & Prevent, Naturally\nRecurrent UTIs are your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your urinary health and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    meta: {
      title: 'Ayurvedic Consultation for Recurrent UTI | Book Online',
      description: 'Book your personalized Ayurvedic consultation online for Recurrent UTI. Natural healing with herbs, diet, and lifestyle changes for lasting relief.',
      keywords: 'Recurrent UTI Ayurveda, Recurrent UTI Treatment, Book Ayurveda Online, Ayurvedic Consultation Recurrent UTI, Natural Healing, Ayurveda Remedies, Recurrent UTI Relief, Holistic Wellness'
    }
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default RecurrentUTI;
