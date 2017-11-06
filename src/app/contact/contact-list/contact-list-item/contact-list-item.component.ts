import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Contact} from '../../contact';
import {MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'ca-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;
  menuIsVisible: boolean;

  constructor() {
    this.menuIsVisible = false;
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
