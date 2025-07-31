
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Phone, User, X } from 'lucide-react';
import { validateName, validatePhone, formatPhoneNumber } from '@/utils/formValidation';

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

const AutoPopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+1',
    phone: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Pages where popup should not appear
  const excludedPages = ['/wordpress-integration', '/change-dashboard'];
  
  useEffect(() => {
    // Check if current page is in excluded list
    const shouldShowPopup = !excludedPages.some(page => location.pathname.includes(page));
    const hasShownPopup = sessionStorage.getItem('consultationPopupShown');
    if (shouldShowPopup && !hasShownPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('consultationPopupShown', 'true');
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      await submitLeadToSheety('Auto Popup', {
        name: formData.name,
        countryCode: formData.countryCode,
        phone: formData.phone,
      });
      toast({
        title: "Interest Registered!",
        description: "Thank you for your interest. We'll contact you soon for a free consultation."
      });
      setFormData({ name: '', countryCode: '+1', phone: '' });
      setErrors({ name: '', phone: '' });
      setIsOpen(false);
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your request. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Add a handler for close button
  const handleClose = () => setIsOpen(false);
  
  const countryCodes = [{
    code: '+1',
    country: 'US/CA'
  }, {
    code: '+44',
    country: 'UK'
  }, {
    code: '+91',
    country: 'India'
  }, {
    code: '+61',
    country: 'Australia'
  }, {
    code: '+49',
    country: 'Germany'
  }, {
    code: '+33',
    country: 'France'
  }, {
    code: '+81',
    country: 'Japan'
  }, {
    code: '+86',
    country: 'China'
  }, {
    code: '+55',
    country: 'Brazil'
  }, {
    code: '+7',
    country: 'Russia'
  }];
  
  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-white to-gray-50/30 border-2 border-pea-green/20" hideCloseButton>
        {/* Close Button */}
        <button 
          type="button" 
          aria-label="Close" 
          onClick={handleClose} 
          className="absolute top-2 right-2 z-20 text-gray-400 hover:text-deep-bottle-green focus:outline-none focus:ring-2 focus:ring-pea-green rounded-full bg-white/80 w-6 h-6 flex items-center justify-center shadow-sm transition-colors"
          disabled={isSubmitting}
        >
          <X className="h-4 w-4" />
        </button>
        
        <DialogHeader className="relative">
          <div className="text-center pb-4">
            <div className="bg-gradient-to-r from-pea-green to-deep-bottle-green p-4 rounded-lg mb-4">
              <Calendar className="h-10 w-10 mx-auto text-white mb-2" />
              <DialogTitle className="text-xl font-bold text-white">
                Get Your FREE Ayurvedic Consultation!
              </DialogTitle>
            </div>
            <p className="text-deep-bottle-green font-medium">
              🌿 Discover personalized wellness solutions with our certified Ayurvedic experts
            </p>
          </div>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="popup-name" className="text-deep-bottle-green font-medium flex items-center gap-2">
              <User className="h-4 w-4 text-pea-green" />
              Full Name *
            </Label>
            <Input 
              id="popup-name" 
              name="name" 
              type="text" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className={`mt-1 border-pea-green/30 focus:border-pea-green ${
                errors.name ? 'border-red-500 focus:border-red-500' : ''
              }`}
              placeholder="Enter your full name" 
              disabled={isSubmitting}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <Label className="text-deep-bottle-green font-medium flex items-center gap-2">
              <Phone className="h-4 w-4 text-pea-green" />
              Phone Number *
            </Label>
            <div className="flex gap-2 mt-1">
              <Select 
                value={formData.countryCode} 
                onValueChange={handleCountryCodeChange}
                disabled={isSubmitting}
              >
                <SelectTrigger className="w-28 border-pea-green/30 focus:border-pea-green">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countryCodes.map(item => (
                    <SelectItem key={item.code} value={item.code}>
                      {item.code}
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
                className={`flex-1 border-pea-green/30 focus:border-pea-green ${
                  errors.phone ? 'border-red-500 focus:border-red-500' : ''
                }`}
                placeholder="Your phone number" 
                disabled={isSubmitting}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div className="space-y-3 pt-2">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-pea-green to-deep-bottle-green hover:from-deep-bottle-green hover:to-pea-green text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <Calendar className="mr-2 h-4 w-4" />
              {isSubmitting ? 'Submitting...' : 'Get FREE Consultation'}
            </Button>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              💚 No spam, just personalized wellness guidance from our experts
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AutoPopupForm;
