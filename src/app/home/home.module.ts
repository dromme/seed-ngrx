import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HomeComponent } from './containers/home/home.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { HomeRoutingModule } from './home-routing.module';
import { JsonPlaceholderService } from '../services/json-placeholder.service';

@NgModule({
  declarations: [HomeComponent, DataListComponent, SpinnerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [ JsonPlaceholderService]
})
export class HomeModule { }
