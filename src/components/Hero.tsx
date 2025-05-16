import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-emerald-50 to-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
              Fashion that <span className="text-emerald-600">respects</span> our planet
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Discover stylish, sustainable clothing that doesn't compromise on ethics. 
              Join us in making conscious fashion choices for a better tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#shop" 
                className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition-colors text-center justify-center"
              >
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#about" 
                className="inline-flex items-center border border-emerald-600 text-emerald-600 px-6 py-3 rounded-md hover:bg-emerald-50 transition-colors text-center justify-center"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 animate-fade-in">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Sustainable Fashion Model" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <p className="text-sm font-medium text-emerald-600">Eco-friendly materials</p>
                <p className="text-xs text-gray-600">Our products reduce water usage by up to 80% compared to conventional fashion.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;