
import { Heart } from 'lucide-react';
import ConsultationPageTemplate from '@/components/ConsultationPageTemplate';

const SexualWellness = () => {
  const consultation = {
    title: "Sexual Wellness",
    description: "Confidential consultations for intimate health concerns using time-tested Ayurvedic principles.",
    icon: Heart,
    color: "bg-rose-100 text-rose-600",
    ayurvedicInfo: "Ayurveda approaches sexual wellness through the concept of Shukra dhatu (reproductive tissue) and Ojas (vital essence). Our confidential consultations address concerns like low libido, performance issues, and reproductive health through powerful rejuvenative herbs like Safed Musli, Kapikacchu, and Ashwagandha. We combine these with dietary recommendations, lifestyle modifications, and stress management techniques to restore vitality and confidence naturally.",
    products: [
      {
        name: "Safed Musli Powder",
        image: "/api/placeholder/300/300",
        description: "Natural aphrodisiac and strength enhancer"
      },
      {
        name: "Vitality Capsules",
        image: "/api/placeholder/300/300",
        description: "Herbal blend for reproductive health"
      },
      {
        name: "Wellness Oil",
        image: "/api/placeholder/300/300",
        description: "Therapeutic massage oil for intimacy"
      }
    ]
  };

  return <ConsultationPageTemplate consultation={consultation} />;
};

export default SexualWellness;
