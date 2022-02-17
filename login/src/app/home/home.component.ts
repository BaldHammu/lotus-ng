import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder, Validators, MinLengthValidator} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ola:boolean=false
  tchau:boolean=true
  tudoBemQuestionmark:boolean=false


  constructor() { }

  ngOnInit(): void {
  }



  boaTarde(){
    this.ola=!this.ola
  }
  esperoQueTenhaUmBomDia(){
    this.tudoBemQuestionmark=!this.tudoBemQuestionmark
  }
  porqueEstouFazendoIsso(){
    this.tchau = !this.tchau
  }
}
