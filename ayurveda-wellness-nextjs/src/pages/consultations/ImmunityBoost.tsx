
import { Zap } from 'lucide-react';
import ConsultationPageTemplate from '@/components/ConsultationPageTemplate';

const ImmunityBoost = () => {
  const consultation = {
    title: "Immunity Boost",
    description: "Strengthen your natural defenses with immune-boosting herbs and lifestyle practices.",
    icon: Zap,
    color: "bg-yellow-100 text-yellow-600",
    ayurvedicInfo: "Ayurveda builds immunity through the concept of Ojas (vital immunity) and Bala (strength). Our immunity enhancement program includes powerful rasayana herbs like Chyawanprash, Giloy, and Amalaki that strengthen your natural defense mechanisms. Combined with proper nutrition, adequate rest, stress management, and seasonal lifestyle adjustments, we help you build robust, long-lasting immunity against diseases and infections.",
    products: [
      {
        name: "Chyawanprash Premium",
        image: "/api/placeholder/300/300",
        description: "Traditional immunity booster with 40+ herbs"
      },
      {
        name: "Giloy Tablets",
        image: "/api/placeholder/300/300",
        description: "Powerful immunomodulator and fever reducer"
      },
      {
        name: "Immunity Boost Powder",
        image: "/api/placeholder/300/300",
        description: "Daily supplement with Amla and herbs"
      }
    ]
  };

  return <ConsultationPageTemplate consultation={consultation} />;
};

export default ImmunityBoost;
