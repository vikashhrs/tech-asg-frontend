import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ModelSelectDirective } from './directives/modelselect.directive';

import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    ModelSelectDirective
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
