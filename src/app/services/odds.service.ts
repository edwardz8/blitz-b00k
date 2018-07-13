import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Odds } from '../models/odds';

@Injectable({
  providedIn: 'root'
})
export class OddsService {

  httpOptions = {
    headers: new HttpHeaders({
      'x-api-key': '7e35d68d-816f-11e8-91fa-06aae780a1ef'
    })
  };

  constructor(protected http: HttpClient) {}

  getOdds(): Observable<any> {
    return this.http.get(`https://api.jsonodds.com//api/odds/mlb`, this.httpOptions);
  }
}

/* Example Requests

Get all odds for a sport
curl -X GET https://jsonodds.com/api/odds/ncaaf -H "x-api-key: 7e35d68d-816f-11e8-91fa-06aae780a1ef" -L

Get all odds for game durations only
curl -X GET https://jsonodds.com/api/odds/{string: sport}?oddType=Game -H "x-api-key: 7e35d68d-816f-11e8-91fa-06aae780a1ef" -L
*/


 /* Available Calls */

  // getOddsBySport

  // getOddTypes

  // getFinalTypes

  //  getResults

  // getResultsBySport
