export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  sustainabilityFeatures: string[];
  brand: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export interface Brand {
  id: number;
  name: string;
  description: string;
  logo: string;
  values: string[];
  featured: boolean;
}