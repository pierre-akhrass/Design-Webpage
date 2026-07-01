import "./App.scss";
import HeroSection from "./components/HeroSection/HeroSection";
import PartnersSection from "./components/PartnersSection/PartnersSection";
import OpportunitiesSection from "./components/OpportunitiesSection/OpportunitiesSection";
import NavbarSection from './components/NavbarSection'
import TaleedOpportunities from './components/TaleedOpportunities'
import ServicesSection from './components/ServicesSection'
import { FocusAreas } from './components/FocusAreas/FocusAreas'
import { ImpactStats } from './components/ImpactStats/ImpactStats'
import { TaleedFooter } from './components/Footer/TaleedFooter'

function App() {
  return (
    <main className="app">
       <NavbarSection />
      <HeroSection />
      <TaleedOpportunities />
      <ServicesSection />
      <OpportunitiesSection />
      <ImpactStats />
      <FocusAreas />
      <PartnersSection />
    <TaleedFooter />
    </main>
  );
}

export default App;