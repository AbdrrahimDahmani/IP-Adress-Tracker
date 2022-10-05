import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { geoLocation } from '../models/geoLocation.model';

@Injectable({
  providedIn: 'root'
})
export class IpTrackerService {
  apiKey=environment.apiKey
  baseApiUrl=environment.baseApiUrl
  constructor(private http:HttpClient) { }
  getIpTrackInfos(ip:any):Observable<geoLocation>{
    return this.http.get<geoLocation>(this.baseApiUrl+this.apiKey+"&ipAddress="+ip)
  }
}
