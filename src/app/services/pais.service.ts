import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PaisService {

  constructor(private http: Http) { }

  consultar(): Promise<any> {
    return this.http.get('https://localhost:44390/api/pais')
      .toPromise()
      .then(response => response.json());
  }
}
