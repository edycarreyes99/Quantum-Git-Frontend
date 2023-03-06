import {Component, Input} from '@angular/core';
import {IRepo} from "../../interfaces/repo";
import {DevelopmentLanguageColors} from "../../../../core/utils/development-language-colors";
import * as moment from "moment";

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

  // Method to find the development language color of the repository
  getLanguageColor(): string | undefined {
    const colors = DevelopmentLanguageColors;

    return colors.find((color) => color.name === this.repo?.language)?.color
  }

  // Returns the time passed from the last updated from now
  lastUpdated() {
    return moment(this.repo?.updated_at).fromNow();
  }
}
