
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Leaf, Heart, Shield } from 'lucide-react';

const ConsultationBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Ancient Wisdom for Modern Wellness",
      subtitle: "Discover Personalized Ayurvedic Solutions",
      description: "Transform your health with time-tested Ayurvedic practices tailored to your unique constitution and lifestyle.",
      icon: Leaf,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop"
    },
    {
      title: "Holistic Health Consultations", 
      subtitle: "Expert Guidance from Certified Practitioners",
      description: "Get comprehensive health assessments and personalized treatment plans from our experienced Ayurvedic doctors.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop"
    },
    {
      title: "Natural Healing Solutions",
      subtitle: "Safe & Effective Herbal Remedies",
      description: "Experience the power of natural healing with carefully selected herbs and lifestyle modifications.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {slides.map((slide, index) => {
        const IconComponent = slide.icon;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-evergreen/80 to-deep-bottle-green/60" />
              <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
                <div className="max-w-4xl text-white space-y-6 text-center">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="bg-medium-spring p-3 rounded-full">
                      <IconComponent className="h-8 w-8 text-evergreen" />
                    </div>
                    <span className="text-medium-spring font-semibold text-lg">{slide.subtitle}</span>
                  </div>
                  <h1 className="text-5xl font-bold leading-tight">{slide.title}</h1>
                  <p className="text-xl leading-relaxed text-medium-spring max-w-3xl mx-auto">{slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-medium-spring' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ConsultationBanner;
