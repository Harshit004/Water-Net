import SubcategoryPageTemplate from '@/components/SubcategoryPageTemplate';

const SleepIssuesRestlessness = () => {
  const suggestedProducts = [
    {
      id: 'brahmi',
      name: 'Brahmi Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/brahmi-benefits-1.jpg',
      price: '₹299 / 100g',
    },
    {
      id: 'jatamansi',
      name: 'Jatamansi Capsules',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/jatamansi-benefits-1.jpg',
      price: '₹349 / 100g',
    },
    {
      id: 'chamomile',
      name: 'Chamomile Tea',
      imageUrl: 'https://www.ayurvedum.com/wp-content/uploads/2018/07/chamomile-benefits-1.jpg',
      price: '₹199 / 50g',
    },
  ];

  const subcategoryData = {
    bannerContent: {
      title: 'Sleep Issues & Restlessness',
      breadcrumb: "Children's Wellness",
      breadcrumbHref: '/consultations/childrens-wellness',
    },
    image: "/Sub Category/Children's Wellness/Sleep Issues  Restlessness.jpg",
    description: `Title: Helping Your Child Find Peaceful Sleep

Sleep is essential for a child's growth, development, and well-being. If your child struggles with sleep issues or restlessness, Ayurveda offers gentle, natural solutions to help them find peaceful, restorative sleep.

H1: Ayurvedic Perspective on Sleep in Children
In Ayurveda, sleep issues in children are often related to a Vata imbalance, which can cause a restless mind and difficulty settling down. An overstimulated nervous system, poor routine, and dietary factors can all contribute to sleep problems. Ayurveda focuses on calming Vata and creating a peaceful environment to promote healthy sleep.

Common Symptoms:
- Difficulty falling asleep
- Frequent waking during the night
- Restless sleep or nightmares
- Waking up tired
- Daytime irritability or hyperactivity due to lack of sleep

H2: Ayurvedic Healing Approach
- Calming herbs like Ashwagandha, Brahmi, and Jatamansi to soothe the nervous system
- A warm, Vata-pacifying diet
- A consistent and calming bedtime routine
- Gentle oil massage (Abhyanga) before bed
- Avoiding stimulating activities before sleep

H2: Benefits of Ayurvedic Care
- Improved ability to fall asleep and stay asleep
- More restful and restorative sleep
- A calmer, more balanced nervous system
- Improved mood, focus, and behavior during the day
- A natural approach to healthy sleep habits

🌿 Sweet Dreams for Your Little One
Peaceful sleep is a gift you can give your child. At BookMyAyurveda.com, our practitioners offer personalized Ayurvedic consultations and treatments to help your child overcome sleep issues and enjoy the benefits of deep, restorative rest. Book your session today and help your child find their way to sweet dreams.`,
    suggestedProducts,
  };

  return <SubcategoryPageTemplate {...subcategoryData} />;
};

export default SleepIssuesRestlessness;
