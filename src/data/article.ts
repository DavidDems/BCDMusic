import articleImage from '../assets/article_image.jpg';

// Define the Article interface
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

// Declare the featured article
export const featuredArticle: Article = {
  id: 1,
  title: "The Resurgence of Classical Music in Modern Cinema",
  excerpt: "Classical music has found a new home in contemporary film, with composers and directors rediscovering the emotional power of orchestral scores. From psychological thrillers to epic dramas, classical compositions are enhancing cinematic storytelling in unprecedented ways.",
  content: "In recent years, we've witnessed a remarkable renaissance of classical music in cinema. Filmmakers are increasingly turning to orchestral compositions to create depth, emotion, and atmosphere in their narratives. This trend represents more than just a stylistic choice—it's a recognition of classical music's timeless ability to convey complex human emotions and elevate storytelling to new heights. The integration of classical works into modern films has introduced new generations to the masters of composition, creating a bridge between centuries-old art forms and contemporary entertainment.",
  author: "Sarah Mitchell",
  date: "2025-11-15",
  image: articleImage,
  category: "Culture & Arts",
};

