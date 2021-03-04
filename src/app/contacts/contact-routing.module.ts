import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ContactListComponent} from './contact-list.component';

const routes: Route[] = [
  {
    path: 'list',
    component: ContactListComponent
  }
];
@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}
