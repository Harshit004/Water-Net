import { Check } from 'lucide-react';

const AyurvedicConsultationSection = () => {
  const benefits = [
    "digestion and elimination",
    "difficulty sleeping",
    "food meals and recipes",
    "skin conditions",
    "stress management",
    "routines (daily, seasonal, environmental)",
    "respiratory problems",
    "nervous disorders",
    "herbal formulations specific to your doshas and health concerns",
    "hormonal imbalances",
    "clarity of mind, memory and concentration"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white via-gray-50/50 to-medium-spring/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-bottle-green mb-6 text-center">
            What can an online Ayurvedic consultation do for you?
          </h2>
          
          <div className="prose prose-lg text-deep-bottle-green/90 leading-relaxed mb-8">
            <p className="text-lg mb-6">
              Ayurvedic medicine offers deep insights into a wide range of health concerns, along with step-by-step guidance for both prevention and healing. People seek online Ayurvedic consultations for many reasons: to boost their vitality, overcome confusion about what to eat, or manage long-term health conditions. Ayurveda's timeless wisdom helps bring you back to true health, inner balance, and deeper well-being across all aspects of life.
            </p>
            
            <p className="text-lg mb-8">
              A 1:1 session with one of our student practitioners, health counselors or Ayurvedic doctors can support with:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white/60 p-4 rounded-lg shadow-sm border border-pea-green/10">
                <Check className="h-5 w-5 text-pea-green mt-0.5 flex-shrink-0" />
                <span className="text-deep-bottle-green font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-medium-spring/20 to-pea-green/10 p-6 rounded-lg border border-pea-green/20">
            <p className="text-lg text-deep-bottle-green/90 leading-relaxed">
              Or are you just looking to gain an overall health assessment, learn more about your imbalances and basic constitution from an Ayurvedic perspective, or have a general interest in what breath work and meditation can do for you? The individualized healthcare plan our students create for you can guide you to be more independent in balancing body, mind and consciousness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AyurvedicConsultationSection;