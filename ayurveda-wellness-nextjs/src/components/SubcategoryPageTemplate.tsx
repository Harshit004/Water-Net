
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import OptimizedImage from '@/components/OptimizedImage';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProductCarousel from '@/components/subcategory/ProductCarousel';
import ConsultationForm from '@/components/consultation/ConsultationForm';
import { allProducts } from '@/pages/Products';

interface SubcategoryPageTemplateProps {
  description: string;
  image: string;
  suggestedProducts?: Array<{
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }>;
  bannerContent: {
    title: string;
    breadcrumb: string;
    breadcrumbHref: string;
  };
}

function highlightKeywords(text: string) {
  // Only bold keywords, do not underline unless it's a link (handled elsewhere)
  const keywords = [
    'Ayurveda', 'Pitta', 'Agni', 'Ama', 'GERD', 'Vata', 'Kapha', 'Prakriti', 'Vikriti', 'Amla', 'Licorice', 'Guduchi', 'BookMyAyurveda.com', 'reflux', 'consultation', 'herbs', 'digestive', 'detox', 'yoga', 'meditation', 'Pitta-pacifying', 'Virechana', 'Nadi Shodhana'
  ];
  let result = text;
  keywords.forEach(kw => {
    result = result.replace(new RegExp(`\\b${kw}\\b`, 'gi'), match => `<span class='font-bold'>${match}</span>`);
  });
  return result;
}

function renderStyledContent(description: string) {
  // Split into lines for more accurate parsing
  const lines = description.split(/\n/).map(line => line.trim());
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    // Title
    if (line.startsWith('Title:')) {
      blocks.push(<div key={i} className="mb-4 text-2xl font-bold text-deep-bottle-green">{line.replace('Title:', '').trim()}</div>);
      i++;
      continue;
    }
    // H1
    if (line.startsWith('H1:')) {
      blocks.push(<div key={i} className="mb-3 text-xl font-bold text-deep-bottle-green">{line.replace('H1:', '').trim()}</div>);
      i++;
      continue;
    }
    // H2
    if (line.startsWith('H2:')) {
      blocks.push(<div key={i} className="mb-2 text-lg font-semibold text-deep-bottle-green">{line.replace('H2:', '').trim()}</div>);
      i++;
      continue;
    }
    // Quoted title
    if (/^\u201c|^\u201d/.test(line)) {
      blocks.push(<div key={i} className="mb-3 text-xl font-bold text-deep-bottle-green">{line.replace(/[\u201c\u201d]/g, '').trim()}</div>);
      i++;
      continue;
    }
    // Horizontal rule
    if (/^\u2014/.test(line)) {
      blocks.push(<hr key={i} className="my-6 border-pea-green/20" />);
      i++;
      continue;
    }
    // Numbered list
    if (/^\d+\./.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\./.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s*/, ''));
        i++;
      }
      blocks.push(
        <ol key={i} className="list-decimal pl-6 text-deep-bottle-green/90 mb-6 text-base font-normal">
          {items.map((item, idx) => (
            <li key={idx} className="mb-3" dangerouslySetInnerHTML={{ __html: highlightKeywords(item) }} />
          ))}
        </ol>
      );
      continue;
    }
    // Bulleted list
    if (/^- /.test(line)) {
      const items = [];
      while (i < lines.length && /^- /.test(lines[i])) {
        items.push(lines[i].replace(/^- /, ''));
        i++;
      }
      blocks.push(
        <ul key={i} className="list-disc pl-6 text-deep-bottle-green/90 mb-6 text-base font-normal">
          {items.map((item, idx) => (
            <li key={idx} className="mb-3" dangerouslySetInnerHTML={{ __html: highlightKeywords(item) }} />
          ))}
        </ul>
      );
      continue;
    }
    // Section titles (Find, Restore, etc)
    if (/^\uD83C\uDF3F|^\uD83C\uDF10|^\uD83C\uDF31|^\uD83C\uDF3F|^\uD83C\uDF3F/.test(line)) {
      blocks.push(<div key={i} className="mb-3 text-base text-deep-bottle-green font-normal" dangerouslySetInnerHTML={{ __html: highlightKeywords(line) }} />);
      i++;
      continue;
    }
    // Paragraph (skip empty lines)
    if (line.length > 0) {
      blocks.push(<p key={i} className="mb-6 text-deep-bottle-green/90 leading-relaxed font-normal text-base" dangerouslySetInnerHTML={{ __html: highlightKeywords(line) }} />);
    }
    i++;
  }
  return blocks;
}

const SubcategoryPageTemplate = ({
  description,
  image,
  suggestedProducts,
  bannerContent,
}: SubcategoryPageTemplateProps) => {
  const navigate = useNavigate();

  // Transform allProducts to match the expected format for ProductCarousel (without price)
  const transformedProducts = allProducts.map(product => ({
    id: product.id,
    name: product.name,
    imageUrl: product.imageUrl,
    price: '' // Remove price display
  }));

  const featuredDoctors = [
    {
      name: "Dr. Priya Sharma",
      specialization: "Panchakarma Specialist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      experience: "15+ years"
    },
    {
      name: "Dr. Rajesh Kumar", 
      specialization: "Digestive Health Expert",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      experience: "12+ years"
    },
    {
      name: "Dr. Meera Patel",
      specialization: "Women's Health Specialist",
      image: "https://images.unsplash.com/photo-1594824388853-d0365d17c82a?w=300&h=300&fit=crop&crop=face",
      experience: "18+ years"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-white via-medium-spring/3 to-pea-green/5">
        <Header />

        {/* Banner Section */}
        <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
          <div className="absolute inset-0">
            <OptimizedImage
              src={image}
              alt={`${bannerContent.title} banner`}
              className="w-full h-full object-cover"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-evergreen/80 to-deep-bottle-green/60" />
          </div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="text-white space-y-6">
              <Button
                variant="outline"
                onClick={() => navigate(bannerContent.breadcrumbHref)}
                className="border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to {bannerContent.breadcrumb}
              </Button>
              <h1 className="text-5xl font-bold leading-tight drop-shadow-lg">
                {bannerContent.title}
              </h1>
            </div>
          </div>
        </section>
        
        {/* Content Section - Full Width */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 w-full min-h-[500px]">
              {/* Left: Content */}
              <div className="w-full lg:w-[70%]">
                <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50/50 mb-8">
                  <CardContent className="p-8">
                    <div className="text-deep-bottle-green/90 space-y-6">
                      {renderStyledContent(description)}
                    </div>
                    {/* Highlighted Content Block */}
                    <div className="mt-8 bg-gradient-to-r from-pea-green/5 to-deep-bottle-green/5 rounded-lg p-6 border-l-4 border-pea-green">
                      <p className="text-deep-bottle-green/90 leading-relaxed text-lg">
                        At BookMyAyurveda.com, we provide global access to expert Ayurvedic consultations that help you move beyond symptom control and toward true healing. Using personalized herbs, gut-friendly nutrition, and lifestyle alignment, our programs are designed for safe, long-term results — without the side effects of conventional medications. Experience natural freedom from reflux — restore your gut, and reclaim your life. 🌐 Book your online consultation today.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                {/* Product Carousel - Full Width, now 70% width */}
                <div className="mt-12">
                  <h2 className="text-4xl font-bold text-deep-bottle-green mb-4 text-center">
                    Featured Products
                  </h2>
                  <div className="w-full">
                    <ProductCarousel products={transformedProducts} />
                  </div>
                </div>
              </div>
              {/* Right: Consultation Form */}
              <div className="w-full lg:w-[30%] flex items-start lg:sticky lg:top-32 h-fit">
                <div className="w-full">
                  <ConsultationForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SubcategoryPageTemplate;
