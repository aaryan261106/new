import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your API
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-emerald-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Sustainable Community</h2>
          <p className="text-lg mb-8 text-emerald-50">
            Subscribe to our newsletter for sustainable fashion tips, exclusive offers, and updates on our latest collections.
          </p>
          
          {submitted ? (
            <div className="bg-emerald-500 text-white p-4 rounded-md max-w-md mx-auto">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm mt-1">You'll receive our next newsletter in your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-4 py-3 rounded-md text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-emerald-600 px-6 py-3 rounded-md font-medium hover:bg-emerald-50 transition-colors flex items-center justify-center whitespace-nowrap"
              >
                Subscribe
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          )}
          
          <p className="text-xs mt-4 text-emerald-100">
            By subscribing, you agree to our Privacy Policy and consent to receive marketing communications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;