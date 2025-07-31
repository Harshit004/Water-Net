import CategoryPageWithContentTemplate from '@/components/CategoryPageWithContentTemplate';

const MentalHealthSleep = () => {
  const categoryContent = {
    subtitle: "Calm Your Mind, Naturally — Ayurvedic Support for Mental Wellness",
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
      name: 'Anxiety & Panic Attacks',
      href: '/consultations/mental-health-sleep/anxiety-panic-attacks',
      description: 'Natural remedies for anxiety disorders and panic attacks using calming herbs, breathing techniques, and stress management practices.',
      symptoms: ['Racing thoughts', 'Panic episodes', 'Physical tension', 'Sleep disturbances'],
      image: '/Sub Category/Mental Health & Sleep/Anxiety & Panic Attacks.jpg'
    },
    {
      name: 'Depression',
      href: '/consultations/mental-health-sleep/depression',
      description: 'Ayurvedic support for depression: herbal remedies, lifestyle changes, and expert consultations. Restore emotional balance and vitality naturally.',
      symptoms: ['Low mood', 'Loss of interest', 'Fatigue', 'Sleep disturbances'],
      image: '/Sub Category/Mental Health & Sleep/Depression (mild to moderate).jpg'
    },
    {
      name: 'Sleep Disorders & Insomnia',
      href: '/consultations/mental-health-sleep/sleep-disorders-insomnia',
      description: 'Ayurvedic solutions for sleep disorders and insomnia. Herbal remedies, lifestyle changes, and expert consultations for restful, natural sleep.',
      symptoms: ['Difficulty falling or staying asleep', 'Fatigue', 'Irritability', 'Poor concentration'],
      image: '/Sub Category/Mental Health & Sleep/Sleep Disorders  Insomnia.jpg'
    },
    {
      name: 'Brain Fog / Poor Focus',
      href: '/consultations/mental-health-sleep/brain-fog-poor-focus',
      description: 'Regain mental clarity and focus with Ayurvedic care. Herbal remedies, lifestyle tips, and expert consultations for brain fog and poor concentration.',
      symptoms: ['Mental cloudiness', 'Poor concentration', 'Memory issues', 'Confusion'],
      image: '/Sub Category/Mental Health & Sleep/Brain Fog  Poor Focus.jpg'
    },
    {
      name: 'Mental Fatigue',
      href: '/consultations/mental-health-sleep/mental-fatigue',
      description: 'Overcome mental fatigue with Ayurveda. Herbal remedies, lifestyle tips, and expert consultations to restore clarity, energy, and focus.',
      symptoms: ['Mental exhaustion', 'Reduced productivity', 'Cognitive slowness', 'Irritability'],
      image: '/Sub Category/Mental Health & Sleep/Mental Fatigue.jpg'
    },
    {
      name: 'Chronic Stress & Burnout',
      href: '/consultations/mental-health-sleep/chronic-stress-burnout',
      description: 'Natural Ayurvedic solutions for chronic stress and burnout. Personalized herbal care, lifestyle changes, and expert consultations for calm and resilience.',
      symptoms: ['Anxiety', 'Irritability', 'Fatigue', 'Sleep disturbances'],
      image: '/Sub Category/Mental Health & Sleep/Chronic Stress  Burnout.jpg'
    }
  ];

  return (
    <CategoryPageWithContentTemplate
      categoryTitle="Mental Health & Sleep"
      categoryDescription="Restore mental balance and peaceful sleep with holistic Ayurvedic therapies. Our natural approaches address stress, anxiety, and sleep disorders while promoting emotional well-being and cognitive clarity."
      categoryImage="/Category/Mental Health & Sleep.jpg"
      categoryContent={categoryContent}
      subcategories={subcategories}
    />
  );
};

export default MentalHealthSleep;
