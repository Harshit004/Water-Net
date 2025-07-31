import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return <footer className="bg-deep-bottle-green text-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto">
        {/* Top section: Links and logo */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 justify-between">
          {/* Logo and About */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block hover-scale transition-transform duration-300">
              <img src="/lovable-uploads/bd879436-fdb8-4ebd-9e11-d2e52229eac0.png" alt="Book My Ayurveda" className="h-12 sm:h-14 lg:h-16 w-auto mb-4 sm:mb-6 brightness-0 invert" />
            </Link>
            <p className="text-medium-spring leading-relaxed max-w-md text-sm sm:text-base">
              Experience the ancient wisdom of Ayurveda with modern convenience. 
              Our expert practitioners are dedicated to helping you achieve optimal health through personalized, natural healing solutions.
            </p>
          </div>

          {/* Footer Links */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2 grid grid-cols-2 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* First Column */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-medium-spring">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link to="/about" className="text-white hover:text-medium-spring transition-all duration-300 flex items-center hover:translate-x-2 text-sm sm:text-base">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-white hover:text-medium-spring transition-all duration-300 flex items-center hover:translate-x-2 text-sm sm:text-base">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white hover:text-medium-spring transition-all duration-300 flex items-center hover:translate-x-2 text-sm sm:text-base">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Second Column */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-medium-spring">Legal</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link to="/terms" className="text-white hover:text-medium-spring transition-all duration-300 flex items-center hover:translate-x-2 text-sm sm:text-base">
                    ▸ Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-white hover:text-medium-spring transition-all duration-300 flex items-center hover:translate-x-2 text-sm sm:text-base">
                    ▸ Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/refund" className="text-white hover:text-medium-spring transition-all duration-300 flex items-center hover:translate-x-2 text-sm sm:text-base">
                    ▸ Refund Policy
                  </Link>
                </li>
                <li>
                  <Link to="/disclaimer" className="text-white hover:text-medium-spring transition-all duration-300 flex items-center hover:translate-x-2 text-sm sm:text-base">
                    ▸ Disclaimer
                  </Link>
                </li>
                <li>
                  <Link to="/shipping" className="text-white hover:text-medium-spring transition-all duration-300 flex items-center hover:translate-x-2 text-sm sm:text-base">
                    ▸ Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-medium-spring">Follow Us</h3>
            <div className="space-y-3 sm:space-y-4">
              <a href="https://www.instagram.com/bookmyayurveda/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 text-white hover:text-medium-spring transition-all duration-300 hover:translate-x-2 text-sm sm:text-base">
                <Instagram className="h-4 sm:h-5 w-4 sm:w-5" />
                <span>Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 text-white hover:text-medium-spring transition-all duration-300 hover:translate-x-2 text-sm sm:text-base">
                <Twitter className="h-4 sm:h-5 w-4 sm:w-5" />
                <span>X (Twitter)</span>
              </a>
              <a href="https://www.facebook.com/bookmyayurveda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 text-white hover:text-medium-spring transition-all duration-300 hover:translate-x-2 text-sm sm:text-base">
                <Facebook className="h-4 sm:h-5 w-4 sm:w-5" />
                <span>Facebook</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 text-white hover:text-medium-spring transition-all duration-300 hover:translate-x-2 text-sm sm:text-base">
                <Linkedin className="h-4 sm:h-5 w-4 sm:w-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-deep-bottle-green mt-8 sm:mt-12 pt-6 sm:pt-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-medium-spring text-xs sm:text-sm text-center sm:text-left">© 2025 Book My Ayurveda. All rights reserved.</p>
            <p className="text-medium-spring text-xs sm:text-sm text-center sm:text-right">
              Designed with ❤️ for your wellness journey
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
