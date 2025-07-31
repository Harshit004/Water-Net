import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationPopup from '@/components/ConsultationPopup';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import ConsultationForm from '@/components/consultation/ConsultationForm';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [isConsultationPopupOpen, setIsConsultationPopupOpen] = useState(false);

  const faqs = [
    {
      question: "What makes BookMyAyurveda different from other wellness platforms?",
      answer: "We specialize in personalized online Ayurvedic consultations, connecting you with certified doctors who offer authentic, practical, and time-tested healing solutions. No generic plans — only customized care rooted in ancient science and designed for your modern lifestyle."
    },
    {
      question: "How does an Ayurvedic consultation work?",
      answer: "During your session, our expert will assess your dosha (body constitution), symptoms, lifestyle, and emotional well-being. Based on this, you'll receive a custom wellness plan with dietary advice, herbal recommendations, routines, and therapies suited to your exact needs."
    },
    {
      question: "Are consultations available online globally?",
      answer: "Yes! We offer secure virtual consultations worldwide — including USA, Canada, UK, UAE, Australia, and more. You can consult our doctors from the comfort of your home, at your preferred time zone."
    },
    {
      question: "Who should consult an Ayurvedic practitioner?",
      answer: "Everyone. Whether you're dealing with a chronic illness, digestive issues, hormonal imbalance, or simply want to improve your energy, immunity, or sleep — Ayurveda helps you heal from within, regardless of age or condition."
    },
    {
      question: "How long does each consultation take?",
      answer: "Initial consultations typically last 45–60 minutes, ensuring a complete health analysis. Follow-ups may be 20–30 minutes, focused on progress review and adjusting your plan for better results."
    },
    {
      question: "Is Ayurveda safe for children, pregnant women, and seniors?",
      answer: "Absolutely. Ayurveda is age-inclusive and gentle, with special protocols for children, expectant mothers, and elderly individuals. All herbs and therapies are prescribed based on safety, suitability, and your specific stage of life."
    },
    {
      question: "Can I continue my allopathic medicines along with Ayurveda?",
      answer: "Yes — Ayurveda can complement modern medicine. Just inform your Ayurvedic expert about your current medications so we can ensure a safe and harmonious treatment plan without interactions."
    },
    {
      question: "Do Ayurvedic treatments have side effects?",
      answer: "When guided by a qualified doctor, Ayurvedic remedies are natural and safe, using herbs, oils, and foods in therapeutic ways. We avoid harmful chemicals, artificial fillers, and one-size-fits-all supplements."
    },
    {
      question: "How do I receive my Ayurvedic medicines?",
      answer: "Post-consultation, your prescribed formulations can be shipped directly to your doorstep, even internationally, through our verified pharmacy partners. We ensure genuine, high-quality Ayurvedic products."
    },
    {
      question: "How soon will I start seeing results?",
      answer: "Ayurveda treats the root cause, not just symptoms — so results can take time. While some feel relief within weeks, others may need consistent treatment for a few months for deeper, sustainable healing."
    },
    {
      question: "What conditions can BookMyAyurveda help with?",
      answer: "We provide Ayurvedic care for a wide range of issues, including: Digestive issues (IBS, acidity), Stress, anxiety & insomnia, Weight & metabolism, Hormonal imbalance (PCOS, thyroid), Joint pain, arthritis, Men's & women's health, Skin & hair problems, Immunity & respiratory wellness, Children's growth, sleep, and immunity, Elderly care (mobility, memory, digestion)…and more!"
    },
    {
      question: "How do I book my consultation?",
      answer: "Booking is easy! Visit our Book Now page, select your preferred time and practitioner, and receive confirmation instantly. You can also email or call us if you need help scheduling."
    },
    {
      question: "Is my information kept confidential?",
      answer: "Yes. Your privacy is our priority. All consultations are 100% confidential and conducted on secure, encrypted platforms."
    },
    {
      question: "I don't know my dosha. Can I still book a consultation?",
      answer: "Absolutely. One of the first things our practitioner will do is assess your Prakriti (body constitution) and dosha imbalances — you don't need any prior knowledge to get started."
    },
    {
      question: "Do I need to make lifestyle changes?",
      answer: "Our goal is not to overwhelm you, but to make simple, sustainable changes. Your wellness plan will be realistic, flexible, and designed to fit your life — not the other way around."
    },
    {
      question: "Will I get written guidance after the consultation?",
      answer: "Yes. You will receive a detailed written plan, including diet tips, herbal prescriptions, daily routine recommendations, and FAQs to help you implement Ayurveda easily."
    },
    {
      question: "Can I speak with a doctor before committing to a full consultation?",
      answer: "Yes — we offer introductory calls so you can clarify your goals, ask questions, and get comfortable before your full assessment."
    },
    {
      question: "What's the follow-up process like?",
      answer: "We recommend follow-ups every 2–4 weeks. You'll track your progress, refine your plan, and receive ongoing guidance from the same practitioner who understands your journey."
    },
    {
      question: "What's the success rate of your programs?",
      answer: "We see a high satisfaction rate among clients who follow their Ayurvedic plans consistently. Many report reduced symptoms, better energy, improved sleep, weight balance, and emotional stability within weeks."
    },
    {
      question: "Why should I choose Ayurveda now?",
      answer: "Ayurveda is not just a treatment — it's a way of life. If you're tired of temporary relief, side effects, or feeling disconnected from your body, Ayurveda offers a return to harmony, health, and happiness."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-medium-spring to-pea-green animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold text-evergreen">Your Questions Answered — The Ayurvedic Way</h1>
            <p className="text-xl text-deep-bottle-green max-w-2xl mx-auto">
              Find answers to common questions about our Ayurvedic consultations and treatments.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row w-full gap-8">
            {/* Left: FAQs */}
            <div 
              className="lg:ml-[3.61%] px-4 lg:px-0"
              style={{ width: undefined }}
            >
              <div className="max-w-4xl mx-auto w-full lg:w-[calc(100%-350px-7.22%)]">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden hover-scale transition-all duration-300 mb-6"
                  >
                    <button
                      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-medium-spring/20 transition-all duration-300 flex items-center justify-between"
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <span className="font-semibold text-evergreen">{faq.question}</span>
                      {openFAQ === index ? (
                        <Minus className="h-5 w-5 text-pea-green" />
                      ) : (
                        <Plus className="h-5 w-5 text-pea-green" />
                      )}
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 py-4 bg-white animate-fade-in">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* Show consultation form below FAQs on mobile/tablet */}
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
        </div>
      </section>

      <ConsultationPopup 
        isOpen={isConsultationPopupOpen} 
        onClose={() => setIsConsultationPopupOpen(false)} 
      />

      <Footer />
    </div>
  );
};

export default FAQ;
