import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MyVehicle } from 'src/model/myVehicle';


@Component({
  selector: 'app-update-vehicles',
  templateUrl: './update-vehicles.component.html',
  styleUrls: ['./update-vehicles.component.css']
})
export class UpdateVehiclesComponent implements OnInit {
  vehicleId: string=''
  vehicle:MyVehicle={}

  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private router:Router){}
  ngOnInit(): void {
  this.activatedRoute.params.subscribe((data:any)=>{
    console.log(data);
    this.vehicleId=data.Id;
    console.log(this.vehicleId);
    
    this.api.viewVehicles(this.vehicleId).subscribe((data:any)=>{
      console.log(data);
      this.vehicle=data
    })

  })
  }
  updateVehicle(){
  
  this.api.updateVehicle(this.vehicleId,this.vehicle).subscribe((data:any)=>{
    this.router.navigateByUrl('')
     
  })
}

}
