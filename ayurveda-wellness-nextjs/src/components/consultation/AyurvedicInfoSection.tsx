
import { Card, CardContent } from '@/components/ui/card';

interface AyurvedicInfoSectionProps {
  ayurvedicInfo: string;
}

const AyurvedicInfoSection = ({ ayurvedicInfo }: AyurvedicInfoSectionProps) => {
  return (
    <Card className="mb-12 shadow-lg border-0">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold text-deep-bottle-green mb-4">
          How Ayurveda Can Help
        </h2>
        <p className="text-deep-bottle-green leading-relaxed text-lg">
          {ayurvedicInfo}
        </p>
      </CardContent>
    </Card>
  );
};

export default AyurvedicInfoSection;
