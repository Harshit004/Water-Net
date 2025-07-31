
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, CheckCircle } from 'lucide-react';

interface SymptomsCausesCardsProps {
  symptoms: string[];
  causes: string[];
}

const SymptomsCausesCards = ({ symptoms, causes }: SymptomsCausesCardsProps) => {
  return (
    <div className="space-y-3 sm:space-y-4 lg:space-y-6">
      <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-medium-spring/5 hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-3 sm:p-4 lg:p-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-deep-bottle-green mb-3 sm:mb-4 lg:mb-5 flex items-center">
            <Clock className="mr-2 sm:mr-3 h-4 sm:h-5 lg:h-6 w-4 sm:w-5 lg:w-6 text-pea-green" />
            Common Symptoms
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 lg:gap-3">
            {symptoms.map((symptom, index) => (
              <div key={index} className="flex items-start space-x-2 p-2 sm:p-3 rounded-lg hover:bg-medium-spring/10 transition-colors">
                <CheckCircle className="h-3 sm:h-4 lg:h-5 w-3 sm:w-4 lg:w-5 text-pea-green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm lg:text-base text-deep-bottle-green/90 leading-relaxed">{symptom}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-pea-green/5 hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-3 sm:p-4 lg:p-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-deep-bottle-green mb-3 sm:mb-4 lg:mb-5 flex items-center">
            <Shield className="mr-2 sm:mr-3 h-4 sm:h-5 lg:h-6 w-4 sm:w-5 lg:w-6 text-pea-green" />
            Root Causes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 lg:gap-3">
            {causes.map((cause, index) => (
              <div key={index} className="flex items-start space-x-2 p-2 sm:p-3 rounded-lg hover:bg-pea-green/10 transition-colors">
                <CheckCircle className="h-3 sm:h-4 lg:h-5 w-3 sm:w-4 lg:w-5 text-pea-green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm lg:text-base text-deep-bottle-green/90 leading-relaxed">{cause}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SymptomsCausesCards;
