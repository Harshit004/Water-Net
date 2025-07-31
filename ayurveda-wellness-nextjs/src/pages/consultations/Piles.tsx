
import { Droplets } from 'lucide-react';
import ConsultationPageTemplate from '@/components/ConsultationPageTemplate';

const Piles = () => {
  const consultation = {
    title: "Piles",
    description: "Gentle, effective treatment for hemorrhoids using natural Ayurvedic medicines.",
    icon: Droplets,
    color: "bg-red-100 text-red-600",
    ayurvedicInfo: "Piles or hemorrhoids, known as Arsha in Ayurveda, result from imbalanced Vata and Pitta doshas leading to weakened anal tissues and inflammation. Our gentle treatment approach includes herbs like Triphala, Nagkesar, and Kasisadi oil for both internal healing and external relief. Combined with dietary modifications to improve digestion, lifestyle changes, and specific yoga practices, we provide comprehensive care for lasting relief.",
    products: [
      {
        name: "Arshoghan Vati",
        image: "/api/placeholder/300/300",
        description: "Classical Ayurvedic tablets for pile treatment"
      },
      {
        name: "Kasisadi Oil",
        image: "/api/placeholder/300/300",
        description: "External application oil for immediate relief"
      },
      {
        name: "Triphala Powder",
        image: "/api/placeholder/300/300",
        description: "Digestive health and bowel regulation"
      }
    ]
  };

  return <ConsultationPageTemplate consultation={consultation} />;
};

export default Piles;
