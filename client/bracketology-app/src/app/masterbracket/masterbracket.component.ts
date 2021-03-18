import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bracket } from '../interfaces';
import { BracketStoreService } from '../bracket-store.service';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-masterbracket',
  templateUrl: './masterbracket.component.html',
  styleUrls: ['./masterbracket.component.scss']
})
export class MasterbracketComponent implements OnInit {

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

  entries:any= []

  // constructor( ) { }
  constructor(private store: BracketStoreService, private apiClient: ApiClientService ) { }


  ngOnInit(): void {
    this.storeSubscription = this.store.current$
    .subscribe((data: Bracket) => {
      this.bracket = data;
      this.setBracketData()
    });
    console.log('What is the store: ', this.bracket);
    this.store.fetchBracket(1);
    this.simpleAwait();
  }

  simpleAwait = async () => {
    console.log('Before');
    this.entries = await this.getEntries();
    console.log('Getting Entries: ', this.entries )
  }

   getEntries = async () => {
    return await this.apiClient.fetchEntries();
  }

  setBracketData = () => {
    this.slot1= '1'
    this.participant1= this.bracket.participants[0];
    this.score1= this.bracket.scores[0];
    this.slot2= '?'
    this.participant2= (this.bracket.participants[34] ? this.bracket.participants[34] : '');
    this.score2= (this.bracket.scores[34] ? this.bracket.scores[34] : 0);
    this.slot3= '17'
    this.participant3= this.bracket.participants[16];
    this.score3= this.bracket.scores[16];
    this.slot4= '16'
    this.participant4= this.bracket.participants[15];
    this.score4= this.bracket.scores[15];
    this.slot5= '9'
    this.participant5= this.bracket.participants[8];
    this.score5= this.bracket.scores[8];
    this.slot6= '24'
    this.participant6= this.bracket.participants[23];
    this.score6= this.bracket.scores[23];
    this.slot7= '25'
    this.participant7= this.bracket.participants[24];
    this.score7= this.bracket.scores[24];
    this.slot8= '8'
    this.participant8= this.bracket.participants[7];
    this.score8= this.bracket.scores[4];
    this.slot9= '5'
    this.participant9= this.bracket.participants[4];
    this.score9= this.bracket.scores[4];
    this.slot10= '28'
    this.participant10= this.bracket.participants[27];
    this.score10= this.bracket.scores[27];
    this.slot11= '21'
    this.participant11= this.bracket.participants[20];
    this.score11= this.bracket.scores[20];
    this.slot12= '12'
    this.participant12= this.bracket.participants[11];
    this.score12= this.bracket.scores[11];
    this.slot13= '13'
    this.participant13= this.bracket.participants[12];
    this.score13= this.bracket.scores[12];
    this.slot14= '20'
    this.participant14= this.bracket.participants[19];
    this.score14= this.bracket.scores[19];
    this.slot15= '29'
    this.participant15= this.bracket.participants[28];
    this.score15= this.bracket.scores[28];
    this.slot16= '4'
    this.participant16= this.bracket.participants[3];
    this.score16= this.bracket.scores[3];
    this.slot17= '3'
    this.participant17= this.bracket.participants[2];
    this.score17= this.bracket.scores[2];
    this.slot18= '30'
    this.participant18= this.bracket.participants[29];
    this.score18= this.bracket.scores[29];
    this.slot19= '19'
    this.participant19= this.bracket.participants[18];
    this.score19= this.bracket.scores[18];
    this.slot20= '14'
    this.participant20= this.bracket.participants[13];
    this.score20= this.bracket.scores[13];
    this.slot21= '11'
    this.participant21= this.bracket.participants[10];
    this.score21= this.bracket.scores[10];
    this.slot22= '22'
    this.participant22= this.bracket.participants[21];
    this.score22= this.bracket.scores[21];
    this.slot23= '27'
    this.participant23= this.bracket.participants[26];
    this.score23= this.bracket.scores[26];
    this.slot24= '6'
    this.participant24= this.bracket.participants[5];
    this.score24= this.bracket.scores[5];
    this.slot25= '7'
    this.participant25= this.bracket.participants[6];
    this.score25= this.bracket.scores[6];
    this.slot26= '26'
    this.participant26= this.bracket.participants[25];
    this.score26= this.bracket.scores[25];
    this.slot27= '23'
    this.participant27= this.bracket.participants[22];
    this.score27= this.bracket.scores[22];
    this.slot28= '10'
    this.participant28= this.bracket.participants[9];
    this.score28= this.bracket.scores[9];
    this.slot29= '15'
    this.participant29= this.bracket.participants[3];
    this.score29= this.bracket.scores[3];
    this.slot30= '18'
    this.participant30= this.bracket.participants[17];
    this.score30= this.bracket.scores[17];
    this.slot31= '31'
    this.participant31= this.bracket.participants[30];
    this.score31= this.bracket.scores[30];
    this.slot32= '2'
    this.participant32= this.bracket.participants[1];
    this.score32= this.bracket.scores[1];
    //Prelims
    this.slot33= '33'
    this.participant33= this.bracket.participants[32];
    this.score33= this.bracket.scores[32];
    this.slot34= '32'
    this.participant34= this.bracket.participants[31];
    this.score34= this.bracket.scores[31];
    //Round2
    this.slot35= '?'
    this.participant35= (this.bracket.participants[34] ? this.bracket.participants[34] : '');
    this.score35= (this.bracket.scores[34] ? this.bracket.scores[34] : 0);
    this.slot36= '?'
    this.participant36= (this.bracket.participants[35] ? this.bracket.participants[35] : '');
    this.score36= (this.bracket.scores[35] ? this.bracket.scores[35] : 0);
    this.slot37= '?'
    this.participant37= (this.bracket.participants[36] ? this.bracket.participants[36] : '');
    this.score37= (this.bracket.scores[36] ? this.bracket.scores[36] : 0);
    this.slot38= '?'
    this.participant38= (this.bracket.participants[37] ? this.bracket.participants[37] : '');
    this.score38= (this.bracket.scores[37] ? this.bracket.scores[37] : 0);
    this.slot39= '?'
    this.participant39= (this.bracket.participants[38] ? this.bracket.participants[38] : '');
    this.score39= (this.bracket.scores[38] ? this.bracket.scores[38] : 0);
    this.slot40= '?'
    this.participant40= (this.bracket.participants[39] ? this.bracket.participants[39] : '');
    this.score40= (this.bracket.scores[39] ? this.bracket.scores[39] : 0);
    this.slot41= '?'
    this.participant41= (this.bracket.participants[40] ? this.bracket.participants[40] : '');
    this.score41= (this.bracket.scores[40] ? this.bracket.scores[40] : 0);
    this.slot42= '?'
    this.participant42= (this.bracket.participants[41] ? this.bracket.participants[41] : '');
    this.score42= (this.bracket.scores[41] ? this.bracket.scores[41] : 0);
    this.slot43= '?'
    this.participant43= (this.bracket.participants[42] ? this.bracket.participants[42] : '');
    this.score43= (this.bracket.scores[42] ? this.bracket.scores[42] : 0);
    this.slot44= '?'
    this.participant44= (this.bracket.participants[43] ? this.bracket.participants[43] : '');
    this.score44= (this.bracket.scores[43] ? this.bracket.scores[43] : 0);
    this.slot45= '?'
    this.participant45= (this.bracket.participants[44] ? this.bracket.participants[44] : '');
    this.score45= (this.bracket.scores[44] ? this.bracket.scores[44] : 0);
    this.slot46= '?'
    this.participant46= (this.bracket.participants[45] ? this.bracket.participants[45] : '');
    this.score46= (this.bracket.scores[45] ? this.bracket.scores[45] : 0);
    this.slot47= '?'
    this.participant47= (this.bracket.participants[46] ? this.bracket.participants[46] : '');
    this.score47= (this.bracket.scores[46] ? this.bracket.scores[46] : 0);
    this.slot48= '?'
    this.participant48= (this.bracket.participants[47] ? this.bracket.participants[47] : '');
    this.score48= (this.bracket.scores[47] ? this.bracket.scores[47] : 0);
    this.slot49= '?'
    this.participant49= (this.bracket.participants[48] ? this.bracket.participants[48] : '');
    this.score49= (this.bracket.scores[48] ? this.bracket.scores[48] : 0);
    this.slot50= '?'
    this.participant50= (this.bracket.participants[49] ? this.bracket.participants[49] : '');
    this.score50= (this.bracket.scores[49] ? this.bracket.scores[49] : 0);
    // Round 3
    this.slot51= '?'
    this.participant51= (this.bracket.participants[50] ? this.bracket.participants[50] : '');
    this.score51= (this.bracket.scores[50] ? this.bracket.scores[50] : 51);
    this.slot52= '?'
    this.participant52= (this.bracket.participants[51] ? this.bracket.participants[51] : '');
    this.score52= (this.bracket.scores[51] ? this.bracket.scores[51] : 0);
    this.slot53= '?'
    this.participant53= (this.bracket.participants[52] ? this.bracket.participants[52] : '');
    this.score53= (this.bracket.scores[52] ? this.bracket.scores[52] : 0);
    this.slot54= '?'
    this.participant54= (this.bracket.participants[53] ? this.bracket.participants[53] : '');
    this.score54= (this.bracket.scores[53] ? this.bracket.scores[53] : 0);
    this.slot55= '?'
    this.participant55= (this.bracket.participants[54] ? this.bracket.participants[54] : '');
    this.score54= (this.bracket.scores[54] ? this.bracket.scores[54] : 0);
    this.slot56= '?'
    this.participant56= (this.bracket.participants[55] ? this.bracket.participants[55] : '');
    this.score56= (this.bracket.scores[55] ? this.bracket.scores[55] : 0);
    this.slot57= '?'
    this.participant57= (this.bracket.participants[56] ? this.bracket.participants[56] : '');
    this.score57= (this.bracket.scores[56] ? this.bracket.scores[56] : 0);
    this.slot58= '?'
    this.participant58= (this.bracket.participants[57] ? this.bracket.participants[57] : '');
    this.score58= (this.bracket.scores[57] ? this.bracket.scores[57] : 0);
    //Round 4
    this.slot59= '?'
    this.participant59= (this.bracket.participants[58] ? this.bracket.participants[58] : '');
    this.score59= (this.bracket.scores[58] ? this.bracket.scores[58] : 0);
    this.slot60= '?'
    this.participant60= (this.bracket.participants[59] ? this.bracket.participants[59] : '');
    this.score60= (this.bracket.scores[59] ? this.bracket.scores[59] : 0);
    this.slot61= '?'
    this.participant61= (this.bracket.participants[60] ? this.bracket.participants[60] : '');
    this.score61= (this.bracket.scores[60] ? this.bracket.scores[60] : 0);
    this.slot62= '?'
    this.participant62= (this.bracket.participants[61] ? this.bracket.participants[61] : '');
    this.score62= (this.bracket.scores[61] ? this.bracket.scores[61] : 0);
    //Round 5
    this.slot63= '?'
    this.participant63= (this.bracket.participants[62] ? this.bracket.participants[62] : '');
    this.score63= (this.bracket.scores[62] ? this.bracket.scores[62] : 0);
    this.slot64= '?'
    this.participant64= (this.bracket.participants[63] ? this.bracket.participants[63] : '');
    this.score64= (this.bracket.scores[63] ? this.bracket.scores[63] : 0);
    //Champ
    this.slot65= '?'
    this.participant65= (this.bracket.participants[64] ? this.bracket.participants[64] : '');
    this.score65= (this.bracket.scores[64] ? this.bracket.scores[64] : 0);
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }
}
