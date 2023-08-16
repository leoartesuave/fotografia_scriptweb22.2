import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  texto = "Usuários";
  pessoas = "{{i.nome}} {{i.idade}}"

  usuario = {
    nome: "Mario Abreu",
    idade: 56
  };


  usuarioCaixa = [

    {id: 1, nome: 'Mario', idade: 18},
    {id: 2, nome: 'Pedro', idade: 22},
    {id: 3, nome: 'Márcia', idade: 62}
 ];


 

}
