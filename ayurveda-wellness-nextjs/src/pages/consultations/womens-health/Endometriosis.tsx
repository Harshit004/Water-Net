import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const Endometriosis = () => {
  const suggestedProducts = [
    {
      id: 'ashoka',
      name: 'Ashoka Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashoka-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'shatavari',
      name: 'Shatavari Capsules',
      imageUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
      price: '₹1,499',
    },
    {
      id: 'lodhra',
      name: 'Lodhra Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/lodhra-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'guggulu',
      name: 'Guggulu Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/guggulu-benefits-1.jpg',
      price: '₹249 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Endometriosis',
      breadcrumb: "Women's Health",
      breadcrumbHref: '/consultations/womens-health',
    },
    image: '/Sub Category/Women\u2019s Health/Endometriosis (mild to moderate support).jpg',
    description: `Title: Find Relief from Endometriosis Naturally

Endometriosis can be a debilitating condition, but Ayurveda offers a holistic approach to manage symptoms and improve your quality of life.

H1: Ayurvedic Perspective on Endometriosis
Endometriosis is considered a complex disorder involving all three doshas (Vata, Pitta, and Kapha), with a significant Vata imbalance. The retrograde movement of menstrual fluid (a Vata disturbance) causes endometrial tissue to grow outside the uterus, leading to inflammation (Pitta) and tissue growth (Kapha). Ayurveda aims to balance the doshas, reduce inflammation, and manage the abnormal tissue growth.

Common Symptoms:
- Severe menstrual cramps
- Chronic pelvic pain
- Painful intercourse
- Heavy or irregular bleeding
- Infertility
- Fatigue, bloating, and digestive issues

H2: Ayurvedic Healing Approach
- Vata-pacifying herbs and therapies to regulate menstrual flow
- Anti-inflammatory herbs like Turmeric and Guggulu to reduce pain and inflammation
- Herbs to balance hormones and reduce tissue growth, such as Ashoka and Kanchanar
- Detoxification therapies (Panchakarma) to remove toxins (Ama)
- Dietary and lifestyle changes to support overall health

H2: Benefits of Ayurvedic Care
- Reduced pain and inflammation
- More regular and manageable menstrual cycles
- Improved fertility and reproductive health
- Enhanced energy levels and well-being
- A holistic approach to managing a chronic condition

🌿 Your Path to a More Comfortable Life
Living with endometriosis can be challenging, but you don't have to do it alone. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations and treatment plans to help you manage your symptoms and improve your quality of life. Book your session today to start your journey toward a more comfortable, balanced life.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default Endometriosis;
