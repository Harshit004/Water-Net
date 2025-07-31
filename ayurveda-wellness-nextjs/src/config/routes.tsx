
import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Shipping from "@/pages/Shipping";
import Consultations from "@/pages/Consultations";
import Doctors from "@/pages/Doctors";
import Blogs from "@/pages/Blogs";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Refund from "@/pages/Refund";
import Disclaimer from "@/pages/Disclaimer";
import NotFound from "@/pages/NotFound";
import ChangeDashboard from "@/pages/ChangeDashboard";
import AnalyticsIntegration from "@/pages/AnalyticsIntegration";
import { ConsultationRoutes } from "./routes/ConsultationRoutes";
import { LegacyRoutes } from "./routes/LegacyRoutes";
import { ProductRoutes } from "./routes/ProductRoutes";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/consultations" element={<Consultations />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/refund" element={<Refund />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/change-dashboard" element={<ChangeDashboard />} />
      <Route path="/analytics-integration" element={<AnalyticsIntegration />} />
      
      {/* Consultation Routes - Call as functions to get JSX */}
      {ConsultationRoutes()}
      
      {/* Legacy Routes - Call as functions to get JSX */}
      {LegacyRoutes()}

      {/* Product Routes - Call as functions to get JSX */}
      {ProductRoutes()}
      
      {/* 404 Route - Must be last */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
