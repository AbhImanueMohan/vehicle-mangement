import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 
  transform(allVehicles:any[],searchKey:string,propName:string): any[] {
   const result: any[]=[]
    if(!allVehicles||searchKey==''||propName==''){
      return allVehicles;

    }
    allVehicles.forEach((vehicle:any)=>{
      if(vehicle[propName].toLowerCase().includes(searchKey.toLowerCase())){
        result.push(vehicle);
      }
    })
    
    return result;
  }

}
