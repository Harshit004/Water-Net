import CategoryPageWithContentTemplate from '@/components/CategoryPageWithContentTemplate';

const DigestiveGutHealth = () => {
  const categoryContent = {
    subtitle: "When Your Gut Speaks, Ayurveda Listens",
    description: `Digestive & Gut Health is at the core of your overall well-being. At BookMyAyurveda.com, we blend ancient Asian wisdom with modern telehealth to address the root causes of digestive issues—naturally and sustainably. Whether you struggle with heartburn, constipation, bloating, or unpredictable gut symptoms, our personalized Ayurvedic programs are designed to restore balance, strengthen your digestive fire (Agni), and heal from within. Experience gentle, lasting relief and reclaim your digestive freedom.`,
    offerings: [
      "Personalized Ayurvedic consultations for all major digestive concerns",
      "Root-cause healing for acid reflux, constipation, bloating, IBS, and more",
      "Herbal therapies, dietary guidance, and lifestyle alignment",
      "Safe, sustainable results without dependency on medications"
    ],
    closingMessage: `Your gut is your body's foundation. Ayurveda offers a gentle, holistic path to restore digestive harmony—so you can live with energy, comfort, and confidence. Book your online consultation today and discover the difference of true root-cause healing.`
  };

  const subcategories = [
    {
      name: 'Acid Reflux / GERD',
      href: '/consultations/digestive-gut-health/acid-reflux-gerd',
      description: `What many dismiss as simple heartburn could actually be Gastroesophageal Reflux Disease (GERD)—a growing concern in the modern world. Ayurveda sees GERD as a Pitta imbalance, and our approach focuses on calming excess heat, restoring digestive fire, and healing the gut lining. Experience relief through personalized herbs, cooling diets, and mind-body practices that address the root, not just the symptoms.`,
      symptoms: ['Burning chest/throat', 'Sour taste', 'Chronic cough', 'Bloating'],
      image: '/Sub Category/Digestive & Gut Health/Acid Reflux  GERD.jpg'
    },
    {
      name: 'Constipation',
      href: '/consultations/digestive-gut-health/constipation',
      description: 'Relieve constipation naturally with Ayurvedic herbs, dietary fiber, and digestive support.',
      symptoms: ['Infrequent stools', 'Hard stools', 'Bloating', 'Discomfort'],
      image: '/Sub Category/Digestive & Gut Health/Constipation.jpg'
    },
    {
      name: 'Bloating & Gas',
      href: '/consultations/digestive-gut-health/bloating-gas',
      description: 'Soothe bloating and gas with carminative herbs, mindful eating, and gut-balancing therapies.',
      symptoms: ['Abdominal distension', 'Flatulence', 'Discomfort', 'Heaviness'],
      image: '/Sub Category/Digestive & Gut Health/Bloating & Gas.jpg'
    },
    {
      name: 'Indigestion / Poor Metabolism',
      href: '/consultations/digestive-gut-health/indigestion-poor-metabolism',
      description: 'Improve digestion and metabolism with Agni-boosting herbs, dietary changes, and lifestyle support.',
      symptoms: ['Heaviness', 'Slow digestion', 'Fatigue', 'Loss of appetite'],
      image: '/Sub Category/Digestive & Gut Health/Indigestion  Poor Metabolism.jpg'
    },
    {
      name: 'Irritable Bowel Syndrome (IBS)',
      href: '/consultations/digestive-gut-health/ibs',
      description: 'Manage IBS symptoms with gut-soothing herbs, stress reduction, and personalized dietary guidance.',
      symptoms: ['Abdominal pain', 'Irregular bowels', 'Bloating', 'Urgency'],
      image: '/Sub Category/Digestive & Gut Health/Irritable Bowel Syndrome (IBS).jpg'
    },
    {
      name: 'Leaky Gut Syndrome',
      href: '/consultations/digestive-gut-health/leaky-gut-syndrome',
      description: 'Heal leaky gut with mucosal-repairing herbs, anti-inflammatory foods, and gut barrier support.',
      symptoms: ['Food sensitivities', 'Bloating', 'Fatigue', 'Digestive discomfort'],
      image: '/Sub Category/Digestive & Gut Health/Leaky Gut Syndrome.jpg'
    }
  ];

  return (
    <CategoryPageWithContentTemplate
      categoryTitle="Digestive & Gut Health"
      categoryDescription="Restore digestive harmony with ancient Ayurvedic wisdom. Our specialized treatments address the root causes of digestive disorders, promoting optimal gut health and overall well-being through natural, time-tested remedies."
      categoryImage="/Category/Digestive & Gut Health.jpg"
      categoryContent={categoryContent}
      subcategories={subcategories}
    />
  );
};

export default DigestiveGutHealth;
