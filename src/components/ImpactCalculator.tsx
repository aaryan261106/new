import React, { useState } from 'react';
import { Droplet, Wind, Leaf } from 'lucide-react';

const ImpactCalculator: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState({
    tshirts: 0,
    jeans: 0,
    sweaters: 0
  });

  // Impact values per item (simplified estimates)
  const impact = {
    tshirts: { water: 2700, co2: 5, waste: 0.3 },  // liters, kg, kg
    jeans: { water: 7000, co2: 33, waste: 0.5 },
    sweaters: { water: 5000, co2: 25, waste: 0.4 }
  };

  // Calculate total impact
  const totalImpact = {
    water: selectedItems.tshirts * impact.tshirts.water + 
           selectedItems.jeans * impact.jeans.water + 
           selectedItems.sweaters * impact.sweaters.water,
    co2: selectedItems.tshirts * impact.tshirts.co2 + 
         selectedItems.jeans * impact.jeans.co2 + 
         selectedItems.sweaters * impact.sweaters.co2,
    waste: selectedItems.tshirts * impact.tshirts.waste + 
           selectedItems.jeans * impact.jeans.waste + 
           selectedItems.sweaters * impact.sweaters.waste
  };

  // Calculate savings (assuming sustainable clothes save 50% resources)
  const savings = {
    water: totalImpact.water * 0.5,
    co2: totalImpact.co2 * 0.5,
    waste: totalImpact.waste * 0.5
  };

  const handleChange = (item: keyof typeof selectedItems, value: number) => {
    if (value >= 0) {
      setSelectedItems({
        ...selectedItems,
        [item]: value
      });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Calculate Your Fashion Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the environmental difference when you choose sustainable fashion over conventional alternatives.
            </p>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6 md:p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <label className="block text-gray-700 font-medium mb-2">T-Shirts</label>
                <div className="flex items-center">
                  <button 
                    onClick={() => handleChange('tshirts', selectedItems.tshirts - 1)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-3 py-1 rounded-l"
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={selectedItems.tshirts}
                    onChange={(e) => handleChange('tshirts', parseInt(e.target.value) || 0)}
                    className="w-full text-center py-1 border-t border-b border-gray-200"
                    min="0"
                  />
                  <button 
                    onClick={() => handleChange('tshirts', selectedItems.tshirts + 1)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-3 py-1 rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-md shadow-sm">
                <label className="block text-gray-700 font-medium mb-2">Jeans</label>
                <div className="flex items-center">
                  <button 
                    onClick={() => handleChange('jeans', selectedItems.jeans - 1)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-3 py-1 rounded-l"
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={selectedItems.jeans}
                    onChange={(e) => handleChange('jeans', parseInt(e.target.value) || 0)}
                    className="w-full text-center py-1 border-t border-b border-gray-200"
                    min="0"
                  />
                  <button 
                    onClick={() => handleChange('jeans', selectedItems.jeans + 1)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-3 py-1 rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-md shadow-sm">
                <label className="block text-gray-700 font-medium mb-2">Sweaters</label>
                <div className="flex items-center">
                  <button 
                    onClick={() => handleChange('sweaters', selectedItems.sweaters - 1)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-3 py-1 rounded-l"
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={selectedItems.sweaters}
                    onChange={(e) => handleChange('sweaters', parseInt(e.target.value) || 0)}
                    className="w-full text-center py-1 border-t border-b border-gray-200"
                    min="0"
                  />
                  <button 
                    onClick={() => handleChange('sweaters', selectedItems.sweaters + 1)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-3 py-1 rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Potential Environmental Savings</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <Droplet className="h-8 w-8 text-blue-500 mr-3" />
                  <div>
                    <p className="text-2xl font-bold text-gray-800">{savings.water.toLocaleString()} L</p>
                    <p className="text-sm text-gray-600">Water Saved</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Wind className="h-8 w-8 text-emerald-600 mr-3" />
                  <div>
                    <p className="text-2xl font-bold text-gray-800">{savings.co2.toLocaleString()} kg</p>
                    <p className="text-sm text-gray-600">CO₂ Emissions Reduced</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Leaf className="h-8 w-8 text-amber-600 mr-3" />
                  <div>
                    <p className="text-2xl font-bold text-gray-800">{savings.waste.toLocaleString()} kg</p>
                    <p className="text-sm text-gray-600">Waste Prevented</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 italic">
              These estimations are based on industry averages. Actual impact may vary based on specific manufacturing processes, materials, and other factors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCalculator;