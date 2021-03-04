import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private  _isLoggedIn = false;

  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  login(): void {
    this._isLoggedIn = true;
  }

  logout(): void {
    this.router.navigateByUrl('/');
    this._isLoggedIn = false;
  }
}
