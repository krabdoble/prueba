import { Component, OnInit } from '@angular/core';
import { PrimerServiService } from 'src/app/servicios/primer-servi.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private datosPortfolio:PrimerServiService){}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>
      {console.log(data)});
  }

}
