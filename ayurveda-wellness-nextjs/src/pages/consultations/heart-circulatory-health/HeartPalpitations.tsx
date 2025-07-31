import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const HeartPalpitations = () => {
  const suggestedProducts = [
    {
      id: 'arjuna',
      name: 'Arjuna Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/arjuna-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'brahmi',
      name: 'Brahmi Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/brahmi-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'jatamansi',
      name: 'Jatamansi Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/jatamansi-benefits-1.jpg',
      price: '₹349 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Palpitations',
      breadcrumb: 'Heart & Circulatory Health',
      breadcrumbHref: '/consultations/heart-circulatory-health',
    },
    image: "/Sub Category/Heart & Circulatory Health/Heart Palpitations.jpg",
    description: `Book your personalized Ayurvedic consultation online for Palpitations. Natural healing with herbs, diet, and lifestyle changes for lasting relief.`,
    suggestedProducts,
    meta: {
        title: 'Ayurvedic Consultation for Palpitations | Book Online',
        description: 'Book your personalized Ayurvedic consultation online for Palpitations. Natural healing with herbs, diet, and lifestyle changes for lasting relief.',
        keywords: 'Palpitations Ayurveda, Palpitations Treatment, Book Ayurveda Online, Ayurvedic Consultation Palpitations, Natural Healing, Ayurveda Remedies, Palpitations Relief, Holistic Wellness'
    }
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default HeartPalpitations;
