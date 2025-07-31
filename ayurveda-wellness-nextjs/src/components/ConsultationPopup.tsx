import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { validateName, validateEmail, validatePhone, formatPhoneNumber } from '@/utils/formValidation';

interface ConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

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

const ConsultationPopup = ({ isOpen, onClose }: ConsultationPopupProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      await submitLeadToSheety('Consultation Popup', {
        name: formData.name,
        email: formData.email,
        phone: `${formData.countryCode}${formData.phone}`,
        consultationType: formData.consultationType,
        message: formData.message,
      });
    toast({
      title: "Consultation Request Submitted",
      description: "Thank you for your interest. We'll contact you within 24 hours to schedule your consultation.",
    });
      setFormData({ name: '', email: '', countryCode: '+91', phone: '', consultationType: '', message: '' });
      setErrors({ name: '', email: '', phone: '' });
    onClose();
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your request. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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

          <div className="flex gap-2">
            <div className="w-32">
              <Label htmlFor="countryCode" className="text-deep-bottle-green font-medium">
                Country Code
              </Label>
              <select
                id="countryCode"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="mt-2 border-pea-green/30 focus:border-pea-green rounded-md w-full py-2 px-2"
                disabled={isSubmitting}
              >
                <option value="+91">🇮🇳 +91 (India)</option>
                <option value="+1">🇺🇸 +1 (USA)</option>
                <option value="+44">🇬🇧 +44 (UK)</option>
                <option value="+61">🇦🇺 +61 (Australia)</option>
                <option value="+971">🇦🇪 +971 (UAE)</option>
                <option value="+65">🇸🇬 +65 (Singapore)</option>
                <option value="+49">🇩🇪 +49 (Germany)</option>
                <option value="+81">🇯🇵 +81 (Japan)</option>
                <option value="+27">🇿🇦 +27 (South Africa)</option>
                <option value="+880">🇧🇩 +880 (Bangladesh)</option>
                <option value="+94">🇱🇰 +94 (Sri Lanka)</option>
                <option value="+92">🇵🇰 +92 (Pakistan)</option>
                <option value="+7">🇷🇺 +7 (Russia)</option>
                <option value="+86">🇨🇳 +86 (China)</option>
                <option value="+33">🇫🇷 +33 (France)</option>
                <option value="+39">🇮🇹 +39 (Italy)</option>
                <option value="+34">🇪🇸 +34 (Spain)</option>
                <option value="+55">🇧🇷 +55 (Brazil)</option>
                <option value="+62">🇮🇩 +62 (Indonesia)</option>
                <option value="+60">🇲🇾 +60 (Malaysia)</option>
                <option value="+64">🇳🇿 +64 (New Zealand)</option>
                <option value="+82">🇰🇷 +82 (South Korea)</option>
                <option value="+852">🇭🇰 +852 (Hong Kong)</option>
                <option value="+66">🇹🇭 +66 (Thailand)</option>
                <option value="+7">🇰🇿 +7 (Kazakhstan)</option>
                <option value="+20">🇪🇬 +20 (Egypt)</option>
                <option value="+63">🇵🇭 +63 (Philippines)</option>
                <option value="+7">🇹🇷 +7 (Turkey)</option>
                <option value="+7">🇸🇦 +7 (Saudi Arabia)</option>
                <option value="+234">🇳🇬 +234 (Nigeria)</option>
                <option value="+254">🇰🇪 +254 (Kenya)</option>
                <option value="+974">🇶🇦 +974 (Qatar)</option>
                <option value="+968">🇴🇲 +968 (Oman)</option>
                <option value="+965">🇰🇼 +965 (Kuwait)</option>
                <option value="+973">🇧🇭 +973 (Bahrain)</option>
                <option value="+965">🇮🇶 +965 (Iraq)</option>
                <option value="+965">🇯🇴 +965 (Jordan)</option>
                <option value="+965">🇱🇧 +965 (Lebanon)</option>
                <option value="+965">🇸🇾 +965 (Syria)</option>
                <option value="+965">🇮🇷 +965 (Iran)</option>
                <option value="+965">🇦🇫 +965 (Afghanistan)</option>
                <option value="+965">🇮🇱 +965 (Israel)</option>
                <option value="+965">🇵🇸 +965 (Palestine)</option>
                <option value="+965">🇦🇲 +965 (Armenia)</option>
                <option value="+965">🇬🇪 +965 (Georgia)</option>
                <option value="+965">🇦🇿 +965 (Azerbaijan)</option>
                <option value="+965">🇺🇿 +965 (Uzbekistan)</option>
                <option value="+965">🇹🇲 +965 (Turkmenistan)</option>
                <option value="+965">🇰🇬 +965 (Kyrgyzstan)</option>
                <option value="+965">🇹🇯 +965 (Tajikistan)</option>
                <option value="+965">🇲🇳 +965 (Mongolia)</option>
                <option value="+965">🇻🇳 +965 (Vietnam)</option>
                <option value="+965">🇰🇭 +965 (Cambodia)</option>
                <option value="+965">🇱🇦 +965 (Laos)</option>
                <option value="+965">🇲🇲 +965 (Myanmar)</option>
                <option value="+965">🇧🇳 +965 (Brunei)</option>
                <option value="+965">🇸🇬 +965 (Singapore)</option>
                <option value="+965">🇲🇴 +965 (Macau)</option>
                <option value="+965">🇹🇼 +965 (Taiwan)</option>
                <option value="+965">🇲🇴 +965 (Macau)</option>
                <option value="+965">🇲🇴 +965 (Macau)</option>
              </select>
            </div>
            <div className="flex-1">
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
                <SelectItem value="digestive-gut-health">Digestive & Gut Health</SelectItem>
                <SelectItem value="mental-health-sleep">Mental Health & Sleep</SelectItem>
                <SelectItem value="immunity-respiratory-health">Immunity & Respiratory Health</SelectItem>
                <SelectItem value="hormonal-balance-endocrine-health">Hormonal Balance & Endocrine Health</SelectItem>
                <SelectItem value="womens-health">Women's Health</SelectItem>
                <SelectItem value="mens-health">Men's Health</SelectItem>
                <SelectItem value="weight-metabolic-health">Weight & Metabolic Health</SelectItem>
                <SelectItem value="skin-hair-health">Skin & Hair Health</SelectItem>
                <SelectItem value="joint-bone-health">Joint & Bone Health</SelectItem>
                <SelectItem value="liver-kidney-detox">Liver, Kidney & Detox</SelectItem>
                <SelectItem value="heart-circulatory-health">Heart & Circulatory Health</SelectItem>
                <SelectItem value="childrens-wellness">Children's Wellness</SelectItem>
                <SelectItem value="senior-elderly-care">Senior & Elderly Care</SelectItem>
                <SelectItem value="other">Other</SelectItem>
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
  );
};

export default ConsultationPopup;
