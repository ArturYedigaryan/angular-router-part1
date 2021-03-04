import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad, Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canEnterRouter();
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return this.canEnterRouter();
  }

  private canEnterRouter(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
  }
}
