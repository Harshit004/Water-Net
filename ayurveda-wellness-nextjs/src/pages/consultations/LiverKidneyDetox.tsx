import CategoryPageWithContentTemplate from '@/components/CategoryPageWithContentTemplate';

const LiverKidneyDetox = () => {
  const categoryContent = {
    subtitle: "Cleanse From Within — Ayurvedic Support for Liver & Kidney Health",
    description: "Your liver and kidneys silently work every day to purify your body — filtering toxins, balancing fluids, and aiding digestion. Yet, poor diet, medications, alcohol, or chronic stress can strain these vital organs. When the body's internal filters are overwhelmed, it often shows up as fatigue, bloating, water retention, or urinary discomfort. At BookMyAyurveda.com, our online Ayurvedic consultations go beyond symptoms to find the root cause — offering personalized detox and rejuvenation therapies designed for your unique doshic profile.",
    offerings: [
      "Liver Detox & Revitalization: Herbal support and diet plans to cleanse toxins, restore liver function, and ease fatty liver concerns",
      "Kidney Stone & UTI Relief: Time-tested formulas like Varun, Punarnava, and Gokshura to dissolve stones, soothe infections, and prevent recurrence",
      "Urinary Balance & Control: Natural therapies to strengthen bladder function, reduce urgency, and improve control — especially in chronic leakage cases",
      "Gentle Internal Cleansing: Safe, seasonal detox regimens to lighten the load on liver and kidneys while restoring energy and clarity"
    ],
    closingMessage: "Detox Naturally. Heal Deeply. True healing begins when the body is cleansed from within. Instead of masking symptoms, Ayurveda focuses on gently removing accumulated toxins (ama) and restoring harmony to your internal systems. With time-tested herbs, personalized routines, and mindful lifestyle changes, this ancient science supports your liver and kidneys in doing what they do best — keeping your body clean, balanced, and full of life. Whether you're facing chronic discomfort or simply wish to rejuvenate, Ayurvedic care offers a gentle yet powerful path to long-term vitality."
  };

  const subcategories = [
    {
      name: 'Fatty Liver',
      href: '/consultations/liver-kidney-detox/fatty-liver',
      description: 'Reverse fatty liver naturally through liver-cleansing herbs, dietary modifications, and hepatic regeneration support.',
      symptoms: ['Liver enlargement', 'Fatigue', 'Abdominal discomfort', 'Elevated enzymes'],
      image: '/Sub Category/Liver, Kidney & Detox/Fatty Liver.jpg'
    },
    {
      name: 'Liver Detox (Alcohol, Drugs, Toxins)',
      href: '/consultations/liver-kidney-detox/liver-detox',
      description: 'Support liver detoxification and renewal with Ayurvedic herbs, dietary changes, and lifestyle support.',
      symptoms: ['Fatigue', 'Digestive discomfort', 'Skin issues', 'Poor appetite'],
      image: '/Sub Category/Liver, Kidney & Detox/Liver Detox (alcohol, drugs, toxins).jpg'
    },
    {
      name: 'Kidney Stones (Prevention & Management)',
      href: '/consultations/liver-kidney-detox/kidney-stones',
      description: 'Prevent and manage kidney stones with Ayurvedic herbs, hydration, and dietary guidance.',
      symptoms: ['Flank pain', 'Blood in urine', 'Frequent urination', 'Nausea'],
      image: '/Sub Category/Liver, Kidney & Detox/Kidney Stones (prevention and management).jpg'
    },
    {
      name: 'Recurrent UTI',
      href: '/consultations/liver-kidney-detox/recurrent-uti',
      description: 'Soothe and prevent recurrent UTIs with urinary tract-supportive herbs, hydration, and hygiene practices.',
      symptoms: ['Burning urination', 'Frequent urge', 'Cloudy urine', 'Pelvic discomfort'],
      image: '/Sub Category/Liver, Kidney & Detox/Recurrent UTI.jpg'
    },
    {
      name: 'Urinary Incontinence',
      href: '/consultations/liver-kidney-detox/urinary-incontinence',
      description: 'Regain bladder control and comfort with Ayurvedic herbs, pelvic floor exercises, and supportive routines.',
      symptoms: ['Involuntary leakage', 'Urgency', 'Pelvic discomfort', 'Fatigue'],
      image: '/Sub Category/Liver, Kidney & Detox/Urinary Incontinence.jpg'
    }
  ];

  return (
    <CategoryPageWithContentTemplate
      categoryTitle="Liver, Kidney & Detox"
      categoryDescription="Support vital organ health and natural detoxification through Ayurvedic therapies. Our treatments promote liver and kidney function while aiding the body's natural cleansing processes."
      categoryImage="/Category/Liver, Kidney & Detox.jpg"
      categoryContent={categoryContent}
      subcategories={subcategories}
    />
  );
};

export default LiverKidneyDetox;
