import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReposRoutingModule} from './repos-routing.module';
import {ReposViewComponent} from './components/repos-view/repos-view.component';
import {ReposListComponent} from './components/repos-list/repos-list.component';
import {RepoListItemComponent} from './components/repo-list-item/repo-list-item.component';
import {ReposService} from "./services/repos.service";


@NgModule({
  declarations: [
    ReposViewComponent,
    ReposListComponent,
    RepoListItemComponent
  ],
  imports: [
    CommonModule,
    ReposRoutingModule
  ],
  providers: [
    ReposService
  ]
})
export class ReposModule {
}
