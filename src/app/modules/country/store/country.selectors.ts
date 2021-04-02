import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryState } from './country.state';
import * as countryActions from './country.actions';

// Countries State
export const getCountriesState = createFeatureSelector<CountryState>('countries');

// Get All countries
export const getAllCountries = createSelector(getCountriesState, (state: CountryState) => state.data);

// Get Countries Error
export const getCountriesError = createSelector(getCountriesState, (state: CountryState) => {
    return state.action === countryActions.GET_COUNTRIES
        ? state.error
        : null;
});

// Get Country
export const getCountry = createSelector(getCountriesState, (state: CountryState) => {
    if (state.action === countryActions.GET_COUNTRY && state.done) {
        return state.selected;
    } else {
        return null;
    }
});

// Get Country Error
export const getCountryError = createSelector(getCountriesState, (state: CountryState) => {
    return state.action === countryActions.GET_COUNTRY
        ? state.error
        : null;
});

// Create Country
export const isCreated = createSelector(getCountriesState, (state: CountryState) =>
    state.action === countryActions.CREATE_COUNTRY && state.done && !state.error);

// Get Create Error
export const getCreateError = createSelector(getCountriesState, (state: CountryState) => {
    return state.action === countryActions.CREATE_COUNTRY
        ? state.error
        : null;
});

//  Update Country
export const isUpdated = createSelector(getCountriesState, (state: CountryState) =>
    state.action === countryActions.UPDATE_COUNTRY && state.done && !state.error);

// Get Update Error
export const getUpdateError = createSelector(getCountriesState, (state: CountryState) => {
    return state.action === countryActions.UPDATE_COUNTRY
        ? state.error
        : null;
});

// Delete Country
export const isDeleted = createSelector(getCountriesState, (state: CountryState) =>
    state.action === countryActions.DELETE_COUNTRY && state.done && !state.error);

// Get Delete Error
export const getDeleteError = createSelector(getCountriesState, (state: CountryState) => {
    return state.action === countryActions.DELETE_COUNTRY
        ? state.error
        : null;
});