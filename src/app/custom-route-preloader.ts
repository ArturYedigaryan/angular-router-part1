import {PreloadingStrategy, Route} from '@angular/router';
import {Observable, of} from 'rxjs';

export class CustomRoutePreloader implements PreloadingStrategy {

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data && route.data.preload) {
      return fn();
    } else {
      return of(null);
    }
  }

}
