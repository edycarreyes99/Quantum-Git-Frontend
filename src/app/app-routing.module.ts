import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NoAuthenticatedGuard} from "./core/guards/no-authenticated/no-authenticated.guard";
import {AuthenticatedGuard} from "./core/guards/authenticated/authenticated.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((module) => module.AuthModule),
    canActivate: [NoAuthenticatedGuard]
  },
  {
    path: 'repos',
    loadChildren: () => import('./modules/repos/repos.module').then((module) => module.ReposModule),
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
