
import { Calendar } from 'lucide-react';
import ConsultationPageTemplate from '@/components/ConsultationPageTemplate';

const ThyroidHealth = () => {
  const consultation = {
    title: "Thyroid Health",
    description: "Balance thyroid function naturally with herbs and dietary modifications.",
    icon: Calendar,
    color: "bg-indigo-100 text-indigo-600",
    ayurvedicInfo: "Thyroid disorders represent an imbalance in the body's metabolic fire (Agni) and often involve Kapha and Vata doshas. Our thyroid management approach includes metabolism-regulating herbs like Kanchanar, Shigru, and Brahmi to support optimal thyroid function. We combine these with specific dietary protocols, stress reduction techniques, and lifestyle modifications tailored to whether you have hypo or hyperthyroidism, promoting natural hormone balance.",
    products: [
      {
        name: "Kanchanar Guggulu",
        image: "/api/placeholder/300/300",
        description: "Classical preparation for thyroid regulation"
      },
      {
        name: "Thyroid Support Capsules",
        image: "/api/placeholder/300/300",
        description: "Herbal blend for metabolic balance"
      },
      {
        name: "Metabolism Tea",
        image: "/api/placeholder/300/300",
        description: "Daily tea for thyroid health support"
      }
    ]
  };

  return <ConsultationPageTemplate consultation={consultation} />;
};

export default ThyroidHealth;
