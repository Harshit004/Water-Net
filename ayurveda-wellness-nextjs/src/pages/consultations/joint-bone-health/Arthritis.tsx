import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const Arthritis = () => {
  const subcategoryData = {
    bannerContent: {
      title: "Arthritis (Rheumatoid/Osteoarthritis)",
      breadcrumb: "Joint & Bone Health",
      breadcrumbHref: "/consultations/joint-bone-health",
    },
    description: `Title: Managing Arthritis with Ayurvedic Wisdom

H1: Understanding Arthritis
Arthritis is a condition characterized by joint inflammation and pain. Ayurveda offers a comprehensive approach to managing both rheumatoid and osteoarthritis through natural therapies that address the root cause while providing symptomatic relief.

H2: Types of Arthritis
- Rheumatoid Arthritis: An autoimmune condition affecting multiple joints
- Osteoarthritis: Degenerative joint disease affecting cartilage
- Both types can benefit from Ayurvedic treatments

H1: Common Symptoms
- Joint pain and stiffness
- Swelling and inflammation
- Reduced range of motion
- Morning stiffness
- Fatigue and weakness
- Joint deformity (in advanced cases)

H1: Ayurvedic Understanding
In Ayurveda, arthritis is primarily associated with:
- Ama (toxins) accumulation in joints
- Vata imbalance causing pain and stiffness
- Impaired Agni (digestive fire)
- Weak Ojas (vitality)

H1: Treatment Approach
Our treatment protocol focuses on:
1. Detoxification (Panchakarma)
2. Joint nourishment
3. Pain management
4. Mobility improvement
5. Lifestyle modifications
6. Dietary changes

H1: Expected Benefits
- Reduced joint pain and inflammation
- Improved mobility and flexibility
- Better quality of life
- Slowed disease progression
- Enhanced overall well-being`,
    symptoms: [
      "Joint pain",
      "Stiffness",
      "Swelling",
      "Reduced mobility",
      "Morning stiffness",
      "Fatigue"
    ],
    causes: [
      "Ama accumulation",
      "Vata imbalance",
      "Poor digestion",
      "Lifestyle factors",
      "Age-related changes",
      "Autoimmune factors"
    ],
    ayurvedicApproach: [
      "Remove Ama (toxins)",
      "Balance Vata dosha",
      "Strengthen joints",
      "Improve circulation",
      "Enhance vitality"
    ],
    treatments: [
      "Guggulu, Shallaki, and Ashwagandha for joint health",
      "Panchakarma therapies for detoxification",
      "Abhyanga (oil massage) with medicated oils",
      "Swedana (herbal steam therapy)",
      "Joint-specific exercises and yoga",
      "Anti-inflammatory diet modifications"
    ],
    benefits: [
      "Reduced pain and inflammation",
      "Improved joint mobility",
      "Better quality of life",
      "Slowed disease progression",
      "Enhanced overall well-being",
      "Natural pain management"
    ],
    image: "/Sub Category/Joint & Bone Health/Arthritis.jpg",
    suggestedProducts: [
      {
        id: "1",
        name: "Joint Support Formula",
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
        price: "₹1,499"
      },
      {
        id: "2",
        name: "Pain Relief Oil",
        imageUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop",
        price: "₹899"
      },
      {
        id: "3",
        name: "Anti-Inflammatory Capsules",
        imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
        price: "₹1,299"
      },
      {
        id: "4",
        name: "Joint Nourishment Powder",
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
        price: "₹799"
      }
    ]
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default Arthritis;
