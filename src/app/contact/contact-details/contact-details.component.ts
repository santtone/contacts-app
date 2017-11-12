import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Contact} from '../contact';
import {ActivatedRoute} from '@angular/router';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'ca-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;
  isNewContact: boolean;

  constructor(private route: ActivatedRoute, private contactService: ContactService, private location: Location) {
    this.contact = new Contact();
    this.isNewContact = true;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contact = this.contactService.findContactById(parseInt(id, 10));
      this.isNewContact = false;
    }
  }

  save() {
    this.contactService.saveContact(this.contact);
    this.location.back();
  }

}
