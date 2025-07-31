import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const LeakyGutSyndrome = () => {
  const suggestedProducts = [
    {
      id: 'bilva',
      name: 'Bilva (Bael)',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/bael-benefits-1.jpg',
      price: '₹249 / 100g',
    },
    {
      id: 'aloe-vera',
      name: 'Aloe Vera Juice',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/aloe-vera-benefits-1.jpg',
      price: '₹249 / 500ml',
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
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Leaky Gut Syndrome',
      breadcrumb: 'Digestive & Gut Health',
      breadcrumbHref: '/consultations/digestive-gut-health',
    },
    image: '/Sub Category/Digestive & Gut Health/Leaky Gut Syndrome.jpg',
    description: `Title: When Your Gut Barrier Feels Fragile — Discover Real Support for Leaky Gut\n\nThat lingering fatigue and discomfort after meals don't have to last forever.\nLeaky Gut Syndrome—or increased intestinal permeability—is a growing concern worldwide. It occurs when the intestinal lining becomes overly permeable, allowing toxins, undigested food particles, and bacteria to pass into the bloodstream. This can trigger inflammation throughout the body. At BookMyAyurveda.com, our certified practitioners combine centuries-old Asian healing wisdom with modern telehealth methods to offer personalized Ayurvedic strategies that support gut integrity—and lifelong health.\n\nH1: Leaky Gut Syndrome Through the Ayurvedic Lens\nLeaky Gut isn't yet a mainstream medical diagnosis in many countries, but symptoms like chronic bloating, food sensitivities, fatigue, brain fog, skin issues, and autoimmune concerns clearly point to an unstable gut lining. Ayurveda recognizes this as a weakened digestive fire (Agni) and the presence of Ama—undigested toxins—that disrupt the body's natural rhythm.\nFrom an Ayurvedic perspective, Leaky Gut often stems from weakened Agnimandya, where partially digested particles overwhelm the gut mucosa. This uncontrolled inflammation weakens the biological barrier and triggers systemic imbalance. Over time, Vata dosha contributes to dryness and instability, while Pitta dosha may aggravate heat and inflammation, further compromising integrity.\nCommon Symptoms Associated with Leaky Gut:\n- Intestinal discomfort—bloating, cramps, or indigestion\n- Food sensitivities or intolerances\n- Chronic fatigue and brain fog\n- Skin conditions like eczema or adult acne\n- Joint pain or inflammation\n- Seasonal allergies or recurring infections\nPresence of two or more of these signs often indicates deeper gut-barrier challenges.\n\nH2: Ayurvedic Strategies to Support Gut Integrity\nAyurveda's approach to Leaky Gut is gentle, restorative, and deeply nourishing, beginning with the goal to calm Ama and rebuild Agni. A cornerstone is Bilva (Bael), Aloe Vera, and Licorice root, herbs that soothe inflammation, support mucosal repair, and enhance gut barrier function. These are often combined with gentle anti-inflammatory spices like Curcumin and Guduchi to support systemic detoxification and healing.\nDiet is central: warm, nourishing foods like ginger carrot soup, mung bean broth, and barley kitchari are easy to digest and rich in nutrients. Probiotic-rich foods such as yogurt, kefir, or fermented vegetables help rebuild healthy microbiome diversity. Seasonal rejuvenation therapies like Shamana Chikitsa—herbal decoctions and medicated ghee—can further support barrier repair.\nFor chronic or severe cases, traditional Ayurvedic whole-body therapies like Panchakarma (including oil enemas and herbal bathing) may be included to detoxify deeper tissues and strengthen organ systems.\nThe comprehensive approach works to rebuild the gut lining, calm the immune response, and restore your body's natural resilience.\n\nH2: Daily Practices to Reinforce Gut Strength\nEveryday routines play a vital role in supporting a healthy gut lining. Hydration with warm lemon water or ginger tea between meals aids digestion and soothes inflammation. Avoiding processed foods, refined sugars, and cold, raw substances prevents further barrier stress.\nMindful eating—chewing slowly, not overeating, and maintaining regular meal intervals—supports consistent Agni. Gentle movement, such as post-meal walks, restorative yoga, or stretching, encourages circulation to digestive organs and grounds Vata.\nStress directly impacts gut permeability, so integrating daily practices like deep breathing (Nadi Shodhana), meditation, short screen-time breaks, and calming bedtime routines supports a peaceful gut environment.\nMorning self-massage with warm oil (self-Abhyanga) and a short walk in sunlight encourage circulation through the gut lining and nourish the intestinal tissues. These consistent practices reinforce the Ayurvedic treatments, creating lasting healing momentum.\n\n🌿 Rebuild from Within — Ayurvedic Support for Leaky Gut\nLeaky Gut is a signal that your body needs foundational support—starting with healing your digestive fire, repairing the gut lining, and easing inflammation. At BookMyAyurveda.com, our global telehealth platform offers personalized guidance, combining gentle herbs, nourishing meals, targeted therapies, and supportive routines for sustainable gut repair.\nExperience renewed vitality, balanced digestion, and stronger immune function—without medication dependency.\nBook your telehealth consultation today and begin your journey toward lasting, whole-body harmony.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default LeakyGutSyndrome;
