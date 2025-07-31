import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const ADHDHyperactivity = () => {
  const suggestedProducts = [
    {
      id: 'brahmi',
      name: 'Brahmi Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/brahmi-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'jatamansi',
      name: 'Jatamansi Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/jatamansi-benefits-1.jpg',
      price: '₹349 / 100g',
    },
    {
      id: 'ashwagandha',
      name: 'Ashwagandha Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashwagandha-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'triphala',
      name: 'Triphala (Amalaki, Haritaki, Bibhitaki)',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/triphala-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'ADHD & Hyperactivity',
      breadcrumb: "Children's Wellness",
      breadcrumbHref: '/consultations/childrens-wellness',
    },
    image: "/Sub Category/Children's Wellness/ADHD  Hyperactivity.jpg",
    description: `Title: Supporting Focus and Calm in Children

ADHD and hyperactivity can be challenging for both children and parents. Ayurveda offers a natural, holistic approach to support focus, calm, and overall well-being in children.

H1: Ayurvedic Perspective on ADHD & Hyperactivity
From an Ayurvedic perspective, ADHD and hyperactivity are often linked to a significant imbalance in Vata dosha, the energy of movement and the nervous system. This Vata imbalance can lead to a restless mind, difficulty concentrating, and impulsive behavior. Ayurveda aims to pacify Vata and nourish the nervous system to promote calm and focus.

Common Symptoms:
- Inattention, distractibility, and difficulty focusing
- Hyperactivity and constant movement
- Impulsivity and lack of self-control
- Emotional dysregulation and frustration
- Sleep disturbances

H2: Ayurvedic Healing Approach
- Vata-pacifying herbs like Ashwagandha, Brahmi, and Shankhpushpi to calm the nervous system
- Nourishing therapies like Shirodhara (warm oil treatment on the forehead)
- A Vata-pacifying diet with warm, grounding foods
- Lifestyle and routine adjustments to create stability
- Mind-body practices like yoga and meditation for children

H2: Benefits of Ayurvedic Care
- Improved focus, concentration, and attention span
- Reduced hyperactivity and impulsivity
- A greater sense of calm and emotional balance
- Better sleep quality
- A natural, holistic approach without the side effects of medication

🌿 Nurturing Your Child's Potential
Every child deserves to feel calm, focused, and happy. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations and treatments to support children with ADHD and hyperactivity. Book your session today to help your child thrive.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default ADHDHyperactivity;
