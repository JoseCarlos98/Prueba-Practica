import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadoComponent } from './resultado/resultado.component';
import { PruebaPracticaComponent } from './prueba-practica.component';
import { PruebaPracticaRoutingModule } from './prueba-practica-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';


@NgModule({
  declarations: [
    FormularioComponent,
    ResultadoComponent,
    PruebaPracticaComponent
  ],
  imports: [
    CommonModule,
    PruebaPracticaRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: []
})
export class PruebaPracticaModule { }
