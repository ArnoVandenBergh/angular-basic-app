import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }
  readonly baseUrl = 'https://picsum.photos/seed/picsum';

  housingLocationList: Housinglocation[] = [
    {
      id: 0,
      name: 'The Enclave',
      city: 'Phoenix',
      state: 'AZ',
      photo: `${this.baseUrl}/200/300`,
      availableUnits: 3,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'The Enclave',
      city: 'Phoenix',
      state: 'AZ',
      photo: `${this.baseUrl}/200/300`,
      availableUnits: 3,
      wifi: true,
      laundry: true
    },
    {
      id: 2,
      name: 'Metropolitan Tower',
      city: 'Seattle',
      state: 'WA',
      photo: `${this.baseUrl}/200/300`,
      availableUnits: 0,
      wifi: true,
      laundry: false
    },
    {
      id: 3,
      name: 'The Mayfair',
      city: 'New York',
      state: 'NY',
      photo: `${this.baseUrl}/200/300`,
      availableUnits: 1,
      wifi: false,
      laundry: true
    },
    {
      id: 4,
      name: 'The Reserve',
      city: 'Los Angeles',
      state: 'CA',
      photo: `${this.baseUrl}/200/300`,
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 5,
      name: 'The Ritz',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/200/300`,
      availableUnits: 0,
      wifi: false,
      laundry: false
    },
    {
      id: 6,
      name: 'The Grand',
      city: 'Miami',
      state: 'FL',
      photo: `${this.baseUrl}/200/300`,
      availableUnits: 3,
      wifi: true,
      laundry: true
    }
  ];

  getHousingAllLocations(): Housinglocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): Housinglocation {
    return this.housingLocationList.find(h => h.id === id)!;
  }
}
