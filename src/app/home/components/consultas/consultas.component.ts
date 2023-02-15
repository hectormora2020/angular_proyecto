import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../../services/api/paises.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  public data : any;  
  
  ngOnInit() : void {

    this.data = {};
  }

  constructor(private servicio: PaisesService) {

  }

  consultar() : void {
    this.servicio.getData().subscribe( 
      res => {
        console.log( res );
        this.data = res;
      },
      (error: any) =>{
        console.log(error);
      });
  }

}
