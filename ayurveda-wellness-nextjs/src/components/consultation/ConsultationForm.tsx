
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { validateName, validateEmail, validatePhone, formatPhoneNumber } from '@/utils/formValidation';

async function submitLeadToSheety(formType, formData) {
  const now = new Date();
  const payload = {
    formType,
    ...formData,
    pageUrl: window.location.href,
    date: now.toLocaleDateString(),
    time: now.toLocaleTimeString(),
    timestamp: now.toISOString(),
  };
  const response = await fetch('https://api.sheety.co/e4314a50a15956e85f53f24e75ef9735/leads/sheet1', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sheet1: payload }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to submit lead');
  }
  return response.json();
}

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    phone: '',
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

  const handleCountryCodeChange = (value: string) => {
    setFormData({
      ...formData,
      countryCode: value
    });
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
      await submitLeadToSheety('Consultation Form', {
        name: formData.name,
        email: formData.email,
        countryCode: formData.countryCode,
        phone: formData.phone,
        message: formData.message,
      });
      toast({
        title: "Consultation Request Submitted",
        description: "Thank you for your interest. We'll contact you within 24 hours to schedule your consultation.",
      });
      setFormData({ name: '', email: '', countryCode: '+1', phone: '', message: '' });
      setErrors({ name: '', email: '', phone: '' });
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your request. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const countryCodes = [
    '+1', '+44', '+91', '+61', '+49', '+33', '+81', '+86', '+55', '+7'
  ];

  return (
    <Card className="shadow-xl border-0 max-w-md mx-auto">
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-deep-bottle-green mb-4 sm:mb-6 text-center">
          Book Your Consultation
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Full Name */}
          <div>
            <Label htmlFor="name" className="text-deep-bottle-green font-medium text-sm sm:text-base">
              Full Name *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className={`mt-2 border-pea-green/30 focus:border-pea-green text-sm sm:text-base ${
                errors.name ? 'border-red-500 focus:border-red-500' : ''
              }`}
              placeholder="Enter your full name"
              disabled={isSubmitting}
            />
            {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
          </div>
          
          {/* Email Address */}
          <div>
            <Label htmlFor="email" className="text-deep-bottle-green font-medium text-sm sm:text-base">
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`mt-2 border-pea-green/30 focus:border-pea-green text-sm sm:text-base ${
                errors.email ? 'border-red-500 focus:border-red-500' : ''
              }`}
              placeholder="Enter your email address"
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
          </div>
          
          {/* Phone Number */}
          <div>
            <Label className="text-deep-bottle-green font-medium text-sm sm:text-base">
              Phone Number *
            </Label>
            <div className="flex gap-2 mt-2">
              <Select value={formData.countryCode} onValueChange={handleCountryCodeChange} disabled={isSubmitting}>
                <SelectTrigger className="w-16 sm:w-20 border-pea-green/30 focus:border-pea-green text-xs sm:text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countryCodes.map((code) => (
                    <SelectItem key={code} value={code}>
                      {code}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className={`flex-1 border-pea-green/30 focus:border-pea-green text-sm sm:text-base ${
                  errors.phone ? 'border-red-500 focus:border-red-500' : ''
                }`}
                placeholder="Enter your phone number"
                disabled={isSubmitting}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>}
          </div>
          
          {/* Message Textarea */}
          <div>
            <Label htmlFor="message" className="text-deep-bottle-green font-medium text-sm sm:text-base">
              Message
            </Label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-2 w-full border border-pea-green/30 focus:border-pea-green rounded-lg p-2 text-sm sm:text-base resize-none"
              placeholder="Tell us about your health concerns or questions..."
              disabled={isSubmitting}
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-pea-green hover:bg-deep-bottle-green text-white py-2 sm:py-3 text-sm sm:text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ConsultationForm;
