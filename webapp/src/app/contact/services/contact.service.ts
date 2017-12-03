import {Injectable} from '@angular/core';
import {ContactLocalStorageService} from './contact-local-storage.service';
import {Contact} from '../contact';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';
import 'rxjs/add/observable/of';

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor(private localStorage: ContactLocalStorageService, private contactHttpService: ContactHttpService) {
    this.contacts = [];
  }

  findContacts(reload?: boolean): Observable<Contact[]> {
    if (_.isEmpty(this.contacts) || reload) {
      return this.contactHttpService.get().map((contacts) => {
        this.contacts = contacts;
        return contacts;
      });
    } else {
      Observable.of(this.contacts);
    }
  }

  findContactById(id: number) {
    const cached = _.find(this.contacts, {'id': id});
    if (cached) {
      return Observable.of(cached);
    } else {
      return this.contactHttpService.getById(id).map((contact) => {
        this.contacts.push(contact);
        return contact;
      });
    }
  }

  saveContact(contact: Contact) {
    if (!contact.id) {
      this.contactHttpService.create(contact).map(() => {
        this.contacts.push(contact);
      });
    } else {
      // TODO update
    }

  }

  deleteContact(id: number) {
    // TODO
  }

}
