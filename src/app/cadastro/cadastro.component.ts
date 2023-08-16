import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  control = true;
  texto = "Login";
  
  nameButton = "Cadastro";
  

  login(){
   this.control ? this.nameButton = "Login" : this.nameButton = "Cadastro";
   this.control ? this.texto = "Cadastro" : this.texto = "Login";

    return this.control = !this.control;
    
    
  }
  
}
