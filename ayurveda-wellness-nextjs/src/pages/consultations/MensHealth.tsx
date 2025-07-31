import CategoryPageWithContentTemplate from '@/components/CategoryPageWithContentTemplate';

const MensHealth = () => {
  const categoryContent = {
    subtitle: "Enhance Your Vitality — Ayurvedic Approaches to Men's Health",
    description: "Men's health is about more than just physical strength — it involves balancing hormones, maintaining energy, and nurturing mental clarity. Modern life often challenges these areas, leading to fatigue, stress, or hormonal imbalances. Ayurveda offers natural, personalized strategies to support and optimize men's health holistically. At BookMyAyurveda.com, our online consultations identify your unique dosha imbalances and provide tailored plans to enhance vitality, stamina, and overall well-being using time-tested Ayurvedic wisdom.",
    offerings: [
      "Hormonal Balance Support: Herbs like Ashwagandha and Shilajit to naturally regulate testosterone and hormone levels",
      "Energy and Stamina Enhancement: Customized lifestyle and dietary advice to improve endurance and vitality",
      "Stress and Mental Health Management: Techniques including meditation and breathing exercises to reduce stress and sharpen focus",
      "Prostate Health Maintenance: Natural remedies and practices that support healthy prostate function and urinary health"
    ],
    closingMessage: "Ayurveda Isn't a Quick Fix — It's a Long-Term Investment in Your Health. True vitality comes from balance and care over time. Ayurveda gently restores your body and mind — empowering you to lead a stronger, healthier, and more vibrant life."
  };

  const subcategories = [
    {
      name: 'Low Libido',
      href: '/consultations/mens-health/low-libido',
      description: 'Naturally enhance libido and sexual desire through aphrodisiac herbs, hormone optimization, and vitality restoration.',
      symptoms: ['Reduced sexual interest', 'Low desire', 'Relationship strain', 'Confidence issues'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      name: 'Erectile Dysfunction',
      href: '/consultations/mens-health/erectile-dysfunction',
      description: 'Restore erectile function and confidence through aphrodisiac herbs, stress management, and lifestyle changes.',
      symptoms: ['Difficulty achieving or maintaining erection', 'Reduced libido', 'Anxiety or distress', 'Low confidence'],
      image: '/Sub Category/Men\u2019s Health/Erectile Dysfunction.jpg'
    },
    {
      name: 'Premature Ejaculation',
      href: '/consultations/mens-health/premature-ejaculation',
      description: 'Improve sexual endurance and control through nervine herbs, relaxation techniques, and stamina-building practices.',
      symptoms: ['Quick ejaculation', 'Lack of control', 'Performance anxiety', 'Relationship stress'],
      image: '/Sub Category/Men\u2019s Health/Premature Ejaculation.jpg'
    },
    {
      name: 'Prostate Health',
      href: '/consultations/mens-health/prostate-health',
      description: 'Support prostate wellness and prevent enlargement using prostate-specific herbs and anti-inflammatory treatments.',
      symptoms: ['Urinary frequency', 'Weak stream', 'Nighttime urination', 'Pelvic discomfort'],
      image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=300&fit=crop'
    },
    {
      name: 'Low Testosterone / Energy',
      href: '/consultations/mens-health/low-testosterone-energy',
      description: 'Boost testosterone levels naturally and restore masculine vitality through hormone-supporting herbs and lifestyle optimization.',
      symptoms: ['Low energy', 'Muscle loss', 'Mood changes', 'Reduced motivation'],
      image: '/Sub Category/Men\u2019s Health/Low Testosterone  Energy.jpg'
    },
    {
      name: 'Stress-Induced Sexual Fatigue',
      href: '/consultations/mens-health/stress-induced-sexual-fatigue',
      description: 'Overcome stress-related sexual fatigue through adaptogenic herbs, stress management, and energy restoration.',
      symptoms: ['Sexual exhaustion', 'Stress-related dysfunction', 'Mental fatigue', 'Reduced performance'],
      image: '/Sub Category/Men\u2019s Health/Stress-Induced Sexual Fatigue.jpg'
    },
    {
      name: 'Fertility / Low Sperm Count',
      href: '/consultations/mens-health/fertility-low-sperm-count',
      description: 'Enhance male fertility and sperm quality through reproductive tonics, antioxidants, and fertility-boosting protocols.',
      symptoms: ['Low sperm count', 'Poor sperm quality', 'Difficulty conceiving', 'Hormonal imbalances'],
      image: '/Sub Category/Men\u2019s Health/Fertility  Low Sperm Count.jpg'
    }
  ];

  return (
    <CategoryPageWithContentTemplate
      categoryTitle="Men's Health"
      categoryDescription="Comprehensive men's health care through Ayurvedic wisdom. Our specialized treatments address hormonal balance, reproductive health, and men-specific wellness concerns naturally."
      categoryImage="/Category/Men_s Health.jpg"
      categoryContent={categoryContent}
      subcategories={subcategories}
    />
  );
};

export default MensHealth;
