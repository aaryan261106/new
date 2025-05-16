export interface PropertySearchInput {
  searchType: 'urban' | 'rural';
  propertyId?: string;
  khataNumber?: string;
  ownerName: string;
  identityNumber?: string;
  district: string;
  village?: string;
  ward?: string;
  zone?: string;
  registrationNumber?: string;
  surveyNumber?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface SearchFormProps {
  onSubmit: (data: PropertySearchInput) => void;
  isLoading?: boolean;
}