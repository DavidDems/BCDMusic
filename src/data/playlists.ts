// Import the images for the playlists
import mozart from '../assets/mozart.webp';
import romanticEraMasterpieces from '../assets/romantic_era_masterpieces.jpg';
import baroqueBrilliance from '../assets/baroque_brilliance.jpg';
import modernClassicalInnovations from '../assets/modern_classical_innovations.webp';
import beethovensGreatestHits from '../assets/beethovens_greatest_hits.webp';
import chopinsNocturnes from '../assets/chopins_nocturnes.jpg';
import tchaikovsky from '../assets/tchaikovsky.webp';
import vivaldisConcerti from '../assets/vivaldis_concerti.webp';
import debussyRavel from '../assets/debussy_ravel.png';
import wagnersEpicWorks from '../assets/wagners_epic_works.jpg';

// Define the Playlist interface
export interface Playlist {
  id: number;
  title: string;
  description: string;
  image: string;
  trackCount: number;
  duration: string;
}

// Declare the curated playlists
export const curatedPlaylists: Playlist[] = [
  {
    id: 1,
    title: "Best of Mozart",
    description: "A curated collection of Wolfgang Amadeus Mozart's most beloved compositions, from piano sonatas to symphonies.",
    image: mozart,
    trackCount: 25,
    duration: "3h 45min",
  },
  {
    id: 2,
    title: "Romantic Era Masterpieces",
    description: "Explore the emotional depth of the Romantic period with works by Chopin, Liszt, Schumann, and Brahms.",
    image: romanticEraMasterpieces,
    trackCount: 30,
    duration: "4h 20min",
  },
  {
    id: 3,
    title: "Baroque Brilliance",
    description: "Discover the intricate beauty of Baroque music featuring Bach, Handel, Vivaldi, and Purcell.",
    image: baroqueBrilliance,
    trackCount: 20,
    duration: "2h 50min",
  },
  {
    id: 4,
    title: "Modern Classical Innovations",
    description: "Contemporary classical works that push boundaries, featuring composers like Glass, Reich, and Adams.",
    image: modernClassicalInnovations,
    trackCount: 18,
    duration: "3h 15min",
  },
  {
    id: 5,
    title: "Beethoven's Greatest Hits",
    description: "The most iconic works by Ludwig van Beethoven, from symphonies to piano sonatas.",
    image: beethovensGreatestHits,
    trackCount: 22,
    duration: "4h 10min",
  },
  {
    id: 6,
    title: "Chopin's Nocturnes",
    description: "The complete collection of Frédéric Chopin's beautiful and haunting nocturnes.",
    image: chopinsNocturnes,
    trackCount: 21,
    duration: "2h 45min",
  },
  {
    id: 7,
    title: "Tchaikovsky Complete",
    description: "A comprehensive collection of Pyotr Ilyich Tchaikovsky's orchestral masterpieces.",
    image: tchaikovsky,
    trackCount: 28,
    duration: "5h 20min",
  },
  {
    id: 8,
    title: "Vivaldi's Concerti",
    description: "The finest concerti by Antonio Vivaldi, including the famous Four Seasons.",
    image: vivaldisConcerti,
    trackCount: 24,
    duration: "3h 30min",
  },
  {
    id: 9,
    title: "Debussy & Ravel",
    description: "Impressionist masterpieces by Claude Debussy and Maurice Ravel.",
    image: debussyRavel,
    trackCount: 19,
    duration: "3h 5min",
  },
  {
    id: 10,
    title: "Wagner's Epic Works",
    description: "The monumental works of Richard Wagner, featuring selections from his operas.",
    image: wagnersEpicWorks,
    trackCount: 16,
    duration: "4h 45min",
  },
];

