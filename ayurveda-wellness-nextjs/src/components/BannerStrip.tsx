import { Button } from '@/components/ui/button';
import ConsultationFormModal from '@/components/ConsultationFormModal';

const BannerStrip = () => {
  return (
    <section className="border-t border-b border-pea-green/20">
      <div className="grid md:grid-cols-2">
        {/* Left Half - Light Background */}
        <div className="bg-gradient-to-br from-medium-spring/30 to-pea-green/20 py-12 px-6 md:px-8">
          <div className="max-w-lg mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-bold text-deep-bottle-green mb-3">
              Discover Personalized Ayurvedic Solutions
            </h3>
            <h4 className="text-lg md:text-xl font-semibold text-pea-green mb-4">
              Ancient Wisdom for Modern Wellness
            </h4>
            <p className="text-sm md:text-base text-deep-bottle-green/80 leading-relaxed">
              Transform your health with time-tested Ayurvedic practices tailored to your unique constitution and lifestyle.
            </p>
          </div>
        </div>
        
        {/* Right Half - Dark Background */}
        <div className="bg-gradient-to-br from-deep-bottle-green to-evergreen py-12 px-6 md:px-8 flex items-center">
          <div className="max-w-lg mx-auto text-center text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Address the Root Cause of Your Health Issues Naturally
            </h3>
            <p className="text-sm md:text-base mb-6 text-white/90">
              Talk to our expert Ayurveda Practitioner
            </p>
            <ConsultationFormModal>
              <Button className="bg-white text-deep-bottle-green hover:bg-medium-spring hover:text-evergreen px-8 py-3 text-base font-semibold rounded-lg shadow-lg transition-all duration-300">
                Book a Consultation
              </Button>
            </ConsultationFormModal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerStrip;