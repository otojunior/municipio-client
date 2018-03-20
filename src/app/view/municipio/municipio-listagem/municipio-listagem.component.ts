import {Component, OnInit} from '@angular/core';
import {Municipio} from '../../../model/municipio';
import {MunicipioService} from '../../../service/municipio.service';

@Component({
    selector: 'mc-municipio-listagem',
    templateUrl: './municipio-listagem.component.html',
    styleUrls: ['./municipio-listagem.component.css']
})
export class MunicipioListagemComponent implements OnInit {
    municipios: Array<Municipio>;

    constructor(private service: MunicipioService) {}

    /**
     *
     */
    ngOnInit() {
        this.service.obterMunicipios().subscribe(
            munic => this.municipios = munic,
            error => console.log(error)
        );
    }

    /**
     *
     */
    downloadArquivo() {
        this.service.downloadArquivo().subscribe(
            response => {
                console.log(response);
                this.tratarDownloadArquivo(response);
                //console.log(">>> classe: " + response.constructor.name);
                //console.log(">>> response.size: " + response.size);
            },
            error => console.log(error)
        );
    }

    /**
     *
     */
    tratarDownloadArquivo(response: Response) {
        const blob = new Blob([response], {type: 'text/csv;charset=iso-8859-1'});
        //const url = window.URL.createObjectURL(blob);
        //window.open(url);
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', 'municipios.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
