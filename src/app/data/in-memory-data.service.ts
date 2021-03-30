import { Injectable } from '@angular/core';
import { Countries } from './country/mockup-data/countries';
import { Country } from './country/schema/country.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  countries: Country[] = Countries;
  
  constructor() { }

  createDb() {
    return {
      countries: this.countries
    }
  }
}
