import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { X } from 'lucide-react';

interface ConsultationFormModalProps {
  children: React.ReactNode;
}

const ConsultationFormModal = ({ children }: ConsultationFormModalProps) => {
  const [formErrors, setFormErrors] = useState({ name: '', phone: '' });
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-deep-bottle-green text-center">
            Book Your Consultation
          </DialogTitle>
          <DialogDescription className="text-center text-deep-bottle-green/80">
            Take the first step towards balanced living with our expert Ayurveda practitioners.
          </DialogDescription>
        </DialogHeader>
        
        <form 
          className="space-y-4 mt-6" 
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const fullName = (form.elements[0] as HTMLInputElement).value.trim();
            const email = (form.elements[1] as HTMLInputElement).value.trim();
            const countryCode = (form.elements[2] as HTMLSelectElement).value;
            const phone = (form.elements[3] as HTMLInputElement).value.trim();
            const message = (form.elements[4] as HTMLTextAreaElement).value.trim();

            // Validation
            let valid = true;
            const errors = { name: '', phone: '' };
            if (!/^[A-Za-z ]+$/.test(fullName)) {
              errors.name = 'Name should only contain letters and spaces.';
              valid = false;
            }
            if (!/^[0-9]{10}$/.test(phone)) {
              errors.phone = 'Phone should be exactly 10 digits.';
              valid = false;
            }
            setFormErrors(errors);
            if (!valid) return;

            const now = new Date();
            const payload = {
              formType: 'Banner Strip Consultation Form',
              fullName,
              email,
              countryCode,
              phone,
              message,
              pageUrl: window.location.href,
              date: now.toLocaleDateString(),
              time: now.toLocaleTimeString(),
              timestamp: now.toISOString(),
            };
            
            try {
              await fetch('https://api.sheety.co/e4314a50a15956e85f53f24e75ef9735/leads/sheet1', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sheet1: payload }),
              });
              form.reset();
              setFormErrors({ name: '', phone: '' });
              setIsOpen(false);
              toast({
                title: 'Consultation request submitted!',
                description: 'Thank you for reaching out. We will contact you soon.'
              });
            } catch (error) {
              toast({
                title: 'Error',
                description: 'There was an error submitting your request. Please try again later.',
                variant: 'destructive'
              });
            }
          }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-deep-bottle-green font-semibold text-sm mb-2">Full Name *</label>
              <input 
                type="text" 
                className="w-full border-2 border-pea-green/30 rounded-lg px-3 py-2 focus:outline-none focus:border-pea-green text-sm" 
                placeholder="Enter your name" 
                required 
              />
              {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
            </div>
            <div>
              <label className="block text-deep-bottle-green font-semibold text-sm mb-2">Email *</label>
              <input 
                type="email" 
                className="w-full border-2 border-pea-green/30 rounded-lg px-3 py-2 focus:outline-none focus:border-pea-green text-sm" 
                placeholder="Enter your email" 
                required 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-deep-bottle-green font-semibold text-sm mb-2">Country Code *</label>
              <select 
                className="w-full border-2 border-pea-green/30 rounded-lg px-3 py-2 focus:outline-none focus:border-pea-green text-sm bg-white" 
                required
              >
                <option value="+1">+1 (US/CA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (India)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+49">+49 (Germany)</option>
                <option value="+33">+33 (France)</option>
                <option value="+81">+81 (Japan)</option>
                <option value="+86">+86 (China)</option>
                <option value="+55">+55 (Brazil)</option>
                <option value="+7">+7 (Russia)</option>
              </select>
            </div>
            <div>
              <label className="block text-deep-bottle-green font-semibold text-sm mb-2">Phone *</label>
              <input 
                type="tel" 
                className="w-full border-2 border-pea-green/30 rounded-lg px-3 py-2 focus:outline-none focus:border-pea-green text-sm" 
                placeholder="Enter phone number" 
                required 
              />
              {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
            </div>
          </div>
          
          <div>
            <label className="block text-deep-bottle-green font-semibold text-sm mb-2">Message</label>
            <textarea 
              className="w-full border-2 border-pea-green/30 rounded-lg px-3 py-2 focus:outline-none focus:border-pea-green text-sm resize-none" 
              rows={4} 
              placeholder="Tell us about your health concerns..."
              required
            ></textarea>
          </div>
          
          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-pea-green to-deep-bottle-green hover:from-deep-bottle-green hover:to-pea-green text-white py-3 text-base font-semibold rounded-lg shadow-lg transition-all duration-300"
            >
              Submit Consultation Request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationFormModal;