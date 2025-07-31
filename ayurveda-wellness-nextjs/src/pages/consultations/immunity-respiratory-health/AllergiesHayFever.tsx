import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const AllergiesHayFever = () => {
  const suggestedProducts = [
    {
      id: 'haridra',
      name: 'Haridra (Turmeric) Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/turmeric-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'trikatu',
      name: 'Trikatu Churna',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/trikatu-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'tulsi',
      name: 'Tulsi Drops',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/tulsi-benefits-1.jpg',
      price: '₹199 / 30ml',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Allergic Rhinitis',
      breadcrumb: 'Immunity & Respiratory Health',
      breadcrumbHref: '/consultations/immunity-respiratory-health',
    },
    image: "/Sub Category/Immunity & Respiratory Health/Allergies  Hay Fever.jpg",
    description: `Title: Allergies & Hay Fever — Breathe Free, Naturally\n\nAllergies and hay fever cause sneezing, congestion, and irritation. Ayurveda sees these as signs of aggravated Vata, Pitta, or Kapha dosha, impaired Agni, and hypersensitive immunity. Through anti-allergic herbs, dietary changes, and lifestyle practices, Ayurveda helps restore immune balance and respiratory comfort.\n\nH1: Ayurvedic Perspective on Allergies & Hay Fever\nAllergies are often linked to Vata (movement/air), Pitta (fire), or Kapha (water/earth) imbalances, which disturb immune response and mucous membranes. Triggers include pollen, dust, foods, or weather changes.\n\nCommon Symptoms:\n- Sneezing or runny nose\n- Nasal congestion or itching\n- Watery or itchy eyes\n- Cough or throat irritation\n- Fatigue or malaise\n- Headache or heaviness\n\nH2: Ayurvedic Healing Approach\n- Haridra (Turmeric) and Trikatu for immune balance\n- Tulsi for respiratory support\n- Warm, spiced foods and teas\n- Avoiding allergens and processed foods\n- Steam inhalation and nasal irrigation\n- Regular exercise and breathing practices\n\nH2: Benefits of Ayurvedic Care\n- Reduced allergy symptoms\n- Improved breathing comfort\n- Enhanced energy and resilience\n- Fewer flare-ups and reactions\n- Natural support for immune health\n- Greater vitality and well-being\n\n🌿 Breathe Free, Naturally\nAllergies and hay fever are your body's way of asking for immune support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your immune balance and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
    meta: {
      title: 'Ayurvedic Consultation for Allergic Rhinitis | Book Online',
      description: 'Book your personalized Ayurvedic consultation online for Allergic Rhinitis. Natural healing with herbs, diet, and lifestyle changes for lasting relief.',
      keywords: 'Allergic Rhinitis Ayurveda, Allergic Rhinitis Treatment, Book Ayurveda Online, Ayurvedic Consultation Allergic Rhinitis, Natural Healing, Ayurveda Remedies, Allergic Rhinitis Relief, Holistic Wellness'
    }
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default AllergiesHayFever;
