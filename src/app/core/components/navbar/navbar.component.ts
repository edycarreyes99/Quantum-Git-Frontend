import {Component} from '@angular/core';
import {AuthService} from "../../../modules/auth/services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../../modules/users/interfaces/user";
import {NotificationsService} from "../../services/notifications/notifications.service";
import {ERROR_TOAST, SUCCESS_TOAST} from "../../constants/toast.constants";
import {UsersService} from "../../../modules/users/services/users.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user: IUser | undefined;

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private notificationsService: NotificationsService
  ) {
    this.activatedRoute.params.subscribe(async () => {
      await this.usersService.show().subscribe({
        next: (user) => {
          this.user = user;
        },
        error: (error) => {
          console.error('Error fetching current user from github:', error);
          this.notificationsService.showToast(
            ERROR_TOAST,
            'Error fetching GitHub User',
            'Error while fetching the current authenticated GitHub user info.'
          );
        }
      });
    })
  }

  // Method to do log out
  async logout(): Promise<void> {
    return new Promise<void>(async () => {
      await this.router.navigate(['auth/login']).then(async () => {
        await this.authService.logout().then(async () => {
          this.notificationsService.showToast(
            SUCCESS_TOAST,
            'Logout Success',
            `Good bye ${this.user?.name}. ¡Come back soon!`
          );
        }).catch((error) => {
          console.error('Error logging out:', error);
          this.notificationsService.showToast(
            ERROR_TOAST,
            'Logout failed',
            'An error occurred while doing logout.'
          );
        });
      }).catch((error) => {
        console.error('Error navigating:', error);
      })
    });
  }
}
