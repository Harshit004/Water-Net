
import { Link, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

interface NavigationLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

const NavigationLink = ({ to, children, className = '' }: NavigationLinkProps) => {
  const location = useLocation();
  
  const isActive = location.pathname === to || 
    (to === '/consultations' && location.pathname.startsWith('/consultations'));

  return (
    <Link
      to={to}
      className={`font-medium transition-all duration-300 relative group hover:scale-105 px-2 xl:px-3 py-2 text-sm xl:text-base ${
        isActive 
          ? 'text-pea-green' 
          : 'text-deep-bottle-green hover:text-pea-green'
      } ${className}`}
    >
      {children}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pea-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Link>
  );
};

export default NavigationLink;
