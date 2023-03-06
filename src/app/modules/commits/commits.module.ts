import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitsRoutingModule } from './commits-routing.module';
import { CommitsViewComponent } from './components/commits-view/commits-view.component';
import { CommitsListComponent } from './components/commits-list/commits-list.component';
import { CommitsListItemComponent } from './components/commits-list-item/commits-list-item.component';
import {BranchesModule} from "../branches/branches.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [
    CommitsViewComponent,
    CommitsListComponent,
    CommitsListItemComponent
  ],
  imports: [
    CommonModule,
    CommitsRoutingModule,
    BranchesModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class CommitsModule { }
