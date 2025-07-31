import SymptomsCausesCards from '@/components/subcategory/SymptomsCausesCards';
import AyurvedicApproachCards from '@/components/subcategory/AyurvedicApproachCards';
import BenefitsSection from '@/components/subcategory/BenefitsSection';
// import ProductCarousel from '@/components/consultation/ProductCarousel'; // This import is not used after refactoring

interface SubcategoryContentProps {
  description: string; // Add description prop
  symptoms: string[];
  causes: string[];
  ayurvedicApproach: string;
  treatments: string[];
  benefits: string[];
}

const SubcategoryContent = ({
  description, // Destructure description
  symptoms,
  causes,
  ayurvedicApproach,
  treatments,
  benefits
}: SubcategoryContentProps) => {
  // Sample product data - this would typically come from props or API
  const recommendedProducts = [
    {
      name: "Ayurvedic Immunity Booster",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      description: "Natural herbal blend to strengthen immunity and boost overall health."
    },
    {
      name: "Digestive Wellness Tea",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop",
      description: "Soothing herbal tea blend for improved digestion and gut health."
    },
    {
      name: "Stress Relief Capsules",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
      description: "Ayurvedic formula to reduce stress and promote mental well-being."
    }
  ];

  return (
    <div className="space-y-8"> {/* Increased space between sections */}
      {/* Description */}
      <div className="mb-8">
        <p className="text-base sm:text-lg lg:text-xl text-deep-bottle-green/90 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Symptoms and Causes */}
      <SymptomsCausesCards symptoms={symptoms} causes={causes} />
      
      {/* Ayurvedic Approach */}
      <AyurvedicApproachCards 
        ayurvedicApproach={ayurvedicApproach} 
        treatments={treatments} 
      />
      
      {/* Benefits */}
      <BenefitsSection benefits={benefits} />

      {/* Product Carousel - To be moved out if it's strictly for suggested products and not content */}
      {/* Currently keeping it here as per existing structure for consolidated content *//*
      <ProductCarousel products={recommendedProducts} />
      */}
    </div>
  );
};

export default SubcategoryContent;
