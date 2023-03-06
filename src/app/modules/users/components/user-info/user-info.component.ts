import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";
import {IUser} from "../../interfaces/user";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  // Component Variables
  user: IUser | undefined;

  constructor(
    private authService: AuthService
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.fetchCurrentUserFromGitHub();
  }

  fetchCurrentUserFromGitHub(): Promise<IUser> {
    return new Promise<IUser>(async (resolve, rejects) => {
      await this.authService.getCurrentUserFromGitHub().then((user) => {
        this.user = user;
        resolve(user);
      }).catch((error) => {
        console.error('Error fetching current user from github:', error);
        rejects(error);
      });
    });
  }

}
