import {  Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Cliente } from '../models/cliente';

@Injectable()
export class ClienteService {

  constructor(private http: Http) { }

  consultar(): Promise<any> {
    return this.http.get('https://localhost:44390/api/cliente')
      .toPromise()
      .then(response => response.json());
  }

  adicionar(cliente: Cliente): Promise<any> {
    return this.http.post('https://localhost:44390/api/cliente', cliente)
      .toPromise()
      .then(response => response.json());
  }

  excluir(id: number): Promise<void>{
    return this.http.delete(`https://localhost:44390/api/cliente/${id}`)
      .toPromise()
      .then(() => null);
  }

  atualizar(cliente: any): Promise<any> {
    return this.http.put(`https://localhost:44390/api/cliente/${cliente.id}`, cliente)
      .toPromise()
      .then(response => response.json());
  }

}
