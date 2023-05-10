import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructuraComponent } from './structura.component';

export const routes: Routes = [
    {
        path: '', 
        component: StructuraComponent,
        children:[
            { path:'', redirectTo:'', pathMatch:'full' },
            { path: 'prueba-practica', loadChildren: () => import('../prueba-practica/prueba-practica.module').then(m => m.PruebaPracticaModule)  },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StructuraRoutingModule { }