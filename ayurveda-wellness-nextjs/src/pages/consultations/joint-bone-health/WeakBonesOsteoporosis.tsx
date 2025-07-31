import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const WeakBonesOsteoporosis = () => {
  const subcategoryData = {
    bannerContent: {
      title: "Weak Bones / Early Osteoporosis",
      breadcrumb: "Joint & Bone Health",
      breadcrumbHref: "/consultations/joint-bone-health",
    },
    description: "Weak Bones & Early Osteoporosis — Strengthen Your Skeleton Naturally with Ayurveda. Osteoporosis and bone weakness are increasingly common concerns, especially with aging, sedentary lifestyles, or nutritional deficiencies. This condition makes bones fragile and prone to fractures, affecting mobility and overall vitality. Ayurveda offers a holistic approach to strengthening bones, enhancing mineral absorption, and restoring the body's natural balance through diet, herbal therapies, and rejuvenative practices.",
    symptoms: [
      "Frequent bone pain or tenderness",
      "Increased susceptibility to fractures from minor injuries",
      "Stiffness or difficulty in movement",
      "Postural changes such as stooping or spinal curvature",
      "Loss of height over time",
      "Dental problems and tooth loss"
    ],
    causes: [
      "Depletion of Asthi Dhatu (bone tissue) due to Vata imbalance",
      "Poor digestion (Agni) affecting mineral absorption",
      "Aging and natural bone density loss",
      "Nutritional deficiencies, especially calcium and vitamin D",
      "Sedentary lifestyle and lack of weight-bearing exercise",
      "Hormonal imbalances affecting bone metabolism"
    ],
    ayurvedicApproach: "In Ayurveda, bones are primarily formed and nourished by Asthi Dhatu, one of the seven essential tissues (Dhatus) of the body. Weak bones or early osteoporosis indicate depletion or poor nourishment of Asthi Dhatu, often linked to imbalances in Vata dosha, which governs dryness, movement, and structural integrity. When Vata becomes aggravated, it creates dryness and brittleness in bones, reducing their density and resilience. Treatment focuses on nourishing Asthi Dhatu, pacifying Vata, and improving mineral absorption.",
    treatments: [
      "Shatavari, Ashwagandha, Guggulu for tissue regeneration",
      "Chyawanprash, Ashwagandharishta for bone strength",
      "Abhyanga with Mahanarayan Taila or Bala Taila",
      "Basti therapy for Vata pacification and mineral absorption",
      "Calcium-rich foods and bone-nourishing herbs",
      "Weight-bearing exercises and yoga for bone stimulation"
    ],
    benefits: [
      "Increased bone density and strength",
      "Improved mineral absorption and metabolism",
      "Reduced fracture risk and bone pain",
      "Enhanced mobility and physical confidence",
      "Better posture and spinal alignment",
      "Long-term skeletal health and vitality"
    ],
    image: '/Sub Category/Joint & Bone Health/Weak Bones  Early Osteoporosis.jpg',
    suggestedProducts: [],
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default WeakBonesOsteoporosis;
