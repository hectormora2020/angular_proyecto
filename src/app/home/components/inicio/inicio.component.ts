import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public error : boolean;
  public mensajeError : string;
  public username : string;
  public contrasenya : string;

  ngOnInit() : void {

    if( localStorage.getItem("token") !== null )
      localStorage.removeItem("token");
  }

  constructor() {
    this.username     = "";
    this.contrasenya  = "";
    this.error        = false;
    this.mensajeError = "";
  }

  validaUsuario() : void {
   
    if( (this.username == "a") && (this.contrasenya == "a") ) {
      localStorage.setItem("token", "abc");
    } else {
      this.mensajeError = "Usuario/Contraseña incorrecta";
      this.error = true;
      console.log("error");
    }
  }

}
