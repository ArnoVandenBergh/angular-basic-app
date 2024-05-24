import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city" #filter/>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
      <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
  </section>
`, styleUrl: './home.component.css'
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  housingLocationList: Housinglocation[] = [];
  filteredLocationList: Housinglocation[] = [];

  constructor() {
    this.housingService.getHousingAllLocations( ).then((locations: Housinglocation[]) => {
      this.housingLocationList = locations;
      this.filteredLocationList = this.housingLocationList;
    }
    );
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(city: string) {
    if (!city) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(location => location.city.toLowerCase().includes(city.toLowerCase()));
  }
    

}
