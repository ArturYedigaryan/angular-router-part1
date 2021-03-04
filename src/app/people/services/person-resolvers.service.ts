import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PeopleService} from './people.service';

@Injectable()
export class PersonResolversService implements Resolve<any>{
  constructor(private service: PeopleService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    console.log('PersonResolve', route.data.loadAddresses);

    return this.service.getPersonById(+route.params.personId);
  }
}
