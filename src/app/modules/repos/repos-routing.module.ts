import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReposViewComponent} from "./components/repos-view/repos-view.component";
import {AuthenticatedGuard} from "../../core/guards/authenticated/authenticated.guard";

const routes: Routes = [
  {
    path: ':repoName',
    redirectTo: ':repoName/commits',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ReposViewComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: ':repoName',
    children: [
      {
        path: 'commits',
        loadChildren: () => import('../commits/commits.module').then((module) => module.CommitsModule),
        canActivate: [AuthenticatedGuard]
      }
    ],
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReposRoutingModule {
}
