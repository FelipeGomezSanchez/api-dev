import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent} from './vistas/dashboard/dashboard.component'
import { PersonajesComponent } from './vistas/personajes/personajes.component';
import { LugaresComponent } from './vistas/lugares/lugares.component';

const routes: Routes = [
  { path:'' , redirectTo:'dashboard' , pathMatch:'full'},
  { path:'dashboard', component:DashboardComponent },
  { path:'personajes', component:PersonajesComponent },
  { path:'lugares', component:LugaresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, PersonajesComponent, LugaresComponent]