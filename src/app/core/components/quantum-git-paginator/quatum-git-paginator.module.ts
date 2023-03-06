import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuantumGitPaginatorComponent} from "./quantum-git-paginator.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [
    QuantumGitPaginatorComponent
  ],
  exports: [
    QuantumGitPaginatorComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class QuatumGitPaginatorModule {
}
