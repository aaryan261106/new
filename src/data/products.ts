import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Organic Cotton T-Shirt",
    description: "Made from 100% organic cotton, this t-shirt is both comfortable and environmentally friendly.",
    price: 39.99,
    image: "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Tops",
    sustainabilityFeatures: ["Organic", "Water-Saving", "Biodegradable"],
    brand: "EcoWear"
  },
  {
    id: 2,
    name: "Recycled Denim Jeans",
    description: "These stylish jeans are made from recycled denim, reducing waste and resource consumption.",
    price: 89.99,
    image: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Bottoms",
    sustainabilityFeatures: ["Recycled Materials", "Less Water Usage", "Eco-friendly Dyes"],
    brand: "GreenDenim"
  },
  {
    id: 3,
    name: "Hemp Blend Sweater",
    description: "A cozy sweater made from a sustainable hemp and organic cotton blend.",
    price: 79.99,
    image: "https://images.pexels.com/photos/7691168/pexels-photo-7691168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Tops",
    sustainabilityFeatures: ["Hemp", "Organic", "Low Impact"],
    brand: "NatureKnit"
  },
  {
    id: 4,
    name: "Tencel Dress",
    description: "An elegant dress made from Tencel, a sustainable fabric created from wood pulp.",
    price: 129.99,
    image: "https://images.pexels.com/photos/7691221/pexels-photo-7691221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Dresses",
    sustainabilityFeatures: ["Tencel", "Biodegradable", "Closed-Loop Production"],
    brand: "EcoElegance"
  },
  {
    id: 5,
    name: "Recycled Polyester Jacket",
    description: "A durable jacket made from recycled plastic bottles, giving plastic waste a new life.",
    price: 149.99,
    image: "https://images.pexels.com/photos/5384421/pexels-photo-5384421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Outerwear",
    sustainabilityFeatures: ["Recycled Plastic", "Water-Resistant", "Durable"],
    brand: "PlanetProtect"
  },
  {
    id: 6,
    name: "Cork Sandals",
    description: "Comfortable and stylish sandals with cork soles, a renewable and biodegradable material.",
    price: 59.99,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Footwear",
    sustainabilityFeatures: ["Cork", "Biodegradable", "Vegan"],
    brand: "EcoStep"
  }
];