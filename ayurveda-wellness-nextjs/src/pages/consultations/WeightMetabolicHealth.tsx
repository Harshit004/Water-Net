import CategoryPageWithContentTemplate from '@/components/CategoryPageWithContentTemplate';

const WeightMetabolicHealth = () => {
  const categoryContent = {
    subtitle: "Achieve Balance — Ayurvedic Solutions for Weight & Metabolism",
    description: "Struggling with weight or a sluggish metabolism isn't just about calories — it's often about imbalance. According to Ayurveda, excess weight and low energy are signs of disturbed Agni (digestive fire) and accumulated toxins (Ama). Rather than offering a one-size-fits-all diet, Ayurveda understands your unique body type and root causes behind weight gain or fatigue. At BookMyAyurveda.com, our online Ayurvedic consultations offer personalized plans that align with your doshic constitution, helping you reset your metabolism, burn fat naturally, and feel lighter — inside and out.",
    offerings: [
      "Customized Nutritional Guidance: Personalized meal timings and food choices to naturally boost metabolism and aid weight loss",
      "Herbal Metabolic Enhancers: Gentle herbal support using Triphala, Guggulu, and others to cleanse and improve fat digestion",
      "Lifestyle and Activity Recommendations: Daily routines, yoga, and movement practices to maintain healthy energy and burn",
      "Detoxification Support: Seasonal and guided detox plans to eliminate toxins and revive sluggish systems"
    ],
    closingMessage: "Ayurveda Isn't a Trend — It's a Timeless Approach to Health. Ayurveda helps you go beyond quick fixes — offering a sustainable path to metabolic balance, natural weight loss, and long-term vitality."
  };

  const subcategories = [
    {
      name: 'Obesity / Weight Gain',
      href: '/consultations/weight-metabolic-health/obesity-weight-gain',
      description: 'Achieve healthy weight loss through metabolism-boosting herbs, dietary guidance, and lifestyle modifications.',
      symptoms: ['Excess weight', 'Slow metabolism', 'Food cravings', 'Low energy'],
      image: '/Sub Category/Weight & Metabolic Health/Obesity  Weight Gain.jpg'
    },
    {
      name: 'Underweight / Poor Appetite',
      href: '/consultations/weight-metabolic-health/underweight-poor-appetite',
      description: 'Healthy weight gain support through appetite stimulants, digestive enhancers, and nourishing therapies.',
      symptoms: ['Low body weight', 'Poor appetite', 'Weak digestion', 'Low energy'],
      image: '/Sub Category/Weight & Metabolic Health/Underweight  Poor Appetite.jpg'
    },
    {
      name: 'High Cholesterol',
      href: '/consultations/weight-metabolic-health/high-cholesterol',
      description: 'Lower cholesterol naturally using lipid-regulating herbs, dietary modifications, and cardiovascular support.',
      symptoms: ['Elevated cholesterol', 'Cardiovascular risk', 'Fatty deposits', 'Poor circulation'],
      image: '/Sub Category/Weight & Metabolic Health/High Cholesterol.jpg'
    },
    {
      name: 'Metabolic Syndrome',
      href: '/consultations/weight-metabolic-health/metabolic-syndrome',
      description: 'Address metabolic syndrome comprehensively through multi-targeted herbs, lifestyle changes, and metabolic restoration.',
      symptoms: ['Insulin resistance', 'Abdominal weight', 'High blood pressure', 'Lipid imbalances'],
      image: '/Sub Category/Weight & Metabolic Health/Metabolic Syndrome.jpg'
    },
    {
      name: 'Type 2 Diabetes Support',
      href: '/consultations/weight-metabolic-health/type-2-diabetes-support',
      description: 'Support diabetes management with blood sugar regulating herbs, dietary protocols, and pancreatic health optimization.',
      symptoms: ['High blood sugar', 'Insulin resistance', 'Excessive thirst', 'Frequent urination'],
      image: '/Sub Category/Weight & Metabolic Health/Type 2 Diabetes Support.jpg'
    }
  ];

  return (
    <CategoryPageWithContentTemplate
      categoryTitle="Weight & Metabolic Health"
      categoryDescription="Achieve sustainable weight management and metabolic balance through personalized Ayurvedic approaches. Our natural treatments address the root causes of weight issues and metabolic disorders."
      categoryImage="/Category/Weight & Metabolic Health.jpg"
      categoryContent={categoryContent}
      subcategories={subcategories}
    />
  );
};

export default WeightMetabolicHealth;
