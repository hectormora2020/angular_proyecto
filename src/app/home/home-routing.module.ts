import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent      } from './components/inicio/inicio.component';
import { ConsultasComponent   } from './components/consultas/consultas.component';
import { AuthGuard            } from '../guards/auth.guard';

const routes: Routes = [
  {path: "",          component: InicioComponent },
  {path: "consultas", component: ConsultasComponent, canActivate: [AuthGuard] }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
