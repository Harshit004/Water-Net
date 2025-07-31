
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';
import Autoplay from 'embla-carousel-autoplay';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

interface ProductCarouselProps {
  products: Product[];
}

export const HomeProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <OptimizedImage
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-deep-bottle-green mb-4 line-clamp-2">
                    {product.name}
                  </h3>
                  <Button 
                    asChild
                    className="w-full bg-deep-bottle-green hover:bg-evergreen text-white transition-colors duration-300"
                  >
                    <Link to="/products">
                      Explore All Products
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  // Add mockup products if none provided
  const mockupProducts: Product[] = [
    {
      id: '1',
      name: 'Ayurvedic Digestive Blend',
      imageUrl: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=300&h=300&fit=crop',
      price: '$29.99'
    },
    {
      id: '2',
      name: 'Herbal Immunity Booster',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
      price: '$34.99'
    },
    {
      id: '3',
      name: 'Natural Stress Relief',
      imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=300&h=300&fit=crop',
      price: '$27.99'
    },
    {
      id: '4',
      name: 'Detox Tea Blend',
      imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop',
      price: '$24.99'
    },
    {
      id: '5',
      name: 'Joint Support Formula',
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
      price: '$39.99'
    }
  ];

  const displayProducts = products.length > 0 ? products : mockupProducts;

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {displayProducts.map((product) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <OptimizedImage
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-deep-bottle-green mb-4 line-clamp-2">
                    {product.name}
                  </h3>
                  <Button 
                    asChild
                    className="w-full bg-deep-bottle-green hover:bg-evergreen text-white transition-colors duration-300"
                  >
                    <Link to="/products">
                      Explore All Products
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
