import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { RoleRoutingModule } from './role-routing.module';

// import { RoleComponent } from '../../../page/role/role.component';

import { RoleRoutingModule } from '@bootcamp-master/role/role-routing.module';

import { RoleComponent } from '@bootcamp-page/role/role.component';

@NgModule({
  declarations: [RoleComponent],
  imports: [
    CommonModule,
    RoleRoutingModule
  ]
})
export class RoleModule { }
