import {Route} from '@angular/router';
import {ContactListComponent} from '../contact/contact-list/contact-list.component';
import {ContactDetailsComponent} from '../contact/contact-details/contact-details.component';
import {SettingsComponent} from '../settings/settings.component';

export const caRoutes: Route[] = [
  {
    path: '',
    component: ContactListComponent
  },
  {
    path: 'contacts',
    component: ContactListComponent
  },
  {
    path: 'contacts/:id',
    component: ContactDetailsComponent
  },
  {
    path: 'add-contact',
    component: ContactDetailsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];
