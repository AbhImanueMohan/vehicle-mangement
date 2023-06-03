import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleManagerComponent } from './vehicle-manager/vehicle-manager.component';
import { AddVehiclesComponent } from './add-vehicles/add-vehicles.component';
import { UpdateVehiclesComponent } from './update-vehicles/update-vehicles.component';
import { ViewVehiclesComponent } from './view-vehicles/view-vehicles.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VehicleManagerComponent,
    AddVehiclesComponent,
    UpdateVehiclesComponent,
    ViewVehiclesComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
