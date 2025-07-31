import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const bannerImages = ['/lovable-uploads/300b59e0-75c4-433e-9f22-e8efbe0738eb.png', '/lovable-uploads/8c2cd795-dbb0-4437-9655-25b0c6cb3cd7.png', '/lovable-uploads/9fca8432-948c-4d62-9e60-821592a54a62.png'];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {bannerImages.map((img, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <img 
            src={img} 
            alt={`Homepage Banner ${index + 1}`} 
            className="w-full h-full object-cover object-center" 
            loading={index === 0 ? 'eager' : 'lazy'} 
            onError={(e) => {
              console.error(`Failed to load image: ${img}`);
              e.currentTarget.style.display = 'none';
            }} 
            onLoad={() => {
              console.log(`Successfully loaded image: ${img}`);
            }} 
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide} 
        className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-deep-bottle-green p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300" 
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-deep-bottle-green p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300" 
        aria-label="Next Slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
      </button>
    </section>
  );
};

export default HeroBanner;