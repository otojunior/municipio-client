import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MunicipioListagemComponent } from './view/municipio/municipio-listagem/municipio-listagem.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'municipio',
    pathMatch: 'full'
  },
  {
    path: 'municipio',
    component: MunicipioListagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
