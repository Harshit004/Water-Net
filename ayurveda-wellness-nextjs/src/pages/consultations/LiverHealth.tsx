
import { Shield } from 'lucide-react';
import ConsultationPageTemplate from '@/components/ConsultationPageTemplate';

const LiverHealth = () => {
  const consultation = {
    title: "Liver Health",
    description: "Detoxification and liver support through natural herbs and dietary recommendations.",
    icon: Shield,
    color: "bg-green-100 text-green-600",
    ayurvedicInfo: "The liver, known as Yakrit in Ayurveda, is considered the seat of Pitta dosha and the body's primary detoxification organ. Our liver health protocols utilize powerful hepatoprotective herbs like Kalmegh, Bhumi Amla, and Kutki to cleanse, regenerate, and protect liver cells. Combined with specific dietary guidelines, detoxification practices, and lifestyle modifications, we help restore optimal liver function and improve overall digestive health.",
    products: [
      {
        name: "Liver Detox Syrup",
        image: "/api/placeholder/300/300",
        description: "Herbal formula with Kalmegh and Bhumi Amla"
      },
      {
        name: "Kutki Capsules",
        image: "/api/placeholder/300/300",
        description: "Premium grade liver protective herb"
      },
      {
        name: "Detox Tea",
        image: "/api/placeholder/300/300",
        description: "Daily cleansing herbal tea blend"
      }
    ]
  };

  return <ConsultationPageTemplate consultation={consultation} />;
};

export default LiverHealth;
