import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppService } from './../../app/app.service';
import { Usuario } from './usuario.model';
import { Storage } from '@ionic/storage';

import { Component } from '@angular/core';
/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  
  constructor(  public formBuilder: FormBuilder,
                public appService: AppService,
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
    if(senha1.value == senha2.value ){
      if (usuario_email1.value == usuario_email2.value){
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
          let usuario: Usuario = new Usuario ( nome.value, usuario_email1.value, senha1.value, 0 , 0 , 0)
          this.cadastrar(usuario)
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
    
  cadastrar(usuario: Usuario){
    this.appService.cadastrarUsuario(usuario)
      .subscribe((data) => {
      },
        (error) => console.log(error));
  }
  ionViewDidLoad() {
    
  }
}

