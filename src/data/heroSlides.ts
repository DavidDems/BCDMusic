// Import the images for the hero slides
import beethovensNinthSymphony from '../assets/beethovens_ninth_symphony.jpg';
import mozartsRequiem from '../assets/mozarts_requiem.jpg';
import tchaikovskysSwanLake from '../assets/tchaikovskys_swan_lake.jpg';
import bachsBrandenburgConcertos from '../assets/bachs_brandenburg_concertos.jpg';

// Define the HeroSlide interface
export interface HeroSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  performer?: string;
  composer?: string;
}

// Declare the hero slides
export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Beethoven's Ninth Symphony",
    description: "Experience the grandeur of Beethoven's final symphony, featuring the iconic 'Ode to Joy' performed by the Vienna Philharmonic.",
    image: beethovensNinthSymphony,
    performer: "Vienna Philharmonic",
    composer: "Ludwig van Beethoven",
  },
  {
    id: 2,
    title: "Mozart's Requiem",
    description: "A timeless masterpiece performed by the Berlin Philharmonic, conducted by the legendary maestro.",
    image: mozartsRequiem,
    performer: "Berlin Philharmonic",
    composer: "Wolfgang Amadeus Mozart",
  },
  {
    id: 3,
    title: "Tchaikovsky's Swan Lake",
    description: "The complete ballet featuring the London Symphony Orchestra in a stunning orchestral arrangement.",
    image: tchaikovskysSwanLake,
    performer: "London Symphony Orchestra",
    composer: "Pyotr Ilyich Tchaikovsky",
  },
  {
    id: 4,
    title: "Bach's Brandenburg Concertos",
    description: "All six concertos performed by the period-instrument ensemble, bringing authenticity to baroque music.",
    image: bachsBrandenburgConcertos,
    performer: "Baroque Ensemble",
    composer: "Johann Sebastian Bach",
  },
];

