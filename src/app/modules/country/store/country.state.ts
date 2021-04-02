import { Country } from 'src/app/data/country/schema/country.model';

export interface CountryState {
    data: Country[];
    selected: any;
    action: string;
    done: boolean;
    error?: any;
  }