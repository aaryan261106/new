import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, ShoppingBag, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-semibold">EcoChic</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
            <a href="#shop" className="text-gray-700 hover:text-emerald-600 transition-colors">Shop</a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
            <a href="#brands" className="text-gray-700 hover:text-emerald-600 transition-colors">Brands</a>
            <a href="#blog" className="text-gray-700 hover:text-emerald-600 transition-colors">Blog</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button aria-label="Search" className="text-gray-700 hover:text-emerald-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="Shopping Bag" className="text-gray-700 hover:text-emerald-600 transition-colors">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition-colors">
              Sign Up
            </button>
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-700 hover:text-emerald-600 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <a href="#" className="block text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
            <a href="#shop" className="block text-gray-700 hover:text-emerald-600 transition-colors">Shop</a>
            <a href="#about" className="block text-gray-700 hover:text-emerald-600 transition-colors">About</a>
            <a href="#brands" className="block text-gray-700 hover:text-emerald-600 transition-colors">Brands</a>
            <a href="#blog" className="block text-gray-700 hover:text-emerald-600 transition-colors">Blog</a>
            <a href="#contact" className="block text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
            <div className="flex items-center justify-between py-2">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition-colors">
                Sign Up
              </button>
              <div className="flex space-x-4">
                <button aria-label="Search" className="text-gray-700 hover:text-emerald-600 transition-colors">
                  <Search className="h-5 w-5" />
                </button>
                <button aria-label="Shopping Bag" className="text-gray-700 hover:text-emerald-600 transition-colors">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;