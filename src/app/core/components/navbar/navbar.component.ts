import {Component} from '@angular/core';
import {AuthService} from "../../../modules/auth/services/auth.service";
import {User} from '@angular/fire/auth';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../../modules/users/interfaces/user";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user: IUser | undefined;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(async () => {
      await this.authService.getCurrentUserFromGitHub().then((githubUser) => {
        this.user = githubUser;
      }).catch((error) => {
        console.error('Error fetching user from github:', error);
      })
    })
  }

  // Method to do log out
  async logout(): Promise<void> {
    return new Promise<void>(async () => {
      await this.router.navigate(['auth/login']).then(async () => {
        await this.authService.logout().then(async () => {
        }).catch((error) => {
          console.error('Error logging out:', error);
        });
      }).catch((error) => {
        console.error('Error navigating:', error);
      })
    });
  }
}
