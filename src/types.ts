export interface Species {
  name: string;
  scientificName: string;
  description: string;
  image: string;
  habitat: string;
  status: 'Endangered' | 'Critically Endangered' | 'Vulnerable' | 'Least Concern';
}

export interface Habitat {
  name: string;
  description: string;
  image: string;
  location: string;
}
