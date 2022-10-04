import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { geoLocation } from '../models/geoLocation.model';
import { IpTrackerService } from '../services/ip-tracker.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public ip: string = '';
  public locationInfo!: any;
  public myIpAddress!: string;
  data={
    lat:0.00,
    lng:0.00
  }
  constructor(
    private ipTrackService: IpTrackerService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getIPAddress()
    this.saveData()
  }

  saveData() {
    if (this.ip !== null) {
      this.ipTrackService.getIpTrackInfos(this.ip).subscribe(
        (res: geoLocation) => {
          this.locationInfo = res;
          console.log(this.locationInfo);
          this.data=({
            lat:res.location.lat,
            lng: res.location.lng
          })
          console.log(this.data)
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  getIPAddress() {
    this.http.get('http://api.ipify.org/?format=json').subscribe((res: any) => {
      this.ip = res.ip;
    });
  }
}
