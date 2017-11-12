import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Location} from '@angular/common';
import {ToolbarService, ToolbarSettings} from './toolbar.service';

@Component({
  selector: 'ca-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav: EventEmitter<any>;
  settings: ToolbarSettings;

  constructor(private toolbarService: ToolbarService, private location: Location) {
    this.toggleSidenav = new EventEmitter();
    this.settings = new ToolbarSettings();
  }

  ngOnInit() {
    this.toolbarService.toolbarSettings.subscribe((settings: ToolbarSettings) => {
      this.settings = settings;
    });
  }

  navigateBack() {
    this.location.back();
  }

}
