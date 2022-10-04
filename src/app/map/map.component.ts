import { AfterViewInit, Component, Input,DoCheck  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements DoCheck,AfterViewInit {
  @Input()
  data:any={
    lat:0.00,
    lng: 0.00
  }
  trustedUrl!: string;

  constructor() {
   }
   ngDoCheck(): void {
    console.log(this.data)
    this.trustedUrl="http://maps.google.com/maps?q="+this.data.lat+","+this.data.lng+"&z=16&output=embed"; 
   }
  ngAfterViewInit(): void {
  }


  
}
