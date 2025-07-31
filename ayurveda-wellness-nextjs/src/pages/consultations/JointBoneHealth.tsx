import CategoryPageWithContentTemplate from '@/components/CategoryPageWithContentTemplate';

const JointBoneHealth = () => {
  const categoryContent = {
    subtitle: "Move Freely — Ayurvedic Support for Joints & Bones",
    description: "Stiffness, discomfort, or reduced mobility aren't just signs of aging — they often stem from deeper imbalances in the body's structure and vitality. Ayurveda views joint and bone health as a reflection of how well the body is nourished, cleansed, and aligned. At BookMyAyurveda.com, our online consultations focus on restoring mobility, reducing inflammation, and strengthening your musculoskeletal system — all through natural, time-tested methods tailored to your unique doshic constitution.",
    offerings: [
      "Customized Movement & Mobility Plans: Gentle stretches, yoga, and posture corrections to support flexibility and joint strength",
      "Herbal Bone & Joint Support: Traditional herbs like Hadjod, Ashwagandha, and Guggulu to improve bone density and joint resilience",
      "Anti-Inflammatory Diet & Lifestyle: Personalized food plans to ease joint pain and reduce chronic inflammation",
      "Detox & Rejuvenation Therapies: Guided cleansing (like Panchakarma) to flush out toxins that affect joints and slow bone repair"
    ],
    closingMessage: "Strong Bones. Fluid Joints. Naturally. With Ayurveda, you don't just mask pain — you rebuild strength and regain freedom of movement, naturally and sustainably."
  };

  const subcategories = [
    {
      name: 'Osteoarthritis',
      href: '/consultations/joint-bone-health/osteoarthritis',
      description: 'Manage arthritis pain and inflammation naturally through anti-inflammatory herbs, joint-nourishing treatments, and mobility support.',
      symptoms: ['Joint pain', 'Stiffness', 'Swelling', 'Reduced mobility'],
      image: '/Sub Category/Joint & Bone Health/Osteoarthritis.jpg'
    },
    {
      name: 'Rheumatoid Arthritis',
      href: '/consultations/joint-bone-health/rheumatoid-arthritis',
      description: 'Relieve joint pain and improve flexibility through herbal pain relievers, massage therapies, and movement guidance.',
      symptoms: ['Joint discomfort', 'Morning stiffness', 'Limited range', 'Muscle tension'],
      image: '/Sub Category/Joint & Bone Health/Rheumatoid Arthritis.jpg'
    },
    {
      name: 'Gout',
      href: '/consultations/joint-bone-health/gout',
      description: 'Strengthen bones naturally through calcium-rich herbs, bone-building nutrients, and density-improving protocols.',
      symptoms: ['Bone weakness', 'Fracture risk', 'Height loss', 'Posture changes'],
      image: '/Sub Category/Joint & Bone Health/Gout.jpg'
    },
    {
      name: 'Back Pain / Sciatica',
      href: '/consultations/joint-bone-health/back-pain-sciatica',
      description: 'Build muscle strength and endurance through protein-rich nutrition, strengthening herbs, and exercise guidance.',
      symptoms: ['Muscle fatigue', 'Weakness', 'Poor endurance', 'Muscle loss'],
      image: '/Sub Category/Joint & Bone Health/Back Pain  Sciatica.jpg'
    },
    {
      name: 'Weak Bones / Early Osteoporosis',
      href: '/consultations/joint-bone-health/weak-bones-osteoporosis',
      description: 'Accelerate injury recovery and prevent future injuries through healing herbs, rehabilitation support, and performance optimization.',
      symptoms: ['Injury pain', 'Slow healing', 'Performance decline', 'Recovery issues'],
      image: '/Sub Category/Joint & Bone Health/Weak Bones  Early Osteoporosis.jpg'
    }
  ];

  return (
    <CategoryPageWithContentTemplate
      categoryTitle="Joint & Bone Health"
      categoryDescription="Support healthy joints and strong bones through Ayurvedic therapies. Our natural treatments address joint pain, bone health, and musculoskeletal conditions with gentle, effective care."
      categoryImage="/Category/Joint & Bone Health.jpg"
      categoryContent={categoryContent}
      subcategories={subcategories}
    />
  );
};

export default JointBoneHealth;
