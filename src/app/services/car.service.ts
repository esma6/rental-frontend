import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44305/api/cars/"

  constructor(private httpClient:HttpClient) { }
  getCars() : Observable<ListResponseModel<Car>>{

    let newApiUrl = this.apiUrl + "getcardetails";

    return this.httpClient
    .get<ListResponseModel<Car>>(newApiUrl);
  }

  getCarsByBrand(brandId: number) : Observable<ListResponseModel<Car>>{
    let newApiUrl = this.apiUrl + "getcarsbybrandId?brandId=" + brandId;

    return this.httpClient
      .get<ListResponseModel<Car>>(newApiUrl);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>>{
    let newApiUrl = this.apiUrl + "getcarsbycolorId?colorId=" + colorId;

    return this.httpClient
      .get<ListResponseModel<Car>>(newApiUrl);
  }
}
