import { Component, OnInit } from '@angular/core';
import { primerInter } from '../../persona';

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styleUrls: ['./prueba1.component.css']
})
export class Prueba1Component implements OnInit {

  constructor(){}

  ngOnInit(): void {
    
  }
  persona:primerInter = {
    nombre:'Patrice LAMARRE',
    edad: 76
  };
  numero:number=1;

  decrementar(){
    this.numero--;
  }

  incrementar(){
    this.numero+=1;
  }
}
