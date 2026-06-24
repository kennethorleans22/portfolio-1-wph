import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import StatementSection from '@/components/sections/StatementSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CodeDesignSection from '@/components/sections/CodeDesignSection';
import StandoutSection from '@/components/sections/StandoutSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ExperienceSection from '@/components/sections/ExperienceSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatementSection />
      <FeaturesSection />
      <CodeDesignSection />
      <StandoutSection />
      <PortfolioSection />
      <ExperienceSection />
    </main>
  );
}
