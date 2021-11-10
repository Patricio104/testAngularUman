import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaRoutingModule } from './pagina-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AngularMaterialModule } from '../angular-material.module';
import { SidenavComponent } from './shared/sidenav/sidenav.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    PaginaRoutingModule,
    AngularMaterialModule
  ]
})
export class PaginaModule { }
