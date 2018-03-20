import { Arquivo } from '../../../model/arquivo';
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
    ngOnInit(): void {
        this.service.obterMunicipios().subscribe(
            munic => this.municipios = munic,
            error => console.log(error)
        );
    }

    /**
     *
     */
    downloadArquivo(): void {
        this.service.downloadArquivo().subscribe(
            response => this.tratarDownloadArquivo(response),
            error => console.log(error)
        );
    }

    /**
     *
     */
    downloadArquivoExperimental(): void {
        this.service.downloadArquivoExperimental().subscribe(
            json => this.tratarDownloadArquivoExperimental(json),
            error => console.log(error)
        );
    }

    /**
     *
     */
    tratarDownloadArquivo(response: Response): void {
        const blob = new Blob([response], {type: 'text/csv;charset=iso-8859-1'});
        this.clicarLink(blob, 'municipios.csv');
    }

    /**
     *
     */
    tratarDownloadArquivoExperimental(arquivo: Arquivo): void {
        const b64toBlob = require('b64-to-blob');
        const blob = b64toBlob(arquivo.conteudo, 'text/csv');
        this.clicarLink(blob, arquivo.nome);
    }

    /**
     *
     */
    clicarLink(blob: Blob, nomeArquivo: string): void {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', nomeArquivo);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
