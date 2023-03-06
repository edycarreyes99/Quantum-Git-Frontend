import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {BranchesService} from "../../services/branches.service";
import {IBranch} from "../../interfaces/branch";

@Component({
  selector: 'app-branch-selection',
  templateUrl: './branch-selection.component.html',
  styleUrls: ['./branch-selection.component.scss']
})
export class BranchSelectionComponent implements OnInit {
  // Input Variables
  @Input() repoName: string | undefined;

  // Output Variables
  @Output() selectionChange: EventEmitter<IBranch>;
  @Output() emptyBranches: EventEmitter<void>;

  // Component Variables
  branchFormControl: FormControl;
  branches: IBranch[] = [];
  filteredBranches: Observable<IBranch[]> = new Observable<IBranch[]>();

  constructor(
    private branchesService: BranchesService
  ) {
    this.selectionChange = new EventEmitter<IBranch>();
    this.emptyBranches = new EventEmitter<void>();
    this.branchFormControl = new FormControl<string>('');
    this.initializeFilteredBranchesObservable();
  }

  async ngOnInit(): Promise<void> {
    await this.fetchBranchesFromRepo();
  }

  private _filterBranches(value: string | Record<string, any>): IBranch[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value['name'].toLowerCase();

    return this.branches.filter(option => option.name.toLowerCase().includes(filterValue.toLowerCase()));
  }

  // Method to fetch all branches for the current repo
  fetchBranchesFromRepo(): Promise<IBranch[]> {
    return new Promise<IBranch[]>(async (resolve, rejects) => {
      await this.branchesService.index(this.repoName ?? '').then((branches) => {
        this.branches = branches;
        this.initializeFilteredBranchesObservable();
        if (this.branches.length !== 0) {
          this.branchFormControl.setValue(this.branches[0]);
          this.selectionChange.emit(this.branchFormControl.value);
        } else {
          this.emptyBranches.emit();
        }
        resolve(branches);
      }).catch((error) => {
        console.error('Error fetching branches for the current repository:', error);
        rejects(error);
      });
    });
  }

  // Method to get only the branch name form the branch object
  getBranchName(branch?: IBranch): string {
    return branch ? branch?.name : '';
  }

  // Method to initialize the filtered branches observable
  initializeFilteredBranchesObservable(): void {
    this.filteredBranches = this.branchFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterBranches(value || '')),
    );
  }

}
