
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, ScatterChart, Scatter,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend
} from 'recharts';
import { Activity, Timer, Bug, Zap, TrendingUp, Layers, GitBranch, AlertTriangle, Info, HelpCircle } from 'lucide-react';
import { changeLedger } from '@/data/changeLedger';

const NewAnalyticsDashboard = () => {
  // Precise calculations for analytics metrics
  const totalChanges = changeLedger.length;
  const totalHours = Number(changeLedger.reduce((acc, c) => acc + (c.timeSpent || 0), 0).toFixed(2));
  const totalIssues = changeLedger.reduce((acc, c) => acc + (c.issuesEncountered || 0), 0);
  const avgComplexity = Number((changeLedger.reduce((acc, c) => {
    const scores = { Simple: 1, Medium: 2, Complex: 3, 'Very Complex': 4 };
    return acc + (scores[c.complexity as keyof typeof scores] || 1);
  }, 0) / changeLedger.length).toFixed(2));

  // Precise category data for pie chart
  const categoryData = Object.entries(
    changeLedger.reduce((acc, change) => {
      acc[change.category] = (acc[change.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  ).map(([category, count], index) => ({
    category,
    count,
    percentage: Number(((count / totalChanges) * 100).toFixed(1)),
    fill: ['#94AD00', '#055630', '#D8E588', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'][index % 7]
  }));

  // Precise timeline data
  const timelineData = changeLedger
    .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
    .map((change, index) => ({
      day: index + 1,
      date: change.timestamp.toLocaleDateString(),
      changes: 1,
      cumulativeChanges: index + 1,
      timeSpent: Number((change.timeSpent || 0).toFixed(2)),
      cumulativeTime: Number(changeLedger.slice(0, index + 1).reduce((acc, c) => acc + (c.timeSpent || 0), 0).toFixed(2))
    }));

  // Precise complexity vs time scatter data
  const scatterData = changeLedger.map((change, index) => {
    const complexityScores = { Simple: 1, Medium: 2, Complex: 3, 'Very Complex': 4 };
    return {
      x: complexityScores[change.complexity as keyof typeof complexityScores] || 1,
      y: Number((change.timeSpent || 0).toFixed(2)),
      title: change.title.substring(0, 30) + (change.title.length > 30 ? '...' : ''),
      category: change.category,
      issues: change.issuesEncountered || 0,
      complexity: change.complexity || 'Simple'
    };
  });

  // Precise radar chart data with accurate calculations
  const radarData = Object.entries(
    changeLedger.reduce((acc, change) => {
      const cat = change.category;
      if (!acc[cat]) {
        acc[cat] = { issues: 0, time: 0, count: 0, complexity: 0 };
      }
      acc[cat].issues += change.issuesEncountered || 0;
      acc[cat].time += change.timeSpent || 0;
      acc[cat].count += 1;
      const complexityScores = { Simple: 1, Medium: 2, Complex: 3, 'Very Complex': 4 };
      acc[cat].complexity += complexityScores[change.complexity as keyof typeof complexityScores] || 1;
      return acc;
    }, {} as Record<string, { issues: number; time: number; count: number; complexity: number }>)
  ).map(([category, data]) => ({
    category: category.length > 10 ? category.substring(0, 8) + '..' : category,
    fullCategory: category,
    'Avg Issues': Number((data.issues / data.count).toFixed(2)),
    'Avg Time': Number((data.time / data.count).toFixed(2)),
    'Total Changes': data.count,
    'Avg Complexity': Number((data.complexity / data.count).toFixed(2))
  }));

  const ChartExplanation = ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) => (
    <div className="space-y-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-2 cursor-help">
              <HelpCircle className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-gray-600 font-medium">Chart Guide</span>
            </div>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <div className="space-y-2">
              <p className="font-semibold">{title}</p>
              <p className="text-sm">{description}</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {children}
    </div>
  );

  return (
    <div className="space-y-6 p-6 bg-gradient-to-br from-medium-spring/5 to-pea-green/5 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-deep-bottle-green mb-2">
          Project Analytics Dashboard
        </h1>
        <p className="text-deep-bottle-green/70">
          Precise analysis of development patterns and metrics with accurate calculations
        </p>
      </div>

      {/* Key Metrics with precise calculations */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Card className="hover:scale-105 transition-transform duration-300 cursor-help">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-deep-bottle-green/70">Total Changes</p>
                      <p className="text-2xl font-bold text-pea-green">{totalChanges}</p>
                    </div>
                    <Activity className="h-8 w-8 text-pea-green" />
                  </div>
                </CardContent>
              </Card>
            </TooltipTrigger>
            <TooltipContent>
              <p>Total number of changes made to the project since tracking began</p>
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
                      <p className="text-2xl font-bold text-pea-green">{totalHours}</p>
                    </div>
                    <Timer className="h-8 w-8 text-pea-green" />
                  </div>
                </CardContent>
              </Card>
            </TooltipTrigger>
            <TooltipContent>
              <p>Total development time invested across all changes (precise calculation)</p>
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
                      <p className="text-2xl font-bold text-orange-600">{totalIssues}</p>
                    </div>
                    <Bug className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </TooltipTrigger>
            <TooltipContent>
              <p>Total number of bugs and issues encountered during development</p>
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
                      <p className="text-2xl font-bold text-pea-green">{avgComplexity}</p>
                    </div>
                    <Zap className="h-8 w-8 text-pea-green" />
                  </div>
                </CardContent>
              </Card>
            </TooltipTrigger>
            <TooltipContent>
              <p>Average complexity score (1-4 scale) across all changes (precise calculation)</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Charts Grid with precise data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Timeline Chart with precise calculations */}
        <Card className="lg:col-span-2 hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-deep-bottle-green">
              <TrendingUp className="h-5 w-5 text-pea-green" />
              Development Timeline (Precise Data)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartExplanation 
              title="Development Timeline Analysis"
              description="Shows cumulative changes over time with precise calculations. Each point represents actual development progress with exact time tracking."
            >
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={timelineData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#D8E588" />
                    <XAxis 
                      dataKey="day" 
                      tick={{ fontSize: 12 }}
                      label={{ value: 'Development Day', position: 'insideBottom', offset: -20 }}
                    />
                    <YAxis 
                      tick={{ fontSize: 12 }}
                      label={{ value: 'Cumulative Changes', angle: -90, position: 'insideLeft' }}
                    />
                    <RechartsTooltip 
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
                              <p className="font-semibold text-deep-bottle-green">Day {label}</p>
                              <p className="text-xs text-gray-500">{data.date}</p>
                              <p className="text-pea-green">Total Changes: {data.cumulativeChanges}</p>
                              <p className="text-deep-bottle-green">Total Hours: {data.cumulativeTime}h</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Area type="monotone" dataKey="cumulativeChanges" stroke="#94AD00" fill="#94AD00" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </ChartExplanation>
          </CardContent>
        </Card>

        {/* Category Distribution with precise percentages */}
        <Card className="hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-deep-bottle-green">
              <Layers className="h-5 w-5 text-pea-green" />
              Category Distribution (Precise %)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="count"
                    label={({ category, percentage }) => `${category}: ${percentage}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
                            <p className="font-semibold text-deep-bottle-green">{data.category}</p>
                            <p className="text-pea-green">Changes: {data.count}</p>
                            <p className="text-gray-600">{data.percentage}% of total work</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Complexity vs Time Scatter with precise data */}
        <Card className="hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-deep-bottle-green">
              <Activity className="h-5 w-5 text-pea-green" />
              Complexity vs Time (Precise)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart data={scatterData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#D8E588" />
                  <XAxis 
                    type="number" 
                    dataKey="x" 
                    name="Complexity" 
                    domain={[0, 5]}
                    tick={{ fontSize: 12 }}
                    label={{ value: 'Complexity Level (1-4)', position: 'insideBottom', offset: -20 }}
                  />
                  <YAxis 
                    type="number" 
                    dataKey="y" 
                    name="Time (hrs)"
                    tick={{ fontSize: 12 }}
                    label={{ value: 'Time Spent (hours)', angle: -90, position: 'insideLeft' }}
                  />
                  <RechartsTooltip 
                    cursor={{ strokeDasharray: '3 3' }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
                            <p className="font-semibold text-deep-bottle-green text-sm">{data.title}</p>
                            <p className="text-pea-green">Complexity: {data.complexity} ({data.x}/4)</p>
                            <p className="text-blue-600">Time: {data.y}h</p>
                            <p className="text-orange-600">Issues: {data.issues}</p>
                            <p className="text-gray-600 text-sm">Category: {data.category}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Scatter name="Changes" dataKey="y" fill="#94AD00" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Summary Insights with precise calculations */}
      <Card className="hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-deep-bottle-green">
            <GitBranch className="h-5 w-5 text-pea-green" />
            Precise Project Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">Most Active Category</h4>
              <p className="text-green-600">{categoryData.sort((a, b) => b.count - a.count)[0]?.category}</p>
              <p className="text-sm text-green-500">{categoryData.sort((a, b) => b.count - a.count)[0]?.count} changes ({categoryData.sort((a, b) => b.count - a.count)[0]?.percentage}%)</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">Development Velocity</h4>
              <p className="text-blue-600">{(totalChanges / (totalHours || 1)).toFixed(3)} changes/hour</p>
              <p className="text-sm text-blue-500">Precise efficiency metric</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-700 mb-2">Issue Rate</h4>
              <p className="text-orange-600">{(totalIssues / totalChanges).toFixed(3)} issues/change</p>
              <p className="text-sm text-orange-500">Precise debugging metric</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewAnalyticsDashboard;
