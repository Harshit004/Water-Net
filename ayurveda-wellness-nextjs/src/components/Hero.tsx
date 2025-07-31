
import { ArrowRight, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { validateName, validateEmail, validatePhone, formatPhoneNumber } from '@/utils/formValidation';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Format phone number to digits only
    const formattedValue = name === 'phone' ? formatPhoneNumber(value) : value;
    
    setFormData({
      ...formData,
      [name]: formattedValue
    });

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name) || '',
      email: validateEmail(formData.email) || '',
      phone: validatePhone(formData.phone) || ''
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Consultation Request Submitted",
        description: "Thank you for your interest. We'll contact you within 24 hours to schedule your consultation.",
      });
      setFormData({ name: '', email: '', phone: '', consultationType: '', message: '' });
      setErrors({ name: '', email: '', phone: '' });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-medium-spring to-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="bg-white p-3 sm:p-4 rounded-full shadow-lg">
              <Leaf className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-pea-green" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-deep-bottle-green mb-4 sm:mb-6 leading-tight">
            Ancient Wisdom for
            <span className="text-pea-green block">Modern Wellness</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-deep-bottle-green mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience personalized Ayurvedic consultations that bring balance to your mind, body, and spirit. 
            Our expert practitioners guide you on a journey to optimal health using time-tested natural remedies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-pea-green hover:bg-deep-bottle-green text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-xl sm:text-2xl text-deep-bottle-green text-center">
                    Book Your Consultation
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
                      className={`mt-2 border-pea-green/30 focus:border-pea-green ${
                        errors.name ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                      className={`mt-2 border-pea-green/30 focus:border-pea-green ${
                        errors.email ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      placeholder="Enter your email address"
                      disabled={isSubmitting}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                      className={`mt-2 border-pea-green/30 focus:border-pea-green ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      placeholder="Enter your phone number"
                      disabled={isSubmitting}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <Label htmlFor="consultationType" className="text-deep-bottle-green font-medium">
                      Consultation Type
                    </Label>
                    <Select 
                      value={formData.consultationType} 
                      onValueChange={(value) => setFormData({...formData, consultationType: value})}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="mt-2 border-pea-green/30 focus:border-pea-green">
                        <SelectValue placeholder="Select consultation type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bones-joints">Bones & Joints</SelectItem>
                        <SelectItem value="stress-anxiety">Stress & Anxiety</SelectItem>
                        <SelectItem value="sexual-wellness">Sexual Wellness</SelectItem>
                        <SelectItem value="liver-health">Liver Health</SelectItem>
                        <SelectItem value="diabetes">Diabetes & Blood Sugar</SelectItem>
                        <SelectItem value="piles">Piles</SelectItem>
                        <SelectItem value="immunity">Immunity Boost</SelectItem>
                        <SelectItem value="kidney-stones">Kidney Stones</SelectItem>
                        <SelectItem value="thyroid">Thyroid Health</SelectItem>
                        <SelectItem value="others">Others</SelectItem>
                      </SelectContent>
                    </Select>
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
                      className="mt-2 border-pea-green/30 focus:border-pea-green resize-none"
                      placeholder="Tell us about your health concerns or questions..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-pea-green hover:bg-deep-bottle-green text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-pea-green text-pea-green hover:bg-medium-spring px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-8 sm:mt-12 text-xs sm:text-sm text-deep-bottle-green flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pea-green rounded-full"></div>
              500+ Happy Clients
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pea-green rounded-full"></div>
              15+ Years Experience
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pea-green rounded-full"></div>
              Natural Remedies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
