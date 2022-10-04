import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { geoLocation } from '../models/geoLocation.model';

@Injectable({
  providedIn: 'root'
})
export class IpTrackerService {
  apiKey="at_IgRBI40aArF3PnW2TiTUvxh1JThG5"
  constructor(private http:HttpClient) { }
  getIpTrackInfos(ip:any):Observable<geoLocation>{
    return this.http.get<geoLocation>("https://geo.ipify.org/api/v2/country,city?apiKey="+this.apiKey+"&ipAddress="+ip)
  }
}
