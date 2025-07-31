import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const PoorAppetiteWeakDigestion = () => {
  const suggestedProducts = [
    {
      id: 'trikatu',
      name: 'Trikatu (Ginger, Black Pepper, Long Pepper)',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/trikatu-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'amalaki',
      name: 'Amalaki (Indian Gooseberry)',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/amalaki-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'cumin',
      name: 'Cumin Seeds',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/cumin-benefits-1.jpg',
      price: '₹149 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Poor Appetite & Weak Digestion',
      breadcrumb: "Children's Wellness",
      breadcrumbHref: '/consultations/childrens-wellness',
    },
    image: "/Sub Category/Children's Wellness/Poor Appetite  Weak Digestion.jpg",
    description: `Title: Strengthening Your Child's Digestion, Naturally

A healthy appetite and strong digestion are the foundations of a child's health. If your child struggles with poor appetite or weak digestion, Ayurveda offers gentle and effective solutions to support their digestive health.

H1: Ayurvedic Perspective on Digestion in Children
In Ayurveda, Agni, the digestive fire, is the key to good health. In children, Agni can be delicate and easily disturbed. Poor appetite and weak digestion are often signs of an imbalanced Agni, leading to the formation of toxins (Ama) and a lack of proper nourishment. Ayurveda focuses on kindling Agni and balancing the doshas to restore healthy digestion.

Common Symptoms:
- Lack of interest in food or picky eating
- Bloating, gas, or abdominal discomfort after eating
- Irregular bowel movements (constipation or diarrhea)
- Undigested food in the stool
- Low energy and failure to thrive

H2: Ayurvedic Healing Approach
- Digestive and appetite-stimulating herbs like Ginger, Pippali, and Chitrak
- Carminative herbs like Fennel and Cumin to relieve gas and bloating
- A diet of warm, cooked, and easily digestible foods
- Avoiding cold, heavy, and processed foods
- Regular meal times to support Agni

H2: Benefits of Ayurvedic Care
- Improved appetite and interest in food
- Stronger digestion and nutrient absorption
- Relief from bloating, gas, and discomfort
- Regular and healthy bowel movements
- Increased energy and vitality

🌿 Nourish Your Child from the Inside Out
A healthy digestive system is essential for your child's growth and well-being. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations and treatments to strengthen your child's digestion naturally. Book your session today and set your child on the path to lifelong health.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default PoorAppetiteWeakDigestion;
