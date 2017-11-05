import {Injectable} from '@angular/core';
import {Contact} from '../contact';

@Injectable()
export class ContactService {

  localStorageKey: string;

  constructor() {
    this.localStorageKey = 'ca-contacts';
    this.initializeLocalStorage();
  }

  public findContacts(): Contact[] {
    return this.readLocalStorageContacts();
  }

  public saveContact(contact: Contact) {
    const contacts = this.readLocalStorageContacts();
    contacts.push(contact);
    this.writeLocalStorageContacts(contacts);
  }

  private getInitialContacts(): Contact[] {
    return [
      new Contact(1, 'Sami', 'Anttonen', '0123456789', 'Skinnarilankatu 35', 'Lappeenranta'),
      new Contact(2, 'Teppo', 'Testaaja', '0123456789', 'Skinnarilankatu 35', 'Lappeenranta')
    ];
  }

  private initializeLocalStorage() {
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
      this.writeLocalStorageContacts(this.getInitialContacts());
    }
  }

  private readLocalStorageContacts(): Contact[] {
    const data = localStorage.getItem(this.localStorageKey);
    return JSON.parse(data) as Contact[];
  }

  private writeLocalStorageContacts(contacts) {
    const data = JSON.stringify(contacts);
    localStorage.setItem(this.localStorageKey, data);
  }
}
