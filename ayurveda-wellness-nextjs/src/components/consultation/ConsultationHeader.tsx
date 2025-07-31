
import { LucideIcon } from 'lucide-react';

interface ConsultationHeaderProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const ConsultationHeader = ({ title, description, icon, color }: ConsultationHeaderProps) => {
  const IconComponent = icon;

  return (
    <div className="flex items-center mb-8">
      <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mr-6`}>
        <IconComponent className="h-8 w-8" />
      </div>
      <div>
        <h1 className="text-4xl font-bold text-deep-bottle-green mb-2">{title}</h1>
        <p className="text-xl text-deep-bottle-green">{description}</p>
      </div>
    </div>
  );
};

export default ConsultationHeader;
