import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';
import { Clientes } from './clientes';
import { CLIENTES } from './clientes.json';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

private urlEndpoint:string = 'http://localhost:8080/api/clientes';

  constructor(private http:HttpClient) { }

  
  getCliente(): Observable<Clientes[]>{

   return this.http.get<Clientes[]>(this.urlEndpoint).pipe(
     map((response) => {return response as Clientes[]})
   );
  }
}
