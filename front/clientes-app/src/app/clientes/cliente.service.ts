import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { clientes } from './clientes.json';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }
  getClientes():Observable<Cliente[]>{
      return of(clientes);  
  }
}
