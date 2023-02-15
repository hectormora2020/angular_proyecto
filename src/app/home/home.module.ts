import { NgModule         } from '@angular/core';
import { CommonModule     } from '@angular/common';
import { FormsModule      } from '@angular/forms';

import { HomeRoutingModule  } from './home-routing.module';
import { InicioComponent    } from './components/inicio/inicio.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { AuthGuard          } from '../guards/auth.guard';

@NgModule({
  declarations: [
    InicioComponent,
    ConsultasComponent
  ],
  providers: [
    AuthGuard
  ],
  imports: [
    FormsModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
