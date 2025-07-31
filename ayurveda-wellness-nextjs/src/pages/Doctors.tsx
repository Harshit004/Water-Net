
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, MapPin, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  location: string;
  qualifications: string[];
  languages: string[];
  consultationFee: number;
  image: string;
  description: string;
}

const doctorsData: Doctor[] = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialization: "Panchakarma Specialist",
    experience: 15,
    rating: 4.9,
    location: "Delhi",
    qualifications: ["BAMS", "MD (Ayurveda)", "PhD"],
    languages: ["Hindi", "English", "Sanskrit"],
    consultationFee: 1500,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    description: "Specialized in traditional Panchakarma therapies with over 15 years of experience in detoxification and rejuvenation treatments."
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    specialization: "Digestive Health",
    experience: 12,
    rating: 4.8,
    location: "Mumbai",
    qualifications: ["BAMS", "MD (Kayachikitsa)"],
    languages: ["Hindi", "English", "Marathi"],
    consultationFee: 1200,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    description: "Expert in treating digestive disorders, IBS, and metabolic conditions using Ayurvedic principles and herbal medicines."
  },
  {
    id: 3,
    name: "Dr. Meera Patel",
    specialization: "Women's Health",
    experience: 18,
    rating: 4.9,
    location: "Bangalore",
    qualifications: ["BAMS", "MD (Prasuti Tantra)", "Fellowship in Gynecology"],
    languages: ["Hindi", "English", "Gujarati", "Kannada"],
    consultationFee: 1800,
    image: "https://images.unsplash.com/photo-1594824388853-d0365d17c82a?w=400&h=400&fit=crop&crop=face",
    description: "Specializes in women's health, fertility, and hormonal balance with a holistic approach to PCOS, menstrual disorders."
  },
  {
    id: 4,
    name: "Dr. Arjun Singh",
    specialization: "Joint & Bone Health",
    experience: 10,
    rating: 4.7,
    location: "Pune",
    qualifications: ["BAMS", "MD (Shalya Tantra)"],
    languages: ["Hindi", "English", "Punjabi"],
    consultationFee: 1000,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    description: "Expert in treating arthritis, joint pain, and bone-related disorders using traditional Ayurvedic therapies and medicines."
  },
  {
    id: 5,
    name: "Dr. Lakshmi Nair",
    specialization: "Mental Health & Stress",
    experience: 14,
    rating: 4.8,
    location: "Kerala",
    qualifications: ["BAMS", "MD (Manas Roga)", "Diploma in Yoga"],
    languages: ["Hindi", "English", "Malayalam", "Tamil"],
    consultationFee: 1300,
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face",
    description: "Specializes in mental health, stress management, and anxiety disorders through Ayurvedic treatments and meditation."
  },
  {
    id: 6,
    name: "Dr. Vikram Gupta",
    specialization: "Skin & Hair Care",
    experience: 8,
    rating: 4.6,
    location: "Jaipur",
    qualifications: ["BAMS", "MD (Tvak Roga)"],
    languages: ["Hindi", "English", "Rajasthani"],
    consultationFee: 900,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
    description: "Expert in treating skin conditions, hair loss, and cosmetic concerns using natural Ayurvedic remedies and therapies."
  }
];

const Doctors = () => {
  const [doctors, setDoctors] = useState<Doctor[]>(doctorsData);
  const [filterSpecialization, setFilterSpecialization] = useState<string>('all');
  const [filterLocation, setFilterLocation] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctorId: '',
    preferredDate: '',
    message: ''
  });
  const { toast } = useToast();

  // Get unique specializations and locations for filters
  const specializations = [...new Set(doctorsData.map(doc => doc.specialization))];
  const locations = [...new Set(doctorsData.map(doc => doc.location))];

  // Filter doctors based on selected filters and search term
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSpecialization = filterSpecialization === 'all' || doctor.specialization === filterSpecialization;
    const matchesLocation = filterLocation === 'all' || doctor.location === filterLocation;
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSpecialization && matchesLocation && matchesSearch;
  });

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Booked!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    setFormData({ name: '', email: '', phone: '', doctorId: '', preferredDate: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-evergreen to-deep-bottle-green text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Meet Our Expert Doctors</h1>
          <p className="text-xl text-medium-spring max-w-3xl mx-auto">
            Consult with our certified Ayurvedic practitioners who combine ancient wisdom with modern expertise
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <Input
              placeholder="Search doctors by name or specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
            <div className="flex gap-4">
              <Select value={filterSpecialization} onValueChange={setFilterSpecialization}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All Specializations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specializations</SelectItem>
                  {specializations.map(spec => (
                    <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={filterLocation} onValueChange={setFilterLocation}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <Card key={doctor.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl text-deep-bottle-green">{doctor.name}</CardTitle>
                  <Badge className="bg-pea-green text-white mx-auto">{doctor.specialization}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">{doctor.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-pea-green" />
                    <span>{doctor.qualifications.join(', ')}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-pea-green" />
                    <span>{doctor.experience} years experience</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-pea-green" />
                    <span>{doctor.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>{doctor.rating} rating</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-lg font-semibold text-deep-bottle-green">
                      ₹{doctor.consultationFee}
                    </span>
                    <Button className="bg-pea-green hover:bg-deep-bottle-green">
                      Book Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Booking Form */}
      <section className="py-16 bg-gradient-to-t from-gray-50/30 to-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-bottle-green mb-4">
              Book Your Consultation
            </h2>
            <p className="text-xl text-deep-bottle-green/80">
              Schedule an appointment with our expert Ayurvedic doctors
            </p>
          </div>
          
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleConsultationSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="doctor">Preferred Doctor</Label>
                    <Select value={formData.doctorId} onValueChange={(value) => setFormData({...formData, doctorId: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctorsData.map(doctor => (
                          <SelectItem key={doctor.id} value={doctor.id.toString()}>
                            {doctor.name} - {doctor.specialization}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message (Optional)</Label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pea-green"
                    placeholder="Describe your health concerns or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-pea-green hover:bg-deep-bottle-green text-white py-3 text-lg">
                  Book Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Doctors;
