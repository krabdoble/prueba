import { Component, OnInit } from '@angular/core';
import { primerInter } from '../../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit{

  personas: primerInter[]= [
    {nombre: 'Jean', edad:20},
    {nombre: 'Ana', edad:20},
    {nombre: 'Luis', edad:20},
    {nombre: 'Marie', edad:20},
  ];

  constructor(){}

  ngOnInit(): void {
    
  }

}
