import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginViewComponent} from './components/login-view/login-view.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {AuthService} from "./services/auth.service";


@NgModule({
  declarations: [
    LoginViewComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {
}
