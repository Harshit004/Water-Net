import { Link, useLocation } from 'react-router-dom';
import CallButton from './CallButton';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const location = useLocation();

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const navigationItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'OUR PRODUCTS', href: '/products' },
    { name: 'CONTACT US', href: '/contact' },
    { name: 'BLOGS', href: '/blogs' },
    { name: 'FAQs', href: '/faq' }
  ];

  if (!isOpen) return null;

  return (
    <nav className="lg:hidden mt-2 sm:mt-4 pb-3 sm:pb-4 animate-fade-in border-t border-gray-100">
      <div className="space-y-1 sm:space-y-2 mt-3 sm:mt-4">
        {navigationItems.map((item) => {
          if (item.name === 'BLOGS') {
            return (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 sm:py-3 font-medium text-deep-bottle-green hover:text-pea-green text-sm sm:text-base opacity-80 transition-all duration-200"
              >
                {item.name}
              </a>
            );
          }
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`block py-2 sm:py-3 font-medium transition-all duration-200 hover:translate-x-2 text-sm sm:text-base ${
                isActive(item.href) 
                  ? 'text-pea-green' 
                  : 'text-deep-bottle-green hover:text-pea-green'
              }`}
              onClick={onClose}
            >
              {item.name}
            </Link>
          );
        })}
        <Link
          to="/consultations"
          className={`block py-2 sm:py-3 font-medium transition-all duration-200 hover:translate-x-2 text-sm sm:text-base ${
            location.pathname.startsWith('/consultations') 
              ? 'text-pea-green' 
              : 'text-deep-bottle-green hover:text-pea-green'
          }`}
          onClick={onClose}
        >
          DISEASE
        </Link>
      </div>
    </nav>
  );
};

export default MobileMenu;
