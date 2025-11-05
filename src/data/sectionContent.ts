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
  detailedContent?: string;
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
        detailedContent: "Rachmaninoff's Piano Concerto No. 3 in D minor, Op. 30, is considered one of the most technically challenging concertos in the piano repertoire. Composed in 1909, this masterpiece showcases Yuja Wang's extraordinary virtuosity and emotional depth. The concerto features three movements: Allegro ma non tanto, Intermezzo: Adagio, and Finale: Alla breve. Wang's interpretation brings out the work's sweeping romanticism and intricate technical demands, making this performance a truly unforgettable experience.",
      },
      {
        id: 2,
        title: "Violin Concerto in D",
        composer: "Johannes Brahms",
        performer: "Hilary Hahn",
        image: concert2,
        duration: "38 min",
        detailedContent: "Brahms' Violin Concerto in D major, Op. 77, is a cornerstone of the violin repertoire, combining technical brilliance with profound musical expression. Composed in 1878, this concerto features three movements that showcase Hilary Hahn's impeccable technique and lyrical sensitivity. The work demonstrates Brahms' mastery of orchestral writing and his deep understanding of the violin's capabilities, creating a dialogue between soloist and orchestra that has captivated audiences for over a century.",
      },
      {
        id: 3,
        title: "Cello Suite No. 1",
        composer: "Johann Sebastian Bach",
        performer: "Yo-Yo Ma",
        image: concert3,
        duration: "22 min",
        detailedContent: "Bach's Cello Suite No. 1 in G major, BWV 1007, is the first of six suites for unaccompanied cello, composed around 1720. These suites represent some of the most profound and technically demanding works for the instrument. Yo-Yo Ma's interpretation brings out the suite's elegant simplicity and hidden complexity, revealing the depth of Bach's compositional genius. The six movements—Prelude, Allemande, Courante, Sarabande, Menuets I & II, and Gigue—create a complete musical journey.",
      },
      {
        id: 4,
        title: "Clarinet Concerto",
        composer: "Wolfgang Amadeus Mozart",
        performer: "Martin Fröst",
        image: concert4,
        duration: "32 min",
        detailedContent: "Mozart's Clarinet Concerto in A major, K. 622, was completed in 1791, just months before the composer's death. This concerto is considered one of Mozart's finest works and showcases the clarinet's beautiful tone and expressive capabilities. Martin Fröst's performance captures the work's elegance, warmth, and emotional depth. The three movements—Allegro, Adagio, and Rondo—display Mozart's mastery of melody and form, making this concerto a beloved masterpiece of the classical repertoire.",
      },
      {
        id: 5,
        title: "Flute Concerto",
        composer: "Antonio Vivaldi",
        performer: "James Galway",
        image: concert5,
        duration: "28 min",
        detailedContent: "Vivaldi's Flute Concerto in D major, RV 429, 'Il gardellino' (The Goldfinch), is one of the composer's most charming and virtuosic flute concertos. Named for the bird-like trills and rapid passages that mimic a goldfinch's song, this concerto showcases the flute's agility and expressive range. James Galway's interpretation brings out the work's playful character and Baroque elegance, demonstrating why this concerto remains one of the most popular works in the flute repertoire.",
      },
      {
        id: 6,
        title: "Symphony No. 5",
        composer: "Ludwig van Beethoven",
        performer: "Berlin Philharmonic",
        image: concert6,
        duration: "35 min",
        detailedContent: "Beethoven's Symphony No. 5 in C minor, Op. 67, is one of the most recognized and influential works in classical music. Composed between 1804 and 1808, the symphony's famous opening motif—three short notes followed by one long note—has become synonymous with triumph over adversity. The Berlin Philharmonic's performance brings out the symphony's dramatic power, emotional depth, and revolutionary spirit. The four movements take listeners on a journey from darkness to light, culminating in a triumphant finale.",
      },
      {
        id: 7,
        title: "Piano Sonata No. 14",
        composer: "Ludwig van Beethoven",
        performer: "Vladimir Horowitz",
        image: concert7,
        duration: "28 min",
        detailedContent: "Beethoven's Piano Sonata No. 14 in C-sharp minor, Op. 27, No. 2, popularly known as the 'Moonlight Sonata,' is one of the composer's most famous works. Despite its nickname, Beethoven's original title was 'Sonata quasi una fantasia.' The work's first movement, with its hypnotic triplets and melancholic melody, contrasts dramatically with the stormy final movement. Vladimir Horowitz's legendary interpretation captures the sonata's emotional range and technical challenges, showcasing why this work remains eternally beloved.",
      },
      {
        id: 8,
        title: "The Four Seasons",
        composer: "Antonio Vivaldi",
        performer: "Venice Baroque Orchestra",
        image: concert8,
        duration: "42 min",
        detailedContent: "Vivaldi's 'The Four Seasons' (Le quattro stagioni) is a set of four violin concertos, each representing a season of the year. Composed around 1723, these concertos are among the earliest examples of program music—music that tells a story or depicts scenes. Each concerto is accompanied by a sonnet describing the season's characteristics. The Venice Baroque Orchestra's performance brings authentic period-instrument interpretation to these beloved works, capturing the vivid imagery of spring's birds, summer's storms, autumn's harvest, and winter's ice.",
      },
      {
        id: 9,
        title: "Organ Symphony No. 3",
        composer: "Camille Saint-Saëns",
        performer: "E. Power Biggs",
        image: concert9,
        duration: "38 min",
        detailedContent: "Saint-Saëns' Symphony No. 3 in C minor, Op. 78, known as the 'Organ Symphony,' is a masterpiece of the French Romantic repertoire. Composed in 1886, it was dedicated to Franz Liszt, who died later that year. The symphony features the organ prominently, creating a unique blend of orchestral and organ timbres. E. Power Biggs' interpretation showcases the work's grandeur, from the mysterious opening to the triumphant finale, demonstrating why this symphony remains one of Saint-Saëns' most celebrated compositions.",
      },
      {
        id: 10,
        title: "Pictures at an Exhibition",
        composer: "Modest Mussorgsky",
        performer: "London Symphony Orchestra",
        image: concert10,
        duration: "32 min",
        detailedContent: "Mussorgsky's 'Pictures at an Exhibition' was originally composed for piano in 1874, inspired by a memorial exhibition of works by the artist Viktor Hartmann. The work consists of ten movements, each depicting a different painting, connected by a recurring 'Promenade' theme representing the viewer walking through the gallery. The London Symphony Orchestra performs Ravel's famous 1922 orchestration, which brilliantly captures each painting's character—from the playful 'Ballet of the Unhatched Chicks' to the majestic 'Great Gate of Kiev'—showcasing the orchestra's versatility and color.",
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
        detailedContent: "Verdi's 'La Traviata' is one of the most beloved operas in the repertoire, premiered in 1853. Based on Alexandre Dumas' novel 'La Dame aux Camélias,' the opera tells the tragic story of Violetta, a courtesan who sacrifices her love for Alfredo to protect his family's honor. The Metropolitan Opera's production showcases Verdi's beautiful melodies, including the famous 'Libiamo ne' lieti calici' (Brindisi) and Violetta's poignant 'Addio del passato.' This performance captures the opera's emotional depth and dramatic intensity.",
      },
      {
        id: 2,
        title: "The Magic Flute",
        composer: "Wolfgang Amadeus Mozart",
        performer: "Royal Opera House",
        image: orchestra2,
        duration: "2h 45min",
        detailedContent: "Mozart's 'The Magic Flute' (Die Zauberflöte) is a Singspiel premiered in 1791, combining spoken dialogue with sung arias. This enchanting opera tells the story of Prince Tamino's quest to rescue Pamina, guided by the magical flute. The Royal Opera House's production brings to life Mozart's sublime music, from the Queen of the Night's virtuosic 'Der Hölle Rache' to Papageno's charming 'Der Vogelfänger bin ich ja.' The work blends comedy, fantasy, and profound Masonic symbolism, creating one of opera's most magical experiences.",
      },
      {
        id: 3,
        title: "Carmen",
        composer: "Georges Bizet",
        performer: "Paris Opera",
        image: orchestra3,
        duration: "3h 10min",
        detailedContent: "Bizet's 'Carmen,' premiered in 1875, is one of the most popular operas ever written. Set in Seville, it tells the tragic story of Don José, a soldier who becomes obsessed with the free-spirited gypsy Carmen. The Paris Opera's production showcases Bizet's brilliant score, featuring iconic arias like Carmen's 'Habanera' and 'Seguidilla,' and Don José's 'Flower Song.' The opera's vibrant Spanish atmosphere, memorable melodies, and dramatic intensity have made it a timeless masterpiece of the operatic stage.",
      },
      {
        id: 4,
        title: "Tosca",
        composer: "Giacomo Puccini",
        performer: "La Scala",
        image: orchestra4,
        duration: "2h 30min",
        detailedContent: "Puccini's 'Tosca' is a dramatic opera in three acts, premiered in 1900. Set in Rome during the Napoleonic Wars, it tells the story of the diva Floria Tosca, her lover Mario Cavaradossi, and the corrupt police chief Scarpia. La Scala's production brings out Puccini's powerful score, including Tosca's famous 'Vissi d'arte' and Cavaradossi's 'E lucevan le stelle.' The opera's intense drama, passionate music, and tragic ending create one of Puccini's most compelling works, showcasing his mastery of operatic storytelling.",
      },
      {
        id: 5,
        title: "Madama Butterfly",
        composer: "Giacomo Puccini",
        performer: "Metropolitan Opera",
        image: orchestra5,
        duration: "2h 45min",
        detailedContent: "Puccini's 'Madama Butterfly' premiered in 1904 and tells the heartbreaking story of Cio-Cio-San, a young Japanese geisha who marries an American naval officer, Pinkerton. The Metropolitan Opera's production showcases Puccini's exquisite score, featuring Butterfly's 'Un bel dì vedremo' and the haunting 'Humming Chorus.' The opera blends Western and Eastern musical elements, creating a poignant tale of love, betrayal, and cultural clash that remains one of Puccini's most emotionally powerful works.",
      },
      {
        id: 6,
        title: "The Marriage of Figaro",
        composer: "Wolfgang Amadeus Mozart",
        performer: "Vienna State Opera",
        image: orchestra6,
        duration: "3h",
        detailedContent: "Mozart's 'The Marriage of Figaro' (Le nozze di Figaro) premiered in 1786 and is considered one of the greatest operas ever written. Based on Beaumarchais' play, it's a comedy of mistaken identities, class conflict, and romantic entanglements. The Vienna State Opera's production highlights Mozart's brilliant ensemble writing and character development, featuring beloved arias like Figaro's 'Non più andrai' and the Countess's 'Dove sono.' The opera's perfect balance of comedy and humanity showcases Mozart's genius at its finest.",
      },
      {
        id: 7,
        title: "Don Giovanni",
        composer: "Wolfgang Amadeus Mozart",
        performer: "Royal Opera House",
        image: orchestra7,
        duration: "3h 15min",
        detailedContent: "Mozart's 'Don Giovanni' premiered in 1787 and combines comedy, drama, and supernatural elements in the story of the legendary seducer Don Juan. The Royal Opera House's production showcases Mozart's innovative score, which seamlessly blends opera seria and opera buffa styles. The work features some of Mozart's greatest music, including the famous 'Catalogue Aria' and the dramatic finale where Don Giovanni is dragged to hell. This masterpiece demonstrates Mozart's ability to create complex characters and profound human drama.",
      },
      {
        id: 8,
        title: "Rigoletto",
        composer: "Giuseppe Verdi",
        performer: "La Scala",
        image: orchestra8,
        duration: "2h 20min",
        detailedContent: "Verdi's 'Rigoletto' premiered in 1851 and is based on Victor Hugo's play 'Le roi s'amuse.' The opera tells the tragic story of the hunchbacked court jester Rigoletto and his daughter Gilda. La Scala's production highlights Verdi's dramatic score, featuring the Duke's famous 'La donna è mobile' and Gilda's poignant 'Caro nome.' The work demonstrates Verdi's masterful character development and his ability to create intense emotional drama through music, establishing him as one of opera's greatest composers.",
      },
      {
        id: 9,
        title: "Aida",
        composer: "Giuseppe Verdi",
        performer: "Metropolitan Opera",
        image: orchestra9,
        duration: "2h 50min",
        detailedContent: "Verdi's 'Aida' premiered in 1871 and is one of the grandest operas in the repertoire. Set in ancient Egypt, it tells the story of the Ethiopian princess Aida, who is enslaved in Egypt and falls in love with Radamès, an Egyptian military commander. The Metropolitan Opera's production showcases Verdi's spectacular score, including the famous 'Grand March' and Aida's 'O patria mia.' The opera combines intimate personal drama with grand spectacle, featuring some of Verdi's most beautiful and powerful music.",
      },
      {
        id: 10,
        title: "The Barber of Seville",
        composer: "Gioachino Rossini",
        performer: "Paris Opera",
        image: orchestra10,
        duration: "2h 40min",
        detailedContent: "Rossini's 'The Barber of Seville' (Il barbiere di Siviglia) premiered in 1816 and is considered the greatest comic opera ever written. Based on Beaumarchais' play, it tells the story of Count Almaviva's attempts to woo Rosina with the help of the clever barber Figaro. The Paris Opera's production showcases Rossini's effervescent score, featuring Figaro's famous 'Largo al factotum' and Rosina's 'Una voce poco fa.' The opera's rapid-fire wit, brilliant vocal writing, and infectious energy make it a perennial favorite.",
      },
    ],
  },
];

