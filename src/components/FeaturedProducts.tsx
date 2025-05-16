import React from 'react';
import { products } from '../data/products';
import { Droplet, Recycle, Leaf } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  const iconMap: Record<string, JSX.Element> = {
    "Organic": <Leaf className="h-4 w-4 text-emerald-600" />,
    "Water-Saving": <Droplet className="h-4 w-4 text-blue-500" />,
    "Recycled Materials": <Recycle className="h-4 w-4 text-amber-600" />,
  };

  return (
    <section id="shop" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sustainable Collection</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our carefully curated collection of eco-friendly pieces combines style, comfort, and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 6).map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden h-80">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-emerald-600 text-white px-3 py-1 m-2 rounded-md text-sm font-medium">
                  ${product.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.sustainabilityFeatures.slice(0, 3).map((feature, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs"
                    >
                      {iconMap[feature] || <Leaf className="h-3 w-3 mr-1" />}
                      <span className="ml-1">{feature}</span>
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gray-100 hover:bg-emerald-600 hover:text-white text-gray-800 transition-colors py-2 rounded-md font-medium text-center">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-transparent border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors duration-300 rounded-md font-medium">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;