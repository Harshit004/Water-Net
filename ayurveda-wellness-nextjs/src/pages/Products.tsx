import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';
import { Filter, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import ConsultationForm from '@/components/consultation/ConsultationForm';
import SEO from '@/components/SEO';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  tags: string[];
}

export const allProducts: Product[] = [
  {
    id: '1',
    name: "Hormonal Balance & Endocrine Health",
    imageUrl: "/assets/Hormonal Balance & Endocrine Health_Bottles.png",
    tags: ["Hormonal Balance", "Endocrine Health"]
  },
  {
    id: '2',
    name: "Men's Health",
    imageUrl: "/assets/Men's Health_Bottles.png",
    tags: ["Men's Health"]
  },
  {
    id: '3',
    name: "Joint & Bone Health",
    imageUrl: "/assets/Joint & Bone Health_Bottles.png",
    tags: ["Joint Health", "Bone Health"]
  },
  {
    id: '4',
    name: "Liver, Kidney & Detox",
    imageUrl: "/assets/Liver, Kidney & Detox_Bottles.png",
    tags: ["Liver Health", "Kidney Health", "Detox"]
  },
  {
    id: '5',
    name: "Immunity & Respiratory Health",
    imageUrl: "/assets/Immunity & Respiratory Health_Bottles.png",
    tags: ["Immunity", "Respiratory Health"]
  },
  {
    id: '6',
    name: "Children's Wellness",
    imageUrl: "/assets/Children’s Wellness_Bottles.png",
    tags: ["Children's Health", "Wellness"]
  },
  {
    id: '7',
    name: "Women's Health",
    imageUrl: "/assets/Women's Health_Bottles.png",
    tags: ["Women's Health"]
  },
  {
    id: '8',
    name: "Digestive & Gut Health",
    imageUrl: "/assets/Digestive & Gut Health_Bottles.png",
    tags: ["Digestive Health", "Gut Health"]
  },
  {
    id: '9',
    name: "Mental Health",
    imageUrl: "/assets/Mental Health_Bottles.png",
    tags: ["Mental Health"]
  },
  {
    id: '10',
    name: "Skin & Hair",
    imageUrl: "/assets/Skin & Hair_Bottles.png",
    tags: ["Skin Health", "Hair Health"]
  },
  {
    id: '11',
    name: "Weight & Metabolic Health",
    imageUrl: "/assets/Weight & Metabolic Health_Bottles.png",
    tags: ["Weight Management", "Metabolism"]
  },
  {
    id: '12',
    name: "Heart & Circulatory Health",
    imageUrl: "/assets/Heart & Circulatory Health_Bottles.png",
    tags: ["Heart Health", "Circulation"]
  },
  {
    id: '13',
    name: "Senior & Elderly Care",
    imageUrl: "/assets/Senior & Elderly Care_Bottles.png",
    tags: ["Senior Care", "Elderly Care"]
  }
];

const allTags = Array.from(new Set(allProducts.flatMap(p => p.tags))).sort();

const ProductsPage = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownDirection, setDropdownDirection] = useState<'down' | 'up'>('down');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (dropdownOpen && buttonRef.current && dropdownRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const dropdownHeight = dropdownRef.current.offsetHeight;
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;
      if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
        setDropdownDirection('up');
      } else {
        setDropdownDirection('down');
      }
    }
  }, [dropdownOpen]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredProducts = selectedTags.length === 0
    ? allProducts
    : allProducts.filter(p => selectedTags.every(tag => p.tags.includes(tag)));

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Our Ayurvedic Products - Holistic Wellness Solutions"
        description="Discover our range of natural Ayurvedic products for overall health and wellness. From hormonal balance to digestive health, we offer a variety of remedies to support your journey towards holistic wellbeing."
        keywords="Ayurvedic products, natural remedies, holistic wellness, health supplements, herbal supplements, Hormonal Balance, Men's Health, Joint & Bone Health, Liver, Kidney & Detox, Immunity & Respiratory Health, Children's Wellness, Women's Health, Digestive & Gut Health, Mental Health, Skin & Hair, Weight & Metabolic Health, Heart & Circulatory Health, Senior & Elderly Care"
        canonicalUrl="https://bookmyayurveda.com/products"
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-evergreen to-deep-bottle-green text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Ayurvedic Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover natural remedies and herbal supplements to support your journey towards holistic wellness.
          </p>
        </div>
      </section>

      {/* Dropdown Filter + Product Grid + Sticky Form */}
      <main className="container mx-auto px-4 py-12">
        {/* Dropdown Filter */}
        <div className="flex flex-col items-start lg:ml-[3.61%] px-4 lg:px-0 mb-8">
          <div className="relative mb-6">
            <button
              ref={buttonRef}
              className="bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm flex items-center gap-2 hover:bg-gray-50 focus:outline-none"
              onClick={() => setDropdownOpen((open) => !open)}
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
            >
              <span className="font-medium text-deep-bottle-green">Filter by Health Concern</span>
              <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {dropdownOpen && (
              <div
                ref={dropdownRef}
                className={`absolute z-20 w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-4 animate-fade-in overflow-y-auto`}
                style={dropdownDirection === 'down'
                  ? { top: '100%', marginTop: 8, bottom: 'auto', maxHeight: '40vh' }
                  : { bottom: '100%', marginBottom: 8, top: 'auto', maxHeight: '40vh' }}
              >
                <div className="flex flex-col gap-2">
                  {allTags.map(tag => (
                    <label key={tag} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedTags.includes(tag)}
                        onChange={() => toggleTag(tag)}
                        className="accent-pea-green h-4 w-4 rounded border-gray-300 focus:ring-pea-green"
                      />
                      <span className="text-deep-bottle-green">{tag}</span>
                    </label>
                  ))}
                </div>
                <button
                  className="mt-4 w-full bg-pea-green text-white rounded-lg py-2 font-semibold hover:bg-deep-bottle-green transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  Done
                </button>
                {selectedTags.length > 0 && (
                  <button
                    className="mt-2 w-full text-pea-green hover:text-deep-bottle-green text-sm underline"
                    onClick={() => setSelectedTags([])}
                  >
                    Clear All
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        {/* Product Grid + Sticky Form */}
        <div className="flex flex-col lg:flex-row w-full gap-8">
          {/* Left: Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <Card key={product.id} className="group overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <div className="relative h-56">
                    <OptimizedImage
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-deep-bottle-green mb-2 flex-grow">{product.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {product.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-medium-spring/20 text-pea-green rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">No products match your selected filters.</p>
              </div>
            )}
          </div>
          {/* Right: Consultation Form */}
          <div 
            className="hidden lg:block lg:sticky lg:top-32 h-fit self-start"
            style={{ width: '350px', marginRight: '3.61%', marginLeft: 'auto', alignSelf: 'flex-start' }}
          >
            <ConsultationForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;
