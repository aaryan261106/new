import React from 'react';
import { Leaf, Droplet, Recycle, Heart, Shield, Wind } from 'lucide-react';

const SustainabilityFeatures: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="h-10 w-10 text-emerald-600" />,
      title: "Organic Materials",
      description: "Our organic materials are grown without harmful pesticides or synthetic fertilizers, making them better for farmers, you, and the planet."
    },
    {
      icon: <Droplet className="h-10 w-10 text-blue-500" />,
      title: "Water Conservation",
      description: "Our production processes save thousands of gallons of water compared to conventional methods, preserving this precious resource."
    },
    {
      icon: <Recycle className="h-10 w-10 text-amber-600" />,
      title: "Recycled Fabrics",
      description: "We transform plastic bottles and textile waste into beautiful, durable fabrics, giving new life to materials that would otherwise end up in landfills."
    },
    {
      icon: <Heart className="h-10 w-10 text-rose-500" />,
      title: "Ethical Labor",
      description: "We ensure fair wages and safe working conditions throughout our supply chain, valuing the people who make our clothes."
    },
    {
      icon: <Shield className="h-10 w-10 text-purple-600" />,
      title: "Chemical-Free",
      description: "Our dyeing and finishing processes avoid harmful chemicals, protecting waterways and making our clothes safer for sensitive skin."
    },
    {
      icon: <Wind className="h-10 w-10 text-sky-500" />,
      title: "Carbon Reduction",
      description: "We're committed to reducing our carbon footprint through efficient logistics, renewable energy, and carbon offset programs."
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Sustainable Fashion</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to sustainability goes beyond trendy buzzwords. Here's how we're making a real difference:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-emerald-600 mb-2">80%</p>
              <p className="text-gray-600">Water Saved vs. Conventional Fashion</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-emerald-600 mb-2">50+</p>
              <p className="text-gray-600">Recycled Plastic Bottles Per Jacket</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-emerald-600 mb-2">100%</p>
              <p className="text-gray-600">Fair Trade Certified Factories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityFeatures;