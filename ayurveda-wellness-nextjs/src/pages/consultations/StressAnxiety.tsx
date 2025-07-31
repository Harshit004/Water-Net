
import { Brain } from 'lucide-react';
import ConsultationPageTemplate from '@/components/ConsultationPageTemplate';

const StressAnxiety = () => {
  const consultation = {
    title: "Stress & Anxiety",
    description: "Holistic approaches to mental wellness through herbs, meditation, and lifestyle modifications.",
    icon: Brain,
    color: "bg-purple-100 text-purple-600",
    ayurvedicInfo: "According to Ayurveda, stress and anxiety arise from an imbalanced Vata dosha and disturbed Sattva (mental clarity). Our treatment protocol includes calming herbs like Brahmi, Shankhpushpi, and Jatamansi, combined with meditation techniques, pranayama (breathing exercises), and stress-reducing lifestyle practices. We focus on strengthening your nervous system naturally while promoting deep, restorative sleep and emotional balance.",
    products: [
      {
        name: "Brahmi Ghrita",
        image: "/api/placeholder/300/300",
        description: "Classical preparation for mental clarity and calmness"
      },
      {
        name: "Stress Relief Tea",
        image: "/api/placeholder/300/300",
        description: "Herbal blend with Jatamansi and Shankhpushpi"
      },
      {
        name: "Meditation Kit",
        image: "/api/placeholder/300/300",
        description: "Complete kit with essential oils and guidance"
      }
    ]
  };

  return <ConsultationPageTemplate consultation={consultation} />;
};

export default StressAnxiety;
