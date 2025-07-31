
import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const PCOSPCODPage = () => {
  const subcategoryData = {
    bannerContent: {
      title: "PCOS / PCOD",
      breadcrumb: "Women's Health",
      breadcrumbHref: "/consultations/womens-health",
    },
    description: `Title: Understanding PCOS/PCOD: A Holistic Ayurvedic Approach

H1: What is PCOS/PCOD?
PCOS (Polycystic Ovary Syndrome) and PCOD (Polycystic Ovarian Disease) are hormonal disorders affecting women of reproductive age. While often used interchangeably, they have distinct characteristics. PCOS is a more severe form that can lead to metabolic issues, while PCOD is a milder condition.

H2: Key Differences
- PCOS is a metabolic disorder with hormonal imbalance
- PCOD is primarily an ovarian condition
- PCOS requires more intensive treatment
- PCOD can often be managed with lifestyle changes

H1: Common Symptoms
- Irregular menstrual cycles
- Excessive hair growth (hirsutism)
- Weight gain and difficulty losing weight
- Acne and skin issues
- Hair loss or thinning
- Insulin resistance
- Fertility challenges

H1: Ayurvedic Understanding
In Ayurveda, PCOS/PCOD is primarily associated with Kapha and Vata dosha imbalances, leading to:
- Ama (toxins) accumulation
- Impaired Agni (digestive fire)
- Blocked channels (srotas)
- Hormonal imbalance

H1: Treatment Approach
Our treatment protocol focuses on:
1. Detoxification (Panchakarma)
2. Hormone balancing
3. Weight management
4. Lifestyle modifications
5. Dietary changes
6. Herbal supplementation

H1: Expected Benefits
- Regular menstrual cycles
- Improved fertility
- Better weight management
- Reduced symptoms
- Enhanced overall well-being`,
    symptoms: [
      "Irregular periods",
      "Excessive hair growth",
      "Weight gain",
      "Acne",
      "Hair loss",
      "Insulin resistance"
    ],
    causes: [
      "Hormonal imbalance",
      "Insulin resistance",
      "Inflammation",
      "Genetic factors",
      "Lifestyle factors",
      "Environmental toxins"
    ],
    ayurvedicApproach: [
      "Balance Kapha and Vata doshas",
      "Remove Ama (toxins)",
      "Improve Agni (digestive fire)",
      "Clear blocked channels",
      "Restore hormonal balance"
    ],
    treatments: [
      "Virechana (gentle purgation) or Basti (medicated enema) for detoxification",
      "Shatavari, Ashoka, Lodhra, and Guggul for ovarian health",
      "Triphala, Turmeric, Fenugreek, and Cinnamon for metabolism",
      "Kanchanar Guggulu and Dashamoola Kwath for cyst reduction",
      "Phala Ghrita and Putrajeevak for fertility support",
      "Rasayana therapy for long-term reproductive health"
    ],
    benefits: [
      "Regulated menstrual cycles and hormone balance",
      "Improved insulin sensitivity and weight management", 
      "Reduced cyst formation and ovarian inflammation",
      "Enhanced fertility and reproductive health",
      "Better mood stability and energy levels",
      "Long-term metabolic and hormonal harmony"
    ],
    image: "/Sub Category/Women's Health/PCOS  PCOD.jpg",
    suggestedProducts: [
      {
        id: "1",
        name: "Shatavari Capsules",
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
        price: "₹1,499"
      },
      {
        id: "2",
        name: "Kanchanar Guggulu",
        imageUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop",
        price: "₹899"
      },
      {
        id: "3",
        name: "Hormone Balance Tea",
        imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
        price: "₹699"
      },
      {
        id: "4",
        name: "Metabolic Support Formula",
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
        price: "₹1,299"
      }
    ]
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default PCOSPCODPage;
