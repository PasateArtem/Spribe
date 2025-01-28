import { Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Country, State, City }  from 'country-state-city';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './address.component.html',
  styleUrls: ['../address/address.component.scss'],
})

export class AddressComponent {
  @Input() formGroup!: FormGroup;

  countries = Country.getAllCountries();
  states: any[] = [];
  cities: any[] = [];

  selectedCountry: any = null;
  selectedState: any = null;
  selectedCity: any = null;

  onCountryChange(event: Event): void {
    const country = JSON.parse((event.target as HTMLSelectElement).value);
    this.states = State.getStatesOfCountry(country.isoCode);
    this.selectedCountry = country;
    this.selectedState = null;
    this.cities = [];
    this.selectedCity = null;
  }

  onStateChange(event: Event): void {
    const state = JSON.parse((event.target as HTMLSelectElement).value);
    this.cities = City.getCitiesOfState(this.selectedCountry.isoCode, state.isoCode);
    this.selectedState = state;
    this.selectedCity = null;
  }

  onCityChange(event: Event): void {
    this.selectedCity = JSON.parse((event.target as HTMLSelectElement).value);
  }
}
