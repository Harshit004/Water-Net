import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Activity, Brain, Shield, User, UserCheck, Scale, Sparkles, Bone, Droplets, HeartHandshake, Baby, Users, Star } from 'lucide-react';
import ConsultationPopup from '@/components/ConsultationPopup';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import Autoplay from 'embla-carousel-autoplay';

// Mock data for demonstration
const consultationCategories = [
  { name: 'Digestive & Gut Health', subcategories: ['IBS', 'Acidity', 'Constipation'], href: '/digestive' },
  { name: 'Mental Health & Sleep', subcategories: ['Anxiety', 'Depression', 'Insomnia'], href: '/mental-health' },
  { name: 'Immunity & Respiratory Health', subcategories: ['Allergies', 'Asthma', 'Cold'], href: '/immunity' },
  { name: 'Hormonal Balance & Endocrine Health', subcategories: ['Thyroid', 'PCOS', 'Diabetes'], href: '/hormonal' },
  { name: "Women's Health", subcategories: ['Menstrual Issues', 'Pregnancy', 'Menopause'], href: '/womens-health' },
  { name: "Men's Health", subcategories: ['Vitality', 'Prostate', 'Energy'], href: '/mens-health' },
  { name: 'Weight & Metabolic Health', subcategories: ['Weight Loss', 'Metabolism', 'Obesity'], href: '/weight' },
  { name: 'Skin & Hair Health', subcategories: ['Acne', 'Hair Loss', 'Eczema'], href: '/skin-hair' },
  { name: 'Joint & Bone Health', subcategories: ['Arthritis', 'Back Pain', 'Osteoporosis'], href: '/joints' },
  { name: 'Liver, Kidney & Detox', subcategories: ['Liver Health', 'Kidney Stones', 'Detox'], href: '/detox' },
  { name: 'Heart & Circulatory Health', subcategories: ['Blood Pressure', 'Cholesterol', 'Heart Health'], href: '/heart' },
  { name: "Children's Wellness", subcategories: ['immunity', 'Growth', 'Digestion'], href: '/childrens' },
  { name: 'Senior & Elderly Care', subcategories: ['Joint Care', 'Memory', 'Energy'], href: '/elderly' }
];

// Category icons mapping
const CATEGORY_ICONS = {
  'Digestive & Gut Health': Activity,
  'Mental Health & Sleep': Brain,
  'Immunity & Respiratory Health': Shield,
  'Hormonal Balance & Endocrine Health': Activity,
  "Women's Health": User,
  "Men's Health": UserCheck,
  'Weight & Metabolic Health': Scale,
  'Skin & Hair Health': Sparkles,
  'Joint & Bone Health': Bone,
  'Liver, Kidney & Detox': Droplets,
  'Heart & Circulatory Health': HeartHandshake,
  "Children's Wellness": Baby,
  'Senior & Elderly Care': Users
};

const ConsultationCards = () => {
  const [isConsultationPopupOpen, setIsConsultationPopupOpen] = useState(false);

  const openPopup = useCallback(() => {
    setIsConsultationPopupOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsConsultationPopupOpen(false);
  }, []);

  // Fix 'Learn More' links to use correct URLs
  const getCategoryHref = (category) => {
    // Map category names to correct consultation URLs
    switch (category.name) {
      case 'Digestive & Gut Health': return '/consultations/digestive-gut-health';
      case 'Mental Health & Sleep': return '/consultations/mental-health-sleep';
      case 'Immunity & Respiratory Health': return '/consultations/immunity-respiratory-health';
      case 'Hormonal Balance & Endocrine Health': return '/consultations/hormonal-balance-endocrine-health';
      case "Women's Health": return '/consultations/womens-health';
      case "Men's Health": return '/consultations/mens-health';
      case 'Weight & Metabolic Health': return '/consultations/weight-metabolic-health';
      case 'Skin & Hair Health': return '/consultations/skin-hair-health';
      case 'Joint & Bone Health': return '/consultations/joint-bone-health';
      case 'Liver, Kidney & Detox': return '/consultations/liver-kidney-detox';
      case 'Heart & Circulatory Health': return '/consultations/heart-circulatory-health';
      case "Children's Wellness": return '/consultations/childrens-wellness';
      case 'Senior & Elderly Care': return '/consultations/senior-elderly-care';
      default: return '/consultations';
    }
  };

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  // Render individual category card
  const CategoryCard = ({ category, index }) => {
    const Icon = CATEGORY_ICONS[category.name] || Star;
    
    return (
      <div className="bg-white rounded-lg shadow-lg border-0 hover:shadow-xl transition-all duration-300 h-full bg-gradient-to-br from-white to-gray-50/50 group hover:-translate-y-1 flex flex-col items-center justify-center">
        <div className="p-4 sm:p-6 flex flex-col h-full items-center justify-center w-full">
          {/* Icon - Bigger and Centered */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-pea-green/10 to-deep-bottle-green/10 mx-auto">
            <Icon className="h-12 w-12 sm:h-16 sm:w-16 text-pea-green" />
          </div>
          {/* Title */}
          <div className="flex items-center gap-2 w-full justify-center">
            <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-pea-green to-deep-bottle-green rounded-full flex-shrink-0"></div>
            <h3 className="text-base sm:text-lg font-bold text-deep-bottle-green group-hover:text-pea-green transition-colors text-center leading-tight">
              {category.name}
            </h3>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col gap-2 mt-auto w-full">
            <button 
              onClick={openPopup}
              className="btn-gradient text-white px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm h-8 sm:h-10 flex items-center justify-center"
              aria-label={`Book consultation for ${category.name}`}
            >
              <Calendar className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Book Consultation
            </button>
            <button 
              onClick={() => window.open(getCategoryHref(category), '_blank')}
              className="border-2 border-pea-green text-pea-green px-4 py-2 rounded-md hover:bg-gradient-to-r hover:from-pea-green hover:to-deep-bottle-green hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md text-xs sm:text-sm h-8 sm:h-10 flex items-center justify-center"
              aria-label={`Learn more about ${category.name}`}
            >
              Learn More
              <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-bottle-green mb-2 sm:mb-4">
              Expert Ayurvedic Consultations
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-deep-bottle-green/80 max-w-3xl mx-auto leading-relaxed">
              Discover personalized healing solutions for your unique health needs with our comprehensive range of specialized consultations
            </p>
          </div>

          {/* Continuous Carousel */}
          <div className="mb-8">
            <Carousel
              plugins={plugin.current ? [plugin.current] : []}
              className="w-full"
              onMouseEnter={() => plugin.current && plugin.current.stop()}
              onMouseLeave={() => plugin.current && plugin.current.reset()}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {consultationCategories.map((category, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <CategoryCard category={category} index={index} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button 
              onClick={openPopup}
              className="btn-gradient text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto"
            >
              <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Start Your Healing Journey Today
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Consultation Popup */}
      <ConsultationPopup isOpen={isConsultationPopupOpen} onClose={closePopup} />
    </>
  );
};

export default ConsultationCards;
