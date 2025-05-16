import React, { useEffect, useState } from 'react';
import { Heart, Cake, Gift, Music } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-pink-50">
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-pink-50">
          <div className="relative">
            <div className="cake-container">
              <div className="plate"></div>
              <div className="cake">
                <div className="layer layer-1"></div>
                <div className="layer layer-2"></div>
                <div className="layer layer-3"></div>
                <div className="icing"></div>
                <div className="drip drip1"></div>
                <div className="drip drip2"></div>
                <div className="drip drip3"></div>
                <div className="candle">
                  <div className="flame"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
              <h1 className="text-2xl font-bold text-pink-600 flex items-center">
                <Heart className="h-6 w-6 mr-2" />
                Happy Birthday!
              </h1>
              <div className="flex space-x-4">
                <Cake className="h-6 w-6 text-pink-500" />
                <Gift className="h-6 w-6 text-pink-500" />
                <Music className="h-6 w-6 text-pink-500" />
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Happy Birthday, My Love! 🎂
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Every moment with you is a gift, and today we celebrate the most special person in my life.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">My Love</h3>
                  <p className="text-gray-600">
                    You make every day brighter just by being you.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Cake className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Celebration</h3>
                  <p className="text-gray-600">
                    Today is all about celebrating the amazing person you are.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Gift className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Memories</h3>
                  <p className="text-gray-600">
                    Here's to creating more beautiful memories together.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;