import "./App.scss";
import HeroSection from "./components/HeroSection/HeroSection";
import PartnersSection from "./components/PartnersSection/PartnersSection";
import OpportunitiesSection from "./components/OpportunitiesSection/OpportunitiesSection";

function App() {
  return (
    <main className="app">
      <HeroSection />
      <OpportunitiesSection />
      <PartnersSection />

    </main>
  );
}

export default App;