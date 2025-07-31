import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, Brain, Shield, Droplets, Activity, Zap, Droplet, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ConsultationCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const consultations = [
    {
      id: 'bones-joints',
      title: "Bones & Joints",
      icon: Heart,
      description: "Natural solutions for arthritis, joint pain, and bone health using traditional Ayurvedic remedies.",
      color: "bg-orange-100 text-orange-600",
      route: "/consultations/bones-joints",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop"
    },
    {
      id: 'stress-anxiety',
      title: "Stress & Anxiety",
      icon: Brain,
      description: "Holistic approaches to mental wellness through herbs, meditation, and lifestyle modifications.",
      color: "bg-purple-100 text-purple-600",
      route: "/consultations/stress-anxiety",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
    },
    {
      id: 'sexual-wellness',
      title: "Sexual Wellness",
      icon: Heart,
      description: "Confidential consultations for intimate health concerns using time-tested Ayurvedic principles.",
      color: "bg-rose-100 text-rose-600",
      route: "/consultations/sexual-wellness",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop"
    },
    {
      id: 'liver-health',
      title: "Liver Health",
      icon: Shield,
      description: "Detoxification and liver support through natural herbs and dietary recommendations.",
      color: "bg-green-100 text-green-600",
      route: "/consultations/liver-health",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop"
    },
    {
      id: 'diabetes',
      title: "Diabetes & Blood Sugar",
      icon: Activity,
      description: "Manage diabetes naturally with personalized diet plans and herbal supplements.",
      color: "bg-blue-100 text-blue-600",
      route: "/consultations/diabetes",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop"
    },
    {
      id: 'piles',
      title: "Piles",
      icon: Droplets,
      description: "Gentle, effective treatment for hemorrhoids using natural Ayurvedic medicines.",
      color: "bg-red-100 text-red-600",
      route: "/consultations/piles",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop"
    },
    {
      id: 'immunity',
      title: "Immunity Boost",
      icon: Zap,
      description: "Strengthen your natural defenses with immune-boosting herbs and lifestyle practices.",
      color: "bg-yellow-100 text-yellow-600",
      route: "/consultations/immunity-boost",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=300&fit=crop"
    },
    {
      id: 'kidney-stones',
      title: "Kidney Stones",
      icon: Droplet,
      description: "Natural dissolution and prevention of kidney stones through targeted herbal therapy.",
      color: "bg-teal-100 text-teal-600",
      route: "/consultations/kidney-stones",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop"
    },
    {
      id: 'thyroid',
      title: "Thyroid Health",
      icon: Calendar,
      description: "Balance thyroid function naturally with herbs and dietary modifications.",
      color: "bg-indigo-100 text-indigo-600",
      route: "/consultations/thyroid-health",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
    }
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(consultations.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentItems = consultations.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const handleConsultationClick = (route: string) => {
    navigate(route);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-deep-bottle-green mb-6">
            Our Ayurvedic Consultation Categories
          </h2>
          <p className="text-xl text-deep-bottle-green max-w-3xl mx-auto">
            Choose from our specialized consultation services, each designed to address specific health concerns using authentic Ayurvedic principles and personalized treatment approaches.
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {currentItems.map((consultation) => {
              const IconComponent = consultation.icon;
              return (
                <Card key={consultation.title} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={consultation.image} 
                      alt={consultation.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute top-4 left-4 w-12 h-12 rounded-full ${consultation.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-deep-bottle-green mb-3">
                      {consultation.title}
                    </h3>
                    <p className="text-deep-bottle-green mb-4 text-sm">
                      {consultation.description}
                    </p>
                    <a href={consultation.route} className="w-full block">
                      <Button 
                        className="w-full bg-pea-green hover:bg-evergreen text-white transition-all duration-300"
                      >
                        Book Consultation
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="p-2 rounded-full border-pea-green text-pea-green hover:bg-medium-spring"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-pea-green' : 'bg-medium-spring'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="p-2 rounded-full border-pea-green text-pea-green hover:bg-medium-spring"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCategories;
