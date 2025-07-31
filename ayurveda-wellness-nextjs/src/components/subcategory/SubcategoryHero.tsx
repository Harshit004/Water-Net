
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';

interface SubcategoryHeroProps {
  subcategoryTitle: string;
  categoryTitle: string;
  categoryHref: string;
  description: string;
  image: string;
  onBookConsultation: () => void;
}

const SubcategoryHero = ({
  subcategoryTitle,
  categoryTitle,
  categoryHref,
  description,
  image,
  onBookConsultation
}: SubcategoryHeroProps) => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[40vh] sm:h-[50vh] lg:h-[70vh] overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-evergreen/80 to-deep-bottle-green/60" />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-3 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-4xl text-white space-y-2 sm:space-y-4 lg:space-y-6">

            {/* Back Button */}
            <div className="flex items-center space-x-1 sm:space-x-4 mb-1 sm:mb-4">
              <Button
                variant="outline"
                onClick={() => navigate(categoryHref)}
                className="border-white text-deep-bottle-green hover:bg-white hover:text-deep-bottle-green text-xs px-2 py-1 sm:text-sm sm:px-4 sm:py-2"
              >
                <ArrowLeft className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Back to {categoryTitle}</span>
                <span className="sm:hidden">Back</span>
              </Button>
            </div>

            {/* Main Title */}
            <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">{subcategoryTitle}</h1>

            {/* Description */}
            <p className="text-xs sm:text-base lg:text-lg xl:text-xl leading-relaxed text-medium-spring max-w-3xl">{description}</p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-1 sm:pt-4">
              <Button
                size="sm"
                onClick={onBookConsultation}
                className="bg-pea-green hover:bg-deep-bottle-green text-white px-3 py-2 text-xs sm:px-6 sm:py-3 sm:text-base lg:px-8 lg:py-4 lg:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Calendar className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-white" />
                <span className="text-white">Book Now</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubcategoryHero;
