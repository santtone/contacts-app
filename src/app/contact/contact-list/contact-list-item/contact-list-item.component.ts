import {Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Contact} from '../../contact';
import {MatMenuTrigger} from '@angular/material';
import * as _ from 'lodash';

@Component({
  selector: 'ca-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() select: EventEmitter<Contact>;
  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;
  menuIsVisible: boolean;

  @HostListener('click', ['$event'])
  public onClick(event) {
    const buttonClicked = _.find(event.path, {'tagName': 'BUTTON'});
    if (!buttonClicked) {
      this.select.emit(this.contact);
    }
  }

  constructor() {
    this.menuIsVisible = false;
    this.select = new EventEmitter();
  }

  ngOnInit() {
  }

  onFocus() {
    this.toggleMenuButtonVisibility(true);
  }

  toggleMenuButtonVisibility(visibility: boolean) {
    this.menuIsVisible = visibility;
  }

  onBlur() {
    if (!this.menuTrigger.menuOpen) {
      this.toggleMenuButtonVisibility(false);
    }
  }

}
