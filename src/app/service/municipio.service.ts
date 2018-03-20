import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Municipio} from '../model/municipio';

@Injectable()
export class MunicipioService {

    constructor(private http: HttpClient) {}

    /**
     *
     */
    obterMunicipios(): Observable<Municipio[]> {
        return this.http.get<Municipio[]>('http://localhost:8080/municipio');
    }

    /**
     *
     */
    downloadArquivo(): Observable<any> {
        return this.http.get(
            'http://localhost:8080/download/municipio', 
            {responseType: 'blob', reportProgress: true});
    }
}
