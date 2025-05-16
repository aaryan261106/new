import { Brand } from '../types';

export const brands: Brand[] = [
  {
    id: 1,
    name: "EcoWear",
    description: "Pioneering sustainable basics using only organic and recycled materials with transparent supply chains.",
    logo: "https://images.pexels.com/photos/6567535/pexels-photo-6567535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    values: ["Carbon-Neutral", "Fair Trade", "Organic Materials"],
    featured: true
  },
  {
    id: 2,
    name: "GreenDenim",
    description: "Revolutionizing denim production with water-saving techniques and recycled materials.",
    logo: "https://images.pexels.com/photos/7319158/pexels-photo-7319158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    values: ["Water Conservation", "Recycled Materials", "Ethical Labor"],
    featured: true
  },
  {
    id: 3,
    name: "NatureKnit",
    description: "Artisanal knitwear created using natural fibers and traditional crafting techniques.",
    logo: "https://images.pexels.com/photos/5693891/pexels-photo-5693891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    values: ["Natural Fibers", "Artisanal Craft", "Small Batch"],
    featured: false
  },
  {
    id: 4,
    name: "EcoElegance",
    description: "Luxury sustainable fashion that proves style and sustainability can go hand in hand.",
    logo: "https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    values: ["Luxury", "Innovative Materials", "Zero Waste"],
    featured: true
  }
];