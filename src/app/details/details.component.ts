import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: `
  <article>
    <img 
      class="listing-photo"
      [src]="housingLocation?.photo"
      alt="Photo of {{housingLocation?.name}}"
      crossorigin
    />
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{housingLocation?.availableUnits}}</li>
        <li>Wifi: {{housingLocation?.wifi ? 'Yes' : 'No'}}</li>
        <li>Laundry: {{housingLocation?.laundry ? 'Yes' : 'No'}}</li>
      </ul>
    </section>
  </article>
`,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: Housinglocation | undefined;

  housingLocationId = -1;
  constructor() {
    this.housingLocationId = Number(this.route.snapshot.paramMap.get('id'));
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
  }
}
