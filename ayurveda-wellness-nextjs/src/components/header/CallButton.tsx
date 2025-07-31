import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Phone, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CallButton = () => {
  const [isDialpadOpen, setIsDialpadOpen] = useState(false);
  const [dialedNumber, setDialedNumber] = useState('');
  const { toast } = useToast();
  
  const phoneNumber = '+18885118535';
  
  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      toast({
        description: "Copied",
        duration: 2000
      });
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = phoneNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      toast({
        description: "Copied",
        duration: 2000
      });
    }
  };

  const dialpadButtons = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['*', '0', '#']];

  const handleNumberClick = (number: string) => {
    setDialedNumber(prev => prev + number);
  };

  const handleCall = () => {
    if (dialedNumber) {
      window.location.href = `tel:${dialedNumber}`;
    }
  };

  const handleClear = () => {
    setDialedNumber('');
  };

  const handleBackspace = () => {
    setDialedNumber(prev => prev.slice(0, -1));
  };

  return (
    <>
      {/* Desktop/Tablet: Copy and show call dialog */}
      <div className="hidden sm:flex items-center justify-center">
        <Button 
          onClick={handleCopyNumber} 
          variant="outline" 
          size="sm" 
          className="btn-gradient text-white border-0 hover-scale transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
          <Phone className="h-4 w-4 relative z-10 group-hover:text-pea-green transition-colors duration-300" />
          <span className="relative z-10 group-hover:text-pea-green transition-colors duration-300">+1-888-511-8535</span>
        </Button>
      </div>
      {/* Mobile: tel: link */}
      <div className="flex sm:hidden items-center justify-center">
        <a href={`tel:${phoneNumber}`} className="btn-gradient text-white border-0 rounded-lg px-4 py-2 flex items-center gap-2 relative overflow-hidden group">
          <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
          <Phone className="h-4 w-4 relative z-10 group-hover:text-pea-green transition-colors duration-300" />
          <span className="relative z-10 group-hover:text-pea-green transition-colors duration-300">+1-888-511-8535</span>
        </a>
      </div>
      {/* Dialpad Dialog (desktop only) */}
      <Dialog open={isDialpadOpen} onOpenChange={setIsDialpadOpen}>
        <DialogContent className="sm:max-w-[300px]">
          <DialogHeader>
            <DialogTitle className="text-center text-deep-bottle-green">Phone Dialpad</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 min-h-[60px] flex items-center justify-center">
              <span className="text-xl font-mono text-deep-bottle-green">
                {dialedNumber || 'Enter number'}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {dialpadButtons.flat().map(number => (
                <Button 
                  key={number} 
                  variant="outline" 
                  className="h-12 text-lg font-semibold border-pea-green/30 hover:bg-pea-green hover:text-white transition-colors" 
                  onClick={() => handleNumberClick(number)}
                >
                  {number}
                </Button>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <Button 
                variant="outline" 
                onClick={handleBackspace} 
                className="flex-1 border-gray-300 hover:bg-gray-100"
              >
                ⌫
              </Button>
              <Button 
                onClick={handleCall} 
                disabled={!dialedNumber} 
                className="flex-2 btn-gradient text-white border-0"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call
              </Button>
              <Button 
                variant="outline" 
                onClick={handleClear} 
                className="flex-1 border-red-300 hover:bg-red-50 text-red-600"
              >
                Clear
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CallButton;
