import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const MenopauseSupport = () => {
  const subcategoryData = {
    bannerContent: {
      title: 'Menopause Support',
      breadcrumb: "Women's Health",
      breadcrumbHref: '/consultations/womens-health',
    },
    description: `Title: Embrace Menopause with Grace and Vitality

H1: Navigating Menopause with Ayurveda
Menopause is a natural transition, not a disease. Ayurveda views it as a shift from the Pitta (fire) phase of life to the Vata (air/space) phase. This transition can bring about various physical and emotional changes as the body adapts to new hormonal realities.

H2: Key Aspects of Menopausal Transition
- Hormonal fluctuations (estrogen, progesterone)
- Increased Vata dosha, leading to dryness and instability
- Potential for Pitta and Kapha imbalances
- Opportunity for profound self-care and renewal

H1: Common Symptoms
- Hot flashes and night sweats
- Mood swings, anxiety, and irritability
- Sleep disturbances (insomnia)
- Vaginal dryness and discomfort
- Weight gain, especially around the abdomen
- Brain fog and memory issues
- Joint pain and stiffness

H1: Ayurvedic Understanding
In Ayurveda, menopausal symptoms are seen as manifestations of doshic imbalances. By identifying and addressing the specific imbalances, Ayurveda offers a holistic and personalized approach to managing this transition smoothly.

H1: Treatment Approach
Our treatment protocol focuses on:
1. Balancing the doshas (especially Vata)
2. Nourishing the body's tissues (dhatus)
3. Supporting hormonal balance naturally
4. Managing stress and promoting mental well-being
5. Rejuvenation (Rasayana) therapies

H1: Expected Benefits
- Reduced hot flashes and night sweats
- Improved mood and emotional stability
- Better sleep quality
- Enhanced comfort and lubrication
- Healthy weight management
- Clearer thinking and memory
- Overall sense of vitality and well-being`,
    symptoms: [
      "Hot flashes",
      "Mood swings",
      "Sleep disturbances",
      "Vaginal dryness",
      "Weight gain",
      "Brain fog"
    ],
    causes: [
      "Hormonal changes",
      "Increased Vata dosha",
      "Stress and lifestyle factors",
      "Poor nutrition",
      "Accumulation of toxins (ama)"
    ],
    ayurvedicApproach: [
      "Balance Vata dosha through diet and lifestyle",
      "Nourish reproductive tissues (Shukra Dhatu)",
      "Support hormonal balance with herbs like Shatavari and Ashwagandha",
      "Promote mental well-being with Brahmi and Jatamansi",
      "Rejuvenate the body with Rasayana therapies"
    ],
    treatments: [
      "Abhyanga (self-massage with warm oil) to pacify Vata",
      "Nasya (nasal oil administration) for mental clarity",
      "Herbal remedies like Shatavari, Ashwagandha, and Brahmi",
      "Cooling herbs like Amalaki for hot flashes",
      "Dietary recommendations to balance the doshas",
      "Yoga, meditation, and pranayama for stress management"
    ],
    benefits: [
      "Smoother transition through menopause",
      "Reduced symptoms and discomfort",
      "Improved physical and emotional well-being",
      "Enhanced vitality and energy levels",
      "Long-term health and graceful aging"
    ],
    image: "/Sub Category/Women's Health/Menopause Support.jpg",
    suggestedProducts: [
      {
        id: "1",
        name: "Shatavari Capsules",
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
        price: "₹1,499"
      },
      {
        id: "2",
        name: "Ashwagandha Capsules",
        imageUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop",
        price: "₹899"
      },
      {
        id: "3",
        name: "Women's Wellness Tea",
        imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
        price: "₹699"
      },
      {
        id: "4",
        name: "Cooling Herbal Formula",
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
        price: "₹1,299"
      }
    ]
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default MenopauseSupport;
