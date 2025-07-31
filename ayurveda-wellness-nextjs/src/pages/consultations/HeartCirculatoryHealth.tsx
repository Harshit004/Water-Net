import CategoryPageWithContentTemplate from '@/components/CategoryPageWithContentTemplate';

const HeartCirculatoryHealth = () => {
  const categoryContent = {
    subtitle: "Strengthen Your Heart, The Natural Way",
    description: "In today's fast-paced world, issues like high blood pressure, rising cholesterol, and sluggish circulation are becoming far too common. But in Ayurveda, the heart is more than a physical organ — it's a powerful center of emotion, vitality, and inner harmony. At BookMyAyurveda.com, our online consultations go beyond numbers and reports. We focus on identifying root causes such as stress, poor digestion, or blocked energy flow, and offer natural ways to support long-term cardiovascular wellness.",
    offerings: [
      "High Blood Pressure & Palpitations: Soothing herbs and calming daily routines help balance blood pressure and ease stress-related palpitations",
      "Cholesterol & Lipid Management: Natural formulations and food-based plans that safely balance triglycerides and improve overall heart health",
      "Poor Circulation & Varicose Veins: Gentle therapies to improve blood flow, reduce swelling, and strengthen vein health in the limbs",
      "Heart Toning & Longevity: Herbs like Arjuna work as natural tonics to enhance cardiac strength and support lasting vitality"
    ],
    closingMessage: "Your heart deserves more than quick fixes. With Ayurveda, we support your journey to a stronger heart and a calmer mind — naturally and holistically. Book your online consultation today at BookMyAyurveda.com and take the first step toward lifelong cardiovascular health."
  };

  const subcategories = [
    {
      name: 'High Blood Pressure',
      href: '/consultations/heart-circulatory-health/high-blood-pressure',
      description: 'Manage blood pressure naturally through stress reduction, heart-calming herbs, and lifestyle modifications.',
      symptoms: ['Elevated BP readings', 'Headaches', 'Dizziness', 'Heart palpitations'],
      image: '/Sub Category/Heart & Circulatory Health/High Blood Pressure.jpg'
    },
    {
      name: 'High Cholesterol',
      href: '/consultations/heart-circulatory-health/high-cholesterol',
      description: 'Lower cholesterol naturally with Ayurvedic herbs, dietary changes, and lifestyle support.',
      symptoms: ['Elevated cholesterol', 'Cardiovascular risk', 'Fatigue', 'Poor circulation'],
      image: '/Sub Category/Heart & Circulatory Health/High Cholesterol.jpg'
    },
    {
      name: 'Varicose Veins',
      href: '/consultations/heart-circulatory-health/varicose-veins',
      description: 'Support vein health and circulation with Ayurvedic therapies, herbs, and movement practices.',
      symptoms: ['Swollen veins', 'Leg discomfort', 'Heaviness', 'Fatigue'],
      image: '/Sub Category/Heart & Circulatory Health/Varicose Veins.jpg'
    },
    {
      name: 'Poor Circulation',
      href: '/consultations/heart-circulatory-health/poor-circulation',
      description: 'Improve circulation and cardiovascular health with Ayurvedic herbs, exercise, and dietary support.',
      symptoms: ['Cold extremities', 'Numbness', 'Tingling', 'Fatigue'],
      image: '/Sub Category/Heart & Circulatory Health/Poor Circulation.jpg'
    },
    {
      name: 'Palpitations',
      href: '/consultations/heart-circulatory-health/palpitations',
      description: 'Calm palpitations and support heart rhythm with Ayurvedic herbs, stress management, and lifestyle changes.',
      symptoms: ['Irregular heartbeat', 'Anxiety', 'Chest discomfort', 'Fatigue'],
      image: '/Sub Category/Heart & Circulatory Health/Palpitations.jpg'
    },
    {
      name: 'Cardiac Weakness',
      href: '/consultations/heart-circulatory-health/cardiac-weakness',
      description: 'Strengthen cardiac function and resilience with Ayurvedic therapies, herbs, and restorative routines.',
      symptoms: ['Weakness', 'Fatigue', 'Shortness of breath', 'Low stamina'],
      image: '/Sub Category/Heart & Circulatory Health/High Blood Pressure.jpg'
    }
  ];

  return (
    <CategoryPageWithContentTemplate
      categoryTitle="Heart & Circulatory Health"
      categoryDescription="Support cardiovascular health and optimal circulation through Ayurvedic heart care. Our natural treatments promote heart health and circulatory wellness with gentle, effective therapies."
      categoryImage="/Category/Heart & Circulatory Health.jpg"
      categoryContent={categoryContent}
      subcategories={subcategories}
    />
  );
};

export default HeartCirculatoryHealth;
