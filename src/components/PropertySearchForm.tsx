import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Search, MapPin, User, FileText, Building } from 'lucide-react';
import { PropertySearchInput, SearchFormProps } from '../types/property';

const PropertySearchForm: React.FC<SearchFormProps> = ({ onSubmit, isLoading }) => {
  const [searchType, setSearchType] = useState<'urban' | 'rural'>('urban');
  const { register, handleSubmit, formState: { errors } } = useForm<PropertySearchInput>();

  const onFormSubmit = (data: PropertySearchInput) => {
    onSubmit({ ...data, searchType });
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-center mb-6 space-x-4">
        <button
          className={`px-6 py-2 rounded-full ${
            searchType === 'urban'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          } transition-colors`}
          onClick={() => setSearchType('urban')}
          type="button"
        >
          <Building className="inline-block w-4 h-4 mr-2" />
          Urban Property
        </button>
        <button
          className={`px-6 py-2 rounded-full ${
            searchType === 'rural'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          } transition-colors`}
          onClick={() => setSearchType('rural')}
          type="button"
        >
          <MapPin className="inline-block w-4 h-4 mr-2" />
          Rural Land
        </button>
      </div>

      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Property Identifier Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Property Details</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {searchType === 'urban' ? 'Property ID' : 'Khata Number'}
              </label>
              <input
                type="text"
                {...register(searchType === 'urban' ? 'propertyId' : 'khataNumber', {
                  required: true
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={searchType === 'urban' ? 'Enter Property ID' : 'Enter Khata Number'}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Registration/Document Number
              </label>
              <input
                type="text"
                {...register('registrationNumber')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter registration number"
              />
            </div>

            {searchType === 'rural' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Survey/Subdivision Number
                </label>
                <input
                  type="text"
                  {...register('surveyNumber')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter survey number"
                />
              </div>
            )}
          </div>

          {/* Owner Details Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Owner Details</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Owner's Full Name
              </label>
              <input
                type="text"
                {...register('ownerName', { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter owner's name"
              />
              {errors.ownerName && (
                <p className="mt-1 text-sm text-red-600">Owner name is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Aadhaar/PAN Number (Optional)
              </label>
              <input
                type="text"
                {...register('identityNumber')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter Aadhaar or PAN"
              />
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Location Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                District
              </label>
              <input
                type="text"
                {...register('district', { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter district"
              />
              {errors.district && (
                <p className="mt-1 text-sm text-red-600">District is required</p>
              )}
            </div>

            {searchType === 'rural' ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Village
                </label>
                <input
                  type="text"
                  {...register('village')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter village"
                />
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ward
                  </label>
                  <input
                    type="text"
                    {...register('ward')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter ward"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Zone
                  </label>
                  <input
                    type="text"
                    {...register('zone')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter zone"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className={`
              flex items-center px-6 py-3 bg-blue-600 text-white rounded-md
              ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}
              transition-colors
            `}
          >
            <Search className="w-5 h-5 mr-2" />
            {isLoading ? 'Searching...' : 'Search Property'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertySearchForm;