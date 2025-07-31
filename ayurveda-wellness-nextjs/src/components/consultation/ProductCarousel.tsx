import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

interface Product {
  name: string;
  image: string;
  description: string;
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else setVisibleCount(2);
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const getVisibleProducts = () => {
    if (products.length <= visibleCount) return products;
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(products[(currentProductIndex + i) % products.length]);
    }
    return result;
  };

  const totalSlides = products.length > visibleCount ? products.length - visibleCount + 1 : 1;

  const getCurrentSlide = () => {
    if (products.length <= visibleCount) return 0;
    return currentProductIndex % totalSlides;
  };

  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-deep-bottle-green/5 hover:shadow-xl transition-shadow duration-300 h-fit sticky top-4">
      <CardContent className="p-5">
        <h2 className="text-lg font-bold text-deep-bottle-green mb-4 flex items-center">
          <ShoppingBag className="mr-2 h-5 w-5 text-pea-green" />
          Recommended Products
        </h2>
        <div className="relative">
          <div className="bg-gradient-to-br from-medium-spring/15 to-pea-green/15 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <Button
                onClick={() => setCurrentProductIndex((prev) => (prev - 1 + products.length) % products.length)}
                variant="outline"
                size="sm"
                className="border-pea-green/50 text-pea-green hover:bg-medium-spring/50 h-8 w-8 p-0"
              >
                <ChevronLeft className="h-3 w-3" />
              </Button>
              <div className="text-xs text-pea-green font-medium">
                {((currentProductIndex) % products.length) + 1} - {((currentProductIndex + visibleCount - 1) % products.length) + 1} / {products.length}
              </div>
              <Button
                onClick={() => setCurrentProductIndex((prev) => (prev + 1) % products.length)}
                variant="outline"
                size="sm"
                className="border-pea-green/50 text-pea-green hover:bg-medium-spring/50 h-8 w-8 p-0"
              >
                <ChevronRight className="h-3 w-3" />
              </Button>
            </div>
            <div className="flex gap-4 justify-center">
              {getVisibleProducts().map((product, idx) => (
                <div key={product.name + idx} className="flex-1 min-w-0 max-w-xs bg-white rounded-lg shadow border border-pea-green/10 p-3 flex flex-col items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded mb-2"
                  />
                  <h3 className="text-sm font-semibold text-deep-bottle-green mb-1 text-center">
                    {product.name}
                  </h3>
                  <p className="text-xs text-deep-bottle-green/80 leading-relaxed text-center">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
            {/* Dot Indicators */}
            <div className="flex justify-center mt-3 gap-1">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <span
                  key={idx}
                  className={`inline-block w-2 h-2 rounded-full ${idx === getCurrentSlide() ? 'bg-pea-green' : 'bg-pea-green/30'} transition-all`}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCarousel;
