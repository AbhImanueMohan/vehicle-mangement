import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-vehicles',
  templateUrl: './view-vehicles.component.html',
  styleUrls: ['./view-vehicles.component.css']
})
export class ViewVehiclesComponent implements OnInit {

  vehicleId: string=''

  vehicle:any=[]
  constructor(private activatedroute:ActivatedRoute,private api:ApiService){}
  ngOnInit(): void {
    this.activatedroute.params.subscribe((data:any)=>{
      console.log(data);
      this.vehicleId=data.vehicleId;
      console.log(this.vehicleId);

      
      
    })
    this.api.viewVehicles(this.vehicleId).subscribe((data:any)=>{
      console.log(data);
      this.vehicle=data
      
    })
  }

}
