import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationPopup from '@/components/ConsultationPopup';
import ConsultationForm from '@/components/consultation/ConsultationForm';
import { Leaf, Heart, Users, Award, Star, Shield, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const About = () => {
  const [isConsultationPopupOpen, setIsConsultationPopupOpen] = useState(false);

  const focusAreas = [
    { name: "Digestive & Gut Health", href: "/consultations/digestive-gut-health" },
    { name: "Mental Wellness & Sleep", href: "/consultations/mental-health-sleep" },
    { name: "Immunity & Respiratory Health", href: "/consultations/immunity-respiratory-health" },
    { name: "Hormonal & Thyroid Balance", href: "/consultations/hormonal-balance-endocrine-health" },
    { name: "Women's & Men's Health", href: "/consultations/womens-health" },
    { name: "Weight & Metabolism Management", href: "/consultations/weight-metabolic-health" },
    { name: "Skin & Hair Care", href: "/consultations/skin-hair-health" },
    { name: "Joint & Bone Support", href: "/consultations/joint-bone-health" },
    { name: "Liver & Kidney Detox", href: "/consultations/liver-kidney-detox" },
    { name: "Heart & Circulatory Care", href: "/consultations/heart-circulatory-health" },
    { name: "Children's & Elderly Wellness", href: "/consultations/childrens-wellness" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="flex flex-col lg:flex-row w-full gap-8">
        {/* Left: About Content */}
        <div 
          className="lg:ml-[3.61%] px-4 lg:px-0 space-y-12"
          style={{ width: undefined }}
        >
          {/* Hero Section */}
          <section className="relative py-24 bg-white/90 rounded-2xl shadow-lg animate-fade-in">
            <div className="container mx-auto px-4">
              <div className="text-center space-y-8">
                  <h1 className="text-5xl font-bold text-evergreen leading-tight">
                  About Us – Book My Ayurveda
                  </h1>
                <p className="text-2xl text-deep-bottle-green leading-relaxed max-w-4xl mx-auto">
                  Ancient Wisdom. Modern Healing. Personalized Care.
                </p>
                <p className="text-lg text-deep-bottle-green leading-relaxed max-w-4xl mx-auto">
                  In an age of digital speed and synthetic solutions, Book My Ayurveda brings you back to nature's oldest and most effective path to healing — Ayurveda. Our goal is to make authentic, personalized Ayurvedic care available to everyone — no matter where you live. With roots in 5000 years of Indian tradition and the support of today's communication tools, we offer holistic healing that is safe, natural, and built around your unique constitution (Prakriti).
                </p>
              </div>
            </div>
          </section>
          {/* Our Journey Section */}
          <section className="py-20 bg-gradient-to-br from-pea-green/10 to-medium-spring/10 rounded-2xl shadow p-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-evergreen mb-8 text-center">Our Journey: Reviving Ayurveda for the World</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We understand how disheartening it can feel when the healing wisdom of Ayurveda seems thousands of miles away. That's why Book My Ayurveda was born — not to replace traditional consultations, but to bring them to your doorstep. What began as a humble initiative has now grown into a global wellness platform connecting clients across borders to classical Ayurvedic expertise. With certified practitioners and secure technology, we ensure that authentic, root-cause healing is never out of reach — no matter where you are.
                </p>
              </div>
            </div>
          </section>
          {/* Mission & Vision Section */}
          <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-evergreen mb-8 text-center">Our Mission & Vision</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-2xl font-bold text-deep-bottle-green mb-4">Mission</h3>
                    <p className="text-gray-700 leading-relaxed">
                      To restore natural health by addressing root causes through time-tested Ayurvedic wisdom — no shortcuts, no suppression.
                </p>
              </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-2xl font-bold text-deep-bottle-green mb-4">Vision</h3>
                    <p className="text-gray-700 leading-relaxed">
                      A world where Ayurveda becomes the first step toward healing, not a last resort — available, approachable, and sustainable for all.
                    </p>
                </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-8 text-center">
                  We believe that healing should be a right, not a privilege — and Ayurveda has always been about prevention, personalization, and peace.
                </p>
              </div>
            </div>
          </section>
          {/* Why Choose Us Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-evergreen mb-12 text-center">Why Choose Book My Ayurveda?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
                    <h3 className="text-lg font-bold text-deep-bottle-green mb-3">You're Not Alone</h3>
                    <p className="text-gray-700">Even if you're far from India, Ayurveda is now just a click away — not as a trend, but in its truest form.</p>
                  </div>
                  <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
                    <h3 className="text-lg font-bold text-deep-bottle-green mb-3">Personalized Attention</h3>
                    <p className="text-gray-700">Every consultation is designed around your body type, concerns, and lifestyle.</p>
              </div>
                  <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
                    <h3 className="text-lg font-bold text-deep-bottle-green mb-3">Trained Experts</h3>
                    <p className="text-gray-700">Our practitioners are not generalists — they are classically trained, experienced Ayurvedic doctors.</p>
                  </div>
                  <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
                    <h3 className="text-lg font-bold text-deep-bottle-green mb-3">Safe, Natural, Sustainable</h3>
                    <p className="text-gray-700">We believe in herbs, food, lifestyle changes — not pills or quick fixes.</p>
                  </div>
                  <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
                    <h3 className="text-lg font-bold text-deep-bottle-green mb-3">Convenience without Compromise</h3>
                    <p className="text-gray-700">Online doesn't mean impersonal. Our consultations are as grounded and detailed as a physical visit — delivered with warmth and integrity.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Core Focus Areas Section */}
          <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-evergreen mb-8 text-center">Our Core Focus Areas</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {focusAreas.map((area, index) => (
                    <Link key={index} to={area.href}>
                      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-white to-gray-50 border border-gray-100 cursor-pointer group">
                        <h3 className="font-semibold text-deep-bottle-green group-hover:text-pea-green transition-colors duration-300">• {area.name}</h3>
                </div>
                    </Link>
                  ))}
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-8 text-center">
                  Each consultation includes a holistic review of your symptoms, prakriti, diet, mental state, and lifestyle. You receive a customized plan — including Ayurvedic herbs, dietary suggestions, and daily routines — tailored for long-term healing.
                </p>
              </div>
            </div>
          </section>
          {/* Trusted by Clients Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-evergreen mb-8">Trusted by Clients Across the Globe</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Thousands of people across the USA, Canada, UK, Australia, and other countries trust Book My Ayurveda for one reason: we don't just treat diseases — we guide people toward healthier lives. Whether you're managing a chronic issue or simply seeking balance, our approach is compassionate, grounded, and effective.
                </p>
              </div>
            </div>
          </section>
          {/* Let Ayurveda Travel to You Section */}
          <section className="py-20 bg-white/90 rounded-2xl shadow-lg p-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-4xl font-bold mb-6">Let Ayurveda Travel to You</h2>
                <p className="text-lg leading-relaxed">
                  You don't have to feel disconnected just because Ayurveda's birthplace is far away. With Book My Ayurveda, you receive the same wisdom that's healed millions over millennia — right from the comfort of your home. Through secure and meaningful consultations, we bring the soul of Ayurveda to your doorstep.
                </p>
                <div className="pt-8">
                  <button 
                    onClick={() => setIsConsultationPopupOpen(true)}
                    className="bg-pea-green hover:bg-deep-bottle-green text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Book your consultation today
                  </button>
                </div>
                <p className="text-lg font-semibold">
                  Because health isn't just about living longer — it's about living better.
                </p>
              </div>
            </div>
          </section>
          {/* Show consultation form below about content on mobile/tablet */}
          <div className="block lg:hidden mt-10">
            <ConsultationForm />
          </div>
        </div>
        {/* Right: Consultation Form (desktop only) */}
        <div 
          className="hidden lg:block lg:sticky lg:top-32 h-fit"
          style={{ width: '350px', marginRight: '3.61%', marginLeft: 'auto' }}
        >
          <ConsultationForm />
        </div>
      </div>

      <ConsultationPopup 
        isOpen={isConsultationPopupOpen} 
        onClose={() => setIsConsultationPopupOpen(false)} 
      />

      <Footer />
    </div>
  );
};

export default About;
