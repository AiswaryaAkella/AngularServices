import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollserviceService {
OnEnrollClicked(title: string){
  alert('Thanks for your interest');
}
  constructor() { }
}
