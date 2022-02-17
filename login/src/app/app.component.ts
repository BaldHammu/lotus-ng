import { Component, OnInit } from '@angular/core';

export interface Subject{
  nome:string;
  email:string;
  data:string;
  senha:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login';
}