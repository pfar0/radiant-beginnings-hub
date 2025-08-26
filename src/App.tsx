import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import FAQ from "./pages/FAQ";
import AppDemo from "./pages/AppDemo";
import Testimonials from "./pages/Testimonials";
import AppDemoAdvanced from "./pages/AppDemoAdvanced";
import Onboarding from "./pages/Onboarding";
import PaymentFlow from "./pages/PaymentFlow";
import CompanyDashboard from "./pages/CompanyDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/app-demo" element={<AppDemo />} />
          <Route path="/app-demo-advanced" element={<AppDemoAdvanced />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/payment-flow" element={<PaymentFlow />} />
          <Route path="/company-dashboard" element={<CompanyDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
