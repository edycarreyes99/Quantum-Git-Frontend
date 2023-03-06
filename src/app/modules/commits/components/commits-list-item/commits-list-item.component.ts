import {Component, Input} from '@angular/core';
import {ICommit} from "../../interfaces/commit";
import * as moment from "moment/moment";

@Component({
  selector: 'app-commits-list-item',
  templateUrl: './commits-list-item.component.html',
  styleUrls: ['./commits-list-item.component.scss']
})
export class CommitsListItemComponent {
  // Input Variables
  @Input() commit: ICommit | undefined;
  @Input() isFirstInList: boolean = false;
  @Input() isLastInList: boolean = false;
  @Input() repoName: string | undefined = '';

  // Returns the time passed from the last updated from now
  lastUpdated() {
    return moment(this.commit?.commit?.committer?.date).fromNow();
  }

  // Method to copy to clipboard the full SHA of a commit
  copyToClipboard() {
    navigator.clipboard.writeText(this.commit?.sha ?? '');
  }
}
