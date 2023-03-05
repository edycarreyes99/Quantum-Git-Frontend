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

  // Method to pen a new tab in the browser with the topic selected
  showTopic(topic: string) {
    window.open(`https://www.github.com/topics/${topic}`, '_blank');
  }
}
