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
  curator?: string;
  detailedContent?: string;
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
    curator: "Classical Music Society",
    detailedContent: "This comprehensive collection celebrates the genius of Wolfgang Amadeus Mozart, featuring his most iconic works across all genres. From the dramatic intensity of his operas to the playful elegance of his chamber music, this playlist showcases Mozart's incredible versatility and timeless appeal. Highlights include selections from 'The Magic Flute,' 'The Marriage of Figaro,' his final symphonies, and beloved piano concertos. Each piece demonstrates Mozart's perfect balance of form and emotion, making this collection essential listening for both classical music enthusiasts and newcomers alike.",
  },
  {
    id: 2,
    title: "Romantic Era Masterpieces",
    description: "Explore the emotional depth of the Romantic period with works by Chopin, Liszt, Schumann, and Brahms.",
    image: romanticEraMasterpieces,
    trackCount: 30,
    duration: "4h 20min",
    curator: "Dr. Elena Rodriguez",
    detailedContent: "The Romantic era, spanning roughly 1820-1910, revolutionized classical music by prioritizing individual expression and emotional intensity. This carefully curated collection features the greatest works from this transformative period, including Chopin's poetic nocturnes and études, Liszt's virtuosic Hungarian Rhapsodies, Schumann's passionate song cycles, and Brahms' profound symphonies. These composers pushed the boundaries of musical expression, creating works that continue to resonate with audiences today. Each selection represents the pinnacle of Romantic artistry, showcasing the era's emphasis on personal emotion, national identity, and dramatic storytelling.",
  },
  {
    id: 3,
    title: "Baroque Brilliance",
    description: "Discover the intricate beauty of Baroque music featuring Bach, Handel, Vivaldi, and Purcell.",
    image: baroqueBrilliance,
    trackCount: 20,
    duration: "2h 50min",
    curator: "Baroque Music Institute",
    detailedContent: "The Baroque period (1600-1750) brought unprecedented complexity and ornamentation to classical music. This collection celebrates the era's greatest masters, including Bach's mathematical perfection in his fugues and cantatas, Handel's grand oratorios and concerti grossi, Vivaldi's vibrant concertos that paint vivid scenes, and Purcell's English operatic masterpieces. Baroque music is characterized by its elaborate counterpoint, dramatic contrasts, and emotional expressiveness. These works showcase the technical mastery and artistic vision that defined the period, from the intimate chamber music to the grandest orchestral works.",
  },
  {
    id: 4,
    title: "Modern Classical Innovations",
    description: "Contemporary classical works that push boundaries, featuring composers like Glass, Reich, and Adams.",
    image: modernClassicalInnovations,
    trackCount: 18,
    duration: "3h 15min",
    curator: "Contemporary Music Collective",
    detailedContent: "This forward-looking collection explores the cutting edge of classical music from the 20th and 21st centuries. Featuring the minimalist masterpieces of Philip Glass and Steve Reich, whose repetitive patterns create mesmerizing soundscapes, alongside John Adams' operatic and orchestral works that blend modern techniques with traditional forms. The playlist also includes works by other innovative composers who have expanded the boundaries of classical music, incorporating elements from jazz, electronic music, and world traditions. These pieces challenge conventional notions of melody, harmony, and form while creating powerful emotional experiences.",
  },
  {
    id: 5,
    title: "Beethoven's Greatest Hits",
    description: "The most iconic works by Ludwig van Beethoven, from symphonies to piano sonatas.",
    image: beethovensGreatestHits,
    trackCount: 22,
    duration: "4h 10min",
    curator: "Symphony Hall Archives",
    detailedContent: "Ludwig van Beethoven bridged the Classical and Romantic eras, revolutionizing music with his emotional intensity and structural innovations. This collection features his most celebrated works, including the revolutionary Symphony No. 3 'Eroica,' the transcendent Symphony No. 9 with its famous 'Ode to Joy,' the dramatic 'Moonlight' and 'Pathétique' piano sonatas, and his powerful concertos. Beethoven's music conveys profound human emotions, from heroic struggle to triumphant joy, making him one of the most influential composers in history. Each work in this collection represents a milestone in his artistic development.",
  },
  {
    id: 6,
    title: "Chopin's Nocturnes",
    description: "The complete collection of Frédéric Chopin's beautiful and haunting nocturnes.",
    image: chopinsNocturnes,
    trackCount: 21,
    duration: "2h 45min",
    curator: "Piano Masters Collection",
    detailedContent: "Frédéric Chopin's nocturnes represent some of the most exquisite piano music ever written. Composed throughout his career, these 21 nocturnes showcase Chopin's unique ability to create profound emotional expression through the piano. Each piece features his signature bel canto style, with long, singing melodies supported by delicate accompaniments. The nocturnes range from the dreamy and contemplative to the dramatically intense, reflecting Chopin's emotional depth and technical mastery. This complete collection allows listeners to experience the full evolution of Chopin's nocturne style, from his early works to his mature masterpieces.",
  },
  {
    id: 7,
    title: "Tchaikovsky Complete",
    description: "A comprehensive collection of Pyotr Ilyich Tchaikovsky's orchestral masterpieces.",
    image: tchaikovsky,
    trackCount: 28,
    duration: "5h 20min",
    curator: "Russian Music Foundation",
    detailedContent: "Pyotr Ilyich Tchaikovsky's music combines Russian folk traditions with Western European compositional techniques, creating some of the most emotionally powerful and instantly recognizable works in the classical repertoire. This comprehensive collection includes his six symphonies, his three beloved ballets—'Swan Lake,' 'The Nutcracker,' and 'Sleeping Beauty'—his concertos for piano and violin, and his orchestral fantasies. Tchaikovsky's gift for melody and his ability to convey deep emotion through music have made his works enduring favorites. Each piece showcases his masterful orchestration and his talent for creating memorable, singable themes.",
  },
  {
    id: 8,
    title: "Vivaldi's Concerti",
    description: "The finest concerti by Antonio Vivaldi, including the famous Four Seasons.",
    image: vivaldisConcerti,
    trackCount: 24,
    duration: "3h 30min",
    curator: "Baroque Ensemble",
    detailedContent: "Antonio Vivaldi, known as 'The Red Priest,' composed over 500 concertos during his lifetime, establishing the three-movement concerto form that became standard. This collection features his most celebrated works, including the iconic 'Four Seasons,' which revolutionized program music with its vivid depictions of nature. Also included are his brilliant concertos for various instruments, showcasing his innovative use of ritornello form and his ability to create dramatic contrasts. Vivaldi's concertos are characterized by their energetic rhythms, memorable melodies, and brilliant solo passages, making them among the most accessible and enjoyable works of the Baroque era.",
  },
  {
    id: 9,
    title: "Debussy & Ravel",
    description: "Impressionist masterpieces by Claude Debussy and Maurice Ravel.",
    image: debussyRavel,
    trackCount: 19,
    duration: "3h 5min",
    curator: "French Music Society",
    detailedContent: "Claude Debussy and Maurice Ravel are the two greatest exponents of French Impressionism in music, though both composers rejected this label. This collection features Debussy's atmospheric works like 'Clair de lune,' 'La Mer,' and 'Prelude to the Afternoon of a Faun,' which use harmony and timbre to create dreamlike, evocative soundscapes. Ravel's contributions include his brilliant 'Boléro,' the elegant 'Pavane for a Dead Princess,' and his exquisite 'Daphnis et Chloé.' Both composers revolutionized orchestration and harmony, creating music that suggests rather than states, using subtle colors and textures to paint musical pictures.",
  },
  {
    id: 10,
    title: "Wagner's Epic Works",
    description: "The monumental works of Richard Wagner, featuring selections from his operas.",
    image: wagnersEpicWorks,
    trackCount: 16,
    duration: "4h 45min",
    curator: "Opera House Collection",
    detailedContent: "Richard Wagner revolutionized opera with his concept of Gesamtkunstwerk—total art work—combining music, drama, poetry, and visual elements into unified theatrical experiences. This collection features highlights from his monumental operas, including 'The Ring of the Nibelung' cycle, 'Tristan und Isolde,' 'Die Meistersinger von Nürnberg,' and 'Parsifal.' Wagner's music is characterized by its use of leitmotifs—musical themes associated with characters, objects, or ideas—and his revolutionary harmonic language that pushed tonality to its limits. These works represent some of the most ambitious and influential compositions in the operatic repertoire.",
  },
];

