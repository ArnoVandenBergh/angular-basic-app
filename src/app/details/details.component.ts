import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule],
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
    <section class="listing-apply">
      <h2 class="section-heading">Apply ({{housingService.applicationCounter}})</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" formControlName="firstName" />
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" formControlName="lastName" />
        <label for="email">Email</label>
        <input type="email" id="email" formControlName="email" />
        <button type="submit" class="primary">Apply</button>
      </form>
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
  numberOfApplications = 0;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.paramMap.get('id'));
    this.housingService.getHousingLocationById(this.housingLocationId).then((location: Housinglocation) => {
      this.housingLocation = location;
      console.log(this.housingLocation?.photo,'hello');
    }
    )
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
    this.numberOfApplications++;
  }
}
