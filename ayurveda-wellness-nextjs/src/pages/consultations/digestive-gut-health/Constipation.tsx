import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const Constipation = () => {
  const suggestedProducts = [
    {
      id: 'triphala',
      name: 'Triphala (Amalaki, Haritaki, Bibhitaki)',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/triphala-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'psyllium',
      name: 'Psyllium Husk',
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/2/YO/UL/GL/1179246/psyllium-husk-500x500.jpg',
      price: '₹199 / 100g',
    },
    {
      id: 'ghee',
      name: 'Ayurvedic Ghee',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ghee-benefits-1.jpg',
      price: '₹399 / 200ml',
    },
    {
      id: 'aloe-vera',
      name: 'Aloe Vera Juice',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/aloe-vera-benefits-1.jpg',
      price: '₹249 / 500ml',
    },
  ];

  const subcategoryData = {
    subcategoryTitle: 'Constipation', // Retained for prop validation
    categoryTitle: 'Digestive & Gut Health', // Retained for prop validation
    categoryHref: '/consultations/digestive-gut-health', // Retained for prop validation
    bannerContent: {
      title: 'Constipation',
      breadcrumb: 'Digestive & Gut Health',
      breadcrumbHref: '/consultations/digestive-gut-health',
    },
    image: '/Sub Category/Digestive & Gut Health/Constipation.jpg',
    description: `Title: When the Gut Holds On — Discover Gentle Healing Pathways\n\nIt starts as a little burn... and becomes your daily battle.\nConstipation—characterized by fewer than three bowel movements per week—frequently becomes a silent burden in North America and worldwide, leading to discomfort, bloating, fatigue, or stress. At BookMyAyurveda.com, our global Ayurvedic telehealth platform blends authentic Asian traditional wisdom with modern lifestyle insights, guiding you toward drug-free, long-lasting relief. With personalized herbs, tailored dietary practices, and gentle routines, we support your gut in restoring its natural flow—softly, sustainably, and safely.\n\nH1: Seeing Constipation Through the Ayurvedic Lens\nConstipation occurs when digested food lingers too long in the colon, resulting in dry, hard, or infrequent stools. Conventional medicine points to low fiber intake, dehydration, sedentary lifestyle, medications, and health issues like hypothyroidism.\nAyurveda, however, highlights an imbalance of Vata dosha—the energy of movement and dryness—as the fundamental cause. When Vata becomes aggravated through cold, dry eating habits, irregular schedules, stress, or inactivity, it disrupts the natural flow of Apana Vata, diminishing digestive fire (Agni) and hindering bowel elimination.\nCommon Symptoms of Constipation:\n- Passing hard or pellet-like stool fewer than three times per week\n- Straining\n- Sensation of incomplete evacuation\n- Bloating or mild abdominal discomfort\nUnresolved constipation may lead to complications such as hemorrhoids, fissures, or toxin (ama) buildup.\n\nH2: Holistic Ayurvedic Restoration for Gentle Elimination\nAyurvedic treatment for constipation centers on restoring balance by calming aggravated Vata, rekindling Agni, and re-establishing regularity—all without harsh laxatives or quick fixes. A cornerstone is Triphala, a blend of Amalaki, Haritaki, and Bibhitaki—clinically shown to gently support stool frequency, consistency, and reduce colon inflammation.\nWhen used alongside digestive aids like psyllium husk or aloe vera juice, the results are deeply supportive for dry, resistant bowel conditions.\nAyurveda also employs internal lubrication—like a spoonful of warm ghee, sesame, or castor oil at night—to soften stools and soothe the colon. In cases of persistent constipation, Basti therapy (an Ayurvedic oil enema) may be recommended; this traditional Panchakarma treatment nourishes and lubricates the colon, restores Vata's downward flow, and fosters lasting bowel rhythm healing.\nThis approach is not merely symptomatic; it deeply nurtures digestion, supports gut lining, and creates sustainable gut balance over time.\n\nH2: Everyday Habits That Support Bowel Wellness\nAyurvedic practitioners recognize that healing constipation requires holistic daily practices tailored to modern lives. Warm fluids—like sipping hot water or herbal teas through the day—serve to maintain hydration and digestive ease. Cooked fiber-rich meals such as oatmeal, soups, and steamed vegetables—paired with a gentle amount of healthy fats like ghee or olive oil—combat dryness and support digestive health.\nGentle movement and specific yoga postures—such as Pawanmuktasana, Matsyendrasana, and Viparita Karani—stimulate intestinal peristalsis and settle Vata, aiding digestion and stress relief. Meanwhile, nurturing routines like mindful eating, regular sleep and meal schedules, abdominal massage in a clockwise direction, and breathing exercises support Apana Vata's natural rhythm. These integrative practices bolster digestion, nourish the nervous system, and align your gut with your life rhythm.\n\n🌿 Restore Gentle Flow — Ayurvedic Constipation Care\nConstipation is more than a temporary inconvenience—it's a sign that your digestion, routine, and nervous system need nurturing. At BookMyAyurveda.com, our experienced, globally certified practitioners offer customized Ayurvedic telehealth consultations. We blend traditional herbs, tailored nutrition, safe therapies, and mindful lifestyle habits to restore soft, regular bowel movements—without harsh medications.\nUncover deeper digestive harmony through a comprehensive healing plan created for your unique needs.\nBook your consultation today and step into a life of ease, vitality, and natural digestive wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default Constipation;
