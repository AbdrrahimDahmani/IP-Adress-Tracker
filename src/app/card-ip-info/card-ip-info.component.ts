import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { LeafletMouseEvent } from 'leaflet';


@Component({
  selector: 'app-card-ip-info',
  templateUrl: './card-ip-info.component.html',
  styleUrls: ['./card-ip-info.component.css'],
})

export class CardIpInfoComponent implements OnInit {
  cardTitles = ['IP ADDRESS', 'LOCATION', 'TIMEZONE', '1SP'];

  constructor() {}

  ngOnInit(): void {

  }
}
