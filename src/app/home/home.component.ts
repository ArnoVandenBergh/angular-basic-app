import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city" />
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
      <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
  </section>
`,  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://picsum.photos/seed/picsum';

housingLocationList: Housinglocation[] = [
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
}
