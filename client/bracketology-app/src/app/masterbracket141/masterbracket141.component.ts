import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bracket } from '../interfaces';
import { BracketStoreService } from '../bracket-store.service';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-masterbracket141',
  templateUrl: './masterbracket141.component.html',
  styleUrls: ['./masterbracket141.component.scss']
})
export class Masterbracket141Component implements OnInit {

  storeSubscription!: Subscription;
  bracket: Bracket;

  slot1:string= '0'
  participant1:string = 'blank'
  score1:number = 0
  slot2:string= '0'
  participant2:string = 'blank'
  score2:number = 0
  slot3:string= '0'
  participant3:string = 'blank'
  score3:number = 0
  slot4:string= '0'
  participant4:string = 'blank'
  score4:number = 0
  slot5:string= '0'
  participant5:string = 'blank'
  score5:number = 0
  slot6:string= '0'
  participant6:string = 'blank'
  score6:number = 0
  slot7:string= '0'
  participant7:string = 'blank'
  score7:number = 0
  slot8:string= '0'
  participant8:string = 'blank'
  score8:number = 0
  slot9:string= '0'
  participant9:string = 'blank'
  score9:number = 0
  slot10:string= '0'
  participant10:string = 'blank'
  score10:number = 0
  slot11:string= '0'
  participant11:string = 'blank'
  score11:number = 0
  slot12:string= '0'
  participant12:string = 'blank'
  score12:number = 0
  slot13:string= '0'
  participant13:string = 'blank'
  score13:number = 0
  slot14:string= '0'
  participant14:string = 'blank'
  score14:number = 0
  slot15:string= '0'
  participant15:string = 'blank'
  score15:number = 0
  slot16:string= '0'
  participant16:string = 'blank'
  score16:number = 0
  slot17:string= '0'
  participant17:string = 'blank'
  score17:number = 0
  slot18:string= '0'
  participant18:string = 'blank'
  score18:number = 0
  slot19:string= '0'
  participant19:string = 'blank'
  score19:number = 0
  slot20:string= '0'
  participant20:string = 'blank'
  score20:number = 0
  slot21:string= '0'
  participant21:string = 'blank'
  score21:number = 0
  slot22:string= '0'
  participant22:string = 'blank'
  score22:number = 0
  slot23:string= '0'
  participant23:string = 'blank'
  score23:number = 0
  slot24:string= '0'
  participant24:string = 'blank'
  score24:number = 0
  slot25:string= '0'
  participant25:string = 'blank'
  score25:number = 0
  slot26:string= '0'
  participant26:string = 'blank'
  score26:number = 0
  slot27:string= '0'
  participant27:string = 'blank'
  score27:number = 0
  slot28:string= '0'
  participant28:string = 'blank'
  score28:number = 0
  slot29:string= '0'
  participant29:string = 'blank'
  score29:number = 0
  slot30:string= '0'
  participant30:string = 'blank'
  score30:number = 0
  slot31:string= '0'
  participant31:string = 'blank'
  score31:number = 0
  slot32:string= '0'
  participant32:string = 'blank'
  score32:number = 0
  slot33:string= '0'
  participant33:string = 'blank'
  score33:number = 0
  slot34:string= '0'
  participant34:string = 'blank'
  score34:number = 0
  slot35:string= '0'
  participant35:string = 'blank'
  score35:number = 0
  slot36:string= '0'
  participant36:string = 'blank'
  score36:number = 0
  slot37:string= '0'
  participant37:string = 'blank'
  score37:number = 0
  slot38:string= '0'
  participant38:string = 'blank'
  score38:number = 0
  slot39:string= '0'
  participant39:string = 'blank'
  score39:number = 0
  slot40:string= '0'
  participant40:string = 'blank'
  score40:number = 0
  slot41:string= '0'
  participant41:string = 'blank'
  score41:number = 0
  slot42:string= '0'
  participant42:string = 'blank'
  score42:number = 0
  slot43:string= '0'
  participant43:string = 'blank'
  score43:number = 0
  slot44:string= '0'
  participant44:string = 'blank'
  score44:number = 0
  slot45:string= '0'
  participant45:string = 'blank'
  score45:number = 0
  slot46:string= '0'
  participant46:string = 'blank'
  score46:number = 0
  slot47:string= '0'
  participant47:string = 'blank'
  score47:number = 0
  slot48:string= '0'
  participant48:string = 'blank'
  score48:number = 0
  slot49:string= '0'
  participant49:string = 'blank'
  score49:number = 0
  slot50:string= '0'
  participant50:string = 'blank'
  score50:number = 0
  slot51:string= '0'
  participant51:string = 'blank'
  score51:number = 0
  slot52:string= '0'
  participant52:string = 'blank'
  score52:number = 0
  slot53:string= '0'
  participant53:string = 'blank'
  score53:number = 0
  slot54:string= '0'
  participant54:string = 'blank'
  score54:number = 0
  slot55:string= '0'
  participant55:string = 'blank'
  score55:number = 0
  slot56:string= '0'
  participant56:string = 'blank'
  score56:number = 0
  slot57:string= '0'
  participant57:string = 'blank'
  score57:number = 0
  slot58:string= '0'
  participant58:string = 'blank'
  score58:number = 0
  slot59:string= '0'
  participant59:string = 'blank'
  score59:number = 0
  slot60:string= '0'
  participant60:string = 'blank'
  score60:number = 0
  slot61:string= '0'
  participant61:string = 'blank'
  score61:number = 0
  slot62:string= '0'
  participant62:string = 'blank'
  score62:number = 0
  slot63:string= '0'
  participant63:string = 'blank'
  score63:number = 0
  slot64:string= '0'
  participant64:string = 'blank'
  score64:number = 0
  slot65:string= '0'
  participant65:string = 'blank'
  score65:number = 0

  entries:any= [];
  scores:any= [];

  // constructor( ) { }
  constructor(private store: BracketStoreService, private apiClient: ApiClientService ) { }


  ngOnInit(): void {
    this.storeSubscription = this.store.current$
    .subscribe((data: Bracket) => {
      this.bracket = data;
      this.setBracketData()
    });
    this.awaitEntries();
  }

  awaitEntries = async () => {
    this.entries = await this.getEntries();
    let filteredEntries;
    this.entries.forEach(entry => {
      if (entry.masterId == 3) filteredEntries.push(entry);
    });
    this.entries = filteredEntries;
    this.store.fetchBracket(3);
  }

  getEntries = async () => {
    return await this.apiClient.fetchEntries();
  }

  setScores = () => {
    let entrant = 0
    if (this.entries) {
      this.entries.forEach(entry => {
        this.scores.push(0);
        let index = 0
        entry.picks.forEach(pick => {
          console.log(entrant, '  ComparingPicks', pick, ' to master ', this.bracket.participants[index+33])
          if(pick === this.bracket.participants[index+33]) {
            let pointsToAdd = 0
            if (index < 17) {pointsToAdd = 1}
            else if (index < 25) {pointsToAdd = 2}
            else if (index < 29) {pointsToAdd = 6}
            else if (index < 31) {pointsToAdd = 8}
            else {pointsToAdd = 10}
            this.scores[entrant] = this.scores[index]+pointsToAdd;
            console.log('Increasing Score!!', this.scores)
          }
          index++;
        });
        entrant++;
      });
    }
  }

  setBracketData = () => {
    this.participant1= this.bracket.participants[0];
    this.score1= this.bracket.scores[0];
    this.participant2= (this.bracket.participants[1] ? this.bracket.participants[1] : '');
    this.score2= (this.bracket.scores[1] ? this.bracket.scores[1] : 0);
    this.participant3= this.bracket.participants[2];
    this.participant4= this.bracket.participants[3];
    this.participant5= this.bracket.participants[4];
    this.participant6= this.bracket.participants[5];
    this.participant7= this.bracket.participants[6];
    this.participant8= this.bracket.participants[7];
    this.participant9= this.bracket.participants[8];
    this.participant10= this.bracket.participants[9];
    this.participant11= this.bracket.participants[10];
    this.participant12= this.bracket.participants[11];
    this.participant13= this.bracket.participants[12];
    this.participant14= this.bracket.participants[13];
    this.participant15= this.bracket.participants[14];
    this.participant16= this.bracket.participants[15];
    this.participant17= this.bracket.participants[16];
    this.participant18= this.bracket.participants[17];
    this.participant19= this.bracket.participants[18];
    this.participant20= this.bracket.participants[19];
    this.participant21= this.bracket.participants[20];
    this.participant22= this.bracket.participants[21];
    this.participant23= this.bracket.participants[22];
    this.participant24= this.bracket.participants[23];
    this.participant25= this.bracket.participants[24];
    this.participant26= this.bracket.participants[25];
    this.participant27= this.bracket.participants[26];
    this.participant28= this.bracket.participants[27];
    this.participant29= this.bracket.participants[28];
    this.participant30= this.bracket.participants[29];
    this.participant31= this.bracket.participants[30];
    this.participant32= this.bracket.participants[31];
    //Round2
    this.participant33= (this.bracket.participants[32] ? this.bracket.participants[32] : '');
    this.participant34= (this.bracket.participants[33] ? this.bracket.participants[33] : '');
    this.participant35= (this.bracket.participants[34] ? this.bracket.participants[34] : '');
    this.participant36= (this.bracket.participants[35] ? this.bracket.participants[35] : '');
    this.participant37= (this.bracket.participants[36] ? this.bracket.participants[36] : '');
    this.participant38= (this.bracket.participants[37] ? this.bracket.participants[37] : '');
    this.participant39= (this.bracket.participants[38] ? this.bracket.participants[38] : '');
    this.participant40= (this.bracket.participants[39] ? this.bracket.participants[39] : '');
    this.participant41= (this.bracket.participants[40] ? this.bracket.participants[40] : '');
    this.participant42= (this.bracket.participants[41] ? this.bracket.participants[41] : '');
    this.participant43= (this.bracket.participants[42] ? this.bracket.participants[42] : '');
    this.participant44= (this.bracket.participants[43] ? this.bracket.participants[43] : '');
    this.participant45= (this.bracket.participants[44] ? this.bracket.participants[44] : '');
    this.participant46= (this.bracket.participants[45] ? this.bracket.participants[45] : '');
    this.participant47= (this.bracket.participants[46] ? this.bracket.participants[46] : '');
    this.participant48= (this.bracket.participants[47] ? this.bracket.participants[47] : '');
    // Round 3
    this.participant49= (this.bracket.participants[48] ? this.bracket.participants[48] : '');
    this.participant50= (this.bracket.participants[49] ? this.bracket.participants[49] : '');
    this.participant51= (this.bracket.participants[50] ? this.bracket.participants[50] : '');
    this.participant52= (this.bracket.participants[51] ? this.bracket.participants[51] : '');
    this.participant53= (this.bracket.participants[52] ? this.bracket.participants[52] : '');
    this.participant54= (this.bracket.participants[53] ? this.bracket.participants[53] : '');
    this.participant55= (this.bracket.participants[54] ? this.bracket.participants[54] : '');
    this.participant56= (this.bracket.participants[55] ? this.bracket.participants[55] : '');
    //Round 4
    this.participant57= (this.bracket.participants[56] ? this.bracket.participants[56] : '');
    this.participant58= (this.bracket.participants[57] ? this.bracket.participants[57] : '');
    this.participant59= (this.bracket.participants[58] ? this.bracket.participants[58] : '');
    this.participant60= (this.bracket.participants[59] ? this.bracket.participants[59] : '');
    //Round 5
    this.participant61= (this.bracket.participants[60] ? this.bracket.participants[60] : '');
    this.participant62= (this.bracket.participants[61] ? this.bracket.participants[61] : '');
    //Champ
    this.participant63= (this.bracket.participants[62] ? this.bracket.participants[62] : '');
    this.setScores();
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }
}

