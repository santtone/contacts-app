import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {Router} from '@angular/router';
import {ToolbarService, ToolbarSettings} from '../../toolbar/toolbar.service';
import {ContactService} from '../services/contact.service';

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
    this.toolbar.toolbarSettings.next(new ToolbarSettings('Contacts'));
    this.findContacts();
  }

  editContact(contact: Contact) {
    this.router.navigate(['contacts', contact.id]);
  }

  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact.id).subscribe(() => {
      this.findContacts();
    });
  }

  addContact() {
    this.router.navigate(['add-contact']);
  }

  navigateToMap(contact: Contact) {
    this.router.navigate(['map',
      {
        streetAddress: contact.streetAddress,
        city: contact.city
      }
    ]);
  }

  makePhoneCall(contact: Contact) {
    document.location.href = 'tel:' + contact.phone;
  }

  private findContacts() {
    this.contactService.findContacts().subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    });
  }

}
