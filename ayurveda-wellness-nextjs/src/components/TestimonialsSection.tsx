
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      text: "The Ayurvedic consultation completely transformed my digestive health. The personalized herbal treatment plan worked wonders within just a few weeks.",
      condition: "Digestive Issues"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, India",
      rating: 5,
      text: "After struggling with stress and anxiety for years, the holistic approach helped me find balance. The lifestyle recommendations were life-changing.",
      condition: "Stress & Anxiety"
    },
    {
      name: "Anita Patel",
      location: "Bangalore, India",
      rating: 5,
      text: "The joint pain that bothered me for months is now completely gone. The natural remedies were gentle yet incredibly effective.",
      condition: "Joint Pain"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-medium-spring/20 to-pea-green/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-deep-bottle-green mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-deep-bottle-green max-w-2xl mx-auto">
            Real stories from people who found healing through Ayurvedic medicine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg border-0 hover-scale transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-pea-green mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-deep-bottle-green leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-bold text-evergreen">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-sm text-pea-green font-medium mt-1">{testimonial.condition}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
