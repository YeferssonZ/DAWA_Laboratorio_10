import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { DatosVisualizacionComponent } from './datos-visualizacion/datos-visualizacion.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'visualizacion', component: DatosVisualizacionComponent },
  { path: '', redirectTo: '/formulario', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
