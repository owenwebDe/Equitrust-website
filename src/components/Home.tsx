import Hero from './Hero';
import Features from './Features';
import VisualFeatures from './VisualFeatures';
import PancakeSwapWidget from './PancakeSwapWidget';
import PriceDisplay from './PriceDisplay';
import HowToBuy from './HowToBuy';
import NewFeatures from './NewFeatures';
import Tokenomics from './Tokenomics';
import Roadmap from './Roadmap';
import Community from './Community';

interface HomeProps {
  setCurrentPage?: (page: string) => void;
}

const Home = ({ setCurrentPage }: HomeProps) => {
  return (
    <main>
      <Hero />
      <PancakeSwapWidget />
      <Features />
      <PriceDisplay />
      <HowToBuy />
      <VisualFeatures />
      <NewFeatures setCurrentPage={setCurrentPage} />
      <Tokenomics />
      <Roadmap />
      <Community setCurrentPage={setCurrentPage} />
    </main>
  );
};

export default Home;