import CategoryPageWithContentTemplate from '@/components/CategoryPageWithContentTemplate';

const HormonalBalanceEndocrineHealth = () => {
  const categoryContent = {
    subtitle: "Balance Your Hormones, Naturally — Ayurvedic Endocrine Care",
    description: "Hormonal imbalances affect every aspect of your health—from energy and mood to weight and metabolism. At BookMyAyurveda.com, we understand that hormones are the body's messengers, and when they're out of sync, your entire system suffers. Our Ayurvedic approach goes beyond symptom management to address the root causes of hormonal disorders. Whether you're dealing with thyroid issues, diabetes, PCOS, or adrenal fatigue, our personalized treatments restore hormonal harmony through natural herbs, lifestyle modifications, and targeted therapies. Experience the difference of holistic endocrine care that works with your body's natural rhythms.",
    offerings: [
      "Comprehensive hormonal assessment and personalized treatment plans",
      "Natural thyroid support for hypothyroidism and hyperthyroidism",
      "Blood sugar balance and diabetes management through Ayurvedic herbs",
      "PCOS/PCOD treatment with lifestyle and dietary guidance",
      "Adrenal fatigue recovery and stress hormone regulation"
    ],
    closingMessage: "Your hormones are the conductors of your body's symphony. Ayurveda helps restore their natural rhythm—so you can feel balanced, energized, and in harmony with your true self. Book your consultation today and begin your journey to hormonal wellness."
  };

  const subcategories = [
    {
      name: 'Hypothyroidism & Hyperthyroidism',
      href: '/consultations/hormonal-balance-endocrine-health/hypothyroidism-hyperthyroidism',
      description: 'Natural thyroid support for both underactive and overactive thyroid conditions through targeted herbs and lifestyle modifications.',
      symptoms: ['Fatigue', 'Weight changes', 'Temperature sensitivity', 'Mood swings'],
      image: '/Sub Category/Hormonal Balance & Endocrine Health/Hypothyroidism  Hyperthyroidism.jpg'
    },
    {
      name: 'Blood Sugar Imbalance & Prediabetes',
      href: '/consultations/hormonal-balance-endocrine-health/blood-sugar-imbalance-prediabetes',
      description: 'Stabilize blood sugar levels and prevent diabetes progression through natural glucose regulation and metabolic support.',
      symptoms: ['Blood sugar fluctuations', 'Fatigue after meals', 'Increased thirst', 'Frequent urination'],
      image: '/Sub Category/Hormonal Balance & Endocrine Health/Blood Sugar Imbalance  Prediabetes.jpg'
    },
    {
      name: 'PCOS/PCOD',
      href: '/consultations/hormonal-balance-endocrine-health/pcos-pcod',
      description: 'Comprehensive treatment for Polycystic Ovary Syndrome through hormonal balance, weight management, and fertility support.',
      symptoms: ['Irregular periods', 'Weight gain', 'Facial hair', 'Acne'],
      image: '/Sub Category/Hormonal Balance & Endocrine Health/PCOS  PCOD.jpg'
    },
    {
      name: 'Adrenal Fatigue',
      href: '/consultations/hormonal-balance-endocrine-health/adrenal-fatigue',
      description: 'Restore adrenal function and energy levels through stress management, adaptogenic herbs, and lifestyle optimization.',
      symptoms: ['Chronic fatigue', 'Stress intolerance', 'Low blood pressure', 'Salt cravings'],
      image: '/Sub Category/Hormonal Balance & Endocrine Health/Adrenal Fatigue.jpg'
    },
    {
      name: 'Irregular Hormonal Cycles',
      href: '/consultations/hormonal-balance-endocrine-health/irregular-hormonal-cycles',
      description: 'Regulate menstrual cycles and hormonal patterns through natural therapies and cycle-specific treatments.',
      symptoms: ['Irregular periods', 'Hormonal fluctuations', 'Mood changes', 'Cycle-related symptoms'],
      image: '/Sub Category/Hormonal Balance & Endocrine Health/Irregular Hormonal Cycles.jpg'
    }
  ];

  return (
    <CategoryPageWithContentTemplate
      categoryTitle="Hormonal Balance & Endocrine Health"
      categoryDescription="Restore hormonal harmony and endocrine function through personalized Ayurvedic care. Our natural treatments address thyroid disorders, diabetes, PCOS, and other hormonal imbalances."
      categoryImage="/Category/Harmonal Imbalance.jpg"
      categoryContent={categoryContent}
      subcategories={subcategories}
    />
  );
};

export default HormonalBalanceEndocrineHealth;
