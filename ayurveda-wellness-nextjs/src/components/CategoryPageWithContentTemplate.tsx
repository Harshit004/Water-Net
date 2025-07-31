import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Calendar, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ConsultationForm from '@/components/consultation/ConsultationForm';
import SEO from '@/components/SEO';

// Interface Definitions
interface CategoryContentData {
  subtitle: string;
  description: string;
  offerings: string[];
  closingMessage: string;
}

interface Subcategory {
  name: string;
  href: string;
  description: string;
  symptoms: string[];
  image: string;
}

interface CategoryPageWithContentTemplateProps {
  categoryTitle: string;
  categoryDescription: string;
  categoryImage: string;
  categoryContent: CategoryContentData;
  subcategories: Subcategory[];
}

// Simple list of common country codes for the dropdown
const countryCodes = [
  { code: '+1', name: 'USA/Canada' },
  { code: '+44', name: 'UK' },
  { code: '+91', name: 'India' }, // Default for Delhi, India
  { code: '+61', name: 'Australia' },
  { code: '+49', name: 'Germany' },
  { code: '+33', name: 'France' },
  { code: '+81', name: 'Japan' },
  { code: '+86', name: 'China' },
  { code: '+971', name: 'UAE' },
  { code: '+65', name: 'Singapore' },
  { code: '+60', name: 'Malaysia' },
  { code: '+27', name: 'South Africa' },
  // Add more as needed
];

const CategoryPageWithContentTemplate = ({
  categoryTitle,
  categoryDescription,
  categoryImage,
  categoryContent,
  subcategories
}: CategoryPageWithContentTemplateProps) => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Combine country code and phone number for submission
    const fullPhoneNumber = formData.phone ? `${formData.countryCode}${formData.phone}` : '';
    console.log('Form Submitted:', { ...formData, phone: fullPhoneNumber });
    // In a real application, you'd send this data to your backend, e.g., using fetch or axios
    alert('Thank you for your inquiry! We will get back to you shortly.');
    setFormData({ name: '', email: '', countryCode: '+91', phone: '', message: '' }); // Clear form, reset country code
  };

  return (
    <>
      <SEO
        title={`${categoryTitle} - Ayurvedic Consultation & Treatment`}
        description={categoryDescription}
        keywords={`${categoryTitle}, ayurvedic consultation, natural treatment, holistic health, ${categoryTitle.toLowerCase()}`}
        canonicalUrl={`https://bookmyayurveda.com/consultations/${categoryTitle.toLowerCase().replace(/\s+/g, '-')}`}
      />
      <div className="min-h-screen bg-gradient-to-br from-white via-medium-spring/3 to-pea-green/5">
        <Header />
        {/* Banner Section */}
        <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={categoryImage}
              alt={`${categoryTitle} banner`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-evergreen/80 to-deep-bottle-green/60" />
          </div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="text-white space-y-6">
              <Button
                variant="outline"
                onClick={() => navigate('/consultations')}
                className="border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Categories
              </Button>
              <h1 className="text-5xl font-bold leading-tight drop-shadow-lg">
                {categoryTitle}
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content + Sticky Form (does NOT include banner or footer) */}
        <div className="flex flex-col lg:flex-row w-full gap-8">
          {/* Left: Main Content */}
          <div className="lg:ml-[3.61%] px-4 lg:px-0 flex-1">
            {/* Category Content Section */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50/50">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold text-deep-bottle-green mb-4">{categoryContent.subtitle}</h2>
                      <p className="text-deep-bottle-green/80 leading-relaxed text-lg mb-8">
                        {categoryContent.description}
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-pea-green/5 to-deep-bottle-green/5 rounded-lg p-6 border-l-4 border-pea-green mb-8">
                      <h3 className="font-semibold text-deep-bottle-green mb-4 flex items-center gap-2 text-xl">
                        <span className="w-2 h-2 bg-pea-green rounded-full"></span>
                        What Ayurveda Gently Offers:
                      </h3>
                      <ul className="space-y-3">
                        {categoryContent.offerings.map((offering, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-pea-green flex-shrink-0 mt-0.5" />
                            <span className="text-deep-bottle-green leading-relaxed">{offering}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-deep-bottle-green/5 to-pea-green/5 rounded-lg p-6 border border-pea-green/20">
                      <p className="text-deep-bottle-green font-medium italic text-center leading-relaxed text-lg">
                        {categoryContent.closingMessage}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Subcategories Grid */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-deep-bottle-green mb-6">
                    Our Specialized Treatments
                  </h2>
                  <p className="text-xl text-deep-bottle-green/80 max-w-3xl mx-auto">
                    Choose from our specialized consultation services within {categoryTitle.toLowerCase()},
                    each designed to address specific health concerns.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {subcategories.map((subcategory, index) => (
                    <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <OptimizedImage
                          src={subcategory.image}
                          alt={subcategory.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <CardContent className="p-6 flex flex-col flex-1 items-center justify-between">
                        <h3 className="text-xl font-bold text-deep-bottle-green mb-3 text-center">
                          {subcategory.name}
                        </h3>
                        <div className="mt-auto w-full">
                          <Button
                            asChild
                            className="w-full bg-pea-green hover:bg-evergreen text-white transition-all duration-300"
                          >
                            <Link to={subcategory.href}>
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </div>
          {/* Right: Consultation Form */}
          <div 
            className="hidden lg:block lg:sticky lg:top-32 h-fit self-start"
            style={{ width: '350px', marginRight: '3.61%', marginLeft: 'auto', alignSelf: 'flex-start' }}
          >
            <ConsultationForm />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CategoryPageWithContentTemplate;
