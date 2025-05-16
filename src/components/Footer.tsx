import React from 'react';
import { Leaf, Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-7 w-7 text-emerald-500" />
              <span className="text-xl font-semibold text-white">EcoChic</span>
            </div>
            <p className="mb-4">
              On a mission to make sustainable fashion accessible, stylish, and impactful. Join us in changing the fashion industry for the better.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Women</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Men</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Ethical Practices</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Materials Guide</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" />
                <span>123 Green Street, Eco City, 10001</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-500 mr-2" />
                <a href="mailto:hello@ecochic.com" className="hover:text-emerald-500 transition-colors">hello@ecochic.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-500 mr-2" />
                <a href="tel:+11234567890" className="hover:text-emerald-500 transition-colors">+1 (123) 456-7890</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} EcoChic. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-emerald-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-emerald-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm hover:text-emerald-500 transition-colors">Shipping</a>
              <a href="#" className="text-sm hover:text-emerald-500 transition-colors">Returns</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;