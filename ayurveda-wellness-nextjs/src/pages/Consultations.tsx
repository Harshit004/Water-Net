
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/consultation/CategoryCard';
import ConsultationForm from '@/components/consultation/ConsultationForm';

const Consultations = () => {
  const categories = [
    {
      title: "Digestive & Gut Health",
      href: "/consultations/digestive-gut-health",
      image: "/Category/Digestive & Gut Health.jpg",
      subcategoriesCount: 6
    },
    {
      title: "Mental Health & Sleep",
      href: "/consultations/mental-health-sleep",
      image: "/Category/Mental Health & Sleep.jpg",
      subcategoriesCount: 6
    },
    {
      title: "Immunity & Respiratory Health",
      href: "/consultations/immunity-respiratory-health",
      image: "/Category/Immunity & Respiratory Health.jpg",
      subcategoriesCount: 6
    },
    {
      title: "Hormonal Balance & Endocrine Health",
      href: "/consultations/hormonal-balance-endocrine-health",
      image: "/Category/Harmonal Imbalance.jpg",
      subcategoriesCount: 5
    },
    {
      title: "Women's Health",
      href: "/consultations/womens-health",
      image: "/Category/Womens Health.jpg",
      subcategoriesCount: 8
    },
    {
      title: "Men's Health",
      href: "/consultations/mens-health",
      image: "/Category/Men_s Health.jpg",
      subcategoriesCount: 7
    },
    {
      title: "Weight & Metabolic Health",
      href: "/consultations/weight-metabolic-health",
      image: "/Category/Weight & Metabolic Health.jpg",
      subcategoriesCount: 5
    },
    {
      title: "Skin & Hair Health",
      href: "/consultations/skin-hair-health",
      image: "/Category/Skin & Hair Health.jpg",
      subcategoriesCount: 6
    },
    {
      title: "Joint & Bone Health",
      href: "/consultations/joint-bone-health",
      image: "/Category/Joint & Bone Health.jpg",
      subcategoriesCount: 5
    },
    {
      title: "Liver, Kidney & Detox",
      href: "/consultations/liver-kidney-detox",
      image: "/Category/Liver, Kidney & Detox.jpg",
      subcategoriesCount: 5
    },
    {
      title: "Heart & Circulatory Health",
      href: "/consultations/heart-circulatory-health",
      image: "/Category/Heart & Circulatory Health.jpg",
      subcategoriesCount: 5
    },
    {
      title: "Children's Wellness",
      href: "/consultations/childrens-wellness",
      image: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/85891537-6a0d-44b2-7144-c7765c6c4e00/public",
      subcategoriesCount: 7
    },
    {
      title: "Senior & Elderly Care",
      href: "/consultations/senior-elderly-care",
      image: "/Category/Senior & Elderly Care.jpg",
      subcategoriesCount: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Enhanced Hero Section - Tablet optimized */}
      <section className="bg-gradient-to-br from-evergreen via-deep-bottle-green to-pea-green py-12 md:py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,_white_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
              Ayurvedic 
              <span className="bg-gradient-to-r from-medium-spring to-white bg-clip-text text-transparent"> Consultations</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-medium-spring max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
              Discover personalized healing through ancient Ayurvedic wisdom. Our expert consultations 
              address the root causes of health concerns, offering natural, sustainable solutions for 
              lasting wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Categories Grid + Sticky Form - Tablet optimized */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-deep-bottle-green mb-4 md:mb-6 leading-tight">
              Choose Your Path to 
              <span className="bg-gradient-to-r from-pea-green to-deep-bottle-green bg-clip-text text-transparent"> Natural Healing</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-deep-bottle-green/80 max-w-3xl mx-auto leading-relaxed">
              Each consultation is tailored to your unique constitution and health needs, 
              providing personalized guidance for optimal well-being.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-8">
            {/* Left: Categories Grid */}
            <div className="flex-1 lg:ml-[3.61%] px-4 lg:px-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
                {categories.map((category, index) => (
                  <div key={index} className="animate-fade-in" style={{
                    animationDelay: `${index * 0.1}s`
                  }}>
                    <CategoryCard 
                      title={category.title} 
                      href={category.href} 
                      image={category.image}
                      subcategoriesCount={category.subcategoriesCount}
                    />
                  </div>
                ))}
              </div>
              {/* Show consultation form below categories on mobile/tablet */}
              <div className="block lg:hidden mt-10">
                <ConsultationForm />
              </div>
            </div>
            {/* Right: Consultation Form (desktop only) */}
            <div 
              className="hidden lg:block lg:sticky lg:top-32 h-fit"
              style={{ width: '350px', marginRight: '3.61%', marginLeft: 'auto' }}
            >
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultations;
