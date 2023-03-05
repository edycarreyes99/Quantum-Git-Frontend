import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReposViewComponent} from "./components/repos-view/repos-view.component";

const routes: Routes = [
  {
    path: '',
    component: ReposViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReposRoutingModule {
}
