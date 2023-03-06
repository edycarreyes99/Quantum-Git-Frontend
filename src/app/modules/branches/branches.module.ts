import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchSelectionComponent } from './components/branch-selection/branch-selection.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    BranchSelectionComponent
  ],
  exports: [
    BranchSelectionComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class BranchesModule { }
