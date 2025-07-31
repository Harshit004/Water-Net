import React from 'react';
import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';


const BloodSugarImbalancePrediabetes = () => {
  const suggestedProducts = [
    {
      id: 'jamun',
      name: 'Jamun Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/jamun-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'karela',
      name: 'Karela Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/karela-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'triphala',
      name: 'Triphala Tablets',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/triphala-benefits-1.jpg',
      price: '₹249 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Blood Sugar Imbalance / Prediabetes',
      breadcrumb: 'Hormonal Balance & Endocrine Health',
      breadcrumbHref: '/consultations/hormonal-balance-endocrine-health',
    },
    image: "public/Sub Category/Hormonal Balance & Endocrine Health/Blood Sugar Imbalance  Prediabetes.jpg",
    description: `Book your personalized Ayurvedic consultation online for Blood Sugar Imbalance / Prediabetes. Natural healing with herbs, diet, and lifestyle changes for lasting relief.`,
    suggestedProducts,
    meta: {
      title: 'Ayurveda Support for Blood Sugar Imbalance / Prediabetes | Book Consultation',
      description: 'Book your personalized Ayurvedic consultation online for Blood Sugar Imbalance / Prediabetes. Natural healing with herbs, diet, and lifestyle changes for lasting relief.',
      keywords: 'Blood Sugar Imbalance / Prediabetes Ayurveda, Blood Sugar Imbalance / Prediabetes Treatment, Book Ayurveda Online, Ayurvedic Consultation Blood Sugar Imbalance / Prediabetes, Natural Healing, Ayurveda Remedies, Blood Sugar Imbalance / Prediabetes Relief, Holistic Wellness'
    }
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default BloodSugarImbalancePrediabetes; 