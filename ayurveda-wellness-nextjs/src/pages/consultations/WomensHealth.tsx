
import CategoryPageWithContentTemplate from '@/components/CategoryPageWithContentTemplate';

const WomensHealth = () => {
  const categoryContent = {
    subtitle: "Empower Your Health — Ayurvedic Care for Women's Wellness",
    description: "A woman's health is multidimensional — shifting through life stages, emotional rhythms, and hormonal changes. Yet, conventional care often treats symptoms without addressing the root. Ayurveda approaches women's wellness with deep respect and insight, offering natural, individualized care that evolves with every phase of life — from menstruation to motherhood to menopause. At BookMyAyurveda.com, our online consultations are tailored to your unique doshic constitution and life stage. Whether you're facing irregular periods, fertility concerns, or menopause discomfort, Ayurveda helps restore balance using gentle, time-tested methods.",
    offerings: [
      "Menstrual Health Support: Remedies and lifestyle tips to ease cramps, regulate cycles, and reduce PMS",
      "Fertility & Reproductive Wellness: Dietary guidance and herbal support to strengthen reproductive health",
      "Menopause Management: Natural strategies to soothe hot flashes, mood shifts, and hormonal fluctuations",
      "Emotional Well-being Practices: Stress-relieving rituals, meditation, and yoga to support mental clarity and calm"
    ],
    closingMessage: "Ayurveda Isn't a Quick Fix — It's a Long-Term Investment in Your Health. Women's health deserves holistic care that honors the body's natural rhythms. Ayurveda gently nurtures you through every stage, helping build resilience and harmony — empowering you to feel balanced, vibrant, and strong for the journey ahead."
  };

  const subcategories = [
    {
      name: 'PCOS / PCOD',
      href: '/consultations/womens-health/pcos-pcod',
      description: 'Comprehensive PCOS management through hormone balancing, insulin regulation, and reproductive health optimization.',
      symptoms: ['Irregular periods', 'Weight gain', 'Acne', 'Excess hair growth'],
      image: '/Sub Category/Women\'s Health/PCOS  PCOD.jpg'
    },
    {
      name: 'Irregular or Painful Periods',
      href: '/consultations/womens-health/irregular-painful-periods',
      description: 'Regulate menstrual cycles and reduce period pain using uterine tonics, hormone balancers, and pain-relieving herbs.',
      symptoms: ['Irregular cycles', 'Severe cramps', 'Heavy bleeding', 'Mood changes'],
      image: '/Sub Category/Women\'s Health/Irregular or Painful Periods.jpg'
    },
    {
      name: 'Menstrual Cramps',
      href: '/consultations/womens-health/menstrual-cramps',
      description: 'Natural pain relief for menstrual cramps using antispasmodic herbs, heat therapy, and dietary modifications.',
      symptoms: ['Pelvic pain', 'Lower back pain', 'Nausea', 'Fatigue during periods'],
      image: '/Sub Category/Women\'s Health/Menstrual Cramps.jpg'
    },
    {
      name: 'Menopause Support',
      href: '/consultations/womens-health/menopause-support',
      description: 'Ease menopausal transition with hormone-supporting herbs, cooling therapies, and emotional balance support.',
      symptoms: ['Hot flashes', 'Mood swings', 'Sleep disturbances', 'Vaginal dryness'],
      image: '/Sub Category/Women\'s Health/Menopause Support (Hot flashes, Mood swings).jpg'
    },
    {
      name: 'Fertility Support',
      href: '/consultations/womens-health/fertility-support',
      description: 'Enhance fertility naturally through reproductive tonics, cycle optimization, and preconception health support.',
      symptoms: ['Difficulty conceiving', 'Irregular ovulation', 'Low egg quality', 'Hormonal imbalances'],
      image: '/Sub Category/Women\'s Health/Fertility Support.jpg'
    },
    {
      name: 'Endometriosis',
      href: '/consultations/womens-health/endometriosis',
      description: 'Manage endometriosis symptoms naturally with anti-inflammatory herbs, pain management, and hormonal support.',
      symptoms: ['Pelvic pain', 'Heavy periods', 'Pain during intercourse', 'Fatigue'],
      image: '/Sub Category/Women\'s Health/Endometriosis (mild to moderate support).jpg'
    },
    {
      name: 'Hormonal Acne',
      href: '/consultations/womens-health/hormonal-acne',
      description: 'Clear hormonal acne through internal hormone balancing, detoxification, and topical herbal treatments.',
      symptoms: ['Cyclical breakouts', 'Jawline acne', 'Cystic acne', 'Oily skin'],
      image: '/Sub Category/Women\'s Health/Hormonal Acne.jpg'
    },
    {
      name: 'Vaginal Dryness / pH Imbalance',
      href: '/consultations/womens-health/vaginal-dryness-ph-imbalance',
      description: 'Restore vaginal health and moisture using herbal formulations, probiotics, and pH-balancing treatments.',
      symptoms: ['Vaginal dryness', 'Itching', 'Discomfort', 'Recurring infections'],
      image: '/Sub Category/Women\'s Health/Vaginal Dryness  pH Imbalance.jpg'
    }
  ];

  return (
    <CategoryPageWithContentTemplate
      categoryTitle="Women's Health"
      categoryDescription="Comprehensive women's health care through Ayurvedic wisdom. Our specialized treatments address hormonal balance, reproductive health, and women-specific wellness concerns naturally."
      categoryImage="/Category/Womens Health.jpg"
      categoryContent={categoryContent}
      subcategories={subcategories}
    />
  );
};

export default WomensHealth;
