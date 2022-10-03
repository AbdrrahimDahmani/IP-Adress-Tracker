import { AfterViewInit, Component, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {
  data={
    'lat':33.5731104,
    'lng':-7.5898434
  }
  trustedUrl="http://maps.google.com/maps?q="+this.data.lat+","+this.data.lng+"&z=16&output=embed";

  constructor() { }

  ngAfterViewInit(): void {
  }


  
}
