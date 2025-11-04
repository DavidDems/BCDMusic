// Import the images for the events
import eventImage1 from '../assets/event_image_1.jpg';
import eventImage2 from '../assets/event_image_2.jpg';
import eventImage3 from '../assets/event_image_3.jpg';

// Define the Event interface
export interface Event {
  id: number;
  date: string;
  title: string;
  venue: string;
  location: string;
  description: string;
  image: string;
  performers?: string[];
}

// Declare the upcoming events
export const upcomingEvents: Event[] = [
  {
    id: 1,
    date: "2025-12-15",
    title: "New Year's Gala Concert",
    venue: "Carnegie Hall",
    location: "New York, NY",
    description: "Join us for a spectacular evening featuring the New York Philharmonic performing works by Tchaikovsky, Strauss, and more. A celebration of the new year with classical favorites.",
    image: eventImage1,
    performers: ["New York Philharmonic", "Renée Fleming", "Lang Lang"],
  },
  {
    id: 2,
    date: "2025-12-22",
    title: "Holiday Pops Spectacular",
    venue: "Royal Albert Hall",
    location: "London, UK",
    description: "Experience the magic of the holidays with the London Symphony Orchestra performing beloved seasonal classics and carols. A festive evening for the whole family.",
    image: eventImage2,
    performers: ["London Symphony Orchestra", "Christmas Choir"],
  },
  {
    id: 3,
    date: "2026-01-10",
    title: "Viennese New Year Concert",
    venue: "Musikverein",
    location: "Vienna, Austria",
    description: "The annual tradition continues with the Vienna Philharmonic's New Year Concert, featuring waltzes, polkas, and operetta selections in the grand ballroom.",
    image: eventImage3,
    performers: ["Vienna Philharmonic", "Vienna Boys' Choir"],
  },
];

