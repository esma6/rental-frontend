import { Injectable } from '@angular/core';
  
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDetailByIdService {

  apiUrl="https://localhost:44305/api/"

  constructor(private httpClient:HttpClient) { }
  getCarDetailById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/GetCarDetailById?carId="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
}
