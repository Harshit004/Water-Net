import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const IBS = () => {
  const suggestedProducts = [
    {
      id: 'triphala',
      name: 'Triphala (Amalaki, Haritaki, Bibhitaki)',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/triphala-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'isabgol',
      name: 'Isabgol (Psyllium Husk)',
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/2/YO/UL/GL/1179246/psyllium-husk-500x500.jpg',
      price: '₹199 / 100g',
    },
    {
      id: 'ajwain',
      name: 'Ajwain (Carom Seeds)',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ajwain-benefits-1.jpg',
      price: '₹199 / 100g',
    },
    {
      id: 'licorice',
      name: 'Licorice Root (Yashtimadhu)',
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/7/IE/GL/GL/1517266/licorice-root-500x500.jpg',
      price: '₹249 / 100g',
    },
  ];

  const subcategoryData = {
    subcategoryTitle: "Irritable Bowel Syndrome (IBS)",
    categoryTitle: "Digestive & Gut Health",
    categoryHref: "/consultations/digestive-gut-health",
    description: `Title: When the Gut Feels Unpredictable — Find Gentle Relief from IBS\n\nThat uneasy gut feeling doesn't have to be your every day.\nIBS—characterized by alternating diarrhea, constipation, cramping, and bloating—affects millions globally yet is often minimized or misunderstood. At BookMyAyurveda.com, our international telehealth consultations blend centuries-old Asian healing wisdom with modern lifestyle understanding to offer drug-free, long-term relief. Through customized herbs, dietary adjustments, and supportive routines, we help bring gentle balance to your gut—naturally and sustainably.\n\nH1: Irritable Bowel Syndrome Through the Ayurvedic Lens\nIBS is a functional gastrointestinal disorder marked by abdominal pain linked to bowel habit changes. In conventional medicine, it's often attributed to stress, gut-brain axis dysfunction, and dietary triggers.\nAyurveda, however, views IBS as a disturbance in Vata dosha, sometimes mixed with Pitta or Kapha, affecting intestinal motility and secretion. Vata imbalance, often stemming from stress, poor diet, or erratic lifestyle, disrupts Apana Vata (responsible for elimination), causing alternating stool patterns, cramping, and irregular digestion. When Pitta is involved, symptoms may include acidity, burning, or mild inflammation. Kapha involvement can produce mucus and sluggish digestion. IBS reflects foundational imbalance in gut rhythm and digestive fire (Agni), resulting in poor nutrient breakdown and toxin accumulation (Ama).\nCommon IBS Symptoms:\n- Abdominal cramping that eases after stool\n- Alternating diarrhea and constipation\n- Excessive bloating and gas\n- Mucus in stool without infection\n- Urgency, incomplete elimination, fatigue\nPersistent IBS can significantly disrupt daily life and mental well-being due to its unpredictable nature.\n\nH2: How Ayurveda Harmonizes the Gut Rhythm\nAyurvedic treatment targets the root—balancing Vata (and any Pitta/Kapha components), improving Agni, and relieving intestinal irregularities without reliance on harsh medications.\nHerbs such as Triphala, Isabgol (psyllium), Ajwain (carom seeds), and Cumin support smooth bowel transit, soothe cramps, and restore rhythm. When acidity is involved, healing agents like Licorice, Guduchi, and Aloe Vera are added to soothe inflammation and balance Pitta. In cases with heaviness, Trikatu (ginger-black pepper–pippali blend) improves digestive strength. These herbs are combined in tailored formulas to match your Prakriti and symptom profile.\nIn more severe or chronic IBS, Panchakarma therapies like oil enemas (Basti), digestive purgation (Virechana), and nasya (nasal cleansing) are employed to remove Ama, rebalance doshas, and reset locations prone to IBS activity.\nAyurveda emphasizes rebuilding the intestinal lining and calming hyperactive gut reflexes, providing deep healing without the dependency seen with conventional symptom-based medications.\n\nH2: Daily Habits to Support IBS Healing\nAyurveda places equal importance on daily routines, dietary patterns, and lifestyle support as it does on herbal therapy:\nMindful Eating & Diet: Eat warm, simple meals—like lentil soup, porridge, steamed vegetables—using gut-friendly spices such as ginger, cumin, and coriander. Avoid cold drinks, fried or processed foods, high-FODMAP items, and raw veggies that aggravate Vata and increase gas.\nGentle Movement & Stress Relief: Regular movement—walking, restorative yoga poses (e.g., Vajrasana, Pavanmuktasana)—support gut motility. Daily stress-management techniques such as abdominal massage, shitali pranayama, walking in nature, and mindfulness meditation help calm the gut-brain axis, key for IBS symptom improvement.\nRoutine & Rest: Consistency in sleep-wake cycles, meal times, and bathroom habits are essential. Ayurvedic guides encourage setting a bowel time after meals and responding to signals quickly, which helps regulate Apana Vata and digestive flow.\nHydration & Rejuvenation: Sip warm herbal teas throughout the day, especially after meals. Gentle rejuvenation therapy, like warm oil massage (Abhyanga), calms the nervous system, balances Vata, and supports gut healing.\nThese supportive habits enhance herbal treatments, reinforcing healing, ease, and greater IBS freedom.\n\n🌿 Gentle Harmony — Ayurvedic Support for IBS Recovery\nIBS isn't just a troublesome gut condition—it's a sign your digestive and nervous systems need compassionate care. At BookMyAyurveda.com, our experienced global practitioners offer personalized, telehealth consultations that deeply address IBS triggers. Using traditional herbs, patient-specific routines, and healing lifestyle changes, we help you restore gut resilience—not just mask symptoms.\nStep into a life of digestive predictability and calm with a tailored Ayurvedic plan.\nBook your healing session today to experience balanced digestion and renewed well-being, naturally.`,
    image: '/Sub Category/Digestive & Gut Health/Irritable Bowel Syndrome (IBS).jpg',
    suggestedProducts,
    bannerContent: {
      title: 'Irritable Bowel Syndrome (IBS)',
      breadcrumb: 'Digestive & Gut Health',
      breadcrumbHref: '/consultations/digestive-gut-health',
    },
    meta: {
      title: 'Ayurvedic IBS Solutions | BookMyAyurveda',
      description: 'Find gentle relief from IBS naturally with Ayurveda. Personalized herbal care, lifestyle tips, and expert consultations for digestive health.',
      keywords: 'Ayurveda, IBS, digestive health, Vata, Pitta, Kapha, Triphala, Isabgol, Ajwain',
    },
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default IBS;
