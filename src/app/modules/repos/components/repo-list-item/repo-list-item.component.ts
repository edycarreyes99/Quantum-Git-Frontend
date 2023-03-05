import {Component, Input} from '@angular/core';
import {IRepo} from "../../interfaces/repo";

@Component({
  selector: 'app-repo-list-item',
  templateUrl: './repo-list-item.component.html',
  styleUrls: ['./repo-list-item.component.scss']
})
export class RepoListItemComponent {
  // Input Variables
  @Input() repo: IRepo | undefined;

}
