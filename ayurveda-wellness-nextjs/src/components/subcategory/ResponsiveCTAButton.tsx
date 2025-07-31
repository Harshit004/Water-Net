
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

interface ResponsiveCTAButtonProps {
  onBookConsultation: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const ResponsiveCTAButton = ({ 
  onBookConsultation, 
  variant = 'primary',
  size = 'md'
}: ResponsiveCTAButtonProps) => {
  const baseClasses = "transition-all duration-300 transform hover:scale-105 shadow-lg group rounded-full font-semibold border-0";
  
  const variantClasses = {
    primary: "btn-gradient text-white hover:shadow-xl",
    secondary: "btn-gradient-light text-deep-bottle-green hover:text-white hover:shadow-xl"
  };
  
  const sizeClasses = {
    sm: "px-3 sm:px-4 py-2 text-xs sm:text-sm",
    md: "px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base",
    lg: "px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
  };

  return (
    <Button 
      onClick={onBookConsultation}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} w-full sm:w-auto`}
    >
      <Calendar className="mr-1 sm:mr-2 h-3 sm:h-4 lg:h-5 w-3 sm:w-4 lg:w-5" />
      <span>Book Consultation</span>
      <ArrowRight className="ml-1 sm:ml-2 h-3 sm:h-4 lg:h-5 w-3 sm:w-4 lg:w-5 group-hover:translate-x-1 transition-transform" />
    </Button>
  );
};

export default ResponsiveCTAButton;
