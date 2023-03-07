import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import firebase from "firebase/compat/app";
import {NotificationsService} from "../../../../core/services/notifications/notifications.service";
import {ERROR_TOAST, SUCCESS_TOAST} from "../../../../core/constants/toast.constants";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  constructor(
    private authService: AuthService,
    private notificationService: NotificationsService
  ) {
  }

  loginWithGithub(): Promise<firebase.User> {
    return new Promise<firebase.User>(async (resolve, rejects) => {
      await this.authService.gitHubLogin()
        .then((user) => {
          this.notificationService
            .showToast(
              SUCCESS_TOAST,
              'Login Successful',
              `¡Welcome back ${user?.displayName}`
            );
          resolve(user);
        })
        .catch((error) => {
          this.notificationService
            .showToast(
              ERROR_TOAST,
              'Login failed',
              'There was a problem login with your GitHub account.'
            );
          rejects(error);
        });
    });
  }
}
