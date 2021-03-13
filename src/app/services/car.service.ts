import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44305/api/cars/getcardetails"

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl)
        
      

  }
}
