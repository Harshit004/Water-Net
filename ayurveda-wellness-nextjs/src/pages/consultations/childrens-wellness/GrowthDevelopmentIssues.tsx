import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const GrowthDevelopmentIssues = () => {
  const suggestedProducts = [
    {
      id: 'ashwagandha',
      name: 'Ashwagandha Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashwagandha-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'shatavari',
      name: 'Shatavari Capsules',
      imageUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
      price: '₹1,499',
    },
    {
      id: 'vidarikanda',
      name: 'Vidarikanda Powder',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/vidarikanda-benefits-1.jpg',
      price: '₹349 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Growth & Development Issues',
      breadcrumb: "Children's Wellness",
      breadcrumbHref: '/consultations/childrens-wellness',
    },
    image: "/Sub Category/Children's Wellness/Growth  Development Issues.jpg",
    description: `Title: Nurturing Healthy Growth and Development in Children

Every child's growth and development journey is unique. Ayurveda provides a holistic framework to support your child's physical, mental, and emotional development, ensuring they reach their full potential.

H1: Ayurvedic Perspective on Child Development
Ayurveda emphasizes the importance of strong Agni (digestive fire) and balanced doshas for healthy growth. Proper nourishment of all seven tissues (dhatus) is crucial for building a strong body and mind. Ayurveda addresses the root causes of developmental issues, rather than just treating symptoms.

Common Concerns:
- Delayed milestones (walking, talking)
- Poor weight gain or failure to thrive
- Low muscle tone or weakness
- Cognitive or learning difficulties
- Emotional or behavioral challenges

H2: Ayurvedic Healing Approach
- Nourishing herbs and foods to support tissue development
- Digestive herbs to improve Agni and nutrient absorption
- Herbal formulations like Swarnaprashana for brain development and immunity
- Gentle oil massage (Abhyanga) to strengthen muscles and calm the nervous system
- A balanced and supportive home environment

H2: Benefits of Ayurvedic Care
- Healthy physical growth and development
- Improved cognitive function and learning ability
- Stronger immunity and overall health
- Emotional balance and well-being
- A solid foundation for a healthy life

🌿 Helping Your Child Flourish
A child's well-being is a parent's greatest joy. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations and treatments to support your child's growth and development. Book your session today and help your child flourish.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default GrowthDevelopmentIssues;
