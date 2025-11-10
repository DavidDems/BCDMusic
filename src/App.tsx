// App() function - Main application component that structures the page layout
import { useState, useEffect } from 'react';
import Navbar from './components/supporting/Navbar';
import MobileNavbar from './components/supporting/MobileNavbar';
import HeroCard from './components/cards/HeroCard';
import SectionCard from './components/cards/SectionCard';
import ArtistsCard from './components/cards/ArtistsCard';
import UpcomingEventsCard from './components/cards/UpcomingEventsCard';
import SuggestionCard from './components/cards/SuggestionCard';
import ArticleCard from './components/cards/ArticleCard';
import Footer from './components/supporting/Footer';
import { sectionContent } from './data/sectionContent';

function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsDesktop(window.innerWidth >= 1000);
    };

    // Check on mount
    checkScreenWidth();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenWidth);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1b1c2f', color: 'white' }}>
      {isDesktop ? <Navbar /> : <MobileNavbar />}
      {/* Main content area - semantic HTML element for page content */}
      <main>
        <section id="home">
          <HeroCard />
        </section>
        {/* Map through sectionContent array to render multiple SectionCard components */}
        {sectionContent.map((section, index) => {
          const sectionId = section.title === 'Featured Concerts' ? 'concerts' : 
                           section.title === 'Orchestra Highlights' ? 'orchestras' : null;
          return sectionId ? (
            <section key={index} id={sectionId}>
              <SectionCard section={section} />
            </section>
          ) : (
            <SectionCard key={index} section={section} />
          );
        })}
        <section>
          <UpcomingEventsCard />
        </section>
        <section id="artists">
          <ArtistsCard />
        </section>
        <section id="playlists">
          <SuggestionCard />
        </section>
        <section id="articles">
          <ArticleCard />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
