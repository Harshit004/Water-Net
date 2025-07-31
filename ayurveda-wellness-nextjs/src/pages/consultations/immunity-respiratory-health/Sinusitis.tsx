import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const Sinusitis = () => {
  const subcategoryData = {
    bannerContent: {
      title: 'Sinus Congestion',
      breadcrumb: 'Immunity & Respiratory Health',
      breadcrumbHref: '/consultations/immunity-respiratory-health',
    },
    image: '/Sub Category/Immunity & Respiratory Health/Sinus Congestion.jpg',
    description: "When Pressure Builds Behind the Eyes — Clear Your Sinuses the Ayurvedic Way. That dull headache, blocked nose, and heaviness in the face isn't just a passing cold — it's your sinuses asking for relief. Sinus congestion can become a frustrating, recurring issue leading to facial pressure and brain fog.",
    symptoms: [
      "Heaviness or tightness in forehead, cheeks, or around eyes",
      "Thick mucus discharge or nasal stuffiness",
      "Loss of smell or taste",
      "Headaches that worsen with bending down",
      "Post-nasal drip, sore throat, or persistent cough",
      "Tiredness or cloudy thinking during flare-ups"
    ],
    causes: [
      "Kapha dosha imbalance causing mucus accumulation",
      "Blocked sinus channels (Pratishyaya)",
      "Weak Agni allowing toxin buildup",
      "Vata involvement causing dryness and irritation",
      "Environmental factors like pollution or allergens",
      "Poor digestion contributing to inflammation"
    ],
    ayurvedicApproach: "From an Ayurvedic perspective, sinus congestion results from an imbalance in Kapha dosha, which governs mucus and heaviness in the body. When Kapha increases due to cold weather, damp foods, or poor digestion, it accumulates in the sinus channels and leads to obstruction, inflammation, and pressure. Treatment focuses on opening blocked channels and eliminating accumulated Kapha through targeted nasal therapies.",
    treatments: [
      "Nasya therapy with Anu Tailam or Shadbindu Tailam",
      "Herbal steam inhalation with Ajwain and Eucalyptus",
      "Turmeric, Pippali, and Trikatu for decongestant action",
      "Sitopaladi Churna for mucus elimination",
      "Warm compresses and gentle sinus massage",
      "Dietary modifications to reduce Kapha"
    ],
    benefits: [
      "Relief from sinus pressure and pain",
      "Improved nasal drainage and breathing",
      "Reduced headaches and facial heaviness",
      "Clearer mental function",
      "Prevention of recurring sinus infections",
      "Enhanced sense of smell and taste"
    ],
    meta: {
      title: 'Ayurvedic Consultation for Sinus Congestion | Book Online',
      description: 'Book your personalized Ayurvedic consultation online for Sinus Congestion. Natural healing with herbs, diet, and lifestyle changes for lasting relief.',
      keywords: 'Sinus Congestion Ayurveda, Sinus Congestion Treatment, Book Ayurveda Online, Ayurvedic Consultation Sinus Congestion, Natural Healing, Ayurveda Remedies, Sinus Congestion Relief, Holistic Wellness'
    }
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default Sinusitis;
