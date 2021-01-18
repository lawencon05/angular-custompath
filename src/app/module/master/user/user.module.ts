import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { UserRoutingModule } from './user-routing.module';

// import { UserComponent } from '../../../page/user/user.component';

import { UserRoutingModule } from '@bootcamp-master/user/user-routing.module';

import { UserComponent } from '@bootcamp-page/user/user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
