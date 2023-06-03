import { Component } from '@angular/core';
import { MyVehicle } from 'src/model/myVehicle';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vehicles',
  templateUrl: './add-vehicles.component.html',
  styleUrls: ['./add-vehicles.component.css']
})
export class AddVehiclesComponent {
 vehicle:MyVehicle = {}

 constructor(private api:ApiService,private router:Router){

 }

addVehicle(){
  this.api.addVehicle(this.vehicle).subscribe((data:any)=>{
    this.router.navigateByUrl('')
  })
}
}
