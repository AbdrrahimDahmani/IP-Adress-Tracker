import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { geoLocation } from '../models/geoLocation.model';

@Injectable({
  providedIn: 'root'
})
export class IpTrackerService {
  apiKey="at_rglrQnuBPe96xwyZqpxXH5jDBmfsf"
  baseApiUrl="https://geo.ipify.org/api/v2/country,city?apiKey="
  constructor(private http:HttpClient) { }
  getIpTrackInfos(ip:any):Observable<geoLocation>{
    return this.http.get<geoLocation>(this.baseApiUrl+this.apiKey+"&ipAddress="+ip)
  }
}
