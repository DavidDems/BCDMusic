// Import the images for the concerts
import concert1 from '../assets/concert1.jpg';
import concert2 from '../assets/concert2.jpg';
import concert3 from '../assets/concert3.jpg';
import concert4 from '../assets/concert4.jpg';
import concert5 from '../assets/concert5.jpg';
import concert6 from '../assets/concert6.webp';
import concert7 from '../assets/concert7.jpg';
import concert8 from '../assets/concert8.webp';
import concert9 from '../assets/concert9.jpg';
import concert10 from '../assets/concert10.webp';

// Import the images for the orchestras
import orchestra1 from '../assets/orchestra1.jpg';
import orchestra2 from '../assets/orchestra2.jpg';
import orchestra3 from '../assets/orchestra3.jpg';
import orchestra4 from '../assets/orchestra4.avif';
import orchestra5 from '../assets/orchestra5.avif';
import orchestra6 from '../assets/orchestra6.jpg';
import orchestra7 from '../assets/orchestra7.webp';
import orchestra8 from '../assets/orchestra8.jpg';
import orchestra9 from '../assets/orchestra9.webp';
import orchestra10 from '../assets/orchestra10.avif';

// Define the SectionItem interface
export type SectionItem = {
  id: number;
  title: string;
  composer?: string;
  performer?: string;
  image: string;
  duration?: string;
};

// Define the SectionData interface
export type SectionData = {
  title: string;
  items: SectionItem[];
};

// Declare the section content
export const sectionContent: SectionData[] = [
  {
    title: "Featured Concerts",
    items: [
      {
        id: 1,
        title: "Piano Concerto No. 3",
        composer: "Sergei Rachmaninoff",
        performer: "Yuja Wang",
        image: concert1,
        duration: "45 min",
      },
      {
        id: 2,
        title: "Violin Concerto in D",
        composer: "Johannes Brahms",
        performer: "Hilary Hahn",
        image: concert2,
        duration: "38 min",
      },
      {
        id: 3,
        title: "Cello Suite No. 1",
        composer: "Johann Sebastian Bach",
        performer: "Yo-Yo Ma",
        image: concert3,
        duration: "22 min",
      },
      {
        id: 4,
        title: "Clarinet Concerto",
        composer: "Wolfgang Amadeus Mozart",
        performer: "Martin Fröst",
        image: concert4,
        duration: "32 min",
      },
      {
        id: 5,
        title: "Flute Concerto",
        composer: "Antonio Vivaldi",
        performer: "James Galway",
        image: concert5,
        duration: "28 min",
      },
      {
        id: 6,
        title: "Symphony No. 5",
        composer: "Ludwig van Beethoven",
        performer: "Berlin Philharmonic",
        image: concert6,
        duration: "35 min",
      },
      {
        id: 7,
        title: "Piano Sonata No. 14",
        composer: "Ludwig van Beethoven",
        performer: "Vladimir Horowitz",
        image: concert7,
        duration: "28 min",
      },
      {
        id: 8,
        title: "The Four Seasons",
        composer: "Antonio Vivaldi",
        performer: "Venice Baroque Orchestra",
        image: concert8,
        duration: "42 min",
      },
      {
        id: 9,
        title: "Organ Symphony No. 3",
        composer: "Camille Saint-Saëns",
        performer: "E. Power Biggs",
        image: concert9,
        duration: "38 min",
      },
      {
        id: 10,
        title: "Pictures at an Exhibition",
        composer: "Modest Mussorgsky",
        performer: "London Symphony Orchestra",
        image: concert10,
        duration: "32 min",
      },
    ],
  },
  {
    title: "Orchestra Highlights",
    items: [
      {
        id: 1,
        title: "La Traviata",
        composer: "Giuseppe Verdi",
        performer: "Metropolitan Opera",
        image: orchestra1,
        duration: "2h 15min",
      },
      {
        id: 2,
        title: "The Magic Flute",
        composer: "Wolfgang Amadeus Mozart",
        performer: "Royal Opera House",
        image: orchestra2,
        duration: "2h 45min",
      },
      {
        id: 3,
        title: "Carmen",
        composer: "Georges Bizet",
        performer: "Paris Opera",
        image: orchestra3,
        duration: "3h 10min",
      },
      {
        id: 4,
        title: "Tosca",
        composer: "Giacomo Puccini",
        performer: "La Scala",
        image: orchestra4,
        duration: "2h 30min",
      },
      {
        id: 5,
        title: "Madama Butterfly",
        composer: "Giacomo Puccini",
        performer: "Metropolitan Opera",
        image: orchestra5,
        duration: "2h 45min",
      },
      {
        id: 6,
        title: "The Marriage of Figaro",
        composer: "Wolfgang Amadeus Mozart",
        performer: "Vienna State Opera",
        image: orchestra6,
        duration: "3h",
      },
      {
        id: 7,
        title: "Don Giovanni",
        composer: "Wolfgang Amadeus Mozart",
        performer: "Royal Opera House",
        image: orchestra7,
        duration: "3h 15min",
      },
      {
        id: 8,
        title: "Rigoletto",
        composer: "Giuseppe Verdi",
        performer: "La Scala",
        image: orchestra8,
        duration: "2h 20min",
      },
      {
        id: 9,
        title: "Aida",
        composer: "Giuseppe Verdi",
        performer: "Metropolitan Opera",
        image: orchestra9,
        duration: "2h 50min",
      },
      {
        id: 10,
        title: "The Barber of Seville",
        composer: "Gioachino Rossini",
        performer: "Paris Opera",
        image: orchestra10,
        duration: "2h 40min",
      },
    ],
  },
];

