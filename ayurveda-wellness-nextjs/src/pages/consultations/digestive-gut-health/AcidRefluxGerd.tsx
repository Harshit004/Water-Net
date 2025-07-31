import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const AcidRefluxGerd = () => {
  // Suggested remedies extracted from the document's herbal/treatment section
  const suggestedProducts = [
    {
      id: 'amla',
      name: 'Amla (Indian Gooseberry)',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/amla-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'licorice',
      name: 'Licorice Root (Yashtimadhu)',
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/7/IE/GL/GL/1517266/licorice-root-500x500.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'guduchi',
      name: 'Guduchi (Giloy)',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/guduchi-benefits-1.jpg',
      price: '₹349 / 100g',
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
      title: 'Acid Reflux / GERD',
      breadcrumb: 'Digestive & Gut Health',
      breadcrumbHref: '/consultations/digestive-gut-health',
    },
    image: '/Sub Category/Digestive & Gut Health/Acid Reflux  GERD.jpg',
    // The description below is the full, logically structured content from the Word doc for this subcategory
    description: `Title: When Heartburn Isn't Just a Burp — Explore Root Healing Opportunities\n\nIt starts as a little burn... and becomes your daily battle.\nWhat many dismiss as simple heartburn could actually be Gastroesophageal Reflux Disease (GERD) — a growing concern in the modern world, especially in North America. At BookMyAyurveda.com, we offer secure, HIPAA-compliant Ayurvedic telehealth consultations tailored for international users in the U.S., Canada, UK, and beyond. Grounded in ancient Asian wisdom, our programs are personalized, natural, and rooted in sustainable healing — designed to treat the root cause of reflux, not just suppress symptoms.\n\nH1: Understanding Acid Reflux & GERD from an Ayurvedic Perspective\nAcid reflux occurs when stomach acid flows back into the esophagus, causing a burning sensation in the chest or throat. If it becomes chronic, it is classified as GERD, affecting up to 30% of adults in the West. Western medicine typically relies on proton pump inhibitors (PPIs) and antacids, which can provide temporary relief but may lead to long-term side effects and dependency.\nIn Ayurveda, GERD is primarily seen as an imbalance of the Pitta dosha, responsible for heat and metabolism in the body. When Pitta becomes excessive — due to factors like spicy food, alcohol, irregular eating patterns, and stress — it leads to an overproduction of stomach acid, known as Amla Pitta in classical texts. This condition weakens the digestive fire (Agni) and creates toxins (Ama) that further disturb gut function.\nCommon Symptoms of Acid Reflux / GERD:\n- Burning sensation in the chest or throat\n- Sour taste or regurgitation after eating\n- Chronic cough or sore throat not related to infection\n- Bloating or heaviness in the upper abdomen\n\nIf ignored, these symptoms can worsen and lead to complications such as esophageal inflammation or ulcers. Ayurveda addresses this not by neutralizing acid, but by restoring the digestive ecosystem — calming excess Pitta, strengthening Agni, and healing the gut lining.\n\nH2: How Ayurveda Heals Reflux — Rooted, Personalized & Gentle\nThe Ayurvedic approach is individualized. Instead of suppressing acid, it focuses on strengthening digestion, balancing lifestyle, and cooling internal heat. This process begins by analyzing the patient's Prakriti (constitution) and Vikriti (current imbalance). From there, a practitioner creates a personalized plan that incorporates herbal medicine, diet, routine adjustments, and stress-relieving techniques.\nCooling herbs like Amla, Licorice root, and Guduchi are commonly used to soothe the stomach lining, reduce acid levels, and promote tissue repair. These herbs also support liver function, which plays a crucial role in detoxification and digestive strength.\nAdditionally, dietary guidance includes Pitta-pacifying meals that are warm, mildly spiced, and easy to digest — excluding triggers like fried food, caffeine, raw onions, tomatoes, and processed snacks. Mindful eating practices, such as eating slowly and avoiding overeating or late-night meals, are emphasized to bring rhythm and restfulness back into digestion.\nUnlike quick relief methods, Ayurvedic care is gradual yet lasting, providing relief without dependency, and building long-term resilience within your gut.\n\nH2: Lifestyle & Mind-Body Integration in GERD Recovery\nAyurveda doesn't separate digestion from the rest of the body. Stress, poor sleep, and emotional imbalances all contribute to GERD symptoms. This is why your Ayurvedic consultation also includes mind-body techniques designed to restore harmony in the nervous system — which directly impacts acid production and gut motility.\nSimple daily rituals such as early rising, gentle morning yoga, and 10 minutes of alternate nostril breathing (Nadi Shodhana) can significantly reduce stress-induced flare-ups. Meditation practices help calm the mind, cool the body, and lower cortisol levels — indirectly reducing Pitta aggravation.\nIn addition, Ayurvedic detox therapies like Virechana (therapeutic purgation) may be recommended in chronic or severe cases. This gentle treatment eliminates accumulated Pitta toxins and helps reset digestion from the root.\nThese lifestyle enhancements are not rigid rules but flexible tools — crafted to support your body's natural ability to heal, repair, and regain control.\n\nFind Lasting Relief from Acid Reflux — The Ayurvedic Way\nAcid reflux and GERD are more than just digestive troubles — they are signs that your system needs balance and care. At BookMyAyurveda.com, we provide global access to expert Ayurvedic consultations that help you move beyond symptom control and toward true healing. Using personalized herbs, gut-friendly nutrition, and lifestyle alignment, our programs are designed for safe, long-term results — without the side effects of conventional medications.\nExperience natural freedom from reflux — restore your gut, and reclaim your life.\n🌐 Book your online consultation today.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default AcidRefluxGerd;
