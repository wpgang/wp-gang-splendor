import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import UseCasesSection from './components/UseCasesSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import FloatingCode from './components/FloatingCode';
import ParticlesCanvas from './components/ParticlesCanvas';

function App() {
  return (
    <div className="relative min-h-screen bg-wp-dark">
      <ParticlesCanvas />
      <FloatingCode />
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <DownloadSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
