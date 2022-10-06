import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ControlContainer } from '@angular/forms';
import * as L from 'leaflet';
import { Browser, map, tileLayer } from 'leaflet';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit, OnChanges {
  @Input()
  data: any = {
    lat: 0.0,
    lng: 0.0,
  };
  trustedUrl!: string;
  private svgIcon = L.divIcon({
    html: `
    <svg xmlns="http://www.w3.org/2000/svg" 
    width="46" 
    height="56">
    <path fill-rule="evenodd" d="M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z"/></svg>`,
    className: '',
    iconSize: [24, 40],
    iconAnchor: [12, 40],
  });

  constructor() {
    L.Marker.prototype.options.icon = this.svgIcon;
  }
  initMap(lat, lng) {
    let map = L.map('map').setView([lat, lng], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    var marker = L.marker([lat, lng]).addTo(map);
    console.log('active');
    return map;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['data'].currentValue.lat != 0.0 &&
      changes['data'].currentValue.lng != 0
    ) {
      this.data.lat = changes['data'].currentValue.lat;
      this.data.lng = changes['data'].currentValue.lng;
      console.log(this.data);
      var map1 = this.initMap(this.data.lat, this.data.lng);
      var container = L.DomUtil.get('map');
      if (container != null) {
        container['_leaflet_id'] = null;
      }
      if (container['_leaflet_id'] == null) {
        console.log(map1);
        this.initMap(this.data.lat, this.data.lng);
        console.log(map1);
      }
    }
  }

  ngAfterViewInit(): void {}
}
