import {NgModule} from '@angular/core';
import {PersonDetailComponent} from './people-detail/person-detail.component';
import {Route, RouterModule} from '@angular/router';
import {PeopleListComponent} from './people-list/people-list.component';
import {PersonResolversService} from './services/person-resolvers.service';
import {CanDeactivateGuard} from './can-deactivate.guard';

const routes: Route[] = [
  {
    path: '',
    component: PeopleListComponent,
    children: [
      {
        path: ':personId',
        component: PersonDetailComponent,
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  }
  // {
  //   path: 'people/:personId',
  //   component: PersonDetailComponent,
  //   data: {
  //     loadAddresses: true
  //   },
  //   resolve: {
  //     person: PersonResolversService
  //   }
  // }
];
@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {}
