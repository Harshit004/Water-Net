
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

interface CTASectionProps {
  onBookConsultation: () => void;
}

const CTASection = ({ onBookConsultation }: CTASectionProps) => {
  return (
    <div className="text-center">
      <h3 className="text-xl font-bold text-deep-bottle-green mb-3">
        Ready to Start Your Healing Journey?
      </h3>
      <p className="text-sm text-deep-bottle-green/80 mb-5 leading-relaxed">
        Book a personalized consultation with our expert Ayurvedic practitioners.
      </p>
      <Button 
        size="lg" 
        onClick={onBookConsultation}
        className="btn-gradient text-white px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg w-full group border-0"
      >
        <Calendar className="mr-2 h-4 w-4 text-white" />
        <span className="text-white">Book Consultation</span>
        <ArrowRight className="ml-2 h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default CTASection;
