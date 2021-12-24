import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderModule } from '../../../components/header/header.module';
import { FooterModule } from '../../../components/footer/footer.module';
import { SideBarModule } from '../../../components/side-bar/side-bar.module';

import { MultiSelectModule } from 'primeng/multiselect';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { PerfilPermissoesComponent } from './perfil-permissoes/perfil-permissoes.component';
import { PerfilPersonalizadoComponent } from './perfil-personalizado/perfil-personalizado.component';
import { PerfilPermissoesListComponent } from './perfil-permissoes-list/perfil-permissoes-list.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';


const primeNGModules = [
  InputSwitchModule,
  TableModule
];

const cgModules = [
  HeaderModule,
  FooterModule,
  SideBarModule
]

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule, ReactiveFormsModule,
    MultiSelectModule,
    ...cgModules,
    ...primeNGModules,
  ],
  declarations: [
    AdminComponent,
    DashboardAdminComponent,
    PerfilPermissoesComponent,
    PerfilPersonalizadoComponent,
    PerfilPermissoesListComponent,
    MaintenanceComponent,
  ]
})
export class AdminModule { }
