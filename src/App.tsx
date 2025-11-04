// App() function - Main application component that structures the page layout
import Navbar from './components/supporting/Navbar';
import HeroCard from './components/cards/HeroCard';
import SectionCard from './components/cards/SectionCard';
import Artists from './components/carousels/Artists';
import UpcomingEventsCard from './components/cards/UpcomingEventsCard';
import SuggestionCard from './components/cards/SuggestionCard';
import ArticleCard from './components/cards/ArticleCard';
import Footer from './components/supporting/Footer';
import { sectionContent } from './data/sectionContent';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1b1c2f', color: 'white' }}>
      <Navbar />
      {/* Main content area - semantic HTML element for page content */}
      <main>
        <HeroCard />
        {/* Map through sectionContent array to render multiple SectionCard components */}
        {sectionContent.map((section, index) => (
          <SectionCard key={index} section={section} />
        ))}
        <UpcomingEventsCard />
        <Artists />
        <SuggestionCard />
        <ArticleCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
