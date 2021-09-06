import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {
listaID: string[]=['Gerardo Jimemez', 'Jimena Sanchez', 'Fabian Gutierrez', 'Patricia Guzman', 'Oscar Morrison'];
habilitado: boolean = true;
  constructor() { }

  setHabilitar():void{
 this.habilitado = (this.habilitado==true)? false:true;
  }

  

}
