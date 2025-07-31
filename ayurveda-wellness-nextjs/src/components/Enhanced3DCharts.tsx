
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip as RechartsTooltip } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { AlertTriangle, Activity, Maximize, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface Enhanced3DChartsProps {
  complexityTimeData: any[];
  radarData: any[];
  chartConfig: any;
}

const Enhanced3DCharts = ({ complexityTimeData, radarData, chartConfig }: Enhanced3DChartsProps) => {
  const [scatterRotation, setScatterRotation] = useState(0);
  const [radarRotation, setRadarRotation] = useState(0);
  const [scatterZoom, setScatterZoom] = useState(1);

  // Debug data on component mount and updates
  useEffect(() => {
    console.log('Enhanced3DCharts - Data Debug:', {
      complexityTimeDataLength: complexityTimeData?.length || 0,
      complexityTimeDataSample: complexityTimeData?.slice(0, 2) || [],
      radarDataLength: radarData?.length || 0,
      radarDataSample: radarData?.slice(0, 2) || [],
      chartConfig
    });
  }, [complexityTimeData, radarData, chartConfig]);

  // Process and validate scatter data
  const processedScatterData = complexityTimeData
    .filter(item => {
      const isValid = item && 
        typeof item.x === 'number' && 
        typeof item.y === 'number' && 
        !isNaN(item.x) && 
        !isNaN(item.y) &&
        item.x > 0 && item.y > 0;
      if (!isValid) {
        console.log('Invalid scatter data item:', item);
      }
      return isValid;
    })
    .map((item, index) => ({
      ...item,
      index,
      complexity: item.complexity || item.x || 1,
      timeSpent: item.timeSpent || item.y || 0,
      size: Math.max((item.y || 0) * 15 + 30, 40)
    }));

  // Process and validate radar data
  const processedRadarData = radarData
    .filter(item => {
      const hasValidData = item && 
        item.category && 
        (item.Issues > 0 || item['Time (hrs)'] > 0 || item.Complexity > 0);
      if (!hasValidData) {
        console.log('Invalid radar data item:', item);
      }
      return hasValidData;
    })
    .map(item => ({
      ...item,
      Issues: Math.max(item.Issues || 0, 1),
      'Time (hrs)': Math.max(item['Time (hrs)'] || 0, 0.1),
      Complexity: Math.max(item.Complexity || 0, 5),
      Changes: Math.max(item.Changes || 0, 1),
      Efficiency: Math.max(item.Efficiency || 0, 1)
    }));

  console.log('Processed data:', {
    scatterCount: processedScatterData.length,
    radarCount: processedRadarData.length,
    scatterSample: processedScatterData[0],
    radarSample: processedRadarData[0]
  });

  const rotateScatter = () => {
    setScatterRotation(prev => (prev + 45) % 360);
  };

  const rotateRadar = () => {
    setRadarRotation(prev => (prev + 45) % 360);
  };

  const zoomScatter = () => {
    setScatterZoom(prev => prev === 1 ? 1.5 : 1);
  };

  const resetView = () => {
    setScatterRotation(0);
    setRadarRotation(0);
    setScatterZoom(1);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Enhanced 3D Complexity vs Time Scatter Plot */}
      <Card className="hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden">
        <CardHeader className="relative z-10">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-deep-bottle-green">
              <Activity className="h-5 w-5 text-pea-green" />
              3D Complexity Analysis ({processedScatterData.length} points)
            </CardTitle>
            <div className="flex gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={rotateScatter}
                      className="h-8 w-8 p-0"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Rotate 3D view</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={zoomScatter}
                      className="h-8 w-8 p-0"
                    >
                      <Maximize className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Zoom {scatterZoom === 1 ? 'In' : 'Out'}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <AlertTriangle className="h-4 w-4 text-orange-500" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Interactive 3D visualization - use controls to rotate and zoom</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardHeader>
        <CardContent className="relative">
          {/* 3D Background Effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-green-500/5 rounded-lg"
            style={{
              transform: `perspective(1000px) rotateX(${scatterRotation * 0.3}deg) rotateY(${scatterRotation}deg)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          />
          
          <div className="min-h-[350px] relative z-10">
            {processedScatterData.length > 0 ? (
              <ResponsiveContainer width="100%" height={350}>
                <div
                  style={{
                    transform: `scale(${scatterZoom}) perspective(1000px) rotateX(${scatterRotation * 0.1}deg)`,
                    transition: 'transform 0.5s ease-in-out',
                    transformOrigin: 'center'
                  }}
                >
                  <ScatterChart 
                    data={processedScatterData} 
                    margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
                  >
                    <CartesianGrid 
                      strokeDasharray="3 3" 
                      stroke="#D8E588" 
                      strokeOpacity={0.6}
                    />
                    <XAxis 
                      type="number"
                      dataKey="x"
                      domain={[0, 5]}
                      tick={{ fill: '#055630', fontSize: 12 }}
                      label={{ value: 'Complexity Score', position: 'insideBottom', offset: -40 }}
                    />
                    <YAxis 
                      type="number"
                      dataKey="y"
                      tick={{ fill: '#055630', fontSize: 12 }}
                      label={{ value: 'Time (hours)', angle: -90, position: 'insideLeft' }}
                    />
                    <RechartsTooltip 
                      content={({ active, payload }) => {
                        if (active && payload && payload.length > 0) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-xl backdrop-blur-sm">
                              <p className="font-semibold text-deep-bottle-green">{data.title || data.fullTitle || 'Change'}</p>
                              <p className="text-pea-green">Complexity: {data.complexity || data.x}/4</p>
                              <p className="text-blue-600">Time: {data.timeSpent || data.y}h</p>
                              <p className="text-red-500">Issues: {data.issues || 0}</p>
                              <p className="text-gray-600">Category: {data.category || 'N/A'}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Scatter 
                      name="Changes"
                      dataKey="y"
                      fill="#94AD00"
                      fillOpacity={0.8}
                      stroke="#055630"
                      strokeWidth={2}
                      r={8}
                    />
                  </ScatterChart>
                </div>
              </ResponsiveContainer>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500 mb-2">No complexity/time data available</p>
                  <p className="text-xs text-gray-400">
                    Debug: {complexityTimeData?.length || 0} raw items, {processedScatterData.length} processed
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Enhanced 3D Radar Chart */}
      <Card className="hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden">
        <CardHeader className="relative z-10">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-deep-bottle-green">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              3D Bottleneck Radar ({processedRadarData.length} categories)
            </CardTitle>
            <div className="flex gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={rotateRadar}
                      className="h-8 w-8 p-0"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Rotate radar view</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={resetView}
                      className="h-8 w-8 p-0"
                    >
                      <Activity className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Reset all views</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative">
          {/* 3D Radar Background */}
          <div 
            className="absolute inset-0 bg-gradient-radial from-orange-500/5 via-red-500/5 to-yellow-500/5 rounded-lg"
            style={{
              transform: `perspective(1000px) rotateX(${radarRotation * 0.2}deg) rotateZ(${radarRotation}deg)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          />
          
          <div className="min-h-[350px] relative z-10">
            {processedRadarData.length > 0 ? (
              <ResponsiveContainer width="100%" height={350}>
                <div
                  style={{
                    transform: `perspective(1000px) rotateX(${radarRotation * 0.1}deg) rotateZ(${radarRotation * 0.5}deg)`,
                    transition: 'transform 0.5s ease-in-out',
                    transformOrigin: 'center'
                  }}
                >
                  <RadarChart data={processedRadarData} margin={{ top: 20, right: 80, bottom: 20, left: 80 }}>
                    <PolarGrid 
                      stroke="#D8E588" 
                      strokeWidth={2}
                      strokeOpacity={0.7}
                    />
                    <PolarAngleAxis 
                      dataKey="category" 
                      tick={{ fill: '#055630', fontSize: 11, fontWeight: 'bold' }} 
                    />
                    <PolarRadiusAxis 
                      tick={{ fill: '#055630', fontSize: 10 }}
                      tickCount={5}
                      angle={90}
                      domain={[0, 'dataMax']}
                    />
                    <Radar 
                      name="Issues" 
                      dataKey="Issues" 
                      stroke="#ff6b6b" 
                      fill="#ff6b6b" 
                      fillOpacity={0.4}
                      strokeWidth={3}
                      dot={{ fill: '#ff6b6b', strokeWidth: 2, r: 4 }}
                    />
                    <Radar 
                      name="Time (hrs)" 
                      dataKey="Time (hrs)" 
                      stroke="#055630" 
                      fill="#055630" 
                      fillOpacity={0.3}
                      strokeWidth={3}
                      dot={{ fill: '#055630', strokeWidth: 2, r: 4 }}
                    />
                    <Radar 
                      name="Complexity" 
                      dataKey="Complexity" 
                      stroke="#4ecdc4" 
                      fill="#4ecdc4" 
                      fillOpacity={0.2}
                      strokeWidth={2}
                      dot={{ fill: '#4ecdc4', strokeWidth: 2, r: 3 }}
                    />
                    <Legend 
                      wrapperStyle={{ paddingTop: '20px' }}
                    />
                    <RechartsTooltip 
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-xl backdrop-blur-sm">
                              <p className="font-semibold text-deep-bottle-green">{label}</p>
                              {payload.map((entry, index) => (
                                <p key={index} style={{ color: entry.color }}>
                                  {entry.name}: {entry.value}
                                </p>
                              ))}
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                  </RadarChart>
                </div>
              </ResponsiveContainer>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500 mb-2">No radar data available</p>
                  <p className="text-xs text-gray-400">
                    Debug: {radarData?.length || 0} raw items, {processedRadarData.length} processed
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Enhanced3DCharts;
