import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReposRoutingModule} from './repos-routing.module';
import {ReposViewComponent} from './components/repos-view/repos-view.component';
import {ReposListComponent} from './components/repos-list/repos-list.component';
import {RepoListItemComponent} from './components/repo-list-item/repo-list-item.component';
import {ReposService} from "./services/repos.service";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatChipsModule} from "@angular/material/chips";
import {UsersModule} from "../users/users.module";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {QuatumGitPaginatorModule} from "../../core/components/quantum-git-paginator/quatum-git-paginator.module";


@NgModule({
  declarations: [
    ReposViewComponent,
    ReposListComponent,
    RepoListItemComponent
  ],
    imports: [
        CommonModule,
        ReposRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatChipsModule,
        UsersModule,
        MatIconModule,
        MatProgressSpinnerModule,
        QuatumGitPaginatorModule
    ],
  providers: [
    ReposService
  ]
})
export class ReposModule {
}
