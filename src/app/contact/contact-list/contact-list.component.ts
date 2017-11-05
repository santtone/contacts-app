import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact(1, 'Sami', 'Anttonen', '01234567', 'Skinnarilankatu 35', 'Lappeenranta'),
      new Contact(2, 'Jouni', 'Könönen', '01234567', 'Skinnarilankatu 35', 'Lappeenranta')
    ];
  }

  ngOnInit() {
  }

}
