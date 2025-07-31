import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const HormonalAcne = () => {
  const suggestedProducts = [
    {
      id: 'manjistha',
      name: 'Manjistha Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/manjistha-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'neem',
      name: 'Neem Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/neem-benefits-1.jpg',
      price: '₹199 / 100g',
    },
    {
      id: 'triphala',
      name: 'Triphala (Amalaki, Haritaki, Bibhitaki)',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/triphala-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'aloe-vera',
      name: 'Aloe Vera Juice',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/aloe-vera-benefits-1.jpg',
      price: '₹249 / 500ml',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Hormonal Acne',
      breadcrumb: "Women's Health",
      breadcrumbHref: '/consultations/womens-health',
    },
    image: '/Sub Category/Women\u2019s Health/Hormonal Acne.jpg',
    description: `Title: When Your Skin Reflects Hormonal Imbalance — Heal Acne from Within

Acne isn't just a teenage problem. It's often a sign of deeper hormonal fluctuations. Find lasting clarity through a holistic Ayurvedic approach that addresses the root cause of your breakouts.

H1: Ayurvedic Perspective on Hormonal Acne
Hormonal acne is typically linked to imbalances in Pitta (fire) and Kapha (earth/water) doshas, often aggravated by Vata (air/space). This can lead to excess sebum production, inflammation, and toxin accumulation (Ama) in the blood (Rakta Dhatu). Ayurveda focuses on purifying the blood, balancing hormones, and strengthening digestion to heal the skin from the inside out.

Common Symptoms:
- Cystic or painful acne along the jawline, chin, and neck
- Breakouts that worsen around the menstrual cycle
- Oily or combination skin
- Inflammation and redness
- Slow-healing blemishes or scarring

H2: Ayurvedic Healing Approach
- Blood-purifying herbs like Manjistha, Neem, and Turmeric
- Hormonal balancing herbs like Shatavari and Lodhra
- Digestive herbs to improve Agni and reduce Ama
- Cooling therapies to pacify Pitta dosha
- Gentle detoxification (Virechana) to cleanse the system
- Stress-reducing practices like yoga and meditation

H2: Benefits of Ayurvedic Care
- Reduced frequency and severity of breakouts
- Less inflammation and redness
- Clearer, more radiant skin
- Balanced hormones and improved menstrual cycles
- Better digestion and reduced toxin buildup
- Long-term skin health without harsh chemicals

🌿 Heal Your Skin, Balance Your Hormones
Hormonal acne is your body's way of signaling an internal imbalance. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your skin's health from the inside out. Book your session today for lasting clarity and confidence.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default HormonalAcne;
