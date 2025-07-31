import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const IndigestionPoorMetabolism = () => {
  const suggestedProducts = [
    {
      id: 'triphala',
      name: 'Triphala (Amalaki, Haritaki, Bibhitaki)',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/triphala-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'ginger',
      name: 'Ginger Root',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ginger-benefits-1.jpg',
      price: '₹149 / 100g',
    },
    {
      id: 'cumin',
      name: 'Cumin Seeds',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/cumin-benefits-1.jpg',
      price: '₹149 / 100g',
    },
    {
      id: 'herbal-mix',
      name: 'Ayurvedic Digestive Herbal Mix',
      imageUrl: 'https://www.jiva.com/sites/default/files/styles/product_image/public/2021-01/Herbal%20Digestive%20Churna.png',
      price: '₹399 / 150g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: "Indigestion / Poor Metabolism",
      breadcrumb: "Digestive & Gut Health",
      breadcrumbHref: "/consultations/digestive-gut-health",
    },
    description: `Title: When Every Meal Feels Heavy — Find True Digestive Renewal\n\nThat uncomfortable fullness after eating doesn't need to follow you all day.\nIndigestion—characterized by gas, bloating, or sluggish digestion—can leave you feeling exhausted and unfocused. At BookMyAyurveda.com, our global Ayurvedic consultations combine age-old Asian healing wisdom with modern lifestyle strategies to help reset your digestion and metabolism naturally. No more relying on quick fixes—just gentle, long-term support rooted in holistic healing.\n\nH1: Indigestion and Poor Metabolism Through Ayurvedic Eyes\nIndigestion, or dyspepsia, manifests as discomfort, heartburn, bloating, excessive belching, or a lingering fullness—especially after meals. Modern research links it to low digestive capacity, stress, poor diet, and imbalanced gut flora. In Ayurveda, indigestion arises from weakened Agni—your digestive fire. When Agni falters (known as Agnimandya), food cannot be properly broken down, leading to the buildup of toxins called Ama. Vata imbalance leads to sluggish gut movement, while high Pitta creates excessive acid and inflammation—both contributing to impaired digestion and slowed metabolism.\nKey Symptoms:\n- Bloating or tightness after eating\n- Gas, belching, or burping\n- Burning or aching in the upper abdomen\n- Early fullness or slow digestion\n- Fatigue, weak appetite, or irregular weight changes\nChronic indigestion signals deeper imbalance—it weakens your nutrient absorption, vitality, and overall well-being.\n\nH2: How Ayurveda Restores Digestive Efficiency\nAyurveda takes a layered approach—first strengthening Agni, then clearing Ama, and finally restoring balance to the doshas. Healing begins with an individualized plan based on your Prakriti and current digestive state.\nGentle digestive stimulants called Deepana-Pachana are used to re-kindle Agni: ginger, cumin, and black pepper in teas or decoctions initiate gradual metabolic repair. Herbs such as Triphala and Musta support mild cleansing of toxins while regulating both digestion and metabolism.\nAyurveda also recommends Panchakarma detox routines—like Virechana (therapeutic purging)—which regulate bile, reset digestive rhythm, and assist metabolic balance. With these herbal and procedural supports, the gut lining becomes resilient, inflammation reduces, and nutrient processing improves.\n\nH2: Everyday Habits for Digestive Resilience\nAyurvedic wisdom emphasizes lifestyle alignment for sustainable gut health:\nDiet & Hydration:\nEat freshly cooked meals—like porridge, soups, steamed veggies—with digestive spices (turmeric, cumin, fennel). Avoid cold, processed, oily, or fried foods. Sip warm water or herbal teas between meals to soothe digestion.\nMindful Eating Habits:\nChew thoroughly, eat in calm settings, maintain consistent meal times, and avoid late-night eating to nurture Agni.\nMovement & Stress Relief:\nGentle movement—post-meal walks and yoga poses like Trikonasana or Kapotasana—stimulate digestion. Stress-relief techniques such as pranayama, Abhyanga (self-massage), and meditation calm the mind-gut axis.\nThese consistent, simple routines help maintain digestive warmth, reduce Ama buildup, and support a healthy metabolism.\n\nRestore Digestive Harmony with Ayurveda\nPersistent indigestion and poor metabolism aren't just discomforts—they're signals your body needs compassionate care. At BookMyAyurveda.com, our certified practitioners provide personalized telehealth consultations that integrate herbal formulas, therapeutic routines, and mindful habits to reignite your digestive fire, cleanse impurities, and sustain gut balance—without relying on pills.\nTake the step toward renewed energy, healthy digestion, and lasting vitality.\nBook your session today and experience Ayurvedic transformation from within.`,
    image: '/Sub Category/Digestive & Gut Health/Indigestion  Poor Metabolism.jpg',
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default IndigestionPoorMetabolism;
