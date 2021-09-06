import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Clientes } from './clientes';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
 
})
export class ClientesComponent implements OnInit {

  cliente!: Clientes[];
  
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {

   this.clienteService.getCliente().subscribe(
     clientes => this.cliente = clientes
   );
  }

}
