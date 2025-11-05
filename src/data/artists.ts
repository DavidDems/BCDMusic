// Import the images for the artists
import hilaryHahn from '../assets/hilary_hahn.jpg';
import yoYoMa from '../assets/yo_yo_ma.webp';
import langLang from '../assets/lang_lang.jpg';
import yujaWang from '../assets/yuja_wang.webp';
import anneSophieMutter from '../assets/anne_sophie_mutter.jpg';
import itzhakPerlman from '../assets/itzhak_perlman.jpg';
import gautierCapucon from '../assets/gautier_capucon.jpg';
import daniilTrifonov from '../assets/daniil_trifonov.jpg';
import janineJansen from '../assets/janine_jansen.jpg';
import alisaWeilerstein from '../assets/alisa_weilerstein.webp';
import leonidasKavakos from '../assets/leonidas_kavakos.jpg';
import seongJinCho from '../assets/seong_jin_cho.avif';

// Define the Artist interface
export type Artist = {
  id: number;
  name: string;
  instrument: string;
  image: string;
  bio?: string;
  detailedContent?: string;
};

// Declare the artists
export const artists: Artist[] = [
  {
    id: 1,
    name: "Hilary Hahn",
    instrument: "Violin",
    image: hilaryHahn,
    bio: "Grammy Award-winning violinist known for her technical precision and expressive interpretations.",
    detailedContent: "Hilary Hahn is one of the most celebrated violinists of our time, known for her exceptional technical mastery and profound musical insight. A three-time Grammy Award winner, Hahn has captivated audiences worldwide with her interpretations spanning from Baroque to contemporary works. She began her violin studies at age four and made her major orchestral debut at age eleven. Throughout her career, Hahn has collaborated with leading orchestras and conductors, recorded extensively, and championed new music through her commissioning projects. Her commitment to musical education and outreach has made her a beloved figure in the classical music community.",
  },
  {
    id: 2,
    name: "Yo-Yo Ma",
    instrument: "Cello",
    image: yoYoMa,
    bio: "Renowned cellist and multiple Grammy Award winner, celebrated for his virtuosity and humanitarian work.",
    detailedContent: "Yo-Yo Ma stands as one of the greatest cellists in history, with a career spanning over five decades. An 18-time Grammy Award winner, Ma has transcended classical music boundaries, collaborating with artists across genres and cultures. His Silk Road Project exemplifies his commitment to cultural exchange and understanding. Beyond his technical brilliance, Ma's humanitarian efforts and advocacy for arts education have made him a global cultural ambassador. His interpretations of Bach's cello suites are considered definitive, and his ability to connect with audiences through music has earned him recognition including the Presidential Medal of Freedom and the National Medal of Arts.",
  },
  {
    id: 3,
    name: "Lang Lang",
    instrument: "Piano",
    image: langLang,
    bio: "Internationally acclaimed pianist known for his dynamic performances and charismatic stage presence.",
    detailedContent: "Lang Lang has revolutionized classical music, bringing unprecedented energy and accessibility to the piano. His dynamic performances and charismatic stage presence have attracted millions of new listeners to classical music. A child prodigy who began playing at age three, Lang Lang has performed at the world's most prestigious venues and with leading orchestras. Beyond performance, he founded the Lang Lang International Music Foundation to inspire the next generation of musicians. His recordings span the classical repertoire, and his collaborations with pop artists have bridged musical worlds, making him one of the most influential classical musicians of the 21st century.",
  },
  {
    id: 4,
    name: "Yuja Wang",
    instrument: "Piano",
    image: yujaWang,
    bio: "Pianist celebrated for her technical brilliance and innovative interpretations of classical repertoire.",
    detailedContent: "Yuja Wang has established herself as one of the most exciting and technically formidable pianists of her generation. Known for her dazzling technique, fearless approach to challenging repertoire, and distinctive musical voice, Wang has captivated audiences worldwide. Her performances of Rachmaninoff, Prokofiev, and other virtuosic composers showcase her extraordinary abilities, while her interpretations reveal deep musical understanding. Wang's collaborations with major orchestras and conductors have solidified her reputation, and her innovative concert programming continues to push boundaries in classical music presentation.",
  },
  {
    id: 5,
    name: "Anne-Sophie Mutter",
    instrument: "Violin",
    image: anneSophieMutter,
    bio: "German violinist with an extensive discography and renowned for her interpretations of contemporary works.",
    detailedContent: "Anne-Sophie Mutter is one of the most distinguished violinists of our era, with a career spanning over four decades. A four-time Grammy Award winner, Mutter has championed contemporary music throughout her career, premiering works by composers including Penderecki, Lutosławski, and Dutilleux. Her extensive discography includes over 100 recordings, covering the entire violin repertoire. Beyond her technical mastery and distinctive tone, Mutter is known for her commitment to mentoring young musicians through her foundation, which supports talented young string players. Her interpretations combine intellectual rigor with emotional depth, making her performances unforgettable experiences.",
  },
  {
    id: 6,
    name: "Itzhak Perlman",
    instrument: "Violin",
    image: itzhakPerlman,
    bio: "Legendary violinist, conductor, and teacher, winner of multiple Grammy Awards and Presidential Medal of Freedom.",
    detailedContent: "Itzhak Perlman is one of the most beloved and respected violinists in history. A 16-time Grammy Award winner and recipient of the Presidential Medal of Freedom, Perlman's career has spanned over six decades. His warm, singing tone and masterful technique have made his performances of works by composers from Bach to contemporary music universally admired. Beyond his performing career, Perlman is a dedicated teacher and conductor, and his advocacy for disability rights has inspired millions. His appearances on television shows like Sesame Street have brought classical music to new audiences, making him one of the most recognizable classical musicians in the world.",
  },
  {
    id: 7,
    name: "Gautier Capuçon",
    instrument: "Cello",
    image: gautierCapucon,
    bio: "French cellist known for his passionate performances and collaborations with leading orchestras worldwide.",
    detailedContent: "Gautier Capuçon has emerged as one of the leading cellists of his generation, known for his passionate, expressive playing and technical brilliance. The French cellist has collaborated with the world's finest orchestras and conductors, bringing his distinctive voice to the entire cello repertoire. His recordings span from the Baroque to contemporary works, and his chamber music collaborations are particularly celebrated. Capuçon's performances are marked by their emotional intensity and musical integrity, making him a favorite among audiences and critics alike. His dedication to music education and support for young musicians continues to shape the future of classical music.",
  },
  {
    id: 8,
    name: "Daniil Trifonov",
    instrument: "Piano",
    image: daniilTrifonov,
    bio: "Russian pianist and composer, winner of the Tchaikovsky Competition, celebrated for his poetic interpretations.",
    detailedContent: "Daniil Trifonov has established himself as one of the most remarkable pianists of his generation, known for his poetic interpretations and extraordinary technical capabilities. Winner of the prestigious Tchaikovsky Competition and a Grammy Award winner, Trifonov possesses a rare combination of technical mastery and deep musical insight. Beyond his performing career, he is also a composer, bringing a unique perspective to his interpretations. His recordings of Rachmaninoff, Chopin, and other Romantic composers are particularly acclaimed, revealing new layers of meaning in familiar works. Trifonov's performances are celebrated for their intellectual depth and emotional resonance.",
  },
  {
    id: 9,
    name: "Janine Jansen",
    instrument: "Violin",
    image: janineJansen,
    bio: "Dutch violinist known for her expressive performances and commitment to chamber music.",
    detailedContent: "Janine Jansen is celebrated for her expressive, deeply personal interpretations and her exceptional versatility across musical genres. The Dutch violinist has built a reputation for performances that combine technical precision with emotional authenticity. Her commitment to chamber music has led to collaborations with some of the world's finest musicians, and her recordings showcase her ability to bring fresh perspectives to both well-known and lesser-known works. Jansen's performances are marked by their intensity and musical honesty, making her one of the most compelling violinists of her generation.",
  },
  {
    id: 10,
    name: "Alisa Weilerstein",
    instrument: "Cello",
    image: alisaWeilerstein,
    bio: "American cellist celebrated for her emotional depth and technical mastery in both classical and contemporary works.",
    detailedContent: "Alisa Weilerstein has distinguished herself as one of the most expressive and technically accomplished cellists of her generation. Her performances are characterized by their emotional depth, technical mastery, and musical intelligence. The American cellist has been particularly praised for her interpretations of both classical and contemporary repertoire, bringing the same commitment and insight to works spanning centuries. A MacArthur Fellow, Weilerstein's artistry extends beyond traditional boundaries, and her collaborations with major orchestras and chamber music groups have established her as a leading voice in classical music.",
  },
  {
    id: 11,
    name: "Leonidas Kavakos",
    instrument: "Violin",
    image: leonidasKavakos,
    bio: "Greek violinist and conductor, winner of the Sibelius Competition, known for his interpretations of romantic repertoire.",
    detailedContent: "Leonidas Kavakos is recognized as one of the most distinguished violinists of his generation, known for his authoritative interpretations and exceptional technique. Winner of the prestigious Sibelius Competition, the Greek violinist has established himself as both a performer and conductor. His performances are marked by their intellectual rigor and emotional authenticity, and his recordings of the complete Beethoven and Brahms sonatas are considered reference recordings. Kavakos's commitment to musical integrity and his ability to illuminate the structure and meaning of works have made him a favorite among audiences and critics worldwide.",
  },
  {
    id: 12,
    name: "Seong-Jin Cho",
    instrument: "Piano",
    image: seongJinCho,
    bio: "South Korean pianist, winner of the Chopin Competition, praised for his sensitive and refined playing.",
    detailedContent: "Seong-Jin Cho has emerged as one of the most exciting young pianists on the international stage. His victory at the prestigious Chopin Competition launched his career, and his sensitive, refined playing has since captivated audiences worldwide. The South Korean pianist is particularly celebrated for his interpretations of Chopin, bringing both technical mastery and deep understanding to the composer's works. Cho's performances are marked by their clarity, musicality, and emotional restraint, allowing the music to speak for itself. His growing discography and collaborations with leading orchestras demonstrate his rising prominence in the classical music world.",
  },
];

