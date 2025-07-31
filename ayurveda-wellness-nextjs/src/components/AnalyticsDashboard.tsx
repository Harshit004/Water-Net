
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { 
  changeLedger, 
  getChangesByCategory, 
  getChangesByImpact, 
  getChangesByType,
  getRecentChanges,
  getChangeMetrics
} from '@/data/changeLedger';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area
} from 'recharts';
import { Activity, FileText, Layers, TrendingUp, Clock, GitBranch, AlertTriangle, Timer, Zap, Bug } from 'lucide-react';
import Enhanced3DCharts from './Enhanced3DCharts';
import { useEffect } from 'react';

const AnalyticsDashboard = () => {
  // Debug data processing
  useEffect(() => {
    console.log('AnalyticsDashboard - Raw changeLedger:', {
      totalEntries: changeLedger.length,
      sampleEntry: changeLedger[0],
      entriesWithTime: changeLedger.filter(c => c.timeSpent && c.timeSpent > 0).length,
      entriesWithComplexity: changeLedger.filter(c => c.complexity).length
    });
  }, []);

  const categoryData = Object.entries(getChangesByCategory()).map(([category, count]) => ({
    category: category.length > 10 ? category.substring(0, 10) + '...' : category,
    fullCategory: category,
    count,
    fill: getCategoryColor(category)
  }));

  const impactData = Object.entries(getChangesByImpact()).map(([impact, count]) => ({
    impact,
    count,
    percentage: ((count / changeLedger.length) * 100).toFixed(1),
    fill: getImpactColor(impact)
  }));

  const typeData = Object.entries(getChangesByType()).map(([type, count]) => ({
    type: type.length > 12 ? type.substring(0, 12) + '...' : type,
    fullType: type,
    count
  }));

  // Fixed timeline data with proper cumulative calculations
  const timelineData = changeLedger
    .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
    .map((change, index) => {
      const cumulativeTime = changeLedger
        .slice(0, index + 1)
        .reduce((acc, c) => acc + (c.timeSpent || 0), 0);
      
      return {
        day: `Day ${index + 1}`,
        dayNumber: index + 1,
        changes: 1,
        cumulativeChanges: index + 1,
        timeSpent: change.timeSpent || 0,
        cumulativeTime: cumulativeTime,
        issues: change.issuesEncountered || 0,
        complexity: getComplexityScore(change.complexity),
        category: change.category,
        impact: change.impact,
        title: change.title.substring(0, 30) + '...'
      };
    });

  // FIXED: Properly structured complexity vs time data for ScatterChart
  const complexityTimeData = changeLedger
    .map((change, index) => {
      const complexityScore = getComplexityScore(change.complexity);
      const timeSpent = change.timeSpent || 0;
      
      // Create valid data point even for zero values
      const dataPoint = {
        id: change.id,
        x: complexityScore, // Required for ScatterChart
        y: Math.max(timeSpent, 0.1), // Ensure minimum visibility
        complexity: complexityScore,
        timeSpent: timeSpent,
        issues: change.issuesEncountered || 0,
        category: change.category,
        title: change.title.substring(0, 25) + '...',
        fullTitle: change.title,
        index: index,
        size: Math.max(timeSpent * 15 + 30, 40)
      };
      
      console.log(`Processing change ${index}:`, {
        original: { complexity: change.complexity, timeSpent: change.timeSpent },
        processed: dataPoint
      });
      
      return dataPoint;
    })
    .filter(item => item.x > 0); // Only include items with valid complexity

  console.log('Final complexityTimeData:', {
    totalItems: complexityTimeData.length,
    sampleItems: complexityTimeData.slice(0, 3)
  });

  // FIXED: Improved category performance data with better validation
  const categoryPerformanceData = Object.entries(
    changeLedger.reduce((acc, change) => {
      const key = change.category;
      if (!acc[key]) {
        acc[key] = { 
          category: key.length > 8 ? key.substring(0, 8) + '...' : key,
          fullCategory: key,
          totalIssues: 0, 
          totalTime: 0, 
          changeCount: 0,
          totalComplexity: 0 
        };
      }
      acc[key].totalIssues += change.issuesEncountered || 0;
      acc[key].totalTime += change.timeSpent || 0;
      acc[key].changeCount += 1;
      acc[key].totalComplexity += getComplexityScore(change.complexity);
      return acc;
    }, {} as Record<string, any>)
  ).map(([_, data]) => ({
    ...data,
    avgComplexity: (data.totalComplexity / data.changeCount).toFixed(1),
    issuesPerChange: (data.totalIssues / data.changeCount).toFixed(1),
    timePerChange: (data.totalTime / data.changeCount).toFixed(1),
    efficiency: (data.changeCount / Math.max(data.totalTime, 0.1)).toFixed(2)
  }));

  // FIXED: Enhanced radar data with proper validation and scaling
  const radarData = categoryPerformanceData
    .filter(item => item.changeCount > 0)
    .map(item => {
      const radarPoint = {
        category: item.category,
        Issues: Math.max(parseFloat(item.totalIssues.toString()), 1),
        'Time (hrs)': Math.max(parseFloat(item.totalTime.toString()), 0.1),
        Complexity: Math.max(parseFloat(item.avgComplexity) * 20, 5),
        Changes: Math.max(parseFloat(item.changeCount.toString()), 1),
        Efficiency: Math.max(parseFloat(item.efficiency) * 50, 1)
      };
      
      console.log(`Radar data for ${item.fullCategory}:`, radarPoint);
      return radarPoint;
    });

  console.log('Final radarData:', {
    totalCategories: radarData.length,
    sampleCategories: radarData.slice(0, 2)
  });

  const recentChanges = getRecentChanges();
  const metrics = getChangeMetrics();

  function getCategoryColor(category: string) {
    const colors = {
      'UI/UX': '#94AD00',
      'Performance': '#D8E588',
      'Features': '#055630',
      'Bug Fix': '#ff6b6b',
      'Refactor': '#4ecdc4',
      'Dependencies': '#45b7d1',
      'Accessibility': '#96ceb4'
    };
    return colors[category as keyof typeof colors] || '#94AD00';
  }

  function getImpactColor(impact: string) {
    const colors = {
      Low: '#D8E588',
      Medium: '#94AD00',
      High: '#055630',
      Critical: '#044725'
    };
    return colors[impact as keyof typeof colors] || '#94AD00';
  }

  function getComplexityScore(complexity?: string) {
    const scores = { Simple: 1, Medium: 2, Complex: 3, 'Very Complex': 4 };
    return scores[complexity as keyof typeof scores] || 1;
  }

  const chartConfig = {
    changes: { label: "Changes", color: "#94AD00" },
    time: { label: "Time (hrs)", color: "#055630" },
    issues: { label: "Issues", color: "#ff6b6b" },
    complexity: { label: "Complexity", color: "#4ecdc4" }
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6 bg-gradient-to-br from-medium-spring/5 to-pea-green/5 min-h-screen">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-deep-bottle-green mb-2">
          Advanced Project Analytics Dashboard
        </h1>
        <p className="text-sm sm:text-base text-deep-bottle-green/70 px-4">
          Comprehensive analysis of development patterns, bottlenecks, and evolution since day 0
        </p>
      </div>

      {/* Enhanced Key Metrics - Responsive Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Card className="hover:scale-105 transition-transform duration-300 cursor-help">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-deep-bottle-green/70">Total Changes</p>
                      <p className="text-2xl font-bold text-pea-green">{metrics.totalChanges}</p>
                    </div>
                    <Activity className="h-8 w-8 text-pea-green" />
                  </div>
                </CardContent>
              </Card>
            </TooltipTrigger>
            <TooltipContent>
              <p>Total number of tracked changes since project inception</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Card className="hover:scale-105 transition-transform duration-300 cursor-help">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-deep-bottle-green/70">Total Hours</p>
                      <p className="text-2xl font-bold text-pea-green">
                        {metrics.totalHours}
                      </p>
                    </div>
                    <Timer className="h-8 w-8 text-pea-green" />
                  </div>
                </CardContent>
              </Card>
            </TooltipTrigger>
            <TooltipContent>
              <p>Total development time invested across all changes</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Card className="hover:scale-105 transition-transform duration-300 cursor-help">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-deep-bottle-green/70">Total Issues</p>
                      <p className="text-2xl font-bold text-orange-600">
                        {metrics.totalIssues}
                      </p>
                    </div>
                    <Bug className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </TooltipTrigger>
            <TooltipContent>
              <p>Total number of issues encountered during development</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Card className="hover:scale-105 transition-transform duration-300 cursor-help">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-deep-bottle-green/70">Avg. Complexity</p>
                      <p className="text-2xl font-bold text-pea-green">
                        {metrics.avgComplexity}
                      </p>
                    </div>
                    <Zap className="h-8 w-8 text-pea-green" />
                  </div>
                </CardContent>
              </Card>
            </TooltipTrigger>
            <TooltipContent>
              <p>Average complexity score (1-4 scale) across all changes</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Enhanced Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Development Timeline */}
        <Card className="lg:col-span-2 hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-deep-bottle-green text-sm sm:text-base">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-pea-green" />
              Development Timeline & Cumulative Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[350px] sm:min-h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={timelineData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#D8E588" strokeOpacity={0.6} />
                  <XAxis 
                    dataKey="dayNumber" 
                    tick={{ fill: '#055630', fontSize: 12 }}
                    label={{ value: 'Development Day', position: 'insideBottom', offset: -30 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis 
                    yAxisId="left" 
                    tick={{ fill: '#055630', fontSize: 12 }}
                    label={{ value: 'Cumulative Changes', angle: -90, position: 'insideLeft' }}
                  />
                  <YAxis 
                    yAxisId="right" 
                    orientation="right" 
                    tick={{ fill: '#055630', fontSize: 12 }}
                    label={{ value: 'Cumulative Hours', angle: 90, position: 'insideRight' }}
                  />
                  <RechartsTooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
                            <p className="font-semibold text-deep-bottle-green">Day {label}</p>
                            <p className="text-pea-green">Total Changes: {data.cumulativeChanges}</p>
                            <p className="text-deep-bottle-green">Total Time: {data.cumulativeTime.toFixed(1)}h</p>
                            <p className="text-gray-600">Latest: {data.title}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Area 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="cumulativeChanges" 
                    stroke="#94AD00" 
                    fill="#94AD00" 
                    fillOpacity={0.3}
                    strokeWidth={3}
                    name="Cumulative Changes"
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="cumulativeTime" 
                    stroke="#055630" 
                    strokeWidth={2}
                    dot={{ fill: '#055630', strokeWidth: 2, r: 4 }}
                    name="Cumulative Hours"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card className="hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-deep-bottle-green text-sm sm:text-base">
              <Layers className="h-4 w-4 sm:h-5 sm:w-5 text-pea-green" />
              Changes by Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] sm:min-h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData} layout="vertical" margin={{ top: 20, right: 30, left: 80, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#D8E588" strokeOpacity={0.6} />
                  <XAxis 
                    type="number" 
                    tick={{ fill: '#055630', fontSize: 10 }}
                    label={{ value: 'Number of Changes', position: 'insideBottom', offset: -10 }}
                  />
                  <YAxis 
                    dataKey="category" 
                    type="category" 
                    tick={{ fill: '#055630', fontSize: 10 }}
                    width={80}
                  />
                  <RechartsTooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
                            <p className="font-semibold text-deep-bottle-green">{data.fullCategory}</p>
                            <p className="text-pea-green">Changes: {data.count}</p>
                            <p className="text-gray-600">
                              {((data.count / changeLedger.length) * 100).toFixed(1)}% of total
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="count" fill="#94AD00" name="Changes" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Impact Distribution */}
        <Card className="hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-deep-bottle-green text-sm sm:text-base">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-pea-green" />
              Impact Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] sm:min-h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <Pie
                    data={impactData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ impact, percentage }) => `${impact} ${percentage}%`}
                    outerRadius="70%"
                    innerRadius="30%"
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {impactData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
                            <p className="font-semibold text-deep-bottle-green">{data.impact} Impact</p>
                            <p className="text-pea-green">Changes: {data.count}</p>
                            <p className="text-gray-600">{data.percentage}% of total</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced 3D Charts Component with FIXED data */}
      <Enhanced3DCharts
        complexityTimeData={complexityTimeData}
        radarData={radarData}
        chartConfig={chartConfig}
      />

      {/* Category Performance Analysis */}
      <Card className="mt-4 sm:mt-6 hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-deep-bottle-green text-sm sm:text-base">
            <GitBranch className="h-4 w-4 sm:h-5 sm:w-5 text-pea-green" />
            Category Performance & Efficiency Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="min-h-[300px] sm:min-h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryPerformanceData} margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#D8E588" strokeOpacity={0.6} />
                <XAxis 
                  dataKey="category" 
                  tick={{ fill: '#055630', fontSize: 10 }}
                  angle={-45}
                  textAnchor="end"
                  height={100}
                />
                <YAxis 
                  tick={{ fill: '#055630', fontSize: 10 }}
                  label={{ value: 'Average per Change', angle: -90, position: 'insideLeft' }}
                />
                <RechartsTooltip 
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
                          <p className="font-semibold text-deep-bottle-green">{data.fullCategory}</p>
                          <p className="text-pea-green">Avg Time per Change: {data.timePerChange}h</p>
                          <p className="text-orange-600">Avg Issues per Change: {data.issuesPerChange}</p>
                          <p className="text-blue-600">Total Changes: {data.changeCount}</p>
                          <p className="text-purple-600">Efficiency: {data.efficiency} changes/hour</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="timePerChange" fill="#055630" name="Avg Time (hrs)" />
                <Bar dataKey="issuesPerChange" fill="#ff6b6b" name="Avg Issues" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Most Problematic Areas Summary */}
      <Card className="mt-4 sm:mt-6 hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-deep-bottle-green text-sm sm:text-base">
            <Bug className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
            Development Insights & Bottleneck Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">Most Problematic Category</h4>
              <p className="text-red-600 text-sm sm:text-base">
                {categoryPerformanceData.sort((a, b) => parseFloat(b.issuesPerChange) - parseFloat(a.issuesPerChange))[0]?.fullCategory}
              </p>
              <p className="text-xs sm:text-sm text-red-500">
                {categoryPerformanceData.sort((a, b) => parseFloat(b.issuesPerChange) - parseFloat(a.issuesPerChange))[0]?.issuesPerChange} avg issues per change
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-700 mb-2 text-sm sm:text-base">Most Time-Consuming</h4>
              <p className="text-orange-600 text-sm sm:text-base">
                {categoryPerformanceData.sort((a, b) => parseFloat(b.timePerChange) - parseFloat(a.timePerChange))[0]?.fullCategory}
              </p>
              <p className="text-xs sm:text-sm text-orange-500">
                {categoryPerformanceData.sort((a, b) => parseFloat(b.timePerChange) - parseFloat(a.timePerChange))[0]?.timePerChange}h avg per change
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2 text-sm sm:text-base">Most Efficient</h4>
              <p className="text-green-600 text-sm sm:text-base">
                {categoryPerformanceData.sort((a, b) => parseFloat(b.efficiency) - parseFloat(a.efficiency))[0]?.fullCategory}
              </p>
              <p className="text-xs sm:text-sm text-green-500">
                {categoryPerformanceData.sort((a, b) => parseFloat(b.efficiency) - parseFloat(a.efficiency))[0]?.efficiency} changes/hour
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
