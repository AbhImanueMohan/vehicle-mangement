import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleManagerComponent } from './vehicle-manager/vehicle-manager.component';
import { AddVehiclesComponent } from './add-vehicles/add-vehicles.component';
import { UpdateVehiclesComponent } from './update-vehicles/update-vehicles.component';
import { ViewVehiclesComponent } from './view-vehicles/view-vehicles.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    //https://localhost:4200 -> '' path for redirection -- http://localhost:4200/contact/admin
    {
      path: '', redirectTo: 'vehicle/admin', pathMatch: 'full'
    },
      { //path for contact manager
       path: 'vehicle/admin', component:  VehicleManagerComponent
      },
      {
        path:'vehicle/add', component: AddVehiclesComponent
      },
      {
        path:'vehicle/update/:Id', component: UpdateVehiclesComponent
      },
      {
        path:'vehicle/view/:vehicleId', component: ViewVehiclesComponent
      },
      {
        path:'**', component: PageNotFoundComponent
      }

      
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
