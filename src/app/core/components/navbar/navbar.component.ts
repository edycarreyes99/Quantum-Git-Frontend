import {Component} from '@angular/core';
import {AuthService} from "../../../modules/auth/services/auth.service";
import {User} from '@angular/fire/auth';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user: User | undefined;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.user = this.authService.getCurrentUserFromFirebase();
  }

  // Method to do log out
  async logout(): Promise<void> {
    return new Promise<void>(async () => {
      await this.authService.logout().then(async () => {
        await this.router.navigate(['']);
      }).catch((error) => {
        console.error('Error logging out:', error);
      });
    });
  }
}
