import { Component, OnInit } from '@angular/core';
import { Municipio } from '../../../model/municipio';
import { MunicipioService } from '../../../service/municipio.service';

@Component({
  selector: 'mc-municipio-listagem',
  templateUrl: './municipio-listagem.component.html',
  styleUrls: ['./municipio-listagem.component.css']
})
export class MunicipioListagemComponent implements OnInit {
  municipios: Array<Municipio>;

  constructor(private service: MunicipioService) { }

  ngOnInit() {

  }

}
