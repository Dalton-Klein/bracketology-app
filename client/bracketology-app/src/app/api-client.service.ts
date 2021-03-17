import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Bracket } from './interfaces';

@Injectable({
  providedIn: 'root'
})

export class ApiClientService {
  // private fetchOrigURL: String = 'https://trademon.herokuapp.com/'
  private fetchOrigURL: String = 'http://localhost:3010/';

  constructor(private http: HttpClient) { }

  fetchMaster(id: number): Observable<Bracket> {
    return this.http
      .get<Bracket>(`${this.fetchOrigURL}bracket/${id}`)
      .pipe(map( bracket => Bracket.parse(bracket)));
  }
}
