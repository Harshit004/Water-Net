import { useState, useRef } from 'react'; // Import useRef
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { consultationCategories } from '@/data/consultationCategories';

const ConsultationDropdown = () => {
  const [isConsultationsOpen, setIsConsultationsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  // State to control vertical positioning of the sub-dropdown: 'top' (default top-0) or 'bottom' (bottom-0)
  const [subDropdownVerticalPos, setSubDropdownVerticalPos] = useState<'top-0' | 'bottom-0'>('top-0');
  // State to control horizontal positioning of the sub-dropdown: 'left-full' (default) or 'right-full' (opens left)
  const [subDropdownHorizontalPos, setSubDropdownHorizontalPos] = useState<'left-full' | 'right-full'>('left-full');


  const location = useLocation();

  // Create a ref object to store references to each category's div
  // This will store a map like { 'Category Name': HTMLDivElement }
  const categoryItemRefs = useRef<Record<string, HTMLDivElement | null>>({});


  // Function to handle mouse enter on a primary category item
  const handleCategoryMouseEnter = (category: typeof consultationCategories[0], event: React.MouseEvent<HTMLDivElement>) => {
    setHoveredCategory(category.name);

    // Get the bounding rectangle of the hovered category item
    const categoryRect = event.currentTarget.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    // Estimate the height of the sub-dropdown.
    // This is an estimate. A more precise method would involve rendering, measuring, then hiding,
    // or knowing the exact height based on content. For now, we'll assume an average height.
    // Adjust this value based on the typical height of your sub-menus.
    const estimatedSubDropdownHeight = category.subcategories.length * 32 + 10; // Approx. 32px per item + padding
    const estimatedSubDropdownWidth = 200; // Average width of the sub-dropdown

    // Determine vertical position (top-0 or bottom-0)
    // If the bottom of the sub-dropdown would go off-screen
    if (categoryRect.bottom + estimatedSubDropdownHeight > viewportHeight) {
      setSubDropdownVerticalPos('bottom-0'); // Position it relative to the bottom of the parent
    } else {
      setSubDropdownVerticalPos('top-0'); // Default: Position it relative to the top of the parent
    }

    // Determine horizontal position (left-full or right-full)
    // If opening to the right would go off-screen
    if (categoryRect.right + estimatedSubDropdownWidth > viewportWidth) {
      setSubDropdownHorizontalPos('right-full'); // Open to the left
    } else {
      setSubDropdownHorizontalPos('left-full'); // Default: Open to the right
    }
  };


  // Function to handle mouse leave for primary category item or entire dropdown
  const handleMouseLeave = () => {
    setIsConsultationsOpen(false);
    setHoveredCategory(null);
    // Reset positions to default when leaving the entire dropdown
    setSubDropdownVerticalPos('top-0');
    setSubDropdownHorizontalPos('left-full');
  };


  return (
    <div
      className="relative"
      onMouseEnter={() => setIsConsultationsOpen(true)}
      onMouseLeave={handleMouseLeave} // Use the combined leave handler
    >
      <Link
        to="/consultations"
        className={`font-medium transition-all duration-300 relative group hover:scale-105 flex items-center gap-1 px-4 py-2 ${
          location.pathname.startsWith('/consultations')
            ? 'text-pea-green'
            : 'text-deep-bottle-green hover:text-pea-green'
        }`}
      >
        DISEASE
        <ChevronDown className="h-4 w-4" />
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pea-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </Link>

      {/* Main Dropdown */}
      {isConsultationsOpen && (
        <div className="absolute left-0 top-full bg-white shadow-lg rounded-md py-1 w-max z-[100]">
          {consultationCategories.map((category, index) => (
            <div key={category.name}>
              <div
                className="relative"
                // Assign a ref to each category div
                ref={el => (categoryItemRefs.current[category.name] = el)}
                onMouseEnter={(e) => handleCategoryMouseEnter(category, e)} // Pass category object and event
                onMouseLeave={() => setHoveredCategory(null)} // Only clear hovered category here
              >
                <Link
                  to={category.href}
                  className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-deep-bottle-green hover:text-pea-green hover:bg-gray-50 transition-colors duration-200 whitespace-nowrap"
                >
                  <span>{category.name}</span>
                  {/* Keep the arrow for primary dropdown items */}
                  <ChevronRight className="h-3 w-3 ml-2 text-gray-400" />
                </Link>

                {/* Nested subcategories dropdown */}
                {hoveredCategory === category.name && (
                  <div
                    className={`absolute bg-white shadow-lg rounded-md py-1 w-max z-[110] ${subDropdownHorizontalPos} ${subDropdownVerticalPos}`}
                  >
                    {category.subcategories.map((subcategory, subIndex) => (
                      <div key={subcategory.name}>
                        <Link
                          to={subcategory.href}
                          className="flex items-center justify-between px-3 py-2 text-xs text-deep-bottle-green hover:text-pea-green hover:bg-gray-50 transition-colors duration-200 whitespace-nowrap"
                        >
                          <span>{subcategory.name}</span>
                          {/* No arrow for nested items (as per previous request) */}
                        </Link>
                        {subIndex < category.subcategories.length - 1 && (
                          <hr className="border-gray-200 mx-2" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {index < consultationCategories.length - 1 && (
                <hr className="border-gray-200 mx-2" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConsultationDropdown;
