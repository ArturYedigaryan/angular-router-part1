import {NgModule} from '@angular/core';
import {PreloadAllModules, Route, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {CustomRoutePreloader} from './custom-route-preloader';
import {AuthGuard} from './auth.guard';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'people',
    loadChildren: () => import('./people/people.module').then(m => m.PeopleModule),
    data: {
      preload: true
    },
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    preloadingStrategy: CustomRoutePreloader
  })],
  providers: [CustomRoutePreloader, AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule {}
