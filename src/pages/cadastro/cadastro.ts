import { LoginPage } from './../login/login';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppService } from './../../app/app.service';
import { AuthService } from './../../providers/auth-service/auth-service'
import { Usuario } from './usuario.model';
import { Storage } from '@ionic/storage';
import { RegistroHabitosPage } from '../registro-habitos/registro-habitos'

import { Component } from '@angular/core';


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  
  constructor(  public formBuilder: FormBuilder,
                public navController: NavController,
                public appService: AppService,
                public authService: AuthService,
                public storage: Storage ) {
        this.loginForm = this.formBuilder.group({
          nome:['', Validators.required],
          usuario_email1: ['',  Validators.required],
          usuario_email2: ['',  Validators.required],
          senha1: ['',  Validators.compose([Validators.minLength(6),Validators.maxLength(20), Validators.required])],
          senha2: ['',Validators.compose([Validators.minLength(6),Validators.maxLength(20), Validators.required])],
        });
      }

  loginForm: FormGroup;
  messageNome = ""
  messageEmail = ""
  messagePassword = "";
  errorNome = false;
  errorEmail = false;
  errorPassword = false;
  
  validar() {
    let { nome, usuario_email1, usuario_email2, senha1, senha2 } = this.loginForm.controls;
    this.messageNome = ""
    this.messageEmail = ""
    this.messagePassword = "" 
    if(usuario_email1.value == usuario_email2.value ){
      if (senha1.value == senha2.value){
        if (!this.loginForm.valid) {
          if (!nome.valid){
            this.errorNome = true;
            this.messageNome = "Nome inválido!"
          }
          if (!usuario_email1.valid || !usuario_email2.valid) {
            this.errorEmail = true;
            this.messageEmail = "Ops! Email inválido";
            if(usuario_email1.value != usuario_email2.value){
              this.errorEmail = true;
              this.messageEmail = "Os emails digitados não correspodem"
        
            } else{
              this.messageEmail = "";
            }
          } else {
            if(usuario_email1.value != usuario_email2.value){
              this.errorEmail = true;
              this.messageEmail = "Os emails digitados não correspodem"
        
            } else{
              this.messageEmail = "";
            }
          }
          if (!senha1.valid || !senha2.valid) {
            this.errorPassword = true;
            this.messagePassword ="A senha precisa ter de 6 a 20 caracteres"
            if(senha1.value != senha2.value){
              this.errorPassword = true;
              this.messagePassword = "As senhas digitados não correspodem"
        
            } else{
              this.messageEmail = "";
            }
          } else {
            if(senha1.value != senha2.value){
              this.errorPassword = true;
              this.messagePassword = "As senhas digitados não correspodem"
        
            } else{
              this.messageEmail = "";
            }
          }
        }
        else {
          this.storage.set('nome', nome.value);
          this.storage.set('email', usuario_email1.value);
          this.storage.set('senha', senha1.value);
          this.navController.setRoot(RegistroHabitosPage);     
        }
      }else{
        this.errorPassword = true;
        this.messagePassword = "As senhas digitados não correspodem"
      }
    } else{
      this.errorEmail = true;
      this.messageEmail = "Os emails digitados não correspodem"
    }
  } 

  voltar(){
    this.storage.clear();
    this.navController.setRoot(LoginPage);
  }
  ionViewDidLoad() {
    this.storage.clear();
  }
}

