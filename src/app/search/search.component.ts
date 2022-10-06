import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { geoLocation } from '../models/geoLocation.model';
import { IpTrackerService } from '../services/ip-tracker.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public ip: string = '';
  public locationInfo: any = {
    ip: '',
    location: {
      country: '',
      region: '',
      city: '',
      lat: 0.0,
      lng: 0.0,
      postalCode: '',
      timezone: '',
      geonameId: 0,
    },
    as: {
      asn: 0,
      name: '',
      route: '',
      domain: '',
      type: '',
    },
    isp: '  ',
  };
  public myIpAddress!: string;
  data = {
    lat: 0.0,
    lng: 0.0,
  };
  constructor(
    private ipTrackService: IpTrackerService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getIPAddress();
    this.saveData();
  }

  saveData() {
    if (this.ip !== null) {
      this.ipTrackService.getIpTrackInfos(this.ip).subscribe(
        (res: geoLocation) => {
          this.locationInfo = res;
          this.data = {
            lat: res.location.lat,
            lng: res.location.lng,
          };
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
