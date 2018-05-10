import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class DataService {
  private baseUrl: string = "http://localhost:3000";

  constructor(private _http: Http) {}

  //fetching all the cars available
  getAllCarNames() {
    return this._http
      .get(this.baseUrl + "/get/cars")
      .map((response: Response) => {
          console.log(response.json());
        return response.json();
      });
  }

  //fetching models of a given car
  getAllModelsOfTheCar(car){
    return this._http
      .get(this.baseUrl + "/get/models/"+car)
      .map((response: Response) => {
          console.log(response.json());
        return response.json();
      });
  }

  //feting detals of a cra with given model
  getCarDetails(car, model){
    return this._http
      .get(this.baseUrl + "/get/imageurl/"+car+"/"+model)
      .map((response: Response) => {
          console.log(response.json());
        return response.json();
      });
  }
}
