import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    
  }
  text_color:string='';

  button_disabled:boolean=false;

  imagen:string="https://images.pexels.com/photos/5239050/pexels-photo-5239050.png?auto=compress&cs=tinysrgb&w=600&lazy=load";

}
