import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaCurso :string[]=["Typescript","JavaScript","Java SE","PHP"];
  habilitar: boolean=true;

  sethabilitar():void{
    this.habilitar = (this.habilitar==true)?false:true
  }
  constructor() { }


}
