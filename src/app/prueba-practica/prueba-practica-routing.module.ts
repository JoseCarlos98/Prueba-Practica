import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaPracticaComponent } from './prueba-practica.component';

const routes: Routes = [
    { path: '', component: PruebaPracticaComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PruebaPracticaRoutingModule { }