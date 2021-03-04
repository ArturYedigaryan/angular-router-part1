import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContactListComponent} from './contact-list.component';
import {ContactRoutingModule} from './contact-routing.module';

@NgModule({
  declarations: [ContactListComponent],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})

export class ContactsModule {}
