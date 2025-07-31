
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { changeLedger, ChangeEntry } from '@/data/changeLedger';
import { Search, Filter, Calendar, User, FileText, Tag } from 'lucide-react';

const ChangeManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterImpact, setFilterImpact] = useState('all');
  const [sortBy, setSortBy] = useState('timestamp');

  const filteredChanges = changeLedger
    .filter(change => {
      const matchesSearch = change.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          change.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          change.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = filterCategory === 'all' || change.category === filterCategory;
      const matchesImpact = filterImpact === 'all' || change.impact === filterImpact;
      
      return matchesSearch && matchesCategory && matchesImpact;
    })
    .sort((a, b) => {
      if (sortBy === 'timestamp') {
        return b.timestamp.getTime() - a.timestamp.getTime();
      } else if (sortBy === 'impact') {
        const impactOrder = { Low: 1, Medium: 2, High: 3, Critical: 4 };
        return impactOrder[b.impact as keyof typeof impactOrder] - impactOrder[a.impact as keyof typeof impactOrder];
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

  const getImpactColor = (impact: string) => {
    const colors = {
      Low: 'bg-medium-spring text-deep-bottle-green',
      Medium: 'bg-pea-green text-white',
      High: 'bg-deep-bottle-green text-white',
      Critical: 'bg-evergreen text-white'
    };
    return colors[impact as keyof typeof colors] || 'bg-gray-500 text-white';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'UI/UX': 'bg-blue-100 text-blue-800',
      'Performance': 'bg-green-100 text-green-800',
      'Features': 'bg-purple-100 text-purple-800',
      'Bug Fix': 'bg-red-100 text-red-800',
      'Refactor': 'bg-yellow-100 text-yellow-800',
      'Dependencies': 'bg-gray-100 text-gray-800',
      'Accessibility': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6 p-6 bg-gradient-to-br from-medium-spring/5 to-pea-green/5 min-h-screen animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-deep-bottle-green mb-2 text-shimmer">
          Change Management Ledger
        </h1>
        <p className="text-deep-bottle-green/70">
          Comprehensive tracking of all website modifications and improvements
        </p>
      </div>

      {/* Filters and Search */}
      <Card className="hover-scale card-hover-3d">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-deep-bottle-green">
            <Filter className="h-5 w-5 text-pea-green" />
            Filters & Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-pea-green" />
              <Input
                placeholder="Search changes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-pea-green/30 focus:border-pea-green"
              />
            </div>

            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="border-pea-green/30 focus:border-pea-green">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="UI/UX">UI/UX</SelectItem>
                <SelectItem value="Performance">Performance</SelectItem>
                <SelectItem value="Features">Features</SelectItem>
                <SelectItem value="Bug Fix">Bug Fix</SelectItem>
                <SelectItem value="Refactor">Refactor</SelectItem>
                <SelectItem value="Dependencies">Dependencies</SelectItem>
                <SelectItem value="Accessibility">Accessibility</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterImpact} onValueChange={setFilterImpact}>
              <SelectTrigger className="border-pea-green/30 focus:border-pea-green">
                <SelectValue placeholder="Filter by impact" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Impact Levels</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Critical">Critical</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="border-pea-green/30 focus:border-pea-green">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="timestamp">Date (Newest)</SelectItem>
                <SelectItem value="impact">Impact Level</SelectItem>
                <SelectItem value="category">Category</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Changes List */}
      <div className="space-y-4">
        {filteredChanges.map((change, index) => (
          <Card 
            key={change.id} 
            className="card-hover-3d transition-all duration-500 hover-glow animate-slide-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                {/* Main Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start gap-2 mb-3">
                    <h3 className="text-lg font-bold text-deep-bottle-green hover:text-shimmer transition-colors duration-300">
                      {change.title}
                    </h3>
                    <Badge className={getImpactColor(change.impact)}>
                      {change.impact}
                    </Badge>
                    <Badge className={getCategoryColor(change.category)}>
                      {change.category}
                    </Badge>
                    <Badge variant="outline" className="border-pea-green text-pea-green">
                      {change.type}
                    </Badge>
                  </div>

                  <p className="text-deep-bottle-green/80 mb-4 leading-relaxed">
                    {change.description}
                  </p>

                  {/* Before/After - Only show if exists */}
                  {change.beforeAfter && (
                    <div className="bg-medium-spring/10 p-4 rounded-lg mb-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-deep-bottle-green mb-2">Before:</h5>
                          <p className="text-sm text-deep-bottle-green/70">{change.beforeAfter.before}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-deep-bottle-green mb-2">After:</h5>
                          <p className="text-sm text-deep-bottle-green/70">{change.beforeAfter.after}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {change.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs bg-pea-green/10 text-pea-green hover-scale"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Files */}
                  <div className="mb-4">
                    <h5 className="font-semibold text-deep-bottle-green mb-2 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-pea-green" />
                      Files Modified ({change.files.length})
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {change.files.map((file, fileIndex) => (
                        <Badge 
                          key={fileIndex} 
                          variant="outline" 
                          className="text-xs border-deep-bottle-green/30 text-deep-bottle-green hover-float"
                        >
                          {file}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metadata */}
                <div className="lg:w-64 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-deep-bottle-green/70">
                    <Calendar className="h-4 w-4 text-pea-green" />
                    {change.timestamp.toLocaleDateString()} at {change.timestamp.toLocaleTimeString()}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-deep-bottle-green/70">
                    <User className="h-4 w-4 text-pea-green" />
                    {change.author}
                  </div>
                  <Badge className="btn-gradient-light text-evergreen">
                    v{change.version}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredChanges.length === 0 && (
        <Card className="text-center p-8 hover-scale">
          <CardContent>
            <p className="text-deep-bottle-green/70 text-lg">
              No changes found matching your filters.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ChangeManagement;
