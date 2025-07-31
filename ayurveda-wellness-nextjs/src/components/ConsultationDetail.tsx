
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ConsultationDetailProps {
  consultation: {
    title: string;
    description: string;
    ayurvedicInfo: string;
    products: Array<{
      name: string;
      image: string;
      description: string;
    }>;
  };
  onBack: () => void;
}

const ConsultationDetail = ({ consultation, onBack }: ConsultationDetailProps) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationTypes: [] as string[],
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleConsultationTypeChange = (value: string) => {
    const currentTypes = formData.consultationTypes;
    if (currentTypes.includes(value)) {
      setFormData({
        ...formData,
        consultationTypes: currentTypes.filter(type => type !== value)
      });
    } else {
      setFormData({
        ...formData,
        consultationTypes: [...currentTypes, value]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Request Submitted",
      description: "Thank you for your interest. We'll contact you within 24 hours to schedule your consultation.",
    });
    setFormData({ name: '', email: '', phone: '', consultationTypes: [], message: '' });
  };

  const nextProduct = () => {
    setCurrentProductIndex((prev) => 
      prev === consultation.products.length - 1 ? 0 : prev + 1
    );
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) => 
      prev === 0 ? consultation.products.length - 1 : prev - 1
    );
  };

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <Button
          onClick={onBack}
          variant="outline"
          className="mb-8 border-pea-green text-pea-green hover:bg-medium-spring"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Consultations
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-deep-bottle-green mb-6">{consultation.title}</h1>
          
          {/* Ayurvedic Information Section */}
          <Card className="mb-12 shadow-lg border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-deep-bottle-green mb-4">
                How Ayurveda Can Help
              </h2>
              <p className="text-deep-bottle-green leading-relaxed text-lg">
                {consultation.ayurvedicInfo}
              </p>
            </CardContent>
          </Card>

          {/* Product Carousel Section */}
          <Card className="mb-12 shadow-lg border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-deep-bottle-green mb-6">
                Recommended Products
              </h2>
              <div className="relative">
                <div className="bg-medium-spring/20 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Button
                      onClick={prevProduct}
                      variant="outline"
                      size="sm"
                      className="border-pea-green text-pea-green hover:bg-medium-spring"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <h3 className="text-xl font-semibold text-deep-bottle-green">
                      {consultation.products[currentProductIndex]?.name}
                    </h3>
                    <Button
                      onClick={nextProduct}
                      variant="outline"
                      size="sm"
                      className="border-pea-green text-pea-green hover:bg-medium-spring"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-center">
                    <img
                      src={consultation.products[currentProductIndex]?.image}
                      alt={consultation.products[currentProductIndex]?.name}
                      className="w-64 h-64 object-cover rounded-lg mx-auto mb-4"
                    />
                    <p className="text-deep-bottle-green">
                      {consultation.products[currentProductIndex]?.description}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Consultation Form */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-deep-bottle-green mb-6 text-center">
                Book Your Consultation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-deep-bottle-green font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 border-pea-green/30 focus:border-pea-green"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-deep-bottle-green font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 border-pea-green/30 focus:border-pea-green"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-deep-bottle-green font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-2 border-pea-green/30 focus:border-pea-green"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <Label className="text-deep-bottle-green font-medium mb-3 block">
                    Select Consultation Types (Multiple selections allowed)
                  </Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Bones & Joints',
                      'Stress & Anxiety', 
                      'Sexual Wellness',
                      'Liver Health',
                      'Diabetes & Blood Sugar',
                      'Piles',
                      'Immunity Boost',
                      'Kidney Stones',
                      'Thyroid Health',
                      'Others'
                    ].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={type}
                          checked={formData.consultationTypes.includes(type)}
                          onChange={() => handleConsultationTypeChange(type)}
                          className="rounded border-pea-green text-pea-green focus:ring-pea-green"
                        />
                        <Label htmlFor={type} className="text-sm text-deep-bottle-green">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-deep-bottle-green font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-2 border-pea-green/30 focus:border-pea-green"
                    placeholder="Tell us about your health concerns or questions..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-pea-green hover:bg-deep-bottle-green text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Submit Consultation Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConsultationDetail;
