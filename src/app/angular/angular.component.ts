import { Component } from '@angular/core';
import {EnrollserviceService} from '../enrollservice.service';
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
 // providers:[EnrollserviceService]
})
export class AngularComponent {
  title="Angular";

  constructor(private enrollserviceService: EnrollserviceService){

  }

  onEnroll(){
    const enrollserviceService= new EnrollserviceService();
    this.enrollserviceService.OnEnrollClicked(this.title);
  }
}
