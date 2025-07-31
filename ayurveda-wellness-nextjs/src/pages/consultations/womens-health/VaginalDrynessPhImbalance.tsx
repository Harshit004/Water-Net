import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const VaginalDrynessPhImbalance = () => {
  const suggestedProducts = [
    {
      id: 'shatavari',
      name: 'Shatavari Capsules',
      imageUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
      price: '₹1,499',
    },
    {
      id: 'ashwagandha',
      name: 'Ashwagandha Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashwagandha-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'licorice',
      name: 'Licorice Root (Yashtimadhu)',
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/7/IE/GL/GL/1517266/licorice-root-500x500.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'bala',
      name: 'Bala Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/bala-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Vaginal Dryness & pH Imbalance',
      breadcrumb: "Women's Health",
      breadcrumbHref: '/consultations/womens-health',
    },
    image: '/Sub Category/Women\u2019s Health/Vaginal Dryness  pH Imbalance.jpg',
    description: `Title: Restore Comfort and Balance Naturally

Vaginal dryness and pH imbalance can be uncomfortable and distressing. Ayurveda offers a gentle, holistic approach to restore your body's natural balance and comfort.

H1: Ayurvedic Perspective
Vaginal dryness is often a symptom of Vata dosha imbalance, leading to a lack of lubrication and nourishment in the tissues. An imbalanced pH can be caused by a combination of Vata, Pitta, and Kapha disturbances, along with an accumulation of toxins (Ama). Ayurveda focuses on pacifying the aggravated doshas and cleansing the body to restore balance.

Common Symptoms:
- Itching, burning, or discomfort
- Pain during intercourse
- Frequent yeast infections or bacterial vaginosis
- Unusual discharge or odor
- General feeling of dryness or irritation

H2: Ayurvedic Healing Approach
- Vata-pacifying herbs like Shatavari and Ashwagandha to promote lubrication
- Pitta-pacifying herbs like Neem and Manjistha to reduce inflammation and infection
- Kapha-balancing herbs to clear discharge and stagnation
- Herbal washes and suppositories (Yoni Pichu) to restore pH balance
- Dietary and lifestyle modifications to support overall health

H2: Benefits of Ayurvedic Care
- Restored natural lubrication and comfort
- Balanced vaginal pH and reduced infections
- Relief from itching, burning, and irritation
- Improved sexual health and well-being
- Long-term balance without harsh chemicals

🌿 Reclaim Your Intimate Health
Discomfort in your intimate areas is a sign that your body needs attention. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations and treatments to help you restore comfort and balance naturally. Book your session today to reclaim your intimate health.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default VaginalDrynessPhImbalance;
