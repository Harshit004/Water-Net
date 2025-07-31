
import { Activity } from 'lucide-react';
import ConsultationPageTemplate from '@/components/ConsultationPageTemplate';

const Diabetes = () => {
  const consultation = {
    title: "Diabetes & Blood Sugar",
    description: "Manage diabetes naturally with personalized diet plans and herbal supplements.",
    icon: Activity,
    color: "bg-blue-100 text-blue-600",
    ayurvedicInfo: "Ayurveda understands diabetes as Prameha, primarily caused by Kapha dosha imbalance and weakened Agni (digestive fire). Our comprehensive approach includes blood sugar regulating herbs like Gurmar, Methi, and Karela, combined with specific dietary protocols, exercise recommendations, and lifestyle modifications. We focus on improving insulin sensitivity, supporting pancreatic function, and preventing complications through natural, time-tested methods.",
    products: [
      {
        name: "Gurmar Extract",
        image: "/api/placeholder/300/300",
        description: "Natural sugar destroyer for blood glucose control"
      },
      {
        name: "Diabetic Care Powder",
        image: "/api/placeholder/300/300",
        description: "Herbal blend with Methi and Karela"
      },
      {
        name: "Sugar Control Tablets",
        image: "/api/placeholder/300/300",
        description: "Daily supplement for blood sugar management"
      }
    ]
  };

  return <ConsultationPageTemplate consultation={consultation} />;
};

export default Diabetes;
