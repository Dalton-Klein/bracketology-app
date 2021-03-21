import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Bracket } from './interfaces';

@Injectable({
  providedIn: 'root'
})

export class ApiClientService {
  // private fetchOrigURL: String = 'https://bracketologie.herokuapp.com/'
  private fetchOrigURL: string = 'http://localhost:3010/';

  constructor(private http: HttpClient) { }

  fetchMaster(id: number): Observable<Bracket> {
    return this.http
      .get<Bracket>(`${this.fetchOrigURL}bracket/${id}`)
      .pipe(map( bracket => Bracket.parse(bracket)));
  }

  async postEntry(entry) {
    return this.http.post(`${this.fetchOrigURL}entry`, entry).toPromise().then(data => {
    })
  }

  async fetchEntries() {
    return this.http.get(`${this.fetchOrigURL}entry`).toPromise().then(data => {
      return data;
    })
  }
}
