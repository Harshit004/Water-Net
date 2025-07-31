
import { Heart } from 'lucide-react';
import ConsultationPageTemplate from '@/components/ConsultationPageTemplate';

const BonesJoints = () => {
  const consultation = {
    title: "Bones & Joints",
    description: "Natural solutions for arthritis, joint pain, and bone health using traditional Ayurvedic remedies.",
    icon: Heart,
    color: "bg-orange-100 text-orange-600",
    ayurvedicInfo: "Ayurveda views joint and bone problems as an imbalance of Vata dosha, which governs movement and circulation. Through specialized herbs like Ashwagandha, Guggulu, and Shallaki, combined with therapeutic oils and gentle exercises, we help restore joint mobility, reduce inflammation, and strengthen bone density naturally. Our holistic approach includes dietary modifications, lifestyle adjustments, and panchakarma therapies to address the root cause of your discomfort.",
    products: [
      {
        name: "Ashwagandha Capsules",
        image: "/api/placeholder/300/300",
        description: "Powerful adaptogen for reducing inflammation and strengthening bones"
      },
      {
        name: "Guggulu Extract", 
        image: "/api/placeholder/300/300",
        description: "Traditional herb for joint health and mobility"
      },
      {
        name: "Bone Health Oil",
        image: "/api/placeholder/300/300",
        description: "Therapeutic oil blend for external application"
      }
    ]
  };

  return <ConsultationPageTemplate consultation={consultation} />;
};

export default BonesJoints;
