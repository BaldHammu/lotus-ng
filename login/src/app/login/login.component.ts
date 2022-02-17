import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder, Validators, MinLengthValidator} from '@angular/forms'
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  hide = true;
  usuario:string | undefined;
  senha:string | undefined;

  public loginForm!: FormGroup;
  
  constructor (private formBuilder : FormBuilder, private http:HttpClient, private router:Router){}

  ngOnInit(): void{

    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      senha:['',Validators.required],
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/registro")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.senha === this.loginForm.value.senha
      })
      if(user){
        alert("Login bem sucedido");
        this.loginForm.reset();
        this.router.navigate(['home']);
      }else{
        alert("Usuario não encontrado");
      }
    },err=>{
      alert("Algo deu errado")
    })
  }

    LoginUser(){
      if(this.usuario == "Daniel" && this.senha == "Estrela#1"){
      }
    }
}
