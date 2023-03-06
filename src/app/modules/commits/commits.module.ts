import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitsRoutingModule } from './commits-routing.module';
import { CommitsViewComponent } from './components/commits-view/commits-view.component';
import { CommitsListComponent } from './components/commits-list/commits-list.component';


@NgModule({
  declarations: [
    CommitsViewComponent,
    CommitsListComponent
  ],
  imports: [
    CommonModule,
    CommitsRoutingModule
  ]
})
export class CommitsModule { }
