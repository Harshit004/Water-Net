import CategoryPageWithContentTemplate from '@/components/CategoryPageWithContentTemplate';

const SeniorElderlyCare = () => {
  const categoryContent = {
    subtitle: "Graceful Aging with Ayurvedic Wisdom",
    description: "As the body ages, challenges like memory decline, joint stiffness, weak digestion, and light sleep often arise. But aging doesn't have to mean decline. Ayurveda offers compassionate, drug-free support for seniors — promoting strength, clarity, and vitality in the golden years. At BookMyAyurveda.com, our online consultations provide holistic, personalized care that nurtures both body and mind with timeless Ayurvedic principles.",
    offerings: [
      "Memory Loss & Cognitive Decline: Medhya herbs like Brahmi and Shankhpushpi enhance alertness and protect mental sharpness",
      "Weak Digestion & Low Energy: Gut-balancing herbs and customized diet plans improve energy, nutrient absorption, and stamina",
      "Joint Degeneration & Chronic Pain: Anti-inflammatory therapies and herbal oils relieve stiffness and promote flexibility, without side effects",
      "Insomnia & Sleep Support: Soothing bedtime rituals and calming herbs help restore restful, rejuvenating sleep"
    ],
    closingMessage: "Help your loved ones age gracefully, with dignity and vitality. Schedule an Ayurvedic consultation at BookMyAyurveda.com and discover gentle, effective care for lifelong well-being."
  };

  const subcategories = [
    {
      name: 'Memory Loss / Early Dementia',
      href: '/consultations/senior-elderly-care/memory-loss-dementia',
      description: 'Support cognitive health and memory through brain-nourishing herbs, memory enhancers, and neuroprotective treatments.',
      symptoms: ['Memory problems', 'Confusion', 'Cognitive decline', 'Disorientation'],
      image: '/Sub Category/Senior & Elderly Care/Memory Loss  Early Dementia.jpg'
    },
    {
      name: 'Weak Digestion',
      href: '/consultations/senior-elderly-care/weak-digestion',
      description: 'Strengthen digestive function in elderly through gentle digestive aids, enzyme support, and gut health optimization.',
      symptoms: ['Poor appetite', 'Indigestion', 'Bloating', 'Nutrient deficiency'],
      image: '/Sub Category/Senior & Elderly Care/Weak Digestion.jpg'
    },
    {
      name: 'Joint Degeneration',
      href: '/consultations/senior-elderly-care/joint-degeneration',
      description: 'Slow joint degeneration and maintain mobility through joint-protecting herbs and anti-inflammatory treatments.',
      symptoms: ['Joint stiffness', 'Mobility issues', 'Pain', 'Reduced flexibility'],
      image: '/Sub Category/Senior & Elderly Care/Joint Degeneration.jpg'
    },
    {
      name: 'Chronic Pain',
      href: '/consultations/senior-elderly-care/chronic-pain',
      description: 'Manage chronic pain conditions through natural pain relievers, anti-inflammatory herbs, and comfort-enhancing therapies.',
      symptoms: ['Persistent pain', 'Discomfort', 'Reduced quality of life', 'Sleep disturbances'],
      image: '/Sub Category/Senior & Elderly Care/Chronic Pain.jpg'
    },
    {
      name: 'Insomnia / Light Sleep',
      href: '/consultations/senior-elderly-care/insomnia-light-sleep',
      description: 'Improve sleep quality in seniors through gentle sleep aids, relaxation herbs, and sleep hygiene optimization.',
      symptoms: ['Difficulty sleeping', 'Light sleep', 'Early waking', 'Sleep fragmentation'],
      image: '/Sub Category/Senior & Elderly Care/Insomnia  Light Sleep.jpg'
    }
  ];

  return (
    <CategoryPageWithContentTemplate
      categoryTitle="Senior & Elderly Care"
      categoryDescription="Support healthy aging and vitality through specialized Ayurvedic care for seniors. Our gentle treatments address age-related health concerns and promote wellness in the golden years."
      categoryImage="/Category/Senior & Elderly Care.jpg"
      categoryContent={categoryContent}
      subcategories={subcategories}
    />
  );
};

export default SeniorElderlyCare;
