import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ConsultationForm from '@/components/consultation/ConsultationForm';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-evergreen to-deep-bottle-green text-white animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold">Get in Touch</h1>
            <p className="text-xl text-medium-spring max-w-2xl mx-auto">
              Ready to start your Ayurvedic wellness journey? We're here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-evergreen">Get in Touch – We're Here to Help</h2>
              <p className="text-lg text-gray-700 mb-8">
                Have a question, concern, or need support with your Ayurvedic consultation or order? Our team at Book My Ayurveda is always ready to assist you. Whether it's about our services, herbal recommendations, or shipping queries — feel free to reach out.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-medium-spring/10 rounded-xl hover-scale transition-all duration-300">
                  <Mail className="h-8 w-8 text-pea-green mt-1" />
                  <div>
                    <h3 className="font-bold text-evergreen text-lg">Email Us</h3>
                    <p className="text-gray-700">support@bookmyayurveda.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-medium-spring/10 rounded-xl hover-scale transition-all duration-300">
                  <Phone className="h-8 w-8 text-pea-green mt-1" />
                  <div>
                    <h3 className="font-bold text-evergreen text-lg">Call Us</h3>
                    <p className="text-gray-700">+1 888 511 8535</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-medium-spring/10 rounded-xl hover-scale transition-all duration-300">
                  <MapPin className="h-8 w-8 text-pea-green mt-1" />
                  <div>
                    <h3 className="font-bold text-evergreen text-lg">Office Address</h3>
                    <p className="text-gray-700">Saviour Green Isle<br />Crossing Republic, Ghaziabad – 201016, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-medium-spring/10 rounded-xl hover-scale transition-all duration-300">
                  <Clock className="h-8 w-8 text-pea-green mt-1" />
                  <div>
                    <h3 className="font-bold text-evergreen text-lg">Response Time</h3>
                    <p className="text-gray-700">Our support team typically responds within 24–48 hours during working days. We look forward to guiding you on your wellness journey.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Consultation Form */}
            <div className="lg:sticky lg:top-32 h-fit">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;