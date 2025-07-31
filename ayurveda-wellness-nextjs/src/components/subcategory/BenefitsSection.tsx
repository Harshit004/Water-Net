
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Sparkles } from 'lucide-react';

interface BenefitsSectionProps {
  benefits: string[];
}

const BenefitsSection = ({ benefits }: BenefitsSectionProps) => {
  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-evergreen/5 to-deep-bottle-green/8 hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-3 sm:p-4 lg:p-6">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-deep-bottle-green mb-3 sm:mb-4 lg:mb-6 text-center flex items-center justify-center">
          <Sparkles className="mr-2 h-4 sm:h-5 lg:h-6 w-4 sm:w-5 lg:w-6 text-pea-green" />
          Treatment Benefits
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 lg:p-4 bg-white/60 rounded-lg shadow-sm hover:bg-white/80 transition-colors">
              <CheckCircle className="h-3 sm:h-4 lg:h-5 w-3 sm:w-4 lg:w-5 text-pea-green flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm lg:text-base text-deep-bottle-green font-medium leading-relaxed">{benefit}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BenefitsSection;
