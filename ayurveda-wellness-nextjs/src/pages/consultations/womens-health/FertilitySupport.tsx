import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const FertilitySupport = () => {
  const suggestedProducts = [
    {
      id: 'shatavari',
      name: 'Shatavari Capsules',
      imageUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
      price: '₹1,499',
    },
    {
      id: 'lodhra',
      name: 'Lodhra Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/lodhra-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'ashoka',
      name: 'Ashoka Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ashoka-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'phala-ghrita',
      name: 'Phala Ghrita (Fertility Ghee)',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/ghrita-benefits-1.jpg',
      price: '₹499 / 100g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Fertility Support',
      breadcrumb: "Women's Health",
      breadcrumbHref: '/consultations/womens-health',
    },
    image: "/Sub Category/Women's Health/Fertility Support.jpg",
    description: `Title: When You're Ready to Conceive — Support Your Fertility the Natural Way\n\nIf you're trying to conceive and feeling frustrated, anxious, or unsure—know this: your body is wise. It may just need deeper alignment through personalized, root-cause fertility support.\n\nH1: Ayurvedic Perspective on Fertility\nFertility is the natural outcome of balance across all levels—body, mind, and reproductive tissues. The ability to conceive is influenced by the strength of Shukra Dhatu (reproductive tissue), the clarity of Agni (digestive fire), the steadiness of Vata, and the purity of Ojas. Healing the system leads to natural readiness for conception through wholeness, flow, and harmony.\n\nCommon Symptoms and Challenges:\n- Irregular or absent ovulation\n- PCOS/PCOD-related infertility\n- Low libido or lack of sexual energy\n- Unexplained infertility\n- Luteal phase imbalance or implantation issues\n- Emotional stress or anxiety surrounding conception\n- Hormonal imbalances affecting reproductive health\n\nH2: Ayurvedic Healing Approach\n- Shatavari, Lodhra, Ashoka, and Guduchi for ovulation regulation\n- Phala Ghrita (fertility ghee) and Putrajeevak for implantation\n- Ashwagandha, Kapikacchu, Gokshura for male fertility support\n- Virechana (purgation) or Basti (herbal enemas) for detox\n- Rejuvenation therapies (Rasayana chikitsa) for tissue nourishment\n- Specialized herbal ghees and medicated milk decoctions\n\nH2: Benefits of Ayurvedic Care\n- Improved ovulation and menstrual regularity\n- Enhanced reproductive tissue health and vitality\n- Better hormonal balance and cycle awareness\n- Increased natural fertility and conception readiness\n- Reduced stress and emotional anxiety around conception\n- Strengthened overall reproductive wellness\n\n🌿 Support Your Fertility Naturally\nFertility challenges are your body's way of asking for deeper balance. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations, herbal protocols, and lifestyle guidance to restore your reproductive health and readiness from the inside out. Book your session today for lasting fertility and wellness.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default FertilitySupport;
