import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorDePlatosComponent } from './buscador-de-platos/buscador-de-platos.component';
import { DetallePlatoComponent } from './detalle-plato/detalle-plato.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

const routes:Routes=[
  {path:"home", component:HomeComponent},
  {path:"form",component:FormComponent},
  {path:"detallePlato",component:DetallePlatoComponent},
  {path:"buscadorDePlatos",component:BuscadorDePlatosComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,FormComponent,DetallePlatoComponent,BuscadorDePlatosComponent]