
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NewAnalyticsDashboard from '@/components/NewAnalyticsDashboard';
import ChangeManagement from '@/components/ChangeManagement';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BarChart3, FileText, TrendingUp } from 'lucide-react';

const ChangeDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medium-spring/5 to-pea-green/5">
      <Header />
      
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        <div className="text-center mb-6 sm:mb-8 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-bottle-green mb-2 sm:mb-4 text-shimmer px-2">
            Website Evolution Dashboard
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-deep-bottle-green/80 max-w-3xl mx-auto px-4">
            Track, analyze, and understand every change made to the website with comprehensive 
            analytics and detailed change management tools.
          </p>
        </div>

        <Tabs defaultValue="analytics" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8 bg-white/50 backdrop-blur-sm mx-2 sm:mx-0">
            <TabsTrigger 
              value="analytics" 
              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm data-[state=active]:btn-gradient data-[state=active]:text-white hover-scale px-2 sm:px-4"
            >
              <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Analytics Dashboard</span>
              <span className="sm:hidden">Analytics</span>
            </TabsTrigger>
            <TabsTrigger 
              value="ledger" 
              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm data-[state=active]:btn-gradient data-[state=active]:text-white hover-scale px-2 sm:px-4"
            >
              <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Change Ledger</span>
              <span className="sm:hidden">Ledger</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="animate-fade-in px-1 sm:px-0">
            <NewAnalyticsDashboard />
          </TabsContent>

          <TabsContent value="ledger" className="animate-fade-in px-1 sm:px-0">
            <ChangeManagement />
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default ChangeDashboard;
