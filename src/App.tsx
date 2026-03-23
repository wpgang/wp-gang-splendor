import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import UseCasesSection from './components/UseCasesSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import FloatingCode from './components/FloatingCode';

function App() {
  return (
    <div className="relative min-h-screen bg-wp-dark">
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
