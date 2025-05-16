import React from 'react';
import { brands } from '../data/brands';
import { CheckCircle } from 'lucide-react';

const FeaturedBrands: React.FC = () => {
  const featuredBrands = brands.filter(brand => brand.featured);

  return (
    <section id="brands" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Ethical Brands</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with brands that share our commitment to sustainability and ethical practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBrands.map((brand) => (
            <div 
              key={brand.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="h-40 bg-gray-50 flex items-center justify-center p-4">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-h-full max-w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{brand.name}</h3>
                <p className="text-gray-600 mb-4">{brand.description}</p>
                
                <h4 className="text-sm font-medium text-gray-700 mb-2">Values:</h4>
                <ul className="space-y-2 mb-4">
                  {brand.values.map((value, index) => (
                    <li key={index} className="flex items-center text-gray-600 text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      {value}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gray-100 hover:bg-emerald-600 hover:text-white text-gray-800 transition-colors py-2 rounded-md font-medium text-center">
                  View Brand
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-transparent border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors duration-300 rounded-md font-medium">
            View All Brands
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;