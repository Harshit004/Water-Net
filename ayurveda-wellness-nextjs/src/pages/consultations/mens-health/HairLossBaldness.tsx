import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const HairLossBaldness = () => {
  const subcategoryData = {
    bannerContent: {
      title: "Hair Loss & Baldness",
      breadcrumb: "Men's Health",
      breadcrumbHref: "/consultations/mens-health",
    },
    description: "Combat male pattern baldness and hair loss with Ayurvedic treatments that nourish hair follicles, improve circulation, and promote natural hair regrowth.",
    symptoms: [
      'Receding hairline',
      'Thinning hair on crown',
      'Gradual hair loss',
      'Weak and brittle hair',
      'Excessive hair fall',
      'Patchy hair loss',
      'Premature balding',
      'Scalp sensitivity'
    ],
    causes: [
      'Genetic predisposition',
      'Hormonal changes (DHT)',
      'Stress and anxiety',
      'Poor nutrition',
      'Environmental pollution',
      'Harsh hair treatments',
      'Medical conditions',
      'Certain medications'
    ],
    ayurvedicApproach: "Ayurveda attributes male hair loss to Pitta dosha imbalance affecting hair follicles and poor circulation in the scalp. Our treatment involves cooling and nourishing herbs like Bhringraj and Amla to strengthen hair roots, specialized oil therapies to improve blood circulation, and dietary modifications to provide essential nutrients. We also address stress factors that contribute to hair loss.",
    treatments: [
      'Bhringraj oil for hair nourishment',
      'Amla for hair strength and growth',
      'Specialized scalp massage therapies',
      'Nasya therapy for improved circulation',
      'Stress reduction techniques',
      'Nutritional therapy for hair health',
      'Herbal hair masks and treatments',
      'Yoga and pranayama for stress relief'
    ],
    benefits: [
      'Reduced hair fall and loss',
      'Improved hair thickness and density',
      'Stronger hair follicles',
      'Better scalp circulation',
      'Natural hair regrowth',
      'Delayed progression of baldness',
      'Healthier scalp condition',
      'Improved confidence and appearance'
    ],
    image: '/Sub Category/Skin & Hair Health/Hair Loss  Baldness.jpg',
    suggestedProducts: [],
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default HairLossBaldness;
