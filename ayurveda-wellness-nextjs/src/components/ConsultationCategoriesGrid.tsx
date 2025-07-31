
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Brain, Shield, Activity, User, UserCheck, Scale, Sparkles, Bone, Droplets, HeartHandshake, Baby, Users } from 'lucide-react';

const ConsultationCategoriesGrid = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Digestive & Gut Health",
      description: "Natural solutions for digestive disorders, acid reflux, IBS, and gut health optimization.",
      icon: Activity,
      route: "/consultations/digestive-gut-health",
      color: "bg-orange-100 text-orange-600",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      subcategoriesCount: 6
    },
    {
      title: "Mental Health & Sleep",
      description: "Holistic approaches to anxiety, stress, depression, and sleep disorders.",
      icon: Brain,
      route: "/consultations/mental-health-sleep",
      color: "bg-purple-100 text-purple-600",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      subcategoriesCount: 6
    },
    {
      title: "Immunity & Respiratory Health",
      description: "Strengthen immunity and treat respiratory conditions naturally.",
      icon: Shield,
      route: "/consultations/immunity-respiratory-health",
      color: "bg-green-100 text-green-600",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop",
      subcategoriesCount: 6
    },
    {
      title: "Hormonal Balance & Endocrine Health",
      description: "Balance hormones naturally for thyroid, diabetes, and endocrine disorders.",
      icon: Activity,
      route: "/consultations/hormonal-balance-endocrine-health",
      color: "bg-blue-100 text-blue-600",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
      subcategoriesCount: 5
    },
    {
      title: "Women's Health",
      description: "Comprehensive care for PCOS, menstrual health, fertility, and menopause.",
      icon: User,
      route: "/consultations/womens-health",
      color: "bg-rose-100 text-rose-600",
      image: "https://images.unsplash.com/photo-1594824006936-85e03d7b9e1b?w=400&h=300&fit=crop",
      subcategoriesCount: 8
    },
    {
      title: "Men's Health",
      description: "Specialized treatments for male vitality, fertility, and sexual wellness.",
      icon: UserCheck,
      route: "/consultations/mens-health",
      color: "bg-indigo-100 text-indigo-600",
      image: "https://images.unsplash.com/photo-1506089676908-3592f7389d14?w=400&h=300&fit=crop",
      subcategoriesCount: 7
    },
    {
      title: "Weight & Metabolic Health",
      description: "Natural weight management and metabolic disorder treatments.",
      icon: Scale,
      route: "/consultations/weight-metabolic-health",
      color: "bg-yellow-100 text-yellow-600",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      subcategoriesCount: 5
    },
    {
      title: "Skin & Hair Health",
      description: "Ayurvedic solutions for skin conditions, acne, hair fall, and beauty care.",
      icon: Sparkles,
      route: "/consultations/skin-hair-health",
      color: "bg-pink-100 text-pink-600",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop",
      subcategoriesCount: 6
    },
    {
      title: "Joint & Bone Health",
      description: "Natural treatments for arthritis, joint pain, and bone health.",
      icon: Bone,
      route: "/consultations/joint-bone-health",
      color: "bg-orange-100 text-orange-600",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
      subcategoriesCount: 5
    },
    {
      title: "Liver, Kidney & Detox",
      description: "Detoxification and organ health support through natural remedies.",
      icon: Droplets,
      route: "/consultations/liver-kidney-detox",
      color: "bg-teal-100 text-teal-600",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
      subcategoriesCount: 5
    },
    {
      title: "Heart & Circulatory Health",
      description: "Cardiovascular health and circulation improvement treatments.",
      icon: HeartHandshake,
      route: "/consultations/heart-circulatory-health",
      color: "bg-red-100 text-red-600",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&h=300&fit=crop",
      subcategoriesCount: 5
    },
    {
      title: "Children's Wellness",
      description: "Gentle Ayurvedic care for children's health and development.",
      icon: Baby,
      route: "/consultations/childrens-wellness",
      color: "bg-emerald-100 text-emerald-600",
      image: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/85891537-6a0d-44b2-7144-c7765c6c4e00/public",
      subcategoriesCount: 5
    },
    {
      title: "Senior & Elderly Care",
      description: "Specialized care for aging-related health concerns and wellness.",
      icon: Users,
      route: "/consultations/senior-elderly-care",
      color: "bg-gray-100 text-gray-600",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=300&fit=crop",
      subcategoriesCount: 5
    }
  ];

  const handleCategoryClick = (route: string) => {
    navigate(route);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-medium-spring/10 to-pea-green/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-10 left-10 w-32 h-32 bg-gradient-green-light rounded-full opacity-10"></div>
        <div className="animate-float absolute top-40 right-20 w-24 h-24 bg-gradient-green rounded-full opacity-10" style={{animationDelay: '1s'}}></div>
        <div className="animate-float absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-green-dark rounded-full opacity-10" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-deep-bottle-green mb-4 text-shimmer">
            Choose Your Health Category
          </h2>
          <p className="text-lg text-deep-bottle-green/80 max-w-2xl mx-auto animate-slide-in-up">
            Explore our comprehensive range of Ayurvedic consultation categories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="group card-hover-3d border-0 overflow-hidden cursor-pointer flex flex-col h-full bg-white/90 backdrop-blur-sm animate-bounce-in hover:animate-none transition-all duration-500"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
                  boxShadow: '8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff'
                }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-pea-green/40 transition-all duration-500" />
                  <div className={`absolute top-3 left-3 w-10 h-10 rounded-full ${category.color} flex items-center justify-center group-hover:animate-rotate-360 transition-all duration-500 hover-glow`}
                       style={{
                         background: 'linear-gradient(145deg, #D8E588, #94AD00)',
                         boxShadow: '4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff'
                       }}>
                    <IconComponent className="h-5 w-5 text-evergreen group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="absolute top-3 right-3 bg-gradient-green-light px-2 py-1 rounded-full text-xs font-semibold text-evergreen hover-pulse-scale"
                       style={{
                         boxShadow: '2px 2px 4px #d1d1d1, -2px -2px 4px #ffffff'
                       }}>
                    {category.subcategoriesCount} specializations
                  </div>
                </div>
                <CardContent className="p-5 flex flex-col flex-grow relative">
                  <h3 className="text-lg font-bold text-deep-bottle-green mb-3 group-hover:text-shimmer transition-all duration-300">
                    {category.title}
                  </h3>
                  <p className="text-deep-bottle-green/70 mb-4 text-sm leading-relaxed flex-grow group-hover:text-deep-bottle-green transition-colors duration-300">
                    {category.description}
                  </p>
                  <Button 
                    onClick={() => handleCategoryClick(category.route)}
                    className="w-full text-white transition-all duration-500 text-sm py-2 mt-auto border-0 btn-gradient hover-elastic group-hover:animate-pulse-glow"
                  >
                    <span className="relative z-10">View Specializations</span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConsultationCategoriesGrid;
