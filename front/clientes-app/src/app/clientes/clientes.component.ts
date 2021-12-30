import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes:Cliente[]=[
   {id:1,nombre:'Andres',apellido:'cardenas',createAt:'2018-12-28',email:'c@gmail.com'} ,
   {id:1,nombre:'Andres',apellido:'cardenas',createAt:'2018-12-28',email:'c@gmail.com'}  ,
   {id:1,nombre:'Andres',apellido:'cardenas',createAt:'2018-12-28',email:'c@gmail.com'}  ,
   {id:1,nombre:'Andres',apellido:'cardenas',createAt:'2018-12-28',email:'c@gmail.com'}  ,
   {id:1,nombre:'Andres',apellido:'cardenas',createAt:'2018-12-28',email:'c@gmail.com'}  

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
