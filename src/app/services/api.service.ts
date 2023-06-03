import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyVehicle } from 'src/model/myVehicle';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;

  baseUrl ='http://localhost:5001/vehicles'
//dependancy injection

  constructor(private http:HttpClient) { }

  getAllVehicles(): Observable<MyVehicle> {
    return this.http.get(this.baseUrl)
   }

   viewVehicles(vehicleId:string) {
return this.http.get(`${this.baseUrl}/${vehicleId}`)
   }

   addVehicle(vehicleBody:any){
    return this.http.post(this.baseUrl,vehicleBody)

   }

   deleteVehicle(vehicleId:any){
return this.http.delete(`${this.baseUrl}/${vehicleId}`)
   }
   updateVehicle(vehicleId:any,vehicleBody:any){
    return this.http.put(`${this.baseUrl}/${vehicleId}`,vehicleBody)
   }
  }
