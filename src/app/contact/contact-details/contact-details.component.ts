import {Component, OnInit} from '@angular/core';
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

  constructor(private route: ActivatedRoute, private contactService: ContactService) {
    this.contact = new Contact();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contact = this.contactService.findContactById(parseInt(id, 10));
    }

  }

}
