import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { Page404Component } from './page/page404/page404.component';
// import { DashboardComponent } from './layout/dashboard/dashboard.component';

import { DashboardComponent } from '@bootcamp-layout/dashboard/dashboard.component';
import { Page404Component } from '@bootcamp-page/page404/page404.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardComponent,
    loadChildren: () => import('./module/master/master.module')
      .then(m => m.MasterModule)
  },
  {
    path: '**',
    component: Page404Component
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
