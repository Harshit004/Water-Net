
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface QuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuotePopup = ({ isOpen, onClose }: QuotePopupProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted",
      description: "We'll send you a personalized quote within 24 hours!",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-evergreen text-center">
            Get Your Quote
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-evergreen font-medium">
              Full Name *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 border-emerald-200 focus:border-emerald-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-evergreen font-medium">
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 border-emerald-200 focus:border-emerald-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-evergreen font-medium">
              Phone Number *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 border-emerald-200 focus:border-emerald-500"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <Label htmlFor="service" className="text-evergreen font-medium">
              Service Required
            </Label>
            <Input
              id="service"
              name="service"
              type="text"
              value={formData.service}
              onChange={handleChange}
              className="mt-1 border-emerald-200 focus:border-emerald-500"
              placeholder="e.g., Consultation, Treatment"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-evergreen font-medium">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="mt-1 border-emerald-200 focus:border-emerald-500"
              placeholder="Tell us about your requirements..."
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-pea-green hover:bg-evergreen text-white py-3 text-lg font-semibold transition-all duration-300"
          >
            Request Quote
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuotePopup;
