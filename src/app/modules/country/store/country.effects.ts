import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Country } from 'src/app/data/country/schema/country.model';
import { CountryService } from 'src/app/data/country/service/country.service';
import * as countryActions from './country.actions';
import {
  AddCountry,
  AddCountryError,
  AddCountrySuccess,
  GetAllCountriesError,
  GetAllCountriesSuccess,
  GetCountry,
  GetCountryError,
  GetCountrySuccess,
  RemoveCountry,
  RemoveCountryError,
  RemoveCountrySuccess,
  UpdateCountry,
  UpdateCountryError,
  UpdateCountrySuccess
} from './country.actions';


@Injectable()
export class CountryEffects {

  constructor(
    private _actions$: Actions,
    private _countryService: CountryService) { }

  /**
   * Get all countries
   * */
  getAllCountries$: Observable<Action> = createEffect(() => this._actions$
    .pipe(
      ofType(countryActions.GET_COUNTRIES),
      switchMap(() => this._countryService.getCountries()),
      map(countries => new GetAllCountriesSuccess(countries)),
      catchError((err) => [new GetAllCountriesError(err)])
    ));

  /**
   * Get Country
   * */
  getCountry$ = createEffect(() => this._actions$.pipe(
    ofType(countryActions.GET_COUNTRY),
    map((action: GetCountry) => action.payload),
    switchMap(id => this._countryService.getCountry(id)),
    map(country => new GetCountrySuccess(country)),
    catchError((err) => [new GetCountryError(err)])
  ));

  /**
   * Update Country
   * */
  updateCountry$ = createEffect(() => this._actions$.pipe(
    ofType(countryActions.UPDATE_COUNTRY),
    map((action: UpdateCountry) => action.payload),
    switchMap(country => this._countryService.updateCountry(country)),
    map(() => new UpdateCountrySuccess()),
    catchError((err) => [new UpdateCountryError(err)])
  ));

  /**
   * Create Country
   * */ 
  createCountry$ = createEffect(() => this._actions$.pipe(
    ofType(countryActions.CREATE_COUNTRY),
    map((action: AddCountry) => action.payload),
    switchMap(newCountry => this._countryService.addCountry(newCountry)),
    map((response) => new AddCountrySuccess(response.id)),
    catchError((err) => [new AddCountryError(err)])
  ));

  /**
   * Remove Country
   * */ 
  removeCountry$ = createEffect(() => this._actions$.pipe(
    ofType(countryActions.DELETE_COUNTRY),
    map((action: RemoveCountry) => action.payload),
    switchMap(id => this._countryService.deleteCountry(id)),
    map((country: Country) => new RemoveCountrySuccess(country)),
    catchError((err) => [new RemoveCountryError(err)])
  ));


}
