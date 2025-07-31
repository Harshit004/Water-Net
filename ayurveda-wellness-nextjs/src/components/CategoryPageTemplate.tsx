
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';
import { ArrowLeft, Calendar } from 'lucide-react';
import ConsultationForm from '@/components/consultation/ConsultationForm';

interface Subcategory {
  name: string;
  href: string;
  description: string;
  symptoms: string[];
  image: string;
}

interface CategoryPageTemplateProps {
  categoryTitle: string;
  categoryDescription: string;
  categoryImage: string;
  subcategories: Subcategory[];
}

const CategoryPageTemplate = ({
  categoryTitle,
  categoryDescription,
  categoryImage,
  subcategories
}: CategoryPageTemplateProps) => {
  const navigate = useNavigate();
  return <div className="min-h-screen">
      <Header />
      
      {/* Category Banner - Tablet optimized */}
      <section className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
        <div className="w-full h-full relative">
          <OptimizedImage
            src={categoryImage}
            alt={`${categoryTitle} banner`}
            className="w-full h-full object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-evergreen/80 to-deep-bottle-green/60" />
          <div className="relative z-10 container mx-auto px-3 sm:px-4 h-full flex items-center">
            <div className="max-w-3xl text-white space-y-2 sm:space-y-4 md:space-y-6">
              <Button variant="outline" onClick={() => navigate('/consultations')} className="border-white text-deep-bottle-green hover:bg-white hover:text-deep-bottle-green text-xs px-2 py-1 sm:text-sm sm:px-3 sm:py-2 md:px-4">
                <ArrowLeft className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Back to Categories</span>
                <span className="sm:hidden">Back</span>
              </Button>
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{categoryTitle}</h1>
              <p className="text-sm sm:text-lg md:text-xl leading-relaxed text-medium-spring">{categoryDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories Grid - Tablet optimized */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row w-full gap-0">
            {/* Left: Main Content */}
            <div 
              className="lg:ml-[3.61%] px-4 lg:px-0"
              style={{ width: 'calc(100% - 350px - 7.22%)' }}
            >
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-bold text-deep-bottle-green mb-4 md:mb-6">
                  Our Specializations
                </h2>
                <p className="text-lg md:text-xl text-deep-bottle-green max-w-3xl mx-auto">
                  Choose the specific condition you need help with. Our expert practitioners provide personalized treatment plans for each specialization.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {subcategories.map(subcategory => <Card key={subcategory.name} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden flex flex-col">
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <OptimizedImage
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <CardContent className="p-4 md:p-6 flex flex-col flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-deep-bottle-green mb-3">
                        {subcategory.name}
                      </h3>
                      <p className="text-deep-bottle-green mb-4 text-sm leading-relaxed flex-1">
                        {subcategory.description}
                      </p>
                      {subcategory.symptoms.length > 0 && <div className="mb-4">
                          <h4 className="text-sm font-semibold text-deep-bottle-green mb-2">Common Symptoms:</h4>
                          <div className="flex flex-wrap gap-1">
                            {subcategory.symptoms.slice(0, 3).map((symptom, index) => <span key={index} className="text-xs bg-medium-spring text-evergreen px-2 py-1 rounded-full">
                                {symptom}
                              </span>)}
                            {subcategory.symptoms.length > 3 && <span className="text-xs text-gray-500">+{subcategory.symptoms.length - 3} more</span>}
                          </div>
                        </div>}
                      <div className="mt-auto">
                        <Button onClick={() => navigate(subcategory.href)} className="w-full bg-pea-green hover:bg-evergreen text-white transition-all duration-300 text-sm md:text-base py-2">
                          <Calendar className="mr-2 h-4 w-4" />
                          Book Consultation
                        </Button>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
            {/* Right: Consultation Form */}
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
    </div>;
};

export default CategoryPageTemplate;
