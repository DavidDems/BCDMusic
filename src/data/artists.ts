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
};

// Declare the artists
export const artists: Artist[] = [
  {
    id: 1,
    name: "Hilary Hahn",
    instrument: "Violin",
    image: hilaryHahn,
    bio: "Grammy Award-winning violinist known for her technical precision and expressive interpretations.",
  },
  {
    id: 2,
    name: "Yo-Yo Ma",
    instrument: "Cello",
    image: yoYoMa,
    bio: "Renowned cellist and multiple Grammy Award winner, celebrated for his virtuosity and humanitarian work.",
  },
  {
    id: 3,
    name: "Lang Lang",
    instrument: "Piano",
    image: langLang,
    bio: "Internationally acclaimed pianist known for his dynamic performances and charismatic stage presence.",
  },
  {
    id: 4,
    name: "Yuja Wang",
    instrument: "Piano",
    image: yujaWang,
    bio: "Pianist celebrated for her technical brilliance and innovative interpretations of classical repertoire.",
  },
  {
    id: 5,
    name: "Anne-Sophie Mutter",
    instrument: "Violin",
    image: anneSophieMutter,
    bio: "German violinist with an extensive discography and renowned for her interpretations of contemporary works.",
  },
  {
    id: 6,
    name: "Itzhak Perlman",
    instrument: "Violin",
    image: itzhakPerlman,
    bio: "Legendary violinist, conductor, and teacher, winner of multiple Grammy Awards and Presidential Medal of Freedom.",
  },
  {
    id: 7,
    name: "Gautier Capuçon",
    instrument: "Cello",
    image: gautierCapucon,
    bio: "French cellist known for his passionate performances and collaborations with leading orchestras worldwide.",
  },
  {
    id: 8,
    name: "Daniil Trifonov",
    instrument: "Piano",
    image: daniilTrifonov,
    bio: "Russian pianist and composer, winner of the Tchaikovsky Competition, celebrated for his poetic interpretations.",
  },
  {
    id: 9,
    name: "Janine Jansen",
    instrument: "Violin",
    image: janineJansen,
    bio: "Dutch violinist known for her expressive performances and commitment to chamber music.",
  },
  {
    id: 10,
    name: "Alisa Weilerstein",
    instrument: "Cello",
    image: alisaWeilerstein,
    bio: "American cellist celebrated for her emotional depth and technical mastery in both classical and contemporary works.",
  },
  {
    id: 11,
    name: "Leonidas Kavakos",
    instrument: "Violin",
    image: leonidasKavakos,
    bio: "Greek violinist and conductor, winner of the Sibelius Competition, known for his interpretations of romantic repertoire.",
  },
  {
    id: 12,
    name: "Seong-Jin Cho",
    instrument: "Piano",
    image: seongJinCho,
    bio: "South Korean pianist, winner of the Chopin Competition, praised for his sensitive and refined playing.",
  },
];

