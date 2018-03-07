import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Municipio } from '../model/municipio';

@Injectable()
export class MunicipioService {

  constructor(private http: HttpClient) { }

  obterMunicipios(): Observable<Municipio[]> {
    return this.http.get<Municipio[]>('../data/municipios.data.json');
  }
}
