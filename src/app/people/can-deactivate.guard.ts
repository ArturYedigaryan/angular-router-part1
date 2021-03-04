import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {PersonDetailComponent} from './people-detail/person-detail.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<PersonDetailComponent> {

  canDeactivate(component: PersonDetailComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean {
    const isDirty = component.isDirty;

    if (isDirty) {
      return confirm('You hame unsaved changes, do you want to proceed?')
    } else {
      return true;
    }
  }
}
