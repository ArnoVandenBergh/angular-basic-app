import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  applicationCounter = 0;
  constructor() { }
  url = 'http://localhost:3000/locations';


  async getHousingAllLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<Housinglocation> {
    const response = await fetch(`${this.url}?id=${id}`);
    const result = (await response.json()) ?? {};
    return result[0];
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application submitted for ${firstName} ${lastName} with email ${email}`);
    this.applicationCounter++;
  }
}
