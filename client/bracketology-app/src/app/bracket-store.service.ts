import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiClientService } from './api-client.service';
import { Bracket } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class BracketStoreService {
  public current$ = new BehaviorSubject<Bracket>({
    bracketname:'',
    numMatches: 0,
    participants: [],
    scores: [],
  });

  constructor(private apiClient: ApiClientService, ) { }

  fetchBracket(id:number) {
    this.apiClient.fetchMaster(id)
    .subscribe((bracketData) => {
      this.current$.next(bracketData);
    });
    
  }


}
