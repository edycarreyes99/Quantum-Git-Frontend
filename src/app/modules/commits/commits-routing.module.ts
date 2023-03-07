import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommitsViewComponent} from "./components/commits-view/commits-view.component";
import {AuthenticatedGuard} from "../../core/guards/authenticated/authenticated.guard";

const routes: Routes = [
  {
    path: '',
    component: CommitsViewComponent,
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommitsRoutingModule {
}
