import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// http
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from '../data/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    HttpClientModule,
    environment.production ?
      [] :
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule,
    EffectsModule
  ],
  exports: [
    CommonModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    StoreModule,
    EffectsModule,
  ],
})
export class SharedModule { }
