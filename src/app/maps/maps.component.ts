import { Business } from './../business-interface';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'pm-map',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit, OnChanges {

    @Input() latitude: number;
    @Input() longitude: number;
    @Input() label: string;

  constructor() { }

  zoom: number;
  lat: number;
  lng: number;
 markers: Marker[];

  ngOnChanges()
  {
  this.zoom = 16;
  this. lat = this.latitude;
  this.lng = this.longitude;

this.markers = [{
  lat: this.latitude,
  lng: this.longitude,
}
];

  }

  ngOnInit() {
  }

}

interface Marker {
	lat: number;
	lng: number;
	label?: string;
}

