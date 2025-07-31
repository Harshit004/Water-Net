import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationHeader from '@/components/consultation/ConsultationHeader';
import AyurvedicInfoSection from '@/components/consultation/AyurvedicInfoSection';
import ProductCarousel from '@/components/consultation/ProductCarousel';
import ConsultationForm from '@/components/consultation/ConsultationForm';
import { LucideIcon } from 'lucide-react';

interface Product {
  name: string;
  image: string;
  description: string;
}

interface ConsultationData {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  ayurvedicInfo: string;
  products: Product[];
}

interface ConsultationPageTemplateProps {
  consultation: ConsultationData;
}

const ConsultationPageTemplate = ({ consultation }: ConsultationPageTemplateProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto min-h-[500px]">
            {/* Left: Content */}
            <div className="w-full lg:w-[70%] space-y-8">
              <ConsultationHeader
                title={consultation.title}
                description={consultation.description}
                icon={consultation.icon}
                color={consultation.color}
              />
              <AyurvedicInfoSection ayurvedicInfo={consultation.ayurvedicInfo} />
              <ProductCarousel products={consultation.products} />
            </div>
            {/* Right: Form */}
            <div className="w-full lg:w-[30%] flex items-start lg:sticky lg:top-32 h-fit">
              <div className="w-full">
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ConsultationPageTemplate;
