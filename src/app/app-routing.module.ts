import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'prueba-practica', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./structura/structura.module').then(m => m.StructuraModule)},
  { path: '**', redirectTo: 'prueba-practica' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
