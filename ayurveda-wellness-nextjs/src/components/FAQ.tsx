
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Ayurveda and how can it help me?",
      answer: "Ayurveda is a 5,000-year-old system of natural healing that originated in India. It focuses on balancing the mind, body, and spirit through personalized diet, lifestyle, herbal remedies, and treatments. It can help with chronic conditions, stress management, digestive issues, and overall wellness by addressing the root cause of health problems rather than just treating symptoms."
    },
    {
      question: "How does an online Ayurvedic consultation work?",
      answer: "Our online consultations are conducted via video call with our qualified Ayurvedic practitioners. During the session, we'll discuss your health history, current concerns, lifestyle, and diet. Based on this comprehensive assessment, we'll provide personalized recommendations including herbal remedies, dietary guidelines, and lifestyle modifications. Follow-up consultations help monitor your progress."
    },
    {
      question: "Are Ayurvedic medicines safe and effective?",
      answer: "When prescribed by qualified practitioners and sourced from reputable suppliers, Ayurvedic medicines are generally safe and effective. We only recommend high-quality, tested herbal formulations. However, it's important to inform us about any existing medications or health conditions to avoid interactions. Ayurvedic treatments work gradually and naturally to restore balance."
    },
    {
      question: "How long does it take to see results with Ayurvedic treatment?",
      answer: "The timeline varies depending on the condition being treated, its severity, and how long you've had it. Acute conditions may show improvement within days to weeks, while chronic conditions typically require 3-6 months of consistent treatment. Ayurveda focuses on sustainable, long-term healing rather than quick fixes."
    },
    {
      question: "Can I continue my regular medications while taking Ayurvedic remedies?",
      answer: "Yes, in most cases you can continue your regular medications alongside Ayurvedic treatment. However, it's crucial to inform us about all medications you're taking during your consultation. We'll ensure there are no contraindications and may recommend timing adjustments. Always consult your regular doctor before making any changes to prescribed medications."
    },
    {
      question: "Do you provide international shipping for medicines?",
      answer: "Yes, we offer international shipping for our Ayurvedic medicines to most countries. Shipping costs and delivery times vary by location. We ensure all products are properly packaged and comply with international shipping regulations. Custom duties and local regulations may apply depending on your country's import policies."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-medium-spring">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-deep-bottle-green mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-deep-bottle-green max-w-2xl mx-auto">
            Get answers to common questions about Ayurvedic consultations and treatments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-md border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-deep-bottle-green hover:text-pea-green transition-colors [&[data-state=open]]:text-pea-green">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-deep-bottle-green leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
