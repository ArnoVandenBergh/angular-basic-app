import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor() { }
  readonly baseUrl = 'https://picsum.photos/seed/picsum';
  url = 'http://localhost:3000/locations';


  async getHousingAllLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<Housinglocation> {
    const response = await fetch(`${this.url}/${id}`);
    return (await response.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application submitted for ${firstName} ${lastName} with email ${email}`);
  }
}
