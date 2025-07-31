import { useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '@/components/consultation/ConsultationForm';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  image: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Ayurvedic Herbs for Better Digestion",
    excerpt: "Discover the power of traditional Ayurvedic herbs that can naturally improve your digestive health and boost your overall wellness.",
    author: "Dr. Priya Sharma",
    date: "2024-06-01",
    readTime: 5,
    category: "Digestive Health",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=400&fit=crop",
    tags: ["Herbs", "Digestion", "Natural Remedies"]
  },
  {
    id: 2,
    title: "Understanding Your Dosha: A Complete Guide",
    excerpt: "Learn about the three doshas in Ayurveda and how understanding your constitution can help you achieve better health and balance.",
    author: "Dr. Rajesh Kumar",
    date: "2024-05-28",
    readTime: 8,
    category: "Ayurvedic Principles",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop",
    tags: ["Dosha", "Constitution", "Balance"]
  },
  {
    id: 3,
    title: "Ayurvedic Skincare: Natural Beauty Secrets",
    excerpt: "Unlock the secrets of radiant skin with time-tested Ayurvedic skincare practices and natural ingredients.",
    author: "Dr. Meera Patel",
    date: "2024-05-25",
    readTime: 6,
    category: "Beauty & Wellness",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=400&fit=crop",
    tags: ["Skincare", "Beauty", "Natural"]
  },
  {
    id: 4,
    title: "Managing Stress with Ayurvedic Practices",
    excerpt: "Explore ancient Ayurvedic techniques for stress management including meditation, breathing exercises, and herbal remedies.",
    author: "Dr. Lakshmi Nair",
    date: "2024-05-22",
    readTime: 7,
    category: "Mental Health",
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=800&h=400&fit=crop",
    tags: ["Stress", "Meditation", "Mental Health"]
  },
  {
    id: 5,
    title: "Seasonal Eating According to Ayurveda",
    excerpt: "Learn how to eat according to the seasons to maintain optimal health and harmony with nature's rhythms.",
    author: "Dr. Arjun Singh",
    date: "2024-05-20",
    readTime: 6,
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop",
    tags: ["Nutrition", "Seasonal", "Diet"]
  },
  {
    id: 6,
    title: "Yoga and Ayurveda: The Perfect Partnership",
    excerpt: "Discover how yoga and Ayurveda work together to create a holistic approach to health and spiritual well-being.",
    author: "Dr. Vikram Gupta",
    date: "2024-05-18",
    readTime: 9,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop",
    tags: ["Yoga", "Lifestyle", "Holistic"]
  }
];

const categories = [...new Set(blogPosts.map(post => post.category))];

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 6;

  // Filter posts based on selected categories
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(post.category);
    return matchesCategory;
  });

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-evergreen to-deep-bottle-green text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Ayurveda Blog</h1>
          <p className="text-xl text-medium-spring max-w-3xl mx-auto">
            Discover ancient wisdom and modern insights about Ayurvedic healing, wellness, and natural living
          </p>
        </div>
      </section>

      {/* Category Filter Dropdown */}
      <div className="flex flex-col items-start lg:ml-[3.61%] px-4 lg:px-0 mt-8">
        <div className="relative mb-6">
          <button
            className="bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm flex items-center gap-2 hover:bg-gray-50 focus:outline-none"
            onClick={() => setDropdownOpen((open) => !open)}
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
          >
            <span className="font-medium text-deep-bottle-green">Filter by Category</span>
            <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {dropdownOpen && (
            <div ref={dropdownRef} className="absolute z-20 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-4 animate-fade-in">
              <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
                {categories.map(category => (
                  <label key={category} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => {
                        setSelectedCategories(prev =>
                          prev.includes(category)
                            ? prev.filter(c => c !== category)
                            : [...prev, category]
                        );
                      }}
                      className="accent-pea-green h-4 w-4 rounded border-gray-300 focus:ring-pea-green"
                    />
                    <span className="text-deep-bottle-green">{category}</span>
                  </label>
                ))}
              </div>
              <button
                className="mt-4 w-full bg-pea-green text-white rounded-lg py-2 font-semibold hover:bg-deep-bottle-green transition"
                onClick={() => setDropdownOpen(false)}
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Blog Content + Sticky Form */}
      <div className="flex flex-col lg:flex-row w-full gap-8">
        {/* Left: Blog Content */}
        <div className="lg:ml-[3.61%] px-4 lg:px-0 flex-1">
          {/* Featured Post */}
          {currentPosts.length > 0 && (
            <section className="py-12">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-deep-bottle-green mb-8 text-center">Featured Article</h2>
                <Card className="max-w-4xl mx-auto hover:shadow-lg transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={currentPosts[0].image}
                        alt={currentPosts[0].title}
                        className="w-full h-64 md:h-full object-cover rounded-l-lg"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <Badge className="bg-pea-green text-white mb-4">{currentPosts[0].category}</Badge>
                      <h3 className="text-2xl font-bold text-deep-bottle-green mb-4">{currentPosts[0].title}</h3>
                      <p className="text-gray-600 mb-6">{currentPosts[0].excerpt}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{currentPosts[0].author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(currentPosts[0].date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{currentPosts[0].readTime} min read</span>
                        </div>
                      </div>
                      
                      <Button className="bg-pea-green hover:bg-deep-bottle-green">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </section>
          )}

          {/* Blog Posts Grid */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-deep-bottle-green mb-8 text-center">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.slice(1).map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-4 left-4 bg-pea-green text-white">
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-deep-bottle-green mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime} min</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="w-full">
                        Read Article
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
        {/* Right: Consultation Form */}
        <div 
          className="hidden lg:block lg:sticky lg:top-32 h-fit self-start"
          style={{ width: '350px', marginRight: '3.61%', marginLeft: 'auto', alignSelf: 'flex-start' }}
        >
          <ConsultationForm />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
