import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OurWork from "./pages/OurWork";
import About from "./pages/About";
import GetInvolved from "./pages/GetInvolved";
import Team from "./pages/Team";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import Volunteer from "./pages/Volunteer";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";
import EducationSupport from "./pages/EducationSupport";
import HealthcareServices from "./pages/HealthcareServices";
import CleanWaterAccess from "./pages/CleanWaterAccess";
import NutritionPrograms from "./pages/NutritionPrograms";
import ShelterHousing from "./pages/ShelterHousing";
import CommunityEmpowerment from "./pages/CommunityEmpowerment";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
         <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/team" element={<Team />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/education-support" element={<EducationSupport />} />
          <Route path="/healthcare-services" element={<HealthcareServices />} />
          <Route path="/clean-water-access" element={<CleanWaterAccess />} />
          <Route path="/nutrition-programs" element={<NutritionPrograms />} />
          <Route path="/shelter-housing" element={<ShelterHousing />} />
          <Route path="/community-empowerment" element={<CommunityEmpowerment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;