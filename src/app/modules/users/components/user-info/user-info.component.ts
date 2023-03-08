import {Component, OnInit} from '@angular/core';
import {IUser} from "../../interfaces/user";
import {UsersService} from "../../services/users.service";
import {NotificationsService} from "../../../../core/services/notifications/notifications.service";
import {ERROR_TOAST} from "../../../../core/constants/toast.constants";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  // Component Variables
  user: IUser | undefined;

  constructor(
    private usersService: UsersService,
    private notificationsService: NotificationsService
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.fetchCurrentUserFromGitHub();
  }

  fetchCurrentUserFromGitHub(): Promise<IUser> {
    return new Promise<IUser>(async (resolve, rejects) => {
      await this.usersService.show().subscribe({
        next: (user) => {
          this.user = user;
          resolve(user);
        },
        error: (error) => {
          console.error('Error fetching current user from github:', error);
          this.notificationsService.showToast(
            ERROR_TOAST,
            'Error fetching GitHub User',
            'Error while fetching the current authenticated GitHub user info.'
          );
          rejects(error);
        }
      });
    });
  }

}
