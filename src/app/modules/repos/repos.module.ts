import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposRoutingModule } from './repos-routing.module';
import { ReposViewComponent } from './components/repos-view/repos-view.component';
import { ReposListComponent } from './components/repos-list/repos-list.component';


@NgModule({
  declarations: [
    ReposViewComponent,
    ReposListComponent
  ],
  imports: [
    CommonModule,
    ReposRoutingModule
  ]
})
export class ReposModule { }
