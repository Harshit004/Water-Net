
import { Droplet } from 'lucide-react';
import ConsultationPageTemplate from '@/components/ConsultationPageTemplate';

const KidneyStones = () => {
  const consultation = {
    title: "Kidney Stones",
    description: "Natural dissolution and prevention of kidney stones through targeted herbal therapy.",
    icon: Droplet,
    color: "bg-teal-100 text-teal-600",
    ayurvedicInfo: "Kidney stones, or Ashmari in Ayurveda, form due to imbalanced Kapha and Vata doshas affecting the urinary system. Our stone dissolution therapy uses specific herbs like Pashanbhed, Gokshura, and Varun that naturally break down stones and prevent recurrence. Combined with increased hydration, dietary modifications to reduce stone-forming substances, and gentle detoxification practices, we provide effective, pain-free stone management.",
    products: [
      {
        name: "Pashanbhed Capsules",
        image: "/api/placeholder/300/300",
        description: "Stone-breaking herb for natural dissolution"
      },
      {
        name: "Kidney Stone Syrup",
        image: "/api/placeholder/300/300",
        description: "Herbal formula with Gokshura and Varun"
      },
      {
        name: "Detox Water Mix",
        image: "/api/placeholder/300/300",
        description: "Daily drink for kidney cleansing"
      }
    ]
  };

  return <ConsultationPageTemplate consultation={consultation} />;
};

export default KidneyStones;
