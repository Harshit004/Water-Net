import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SuggestedProductsCarouselProps {
  products: Array<{
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }>;
}

const SuggestedProductsCarousel: React.FC<SuggestedProductsCarouselProps> = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="py-8">
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="px-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex-grow flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-deep-bottle-green mb-2">{product.name}</h3>
                <p className="text-lg font-bold text-pea-green">{product.price}</p>
                <button className="mt-4 w-full bg-deep-bottle-green text-white py-2 px-4 rounded-lg hover:bg-evergreen transition duration-300">
                  View Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SuggestedProductsCarousel; 