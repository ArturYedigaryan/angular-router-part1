import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PersonDetailComponent} from './people-detail/person-detail.component';
import {PeopleRoutingModule} from './people-routing.module';
import { PeopleListComponent } from './people-list/people-list.component';
import {PeopleService} from './services/people.service';
import {PersonResolversService} from './services/person-resolvers.service';
import {ReactiveFormsModule} from '@angular/forms';
import {CanDeactivateGuard} from './can-deactivate.guard';

@NgModule({
  declarations: [PersonDetailComponent, PeopleListComponent],
  imports: [CommonModule, PeopleRoutingModule, ReactiveFormsModule],
  providers: [PeopleService, PersonResolversService, CanDeactivateGuard]
})

export class PeopleModule {}
