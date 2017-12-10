import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Contact} from '../contact';
import {ActivatedRoute} from '@angular/router';
import {ContactLocalStorageService} from '../services/contact-local-storage.service';
import {ToolbarService, ToolbarSettings} from '../../toolbar/toolbar.service';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'ca-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;
  isNewContact: boolean;
  showMap: boolean;

  constructor(private toolbar: ToolbarService, private route: ActivatedRoute,
              private contactService: ContactService, private location: Location) {
    this.contact = new Contact();
    this.isNewContact = true;
    this.showMap = false;
  }

  ngOnInit() {
    this.toolbar.toolbarSettings.next(new ToolbarSettings('Contact Details', true));

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isNewContact = false;
      this.contactService.findContactById(parseInt(id, 10)).subscribe((contact: Contact) => {
        this.contact = contact;
      });
    }
  }

  save() {
    this.contactService.saveContact(this.contact).subscribe(() => {
      this.location.back();
    });
  }

  remove() {
    this.contactService.deleteContact(this.contact.id).subscribe(() => {
      this.location.back();
    });
  }

}
