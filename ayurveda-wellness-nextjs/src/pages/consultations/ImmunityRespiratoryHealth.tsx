import CategoryPageWithContentTemplate from '@/components/CategoryPageWithContentTemplate';

const ImmunityRespiratoryHealth = () => {
  const categoryContent = {
    subtitle: "Breathe Easy — Ayurvedic Support for Immunity & Respiratory Wellness",
    description: "In today's high-pressure lifestyle, stress, anxiety, and sleepless nights have quietly become the norm. We often ignore these signs or mask them with temporary fixes — but Ayurveda sees them as messages from the body, calling for deeper balance. According to this ancient healing science, the mind and body are closely connected. When this connection is disturbed, it affects emotional stability, mental clarity, and the ability to rest peacefully. At BookMyAyurveda.com, our online consultations help uncover the root causes of mental unrest by identifying imbalances in your unique doshic constitution. With gentle, personalized guidance, we help you calm the nervous system and restore a sense of inner ease — naturally.",
    offerings: [
      "Mind-Body Practices: Simple, sustainable routines including meditation, yoga, and breathing techniques",
      "Herbal Support: Time-tested herbs like Brahmi and Ashwagandha to support clarity and calm",
      "Sleep-Friendly Solutions: Guidance on evening habits and natural supplements to improve sleep quality",
      "Lifestyle Recommendations: Diet and daily choices that support emotional and psychological well-being"
    ],
    closingMessage: "Ayurveda Isn't a Quick Fix — It's a Long-Term Investment in Your Health. Mental peace doesn't come from shortcuts. Ayurveda nurtures the mind gently and consistently — helping you sleep better, stress less, and feel more centered every day."
  };

  const subcategories = [
    {
      name: 'Frequent Cold & Cough',
      href: '/consultations/immunity-respiratory-health/frequent-cold-cough',
      description: 'Strengthen immunity and reduce recurring respiratory infections through immune-boosting herbs and lifestyle modifications.',
      symptoms: ['Recurring infections', 'Persistent cough', 'Nasal congestion', 'Low immunity'],
      image: '/Sub Category/Immunity & Respiratory Health/Frequent Colds  Infections.jpg'
    },
    {
      name: 'Chronic Bronchitis',
      href: '/consultations/immunity-respiratory-health/chronic-bronchitis',
      description: 'Manage chronic bronchitis naturally through respiratory herbs, breathing exercises, and anti-inflammatory treatments.',
      symptoms: ['Persistent cough', 'Mucus production', 'Breathing difficulty', 'Chest tightness'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    },
    {
      name: 'Allergies & Hay Fever',
      href: '/consultations/immunity-respiratory-health/allergies-hay-fever',
      description: 'Natural allergy relief through immune modulation, anti-histamine herbs, and environmental sensitivity reduction.',
      symptoms: ['Sneezing', 'Runny nose', 'Itchy eyes', 'Seasonal allergies'],
      image: '/Sub Category/Immunity & Respiratory Health/Allergic Rhinitis.jpg'
    },
    {
      name: 'Asthma Support',
      href: '/consultations/immunity-respiratory-health/asthma-support',
      description: 'Complementary asthma management through bronchodilator herbs, breathing techniques, and trigger identification.',
      symptoms: ['Wheezing', 'Shortness of breath', 'Chest tightness', 'Breathing attacks'],
      image: '/Sub Category/Immunity & Respiratory Health/Asthma (mild to moderate).jpg'
    },
    {
      name: 'Sinusitis',
      href: '/consultations/immunity-respiratory-health/sinusitis',
      description: 'Clear sinus congestion and prevent infections through nasal therapies, steam treatments, and anti-inflammatory herbs.',
      symptoms: ['Sinus pressure', 'Nasal blockage', 'Facial pain', 'Post-nasal drip'],
      image: '/Sub Category/Immunity & Respiratory Health/Sinus Congestion.jpg'
    },
    {
      name: 'Low Immunity / Weak Resistance',
      href: '/consultations/immunity-respiratory-health/low-immunity-weak-resistance',
      description: 'Boost immunity and resistance with Ayurvedic herbs, lifestyle changes, and immune-supportive nutrition.',
      symptoms: ['Frequent illness', 'Slow recovery', 'Fatigue', 'Low energy'],
      image: '/Sub Category/Immunity & Respiratory Health/Low Immunity.jpg'
    }
  ];

  return (
    <CategoryPageWithContentTemplate
      categoryTitle="Immunity & Respiratory Health"
      categoryDescription="Strengthen your body's natural defenses and breathe freely with Ayurvedic immunity and respiratory care. Our holistic treatments boost immune function and support healthy breathing naturally."
      categoryImage="/Category/Immunity & Respiratory Health.jpg"
      categoryContent={categoryContent}
      subcategories={subcategories}
    />
  );
};

export default ImmunityRespiratoryHealth;
