import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HomeComponent } from './containers/home/home.component';
import { DataListComponent } from './components/data-list/data-list.component';

import { HomeRoutingModule } from './home-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './effects/home-effect';
import { postReducer } from './reducers/home.reducer';

@NgModule({
  declarations: [HomeComponent, DataListComponent, SpinnerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature('HomeStore', postReducer),
    EffectsModule.forFeature([HomeEffects]),
  ],
})
export class HomeModule { }
