import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavigationMenu from './header/NavigationMenu';
import ConsultationDropdown from './header/ConsultationDropdown';
import MobileMenu from './header/MobileMenu';
import CallButton from './header/CallButton';
import NavigationLink from './header/NavigationLink';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main flex container for Header items - Reduced padding */}
        <div className="flex items-center py-1 sm:py-2 lg:py-2">
          {/* Logo - Responsive sizing */}
          <div className="flex items-center flex-shrink-0 mr-4 sm:mr-6 lg:mr-8">
            <img
              src="/lovable-uploads/6513e611-8559-42a7-bbdf-fa7b35f4d62d.png"
              alt="Book My Ayurveda"
              className="h-auto w-[100px] sm:w-[120px] lg:w-[150px] max-w-[150px]"
            />
          </div>

          {/* Desktop Navigation - Hidden on mobile and tablet */}
          <div className="hidden lg:flex flex-grow justify-center items-center">
            <nav className="flex items-center justify-center space-x-4 xl:space-x-6 2xl:space-x-8 w-full max-w-5xl">
              <Link
                to="/"
                className="font-medium transition-all duration-300 relative group hover:scale-105 text-deep-bottle-green hover:text-pea-green px-2 xl:px-3 py-2 text-sm xl:text-base"
              >
                HOME
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pea-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
              <ConsultationDropdown />
              <NavigationMenu />
            </nav>
          </div>

          {/* Call Button - Visible on desktop and tablet */}
          <div className="hidden sm:flex items-center ml-auto lg:ml-4">
            <CallButton />
          </div>

          {/* Mobile Call Button - Visible on mobile */}
          <div className="flex sm:hidden items-center ml-auto mr-2">
            <CallButton />
          </div>

          {/* Mobile Menu Button - Visible on mobile and tablet */}
          <button
            className="lg:hidden p-2 transition-transform duration-200 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-deep-bottle-green" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-deep-bottle-green" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
