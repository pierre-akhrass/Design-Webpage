import "./App.scss";
import HeroSection from "./components/HeroSection/HeroSection";
import PartnersSection from "./components/PartnersSection/PartnersSection";
import OpportunitiesSection from "./components/OpportunitiesSection/OpportunitiesSection";
import NavbarSection from './components/NavbarSection'
import TaleedOpportunities from './components/TaleedOpportunities'
import ServicesSection from './components/ServicesSection'

function App() {
  return (
    <main className="app">
       <NavbarSection />
      <HeroSection />
      <TaleedOpportunities />
      <ServicesSection />
 

      <OpportunitiesSection />
      <PartnersSection />

    </main>
  );
}

export default App;