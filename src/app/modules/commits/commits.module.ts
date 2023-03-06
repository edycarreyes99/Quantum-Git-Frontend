import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitsRoutingModule } from './commits-routing.module';
import { CommitsViewComponent } from './components/commits-view/commits-view.component';
import { CommitsListComponent } from './components/commits-list/commits-list.component';
import { CommitsListItemComponent } from './components/commits-list-item/commits-list-item.component';
import {BranchesModule} from "../branches/branches.module";


@NgModule({
  declarations: [
    CommitsViewComponent,
    CommitsListComponent,
    CommitsListItemComponent
  ],
    imports: [
        CommonModule,
        CommitsRoutingModule,
        BranchesModule
    ]
})
export class CommitsModule { }
