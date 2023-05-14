import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';
import {EnrollserviceService} from './enrollservice.service';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    ReactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EnrollserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
