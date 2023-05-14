import { Component } from '@angular/core';
import {EnrollserviceService} from '../enrollservice.service';
@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css'],
  //providers:[EnrollserviceService]
})
export class ReactComponent {
  title="React";

  constructor(private enrollserviceService: EnrollserviceService ){

  }

  onEnroll(){
    //const enrollserviceService= new EnrollserviceService();
    this.enrollserviceService.OnEnrollClicked(this.title);
}
}
