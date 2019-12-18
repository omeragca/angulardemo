import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  url = environment.baseUrl + '/rest/flight';

  constructor(private http: HttpClient) { }

  public getFlights() {
    return this.http.get<any>(this.url + '/list');
  }
}
