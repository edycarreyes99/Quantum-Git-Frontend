import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommitsViewComponent} from "./components/commits-view/commits-view.component";

const routes: Routes = [
  {
    path: '',
    component: CommitsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommitsRoutingModule {
}
