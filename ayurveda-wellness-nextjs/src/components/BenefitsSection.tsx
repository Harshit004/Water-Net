import { Leaf, Heart, Shield, Star } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "Natural Healing",
      description: "Experience the power of ancient herbal remedies and natural treatments that work in harmony with your body."
    },
    {
      icon: Heart,
      title: "Holistic Wellness",
      description: "Address root causes of health issues through personalized approaches that treat mind, body, and spirit."
    },
    {
      icon: Shield,
      title: "Safe & Effective",
      description: "Time-tested treatments with minimal side effects, backed by thousands of years of proven results."
    },
    {
      icon: Star,
      title: "Personalized Care",
      description: "Customized treatment plans based on your unique constitution, lifestyle, and health goals."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-deep-bottle-green mb-4">
            Why Choose Ayurvedic Medicine?
          </h2>
          <p className="text-xl text-deep-bottle-green max-w-2xl mx-auto">
            Discover the proven benefits of Ayurveda for comprehensive health and wellness.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-medium-spring/10 hover:bg-medium-spring/20 transition-all duration-300 hover-scale"
              >
                <div className="bg-pea-green/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-pea-green" />
                </div>
                <h3 className="text-xl font-bold text-evergreen mb-3">{benefit.title}</h3>
                <p className="text-deep-bottle-green leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
