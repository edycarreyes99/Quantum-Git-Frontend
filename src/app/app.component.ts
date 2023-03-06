import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'quantum-git';
  showNavigations = false;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case '/auth/login' :
          case '/':
          case '':
            this.showNavigations = false;
            break;
          default : {
            this.showNavigations = true;
          }
        }
      }
    });
  }
}
