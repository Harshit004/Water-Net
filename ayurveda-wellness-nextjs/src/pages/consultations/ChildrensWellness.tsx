import CategoryPageWithContentTemplate from '@/components/CategoryPageWithContentTemplate';

const ChildrensWellness = () => {
  const categoryContent = {
    subtitle: "Nurture Their Growth — Ayurvedic Support for Children's Health",
    description: "Children today often face issues like low appetite, recurring infections, poor focus, or restless sleep — all signs that their inner balance may need gentle support. Ayurveda offers safe, nurturing, and effective care that strengthens young bodies and minds without the side effects of harsh medications. At BookMyAyurveda.com, our pediatric Ayurvedic consultations focus on boosting immunity, digestion, and emotional wellness through personalized, natural care.",
    offerings: [
      "Poor Appetite & Weak Digestion: Herbal appetite enhancers and gut-friendly dietary tips improve eating habits and nutrient absorption",
      "Immunity & Growth Support: Gentle rasayanas (rejuvenating tonics) help build resilience against infections and promote steady development",
      "Sleep Disorders & Restlessness: Calming herbs and soothing oil therapies help your child sleep better, naturally and without dependency",
      "Focus, Learning & Hyperactivity: Brain-nourishing foods and herbal support improve concentration while calming excess mental activity"
    ],
    closingMessage: "Ayurveda supports your child's health in a holistic, gentle way — helping them thrive at every stage. Book an online consultation today at BookMyAyurveda.com and give your child the gift of lifelong well-being, naturally."
  };

  const subcategories = [
    {
      name: 'Poor Appetite / Weak Digestion',
      href: '/consultations/childrens-wellness/poor-appetite-weak-digestion',
      description: 'Improve children\'s appetite and digestion through gentle digestive herbs, nutritional guidance, and eating habit optimization.',
      symptoms: ['Poor appetite', 'Picky eating', 'Weak digestion', 'Nutrient deficiency'],
      image: "/Sub Category/Children’s Wellness/Poor Appetite.jpg"
    },
    {
      name: 'Frequent Infections',
      href: '/consultations/childrens-wellness/frequent-infections',
      description: 'Boost children\'s immunity naturally through immune-strengthening herbs, nutritional support, and infection prevention.',
      symptoms: ['Recurring colds', 'Frequent fever', 'Low immunity', 'Slow recovery'],
      image: "/Sub Category/Children’s Wellness/Weak Immunity.jpg"
    },
    {
      name: 'Sleep Issues / Restlessness',
      href: '/consultations/childrens-wellness/sleep-issues-restlessness',
      description: 'Promote healthy sleep patterns in children through calming herbs, bedtime routines, and relaxation techniques.',
      symptoms: ['Difficulty sleeping', 'Restless nights', 'Frequent waking', 'Sleep resistance'],
      image: "/Sub Category/Children’s Wellness/Sleep Problems.jpg"
    },
    {
      name: 'ADHD / Hyperactivity',
      href: '/consultations/childrens-wellness/adhd-hyperactivity',
      description: 'Support children with ADHD through brain-calming herbs, dietary modifications, and focus-enhancing practices.',
      symptoms: ['Hyperactivity', 'Poor concentration', 'Impulsiveness', 'Learning difficulties'],
      image: "/Sub Category/Children’s Wellness/Hyperactivity  Focus Challenges.jpg"
    },
    {
      name: 'Growth & Development Issues',
      href: '/consultations/childrens-wellness/growth-development-issues',
      description: 'Support healthy growth and development through nutritional guidance, growth-promoting herbs, and developmental support.',
      symptoms: ['Slow growth', 'Developmental delays', 'Weak bones', 'Poor weight gain'],
      image: "/Sub Category/Children’s Wellness/Growth Delays.jpg"
    },
    {
      name: 'Digestive Issues',
      href: '/consultations/childrens-wellness/digestive-issues',
      description: 'Support healthy digestion in children with gentle Ayurvedic herbs, dietary guidance, and lifestyle routines.',
      symptoms: ['Tummy aches', 'Irregular bowels', 'Bloating', 'Poor appetite'],
      image: "/Sub Category/Children's Wellness/Digestive Issues.jpg"
    },
    {
      name: 'Hyperactivity / Focus Challenges',
      href: '/consultations/childrens-wellness/hyperactivity-focus-challenges',
      description: 'Calm hyperactivity and improve focus with mind-balancing herbs, routines, and supportive therapies.',
      symptoms: ['Restlessness', 'Difficulty focusing', 'Impulsivity', 'Sleep issues'],
      image: "/Sub Category/Children's Wellness/Hyperactivity  Focus Challenges.jpg"
    }
  ];

  return (
    <CategoryPageWithContentTemplate
      categoryTitle="Children's Wellness"
      categoryDescription="Nurture your child's health and development through gentle Ayurvedic care. Our specialized treatments support children's growth, immunity, and overall wellness with natural, safe approaches."
      categoryImage="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/85891537-6a0d-44b2-7144-c7765c6c4e00/public"
      categoryContent={categoryContent}
      subcategories={subcategories}
    />
  );
};

export default ChildrensWellness;
