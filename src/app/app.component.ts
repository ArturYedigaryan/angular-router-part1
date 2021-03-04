import { Component } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-router-example';

  constructor(public authService: AuthService) {}

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }
}
