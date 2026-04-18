import { Species, Habitat } from './types';

export const TURTLE_SPECIES: Species[] = [
  {
    name: 'Green Sea Turtle',
    scientificName: 'Chelonia mydas',
    description: 'The green sea turtle is the only herbivore among the different species. They are named for the greenish color of their cartilage and fat, not their shells.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000',
    habitat: 'Tropical and subtropical coastal waters',
    status: 'Endangered'
  },
  {
    name: 'Hawksbill Turtle',
    scientificName: 'Eretmochelys imbricata',
    description: 'Found in the tropical oceans of the world, Hawksbills are named for their narrow, pointed beak and specialized diet of sponges.',
    image: 'https://images.unsplash.com/photo-1591841334810-7f287e0767be?auto=format&fit=crop&q=80&w=1000',
    habitat: 'Coral Reefs',
    status: 'Critically Endangered'
  },
  {
    name: 'Leatherback Turtle',
    scientificName: 'Dermochelys coriacea',
    description: 'The largest of all living turtles and the only one without a hard shell. Its shell is a layer of thin, tough, rubbery skin, strengthened by thousands of tiny bone plates.',
    image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=1000',
    habitat: 'Open Ocean',
    status: 'Vulnerable'
  },
  {
    name: 'Loggerhead Turtle',
    scientificName: 'Caretta caretta',
    description: 'Named for their large heads that support powerful jaw muscles, allowing them to crush hard-shelled prey like clams and sea urchins.',
    image: 'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=1000',
    habitat: 'Subtropical and temperate coastal waters',
    status: 'Vulnerable'
  }
];

export const HABITATS: Habitat[] = [
  {
    name: 'Coral Reefs',
    description: 'Often called the "rainforests of the sea", coral reefs provide essential feeding and shelter grounds for hawksbill and green sea turtles.',
    image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&q=80&w=1000',
    location: 'Tropical Indo-Pacific and Atlantic'
  },
  {
    name: 'Nesting Beaches',
    description: 'Soft, sandy beaches are crucial for sea turtles to lay their eggs. Every turtle returns to the same region where it was hatched.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000',
    location: 'Global coastal regions'
  },
  {
    name: 'Open Ocean',
    description: 'Leatherbacks spend most of their lives in the open ocean, migrating thousands of miles between feeding and nesting grounds.',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=1000',
    location: 'Pelagic zones worldwide'
  }
];
