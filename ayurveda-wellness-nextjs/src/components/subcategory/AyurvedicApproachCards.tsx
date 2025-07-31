
import { Card, CardContent } from '@/components/ui/card';
import { Users, CheckCircle, Leaf } from 'lucide-react';

interface AyurvedicApproachCardsProps {
  ayurvedicApproach: string;
  treatments: string[];
}

const AyurvedicApproachCards = ({ ayurvedicApproach, treatments }: AyurvedicApproachCardsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
      <Card className="lg:col-span-2 shadow-lg border-0 bg-gradient-to-br from-pea-green/5 to-medium-spring/10 hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-3 sm:p-4 lg:p-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-deep-bottle-green mb-3 sm:mb-4 lg:mb-5 flex items-center">
            <Users className="mr-2 sm:mr-3 h-4 sm:h-5 lg:h-6 w-4 sm:w-5 lg:w-6 text-pea-green" />
            Our Ayurvedic Approach
          </h3>
          <p className="text-xs sm:text-sm lg:text-base text-deep-bottle-green/90 leading-relaxed">
            {ayurvedicApproach}
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-evergreen/5 hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-3 sm:p-4 lg:p-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-deep-bottle-green mb-3 sm:mb-4 lg:mb-5 flex items-center">
            <Leaf className="mr-2 h-4 sm:h-5 lg:h-6 w-4 sm:w-5 lg:w-6 text-pea-green" />
            Natural Treatments
          </h3>
          <div className="space-y-1 sm:space-y-2 lg:space-y-3 max-h-48 sm:max-h-60 lg:max-h-72 overflow-y-auto">
            {treatments.map((treatment, index) => (
              <div key={index} className="flex items-start space-x-2 p-1.5 sm:p-2 lg:p-3 rounded-lg hover:bg-medium-spring/10 transition-colors">
                <CheckCircle className="h-3 sm:h-4 lg:h-5 w-3 sm:w-4 lg:w-5 text-pea-green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm lg:text-base text-deep-bottle-green/90 leading-relaxed">{treatment}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AyurvedicApproachCards;
