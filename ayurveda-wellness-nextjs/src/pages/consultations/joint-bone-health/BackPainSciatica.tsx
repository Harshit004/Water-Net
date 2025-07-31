import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const BackPainSciatica = () => {
  const suggestedProducts = [
    {
      id: 'maharasnadi',
      name: 'Maharasnadi Kwath',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/maharasnadi-benefits-1.jpg',
      price: '₹299 / 200ml',
    },
    {
      id: 'yograj-guggulu',
      name: 'Yograj Guggulu Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/guggulu-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'shallaki',
      name: 'Shallaki Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/shallaki-benefits-1.jpg',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Back Pain & Sciatica',
      breadcrumb: 'Joint & Bone Health',
      breadcrumbHref: '/consultations/joint-bone-health',
    },
    image: '/Sub Category/Joint & Bone Health/Back Pain  Sciatica.jpg',
    description: `Title: Back Pain & Sciatica — Relieve & Restore, Naturally\n\nBack pain and sciatica cause discomfort, stiffness, and limited mobility. Ayurveda sees these as signs of aggravated Vata or Kapha dosha, impaired Agni, and tissue imbalance. Through pain-relieving herbs, nourishing foods, and restorative practices, Ayurveda helps restore comfort and mobility.\n\nH1: Ayurvedic Perspective on Back Pain & Sciatica\nBack pain and sciatica are often linked to Vata (movement/air) or Kapha (water/earth) imbalances, which disturb tissue function and increase discomfort. Triggers include injury, overuse, poor posture, or chronic stress.\n\nCommon Symptoms:\n- Back pain or stiffness\n- Radiating pain (sciatica)\n- Reduced mobility\n- Morning discomfort\n- Fatigue or weakness\n- Difficulty with daily activities\n\nH2: Ayurvedic Healing Approach\n- Maharasnadi and Yograj Guggulu for pain relief\n- Shallaki for inflammation\n- Warm, nourishing foods and teas\n- Gentle exercise and stretching\n- Abhyanga (oil massage) for comfort\n- Restorative sleep and routines\n\nH2: Benefits of Ayurvedic Care\n- Reduced pain and stiffness\n- Improved mobility and comfort\n- Enhanced energy and resilience\n- Natural support for tissue health\n- Greater vitality and well-being\n\n🌿 Relieve & Restore, Naturally\nBack pain and sciatica are your body's way of asking for support. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your comfort and vitality from the inside out. Book your session today for lasting wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default BackPainSciatica;
