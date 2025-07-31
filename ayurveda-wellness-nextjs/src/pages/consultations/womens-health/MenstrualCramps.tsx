import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const MenstrualCramps = () => {
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
      id: 'dashamoola',
      name: 'Dashamoola Powder',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/dashamoola-benefits-1.jpg',
      price: '₹349 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Menstrual Cramps (Dysmenorrhea)',
      breadcrumb: "Women's Health",
      breadcrumbHref: '/consultations/womens-health',
    },
    image: "public/Sub Category/Women’s Health/Menstrual Cramps.jpg",
    description: `Title: When Period Pain Disrupts Your Life — Find Natural Relief

Painful periods don't have to be your monthly reality. Discover how Ayurveda can help you address the root cause of menstrual cramps and achieve a more comfortable cycle.

H1: Ayurvedic Perspective on Menstrual Cramps
Menstrual pain, or dysmenorrhea, is primarily considered a Vata disorder in Ayurveda. An imbalance in Apana Vata, the downward-moving energy, obstructs the natural flow of menstruation, leading to pain, cramping, and discomfort. Ayurveda aims to balance Vata and ensure a smooth, pain-free cycle.

Common Symptoms:
- Throbbing or cramping pain in the lower abdomen
- Pain that radiates to the lower back and thighs
- Nausea, headaches, or dizziness
- Fatigue and irritability
- Bloating and breast tenderness

H2: Ayurvedic Healing Approach
- Vata-pacifying herbs like Ashwagandha and Dashamoola
- Anti-inflammatory herbs like Guggulu and Turmeric
- Uterine tonics like Ashoka and Lodhra
- Warm oil massage (Abhyanga) on the lower abdomen
- Herbal enemas (Basti) to regulate Apana Vata
- Dietary and lifestyle modifications to balance Vata

H2: Benefits of Ayurvedic Care
- Significant reduction in menstrual pain and cramping
- A more regular and comfortable menstrual cycle
- Balanced hormones and reduced PMS symptoms
- Improved energy levels and mood
- Long-term relief without a dependency on painkillers

🌿 Reclaim Your Comfort and Well-being
Painful periods are a sign that your body needs support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal remedies, and lifestyle guidance to help you find lasting relief from menstrual cramps. Book your session today and experience a more comfortable, balanced cycle.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default MenstrualCramps;
