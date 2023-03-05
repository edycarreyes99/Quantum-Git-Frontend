import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposRoutingModule } from './repos-routing.module';
import { ReposViewComponent } from './components/repos-view/repos-view.component';


@NgModule({
  declarations: [
    ReposViewComponent
  ],
  imports: [
    CommonModule,
    ReposRoutingModule
  ]
})
export class ReposModule { }
