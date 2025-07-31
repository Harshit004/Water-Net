import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const AdrenalFatigue = () => {
  const suggestedProducts = [
    {
      id: 'ashwagandha',
      name: 'Ashwagandha Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashwagandha-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'shatavari',
      name: 'Shatavari Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/shatavari-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'licorice',
      name: 'Licorice Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/licorice-benefits-1.jpg',
      price: '₹249 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Adrenal Fatigue',
      breadcrumb: 'Hormonal Balance & Endocrine Health',
      breadcrumbHref: '/consultations/hormonal-balance-endocrine-health',
    },
    image: '/Sub Category/Hormonal Balance & Endocrine Health/Adrenal Fatigue.jpg',
    description: `Book your personalized Ayurvedic consultation online for Adrenal Fatigue. Natural healing with herbs, diet, and lifestyle changes for lasting relief.`,
    suggestedProducts,
    meta: {
        title: 'Ayurvedic Consultation for Adrenal Fatigue | Book Online',
        description: 'Book your personalized Ayurvedic consultation online for Adrenal Fatigue. Natural healing with herbs, diet, and lifestyle changes for lasting relief.',
        keywords: 'Adrenal Fatigue Ayurveda, Adrenal Fatigue Treatment, Book Ayurveda Online, Ayurvedic Consultation Adrenal Fatigue, Natural Healing, Ayurveda Remedies, Adrenal Fatigue Relief, Holistic Wellness'
    }
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default AdrenalFatigue;
