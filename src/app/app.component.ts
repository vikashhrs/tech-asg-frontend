import { Component } from "@angular/core";
import { DataService } from "./services/data.service";
import { ModelSelectDirective } from './directives/modelselect.directive';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [DataService]
})
export class AppComponent {
  private cars: string[];
  private models : string[];
  private isCarNameSelected : boolean = false;
  private selectedCar : string;
  private selectedModel : string;
  private carDetails : any;

  constructor(private _dataService: DataService) {
    this._dataService.getAllCarNames().subscribe(cars => {
      console.log(cars);
      this.cars = cars;
    });
  }

  //Called on car is selected
  onCarSelected(car) {
    console.log(car);
    this.selectedCar = car;
    this._dataService.getAllModelsOfTheCar(car).subscribe(models => {
      console.log(models);
      this.isCarNameSelected = true;
      this.models = models;
      if(this.selectedCar && this.selectedModel){
        this.getDetailsOfCar(car, this.models[0]);
      }
      
    });
  }

  //called on selecting a model for the selected car
  onModelSelected(model){
    console.log("Model selected");
    this.selectedModel = model;
    this.getDetailsOfCar(this.selectedCar, model)
  }

  //Used for fetching car details for a particular car and model
  getDetailsOfCar(car, model){
    this._dataService.getCarDetails(this.selectedCar, model).subscribe(carDetails => {
      console.log(carDetails);
      this.carDetails = carDetails;
    });
  }

}
