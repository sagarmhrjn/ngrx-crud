import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { handleError } from '../../error-handler';
import { Country } from '../schema/country.model';
import { tap, catchError, map } from 'rxjs/operators';
import { httpOptions } from '../../http-options';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  apiurl = 'api/countries';

  constructor(private http: HttpClient) { }

  /**
   * Get Countries
   */
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiurl)
      .pipe(
        tap(data => console.log(data)),
        catchError(handleError)
      );
  }

  /**
   * Get Country by id
   * */
  getCountry(id: string): Observable<Country> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<Country>(url)
      .pipe(
        catchError(handleError)
      );
  }

  /**
   * Add country
   * */
  addCountry(country: Country): Observable<Country> {
    return this.http.post<Country>(this.apiurl, country, httpOptions)
      .pipe(
        tap(data => console.log(data)),
        catchError(handleError)
      );
  }

  /**
   * Update Country
   * */
  updateCountry(country: Country): Observable<Country> {
    const url = `${this.apiurl}/${country.id}`;
    return this.http.put<Country>(url, country, httpOptions)
      .pipe(
        map(() => country),
        catchError(handleError)
      );
  }

  /**
   * Delete country by id
   * */
  deleteCountry(id: string): Observable<Country> {
    const url = `${this.apiurl}/${id}`;
    return this.http.delete<Country>(url, httpOptions)
      .pipe(
        catchError(handleError)
      );
  }

  
}
