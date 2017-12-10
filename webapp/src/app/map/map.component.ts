import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'ca-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnChanges {

  googleMapsUrlBase = 'https://www.google.com/maps?q=';
  googleMapsUrlParams = '&output=embed';
  @Input() streetAddress: string;
  @Input() city: string;
  mapUrl: string;

  constructor() {
  }

  ngOnInit() {
    this.refreshMapUrl();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['streetAddress'] || changes['city']) {
      this.refreshMapUrl();
    }
  }

  private refreshMapUrl() {
    this.mapUrl = this.googleMapsUrlBase + this.streetAddress + this.city + this.googleMapsUrlParams;
  }

}
