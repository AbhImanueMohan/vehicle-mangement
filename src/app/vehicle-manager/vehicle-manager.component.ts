import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyVehicle } from 'src/model/myVehicle';

@Component({
  selector: 'app-vehicle-manager',
  templateUrl: './vehicle-manager.component.html',
  styleUrls: ['./vehicle-manager.component.css']
})
export class VehicleManagerComponent implements OnInit {

  allVehicles:MyVehicle[]=[]

  searchkey:string=''
  constructor(private api:ApiService) {}

  ngOnInit(): void {
    this.getAllVehicles()
  }
  getAllVehicles(){
    this.api.getAllVehicles().subscribe((result:any)=>{
      console.log(result);
      this.allVehicles = result;
      
    })
  }
  nameChange(){
    alert('name change')
  }
  search(event:any){
    console.log(event.target.value);
    this.searchkey=event.target.value
    
  }
  deleteVehicle(vehicleId:any){
    this.api.deleteVehicle(vehicleId).subscribe((result:any)=>{
      alert('vehicle has removed')
      this.getAllVehicles()
    });
  }
  
}
