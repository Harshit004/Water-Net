import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const BloatingGas = () => {
  const suggestedProducts = [
    {
      id: 'ajwain',
      name: 'Ajwain (Carom Seeds)',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ajwain-benefits-1.jpg',
      price: '₹199 / 100g',
    },
    {
      id: 'fennel',
      name: 'Fennel Seeds',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/fennel-benefits-1.jpg',
      price: '₹149 / 100g',
    },
    {
      id: 'cumin',
      name: 'Cumin Seeds',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/cumin-benefits-1.jpg',
      price: '₹149 / 100g',
    },
    {
      id: 'herbal-tea',
      name: 'Ayurvedic Digestive Herbal Tea',
      imageUrl: 'https://www.jiva.com/sites/default/files/styles/product_image/public/2021-01/Herbal%20Digestive%20Churna.png',
      price: '₹299 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: "Bloating & Gas",
      breadcrumb: "Digestive & Gut Health",
      breadcrumbHref: "/consultations/digestive-gut-health",
    },
    description: `Title: When the Belly Feels Heavy — Unlock Soothing Relief from Bloating & Gas\n\nThat uncomfortable tightness around your waist doesn't have to linger.\nGas, bloating, or abdominal fullness may seem trivial, but for many in North America and worldwide, it disrupts daily comfort and confidence. At BookMyAyurveda.com, our international Ayurvedic consultations blend ancient Asian healing wisdom with modern lifestyle strategies to address bloating and gas deeply and naturally—without relying on quick fixes. Through personalized holistic care, we help you rediscover digestive ease and daily comfort.\nStart your journey to a lighter, more vibrant you—naturally and sustainably.\n\nH1: Bloating & Gas — The Ayurvedic Viewpoint\nBloating and flatulence result when excess gas accumulates in the gastrointestinal tract. Modern studies link this to high-FODMAP diets, gut microbiome imbalances, and stress-related digestion issues—making it a top concern in functional digestive health. Ayurveda interprets bloating as a disorder of Vata dosha (air/ether element) combined with weakened digestive fire (Agni), allowing undigested food to ferment and form gas (known as Ama) in the gut.\nEveryday habits—eating cold, raw, or fried foods, drinking cold beverages, chewing gum, or eating on the go—can aggravate Vata and disturb digestion fluctuations, especially in females, and sedentary lifestyles further contribute to uncomfortable gas and bloat.\n\nH2: Gentle Ayurvedic Healing for Bloating & Gas\nAyurvedic care addresses bloating by calming Vata, reigniting Agni, and supporting smooth digestion—without harsh remedies. The approach may begin with warm oil massages (Abhyanga) to soothe Vata and encourage gas release, followed by steam therapies to relax the abdominal muscles and foster digestion. Herbal paste massages and steam baths further soothe digestive tension and support internal balance.\nWhen necessary, gentle cleansing methods—like herbal oil or decoction enemas (Basti)—can be used to evacuate excess gas and restore natural intestinal flow. At the same time, soothing herbs such as ajwain (carom seeds), fennel, cumin, ginger, turmeric, and peppermint are integrated into daily routines. These spices reduce inflammation, support digestion, and calm intestinal spasms.\nUnlike generic antacids, these Ayurvedic protocols gently address the underlying causes—restoring digestive harmony and relieving bloating and gas from the inside out.\n\nH2: Practical Daily Habits to Maintain Comfort\nBeyond therapies, Ayurveda emphasizes sustainable daily habits tailored to modern routines. Warm beverages like ginger tea, fennel-infused water, or peppermint tea hydrate the digestive system and relax gut muscles. Simple meal-time changes—like avoiding excess fluids during meals and eating slowly in a calm space—support optimal digestion.\nHome-made digestive tonics—such as hot water with cumin and fennel, or turmeric-laced warm milk—offer anti-inflammatory comfort and promote smooth digestion. Chewing a betel leaf post-meal (paan patta) is another traditional method to stimulate saliva and reduce gas.\nGentle yoga poses like Paschimottanasana, Balasana, and Trikonasana, along with deep, diaphragmatic breathing, facilitate the release of trapped gas and soothe digestive muscles. These practices ease bloating, restore energy flow, and integrate body and mind health—all without rigid routines.\n\n🌿 Find Ease Within — Ayurvedic Care for Bloating & Gas\nBloating and gas signal that your digestion and energy need nurturing. At BookMyAyurveda.com, our certified practitioners offer telehealth consultations tailored to your body constitution (Prakriti) and lifestyle—combining healing herbs, practical dietary strategies, and gentle daily practices to soothe digestion naturally.\nWhether it's mild discomfort or chronic bloat, we guide you toward lasting digestive harmony without dependency on medications.\nBook your session today to experience the relief of light, energized living—naturally.`,
    image: '/Sub Category/Digestive & Gut Health/Bloating & Gas.jpg',
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default BloatingGas;
