import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const UrinaryIncontinence = () => {
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
      id: 'ashwagandha',
      name: 'Ashwagandha Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashwagandha-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Urinary Incontinence',
      breadcrumb: 'Liver, Kidney & Detox',
      breadcrumbHref: '/consultations/liver-kidney-detox',
    },
    image: '/Sub Category/Liver, Kidney & Detox/Urinary Incontinence.jpg',
    description: `Title: Urinary Incontinence — Regain Control, Naturally\n\nUrinary incontinence causes involuntary leakage and loss of bladder control. Ayurveda sees urinary incontinence as a sign of aggravated Vata or Kapha dosha, impaired Agni, and weakened pelvic tissues. Through bladder-supportive herbs, dietary changes, and lifestyle practices, Ayurveda helps restore control and comfort.\n\nH1: Ayurvedic Perspective on Urinary Incontinence\nUrinary incontinence is often linked to Vata (movement/air) or Kapha (water/earth) imbalances, which disturb bladder function and tissue tone. Triggers include aging, childbirth, chronic illness, or nerve dysfunction.\n\nCommon Symptoms:\n- Involuntary urine leakage\n- Urgency or frequency\n- Difficulty holding urine\n- Pelvic discomfort\n- Fatigue or malaise\n- Difficulty with daily activities\n\nH2: Ayurvedic Healing Approach\n- Gokshura and Punarnava for bladder support\n- Ashwagandha for tissue strength\n- Nourishing, grounding foods\n- Pelvic floor exercises\n- Good hygiene practices\n- Stress management and rest\n\nH2: Benefits of Ayurvedic Care\n- Improved bladder control\n- Reduced leakage and urgency\n- Enhanced energy and resilience\n- Natural support for urinary health\n- Greater vitality and well-being\n\n🌿 Regain Control, Naturally\nUrinary incontinence is your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your bladder health and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    meta: {
      title: 'Ayurvedic Consultation for Urinary Incontinence | Book Online',
      description: 'Book your personalized Ayurvedic consultation online for Urinary Incontinence. Natural healing with herbs, diet, and lifestyle changes for lasting relief.',
      keywords: 'Urinary Incontinence Ayurveda, Urinary Incontinence Treatment, Book Ayurveda Online, Ayurvedic Consultation Urinary Incontinence, Natural Healing, Ayurveda Remedies, Urinary Incontinence Relief, Holistic Wellness'
    }
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default UrinaryIncontinence;
