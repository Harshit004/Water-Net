'use client';

import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import BenefitsSection from '@/components/BenefitsSection';
import ConsultationCards from '@/components/ConsultationCards';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import PromotionalBanner from '@/components/PromotionalBanner';
import BannerStrip from '@/components/BannerStrip';
import AyurvedicConsultationSection from '@/components/AyurvedicConsultationSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Users, Award, Clock, Heart, Shield, Star, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { HomeProductCarousel } from '@/components/subcategory/ProductCarousel';

export default function Home() {
  const stats = [
    { icon: Users, number: "10,000+", label: "Happy Patients" },
    { icon: Award, number: "54+", label: "Countries" },
    { icon: Clock, number: "5000+", label: "Products" },
    { icon: Heart, number: "95%", label: "Success Rate" }
  ];

  const whyChooseUs = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Pure herbal medicines with no side effects"
    },
    {
      icon: Users,
      title: "Expert Doctors",
      description: "Certified Ayurvedic practitioners with years of experience"
    },
    {
      icon: Shield,
      title: "Safe & Effective",
      description: "Time-tested treatments backed by ancient wisdom"
    },
    {
      icon: Star,
      title: "Personalized Care",
      description: "Customized treatment plans for your unique constitution"
    }
  ];

  const neomorphicCardStyle = {
    background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
    boxShadow: '8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff'
  };

  const [formErrors, setFormErrors] = useState({ name: '', phone: '' });
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50">
      <Header />
      <PromotionalBanner />
      
      <div className="relative">
        {/* Mobile-only banner */}
        <div className="sm:hidden">
          <img src="/homepage-banner/homepage-mobile-banner1.jpeg" alt="Ayurveda Mobile Banner" className="w-full h-auto object-cover" />
        </div>
        {/* Desktop and tablet banner */}
        <div className="hidden sm:block">
          <HeroBanner />
        </div>
        
        <BannerStrip />
        
        <AyurvedicConsultationSection />
        
        <div>
          <BenefitsSection />
        </div>

        {/* Why Choose Us Section - Optimized for tablet */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-gray-100 to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-deep-bottle-green mb-3">
                Why Choose Book My Ayurveda?
              </h2>
              <p className="text-base md:text-lg text-deep-bottle-green/80 max-w-2xl mx-auto">
                Experience the perfect blend of ancient wisdom and modern convenience
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {whyChooseUs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0" style={neomorphicCardStyle}>
                    <CardContent className="p-4 md:p-6">
                      <div className="bg-pea-green/10 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center"
                           style={{
                             background: 'linear-gradient(145deg, #f0fdf4, #dcfce7)',
                             boxShadow: '4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff'
                           }}>
                        <IconComponent className="h-6 w-6 text-pea-green" />
                      </div>
                      <h3 className="text-lg font-semibold text-deep-bottle-green mb-3">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
        
        <div>
          <ConsultationCards />
        </div>

        {/* Stats Section - Tablet optimized */}
        <section className="py-12 md:py-20 bg-[#E4FCEC]/40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-deep-bottle-green mb-3">
                Discover the Timeless Wisdom of Ayurveda
              </h2>
              <div className="text-base md:text-lg text-deep-bottle-green/80 max-w-4xl mx-auto space-y-4">
                <p>
                  With a legacy spanning over 5,000 years, Ayurveda is widely regarded as the mother of all healthcare systems. Rooted in holistic and multi-dimensional healing, it continues to evolve by blending the ancient wisdom of the East with the advancements of modern science.
                </p>
                <p>
                  At the heart of our journey is a deep commitment to your well-being. Our carefully curated portfolio of high-quality, safe, and effective products is designed to support a healthier body and mind in today's fast-paced world.
                </p>
                <p>
                  Join our growing community of satisfied customers and experience the difference.
                </p>
                <p className="font-semibold">
                  Book online consultation today and take your first step towards balanced living.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center p-4 rounded-xl" style={neomorphicCardStyle}>
                    <div className="bg-pea-green/10 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center"
                         style={{
                           background: 'linear-gradient(145deg, #f0fdf4, #dcfce7)',
                           boxShadow: '4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff'
                         }}>
                      <IconComponent className="h-6 w-6 text-pea-green" />
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-deep-bottle-green mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What Our Doctors Say Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-gray-100 to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-deep-bottle-green mb-3">
                What Our Doctors Say
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6">
              {/* Dr. Vineeta Chauhan */}
              <Card className="flex flex-col md:flex-row items-center p-4 md:p-6 gap-4 md:gap-6 border-0 shadow-lg">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0 border-4 border-pea-green">
                  <img
                    src="/lovable-uploads/0e265a56-3181-4474-a31e-3e0255b8acbf.png"
                    alt="Dr. Vineeta Chauhan"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full bg-pea-green/20 flex items-center justify-center text-deep-bottle-green font-semibold">Dr. VC</div>';
                      }
                    }}
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-lg md:text-xl font-semibold text-deep-bottle-green mb-2">Dr. Vineeta Chauhan</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    With a rich background in women's wellness, mental health, and hormonal balance, Dr. Vineeta believes Ayurveda is not just medicine — it's a way of understanding the self. She emphasizes the importance of restoring Agni (digestive fire), balancing the doshas, and creating harmony in the mind-body connection through daily routines, sattvic diet, and mindful living. Her personalized treatment approach combines ancient wisdom with gentle emotional support to help people experience deep and lasting transformation.
                  </p>
                </div>
              </Card>
              {/* Dr. Jitendra Verma */}
              <Card className="flex flex-col md:flex-row items-center p-4 md:p-6 gap-4 md:gap-6 border-0 shadow-lg">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0 border-4 border-pea-green">
                  <img
                    src="/lovable-uploads/6a8da21f-48af-4e33-8dd4-fc90c75a0d6d.png"
                    alt="Dr. Jitendra Verma"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full bg-pea-green/20 flex items-center justify-center text-deep-bottle-green font-semibold">Dr. JV</div>';
                      }
                    }}
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-lg md:text-xl font-semibold text-deep-bottle-green mb-2">Dr. Jitendra Verma</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    An expert in chronic conditions, joint health, metabolism, and detoxification, Dr. Jitendra believes that most modern disorders can be reversed through proper Ayurvedic care. He focuses on strengthening immunity (ojas), removing accumulated toxins (ama), and enhancing organ function through tailored herbal support. With decades of experience, his approach centers around root-cause diagnosis, practical lifestyle changes, and dosha-specific therapies that restore balance and prevent disease.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
        
        <div>
          <TestimonialsSection />
        </div>
        
        {/* Contact/Consultation Form Section with gradient background */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-white via-gray-50 to-pea-green/5 border-t border-pea-green/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/80 via-medium-spring/5 to-pea-green/10 rounded-3xl border border-pea-green/20 shadow-2xl backdrop-blur-sm p-6 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-start">
                {/* Left: Contact Info */}
                <div>
                  <h2 className="text-2xl md:text-4xl font-extrabold mb-6 md:mb-8 text-deep-bottle-green text-center md:text-left">
                    Contact Us
                  </h2>
                  <div className="space-y-4 md:space-y-6 text-base md:text-lg md:text-left text-center">
                    <div className="flex flex-col md:block">
                      <span className="font-bold bg-pea-green text-white px-2 rounded mr-2 inline-block md:inline">Email:</span>
                      <a href="mailto:support@bookmyayurveda.com" className="text-deep-bottle-green underline inline-block md:inline">support@bookmyayurveda.com</a>
                    </div>
                    <div className="flex flex-col md:block">
                      <span className="font-bold bg-pea-green text-white px-2 rounded mr-2 inline-block md:inline">Call:</span>
                      <button
                        className="text-deep-bottle-green underline inline-block md:inline cursor-pointer bg-transparent border-0 p-0 m-0"
                        onClick={() => {
                          const blob = new Blob(['+1 888 511 8535'], { type: 'text/plain' });
                          const url = window.URL.createObjectURL(blob);
                          const a = document.createElement('a');
                          a.href = url;
                          a.download = 'contact-number.txt';
                          document.body.appendChild(a);
                          a.click();
                          document.body.removeChild(a);
                          window.URL.revokeObjectURL(url);
                        }}
                        type="button"
                      >
                        +1 888 511 8535
                      </button>
                    </div>
                  </div>
                </div>
                {/* Right: Form with dropdown country code */}
                <div>
                  <h2 className="text-2xl md:text-4xl font-extrabold mb-6 md:mb-8 text-deep-bottle-green text-center md:text-left">
                    Book a Consultation
                  </h2>
                  <form className="space-y-4 md:space-y-6 max-w-lg mx-auto" onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const fullName = (form.elements[0] as HTMLInputElement).value.trim();
                    const email = (form.elements[1] as HTMLInputElement).value.trim();
                    const countryCode = (form.elements[2] as HTMLSelectElement).value;
                    const phone = (form.elements[3] as HTMLInputElement).value.trim();
                    const message = (form.elements[4] as HTMLTextAreaElement).value.trim();

                    // Validation
                    let valid = true;
                    const errors = { name: '', phone: '' };
                    if (!/^[A-Za-z ]+$/.test(fullName)) {
                      errors.name = 'Name should only contain letters and spaces.';
                      valid = false;
                    }
                    if (!/^[0-9]{10}$/.test(phone)) {
                      errors.phone = 'Phone should be exactly 10 digits.';
                      valid = false;
                    }
                    setFormErrors(errors);
                    if (!valid) return;

                    const now = new Date();
                    const payload = {
                      formType: 'Homepage Consultation Form',
                      fullName,
                      email,
                      countryCode,
                      phone,
                      message,
                      pageUrl: window.location.href,
                      date: now.toLocaleDateString(),
                      time: now.toLocaleTimeString(),
                      timestamp: now.toISOString(),
                    };
                    try {
                      await fetch('https://api.sheety.co/e4314a50a15956e85f53f24e75ef9735/leads/sheet1', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ sheet1: payload }),
                      });
                      form.reset();
                      setFormErrors({ name: '', phone: '' });
                      toast({
                        title: 'Consultation request submitted!',
                        description: 'Thank you for reaching out. We will contact you soon.'
                      });
                    } catch (error) {
                      alert('There was an error submitting your request. Please try again later.');
                    }
                  }}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-deep-bottle-green font-bold text-base md:text-lg mb-1">Full Name</label>
                        <input type="text" className="w-full border-b-2 border-pea-green bg-transparent focus:outline-none py-2 text-base md:text-lg" placeholder="" required />
                        {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-deep-bottle-green font-bold text-base md:text-lg mb-1">Email *</label>
                        <input type="email" className="w-full border-b-2 border-pea-green bg-transparent focus:outline-none py-2 text-base md:text-lg" placeholder="" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-deep-bottle-green font-bold text-base md:text-lg mb-1">Country Code</label>
                        <select className="w-full border-b-2 border-pea-green bg-transparent focus:outline-none py-2 text-base md:text-lg" required>
                          <option value="+1">+1 (US/CA)</option>
                          <option value="+44">+44 (UK)</option>
                          <option value="+91">+91 (India)</option>
                          <option value="+61">+61 (Australia)</option>
                          <option value="+49">+49 (Germany)</option>
                          <option value="+33">+33 (France)</option>
                          <option value="+81">+81 (Japan)</option>
                          <option value="+86">+86 (China)</option>
                          <option value="+55">+55 (Brazil)</option>
                          <option value="+7">+7 (Russia)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-deep-bottle-green font-bold text-base md:text-lg mb-1">Phone</label>
                        <input type="tel" className="w-full border-b-2 border-pea-green bg-transparent focus:outline-none py-2 text-base md:text-lg" placeholder="" required />
                        {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-deep-bottle-green font-bold text-base md:text-lg mb-1">Message</label>
                      <textarea className="w-full border-b-2 border-pea-green bg-transparent focus:outline-none py-2 text-base md:text-lg resize-none" rows={3} placeholder="" required></textarea>
                    </div>
                    <div className="pt-2">
                      <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-pea-green to-deep-bottle-green text-white px-6 md:px-10 py-2 md:py-3 text-base md:text-lg font-semibold shadow hover:from-deep-bottle-green hover:to-pea-green transition-all duration-200">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
      {/* Hidden crawlable nav for SEO and sitemap generators */}
      <nav style={{ display: 'none' }} aria-hidden="true">
        <a href="/about">About Us</a>
        <a href="/consultations">Consultations</a>
        <a href="/consultations/joint-bone-health">Joint & Bone Health</a>
        <a href="/consultations/mental-health-sleep">Mental Health & Sleep</a>
        <a href="/consultations/digestive-gut-health">Digestive & Gut Health</a>
        <a href="/consultations/immunity-respiratory-health">Immunity & Respiratory Health</a>
        <a href="/consultations/heart-circulatory-health">Heart & Circulatory Health</a>
        <a href="/consultations/hormonal-balance-endocrine-health">Hormonal Balance & Endocrine Health</a>
        <a href="/consultations/liver-kidney-detox">Liver, Kidney & Detox</a>
        <a href="/consultations/skin-hair-health">Skin & Hair Health</a>
        <a href="/consultations/weight-metabolic-health">Weight & Metabolic Health</a>
        <a href="/consultations/womens-health">Women's Health</a>
        <a href="/consultations/mens-health">Men's Health</a>
        <a href="/consultations/childrens-wellness">Children's Wellness</a>
        <a href="/consultations/senior-elderly-care">Senior & Elderly Care</a>
        <a href="/consultations/bones-joints">Bones & Joints</a>
        <a href="/consultations/stress-anxiety">Stress & Anxiety</a>
        <a href="/consultations/sexual-wellness">Sexual Wellness</a>
        <a href="/consultations/liver-health">Liver Health</a>
        <a href="/consultations/diabetes">Diabetes</a>
        <a href="/consultations/piles">Piles</a>
        <a href="/consultations/immunity-boost">Immunity Boost</a>
        <a href="/consultations/kidney-stones">Kidney Stones</a>
        <a href="/consultations/thyroid-health">Thyroid Health</a>
        {/* Add more links as needed for all subcategories */}
      </nav>
    </div>
  );
}
