import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {ToolbarService, ToolbarSettings} from '../../toolbar/toolbar.service';

@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService, private router: Router, private toolbar: ToolbarService) {
    this.contacts = [];
  }

  ngOnInit() {
    this.contacts = this.contactService.findContacts();
    this.toolbar.toolbarSettings.next(new ToolbarSettings('Contacts'));
  }

  editContact(contact: Contact) {
    this.router.navigate(['contacts', contact.id]);
  }

  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact.id);
    this.contacts = this.contactService.findContacts();
  }

  addContact() {
    this.router.navigate(['add-contact']);
  }

}
