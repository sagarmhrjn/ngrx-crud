import { Action } from '@ngrx/store';
import { Country } from '../../../data/country/schema/country.model'

export const GET_COUNTRIES = '[ALL] Countries';
export const GET_COUNTRIES_SUCCESS = '[ALL] Countries Success';
export const GET_COUNTRIES_ERROR = '[ALL] Countries Error';

export const CREATE_COUNTRY = '[CREATE] Country';
export const CREATE_COUNTRY_SUCCESS = '[CREATE] Country Success';
export const CREATE_COUNTRY_ERROR = '[CREATE] Country Error';

export const GET_COUNTRY = '[GET] Country';
export const GET_COUNTRY_SUCCESS = '[GET] Country Success';
export const GET_COUNTRY_ERROR = '[GET] Country Error';

export const UPDATE_COUNTRY = '[UPDATE] Country';
export const UPDATE_COUNTRY_SUCCESS = '[UPDATE] Country Success';
export const UPDATE_COUNTRY_ERROR = '[UPDATE] Country Error';

export const DELETE_COUNTRY = '[DELETE] Country';
export const DELETE_COUNTRY_SUCCESS = '[DELETE] Country Success';
export const DELETE_COUNTRY_ERROR = '[DELETE] Country Error';

/****************************************
 * GET all the countries
 ****************************************/
export class GetAllCountries implements Action {
  readonly type = GET_COUNTRIES;
}

export class GetAllCountriesSuccess implements Action {
  readonly type = GET_COUNTRIES_SUCCESS;

  constructor(public payload: Country[]) {
  }
}

export class GetAllCountriesError implements Action {
  readonly type = GET_COUNTRIES_ERROR;

  constructor(public payload: Error) {
  }
}

/****************************************
 * GET country by id
 ****************************************/
export class GetCountry implements Action {
  readonly type = GET_COUNTRY;

  constructor(public payload: string) {
  }
}

export class GetCountrySuccess implements Action {
  readonly type = GET_COUNTRY_SUCCESS;

  constructor(public payload: Country) {
  }
}

export class GetCountryError implements Action {
  readonly type = GET_COUNTRY_ERROR;

  constructor(public payload: Error) {
  }
}

/****************************************
 * ADD new country
 ****************************************/
export class AddCountry implements Action {
  readonly type = CREATE_COUNTRY;

  constructor(public payload: Country) {
  }
}

export class AddCountrySuccess implements Action {
  readonly type = CREATE_COUNTRY_SUCCESS;

  constructor(public payload: string) {
  }
}

export class AddCountryError implements Action {
  readonly type = CREATE_COUNTRY_ERROR;

  constructor(public payload: Error) {
  }
}

/****************************************
 * REMOVE a country by id
 ****************************************/
export class RemoveCountry implements Action {
  readonly type = DELETE_COUNTRY;

  constructor(public payload: string) {
  }
}

export class RemoveCountrySuccess implements Action {
  readonly type = DELETE_COUNTRY_SUCCESS;

  constructor(public payload: Country) {
  }
}

export class RemoveCountryError implements Action {
  readonly type = DELETE_COUNTRY_ERROR;

  constructor(public payload: Error) {
  }
}

/****************************************
 * UPDATE country by id
 ****************************************/
export class UpdateCountry implements Action {
  readonly type = UPDATE_COUNTRY;

  constructor(public payload: Country) {
  }
}

export class UpdateCountrySuccess implements Action {
  readonly type = UPDATE_COUNTRY_SUCCESS;
}

export class UpdateCountryError implements Action {
  readonly type = UPDATE_COUNTRY_ERROR;

  constructor(public payload: Error) {
  }


}
