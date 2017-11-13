import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ca-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() streetAddress: string;
  @Input() city: string;
  mapUrl: string;

  constructor() {
  }

  ngOnInit() {
    this.mapUrl = 'https://www.google.com/maps?q=' + this.streetAddress + '&output=embed';
  }

}
