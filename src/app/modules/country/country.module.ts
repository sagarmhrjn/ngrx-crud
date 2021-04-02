import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './page/country.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CountryEffects } from './store/country.effects';
import * as countryReducer from './store/country.reducer';

export const reducers: ActionReducerMap<any> = {
  countries: countryReducer.reducer
};

@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    CountryRoutingModule,

    SharedModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CountryEffects])
  ]
})
export class CountryModule { }
