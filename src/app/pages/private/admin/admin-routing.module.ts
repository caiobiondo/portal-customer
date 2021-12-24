import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminComponent } from './admin.component'
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component'
import { MaintenanceComponent } from './maintenance/maintenance.component'
import { PerfilPermissoesListComponent } from './perfil-permissoes-list/perfil-permissoes-list.component'
import { PerfilPermissoesComponent } from './perfil-permissoes/perfil-permissoes.component'
import { PerfilPersonalizadoComponent } from './perfil-personalizado/perfil-personalizado.component'

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardAdminComponent
      },
      {
        path: 'maintenance',
        component: MaintenanceComponent
      },
      {
        path: 'perfil-permissoes',
        component: PerfilPermissoesComponent
      },
      {
        path: 'perfil-personalizado',
        component: PerfilPersonalizadoComponent
      },
      {
        path: 'perfil-personalizado/:id/:modulo',
        component: PerfilPersonalizadoComponent
      },
      {
        path: 'perfil-permissoes-list',
        component: PerfilPermissoesListComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
