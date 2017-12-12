import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';
import 'rxjs/add/observable/of';

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor(private contactHttpService: ContactHttpService) {
    this.contacts = [];
  }

  public findContacts(reload?: boolean): Observable<Contact[]> {
    if (_.isEmpty(this.contacts) || reload) {
      return this.contactHttpService.get().map((contacts) => {
        this.contacts = contacts;
        return contacts;
      });
    } else {
      return Observable.of(this.contacts);
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

  saveContact(contact: Contact): Observable<any> {
    if (!contact.id) {
      return this.contactHttpService.create(contact).map((c) => {
        this.contacts.push(c);
      });
    } else {
      return this.contactHttpService.update(contact).map(() => {
        const i = _.indexOf(this.contacts, {'id': contact.id});
        this.contacts[i] = contact;
        return contact;
      });
    }
  }

  deleteContact(id: number): Observable<any> {
    return this.contactHttpService.remove(id).map(() => {
      _.remove(this.contacts, {'id': id});
    });
  }

}
