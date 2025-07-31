
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  href: string;
  image: string;
  subcategoriesCount: number;
}

const CategoryCard = ({ title, href, image, subcategoriesCount }: CategoryCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden bg-white">
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="w-full h-full bg-gradient-to-br from-pea-green/20 to-deep-bottle-green/20 flex items-center justify-center">
                  <div class="text-center p-4">
                    <div class="w-12 h-12 mx-auto mb-2 bg-pea-green/30 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-deep-bottle-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </div>
                    <span class="text-deep-bottle-green text-sm font-medium">${title}</span>
                  </div>
                </div>
              `;
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-xs md:text-sm font-semibold text-deep-bottle-green">
            {subcategoriesCount} specializations
          </span>
        </div>
      </div>
      
      <CardContent className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-deep-bottle-green mb-3 md:mb-4 group-hover:text-pea-green transition-colors">
          {title}
        </h3>
        <p className="text-deep-bottle-green/70 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
          Expert Ayurvedic consultations for {title.toLowerCase()} conditions. 
          Get personalized treatment plans from certified practitioners.
        </p>
        <Link to={href}>
          <Button className="w-full bg-pea-green hover:bg-deep-bottle-green text-white transition-all duration-300 group-hover:scale-105 text-sm md:text-base py-2 md:py-3">
            <Calendar className="mr-2 h-4 w-4" />
            View Specializations
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
