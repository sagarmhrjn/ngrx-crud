import * as countryActions from './country.actions';
import { AppAction } from 'src/app/app.action';
import { CountryState } from './country.state';

// Initial Country State
export const initialState: CountryState = {
  data: [],
  selected: null,
  action: '',
  done: false,
  error: null
};

export const reducer = (state = initialState, action: AppAction): CountryState => {
  // ...state create immutable state object
  switch (action.type) {
    // Get countries 
    case countryActions.GET_COUNTRIES:
      return {
        ...state,
        action: countryActions.GET_COUNTRIES,
        done: false,
        selected: null,
        error: null
      };
    // Get countries success
    case countryActions.GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        done: true,
        selected: null,
        error: null
      };
    // Get countries error
    case countryActions.GET_COUNTRIES_ERROR:
      return {
        ...state,
        done: true,
        selected: null,
        error: action.payload
      };
    // Get country
    case countryActions.GET_COUNTRY:
      return {
        ...state,
        action: countryActions.GET_COUNTRY,
        done: false,
        selected: null,
        error: null
      };
    // Get country success
    case countryActions.GET_COUNTRY_SUCCESS:
      return {
        ...state,
        selected: action.payload,
        done: true,
        error: null
      };
    // Get country error
    case countryActions.GET_COUNTRY_ERROR:
      return {
        ...state,
        selected: null,
        done: true,
        error: action.payload
      };
    // Create country
    case countryActions.CREATE_COUNTRY:
      return {
        ...state,
        selected: action.payload,
        action: countryActions.CREATE_COUNTRY,
        done: false,
        error: null
      };
    // Create country success
    case countryActions.CREATE_COUNTRY_SUCCESS:
      {
        const newCountry = {
          ...state.selected,
          id: action.payload
        };
        const data = [
          ...state.data,
          newCountry
        ];
        return {
          ...state,
          data,
          selected: null,
          error: null,
          done: true
        };
      }
    // Create country error
    case countryActions.CREATE_COUNTRY_ERROR:
      return {
        ...state,
        selected: null,
        done: true,
        error: action.payload
      };
    // Update country
    case countryActions.UPDATE_COUNTRY:
      return {
        ...state,
        selected: action.payload,
        action: countryActions.UPDATE_COUNTRY,
        done: false,
        error: null
      };
    // Update country success
    case countryActions.UPDATE_COUNTRY_SUCCESS:
      {
        const index = state
          .data
          .findIndex(h => h.id === state.selected.id);
        if (index >= 0) {
          const data = [
            ...state.data.slice(0, index),
            state.selected,
            ...state.data.slice(index + 1)
          ];
          return {
            ...state,
            data,
            done: true,
            selected: null,
            error: null
          };
        }
        return state;
      }
    // Update country error
    case countryActions.UPDATE_COUNTRY_ERROR:
      return {
        ...state,
        done: true,
        selected: null,
        error: action.payload
      };
    // Delete country
    case countryActions.DELETE_COUNTRY:
      {
        const selected = state.data.find(h => h.id === action.payload);
        return {
          ...state,
          selected,
          action: countryActions.DELETE_COUNTRY,
          done: false,
          error: null
        };
      }
    // Delete country success
    case countryActions.DELETE_COUNTRY_SUCCESS:
      {
        const data = state.data.filter(h => h.id !== state.selected.id);
        return {
          ...state,
          data,
          selected: null,
          error: null,
          done: true
        };
      }
    // Delete country error
    case countryActions.DELETE_COUNTRY_ERROR:
      return {
        ...state,
        selected: null,
        done: true,
        error: action.payload
      };
  }
  return state;
}