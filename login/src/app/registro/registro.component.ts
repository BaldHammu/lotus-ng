import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { CustomValidationService } from '../services/custom-validation.service';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})

export class RegistroComponent implements OnInit {

  hide = true;
  usuario:string | undefined;
  senha:string | undefined;
  confirmasenha:string | undefined;

  public registroForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http : HttpClient, private router:Router, private customValidator:CustomValidationService,) { }

  ngOnInit(): void {
    this.registroForm = this.formBuilder.group({
      nome:['',Validators.required],
      email:['',Validators.required,],
      senha:['',Validators.required],
      confirmasenha:['',Validators.required],
      aniversario:['',Validators.required],
      termo:['',Validators.requiredTrue],
    },{
      validator: this.customValidator.passwordMatchValidator("senha","confirmasenha")
    })

  }
  criaUser(){
    this.http.post<any>("http://localhost:3000/registro",this.registroForm.value)
    .subscribe(res=>{
      alert("Cadastro bem sucedido");
      this.registroForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Algo deu errado");
    })
  }
  checaSenha(group: FormGroup) {
    const pass = group.controls['senha'].value;
    const confirmPass = group.controls['confirmasenha'].value;

    return pass === confirmPass ? null : { notSame: true };
}

}
