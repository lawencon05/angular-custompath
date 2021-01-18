import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { RoleModule } from './role/role.module';
// import { UserModule } from './user/user.module';

import { RoleModule } from '@bootcamp-master/role/role.module';
import { UserModule } from '@bootcamp-master/user/user.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoleModule,
    UserModule
  ]
})
export class MasterModule { }
