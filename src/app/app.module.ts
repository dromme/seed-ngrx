import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { postReducer } from '../app/home/reducers/home.reducer';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from './home/home.module';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './home/effects/home-effect';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    StoreModule.forRoot({HomeStore: postReducer}),
    EffectsModule.forRoot([HomeEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
