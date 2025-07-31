import CategoryPageWithContentTemplate from '@/components/CategoryPageWithContentTemplate';

const SkinHairHealth = () => {
  const categoryContent = {
    subtitle: "Radiate Naturally — Ayurvedic Care for Skin & Hair",
    description: "Glowing skin and healthy hair aren't just cosmetic — they reflect the inner balance of your body and mind. In Ayurveda, beauty is a byproduct of well-being. Skin breakouts, dullness, hair thinning, and premature greying are often signs of deeper imbalances — whether in digestion, stress, or doshic harmony. At BookMyAyurveda.com, our online consultations offer personalized care that goes beyond surface treatments. By understanding your unique constitution (Prakriti), we provide natural, effective routines to nourish your beauty from within.",
    offerings: [
      "Personalized Skincare Regimens: Natural formulations and rituals using herbs like Neem, Turmeric, and Aloe Vera to soothe and revitalize your skin",
      "Herbal Hair Treatments: Time-tested oils and herbs like Bhringraj, Brahmi, and Amla to strengthen roots and promote hair growth",
      "Dietary Recommendations for Beauty: Customized nutrition to boost skin glow and hair vitality from the inside out",
      "Stress Reduction Techniques: Mind-body practices like meditation and breathwork to calm stress-related issues"
    ],
    closingMessage: "Ayurveda Sees You — Not Just Your Symptoms. Rather than masking flaws, Ayurveda works with your body to restore lasting beauty, health, and confidence — the natural way."
  };

  const subcategories = [
    {
      name: 'Acne / Pimples',
      href: '/consultations/skin-hair-health/acne-pimples',
      description: 'Clear acne naturally through detoxification, hormonal balance, and topical herbal treatments for healthy skin.',
      symptoms: ['Active breakouts', 'Blackheads', 'Oily skin', 'Scarring'],
      image: '/Sub Category/Skin & Hair Health/Acne & Pimples.jpg'
    },
    {
      name: 'Psoriasis / Eczema',
      href: '/consultations/skin-hair-health/psoriasis-eczema',
      description: 'Manage chronic skin conditions through anti-inflammatory herbs, immune modulation, and skin barrier restoration.',
      symptoms: ['Skin patches', 'Itching', 'Inflammation', 'Dry skin'],
      image: '/Sub Category/Skin & Hair Health/Psoriasis  Eczema.jpg'
    },
    {
      name: 'Dry or Oily Skin',
      href: '/consultations/skin-hair-health/dry-oily-skin',
      description: 'Balance skin moisture and oil production using skin-type specific herbs and personalized skincare protocols.',
      symptoms: ['Skin imbalance', 'Excess oil', 'Dryness', 'Texture issues'],
      image: '/Sub Category/Skin & Hair Health/Dry & Oily Skin.jpg'
    },
    {
      name: 'Hair Fall / Hair Thinning',
      href: '/consultations/skin-hair-health/hair-fall-thinning',
      description: 'Prevent hair loss and promote regrowth through scalp-nourishing herbs, circulation enhancers, and nutritional support.',
      symptoms: ['Excessive hair fall', 'Thinning hair', 'Receding hairline', 'Weak hair'],
      image: '/Sub Category/Skin & Hair Health/Hair Fall  Hair Thinning.jpg'
    },
    {
      name: 'Premature Graying',
      href: '/consultations/skin-hair-health/premature-graying',
      description: 'Delay and reverse premature graying using pigment-supporting herbs, antioxidants, and hair vitality treatments.',
      symptoms: ['Early gray hair', 'Loss of pigment', 'Stress-related graying', 'Genetic predisposition'],
      image: '/Sub Category/Skin & Hair Health/Premature Graying.jpg'
    },
    {
      name: 'Dandruff / Scalp Infections',
      href: '/consultations/skin-hair-health/dandruff-scalp-infections',
      description: 'Eliminate dandruff and scalp infections using antifungal herbs, scalp cleansing treatments, and pH balance restoration.',
      symptoms: ['Flaky scalp', 'Itching', 'Scalp irritation', 'Hair odor'],
      image: '/Sub Category/Skin & Hair Health/Dandruff  Scalp Infections.jpg'
    }
  ];

  return (
    <CategoryPageWithContentTemplate
      categoryTitle="Skin & Hair Health"
      categoryDescription="Achieve radiant skin and healthy hair through Ayurvedic beauty and wellness treatments. Our natural approaches address skin conditions and hair concerns from the inside out."
      categoryImage="/Category/Skin & Hair Health.jpg"
      categoryContent={categoryContent}
      subcategories={subcategories}
    />
  );
};

export default SkinHairHealth;
