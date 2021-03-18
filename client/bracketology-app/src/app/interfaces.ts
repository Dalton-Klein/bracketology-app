export class Bracket {
  bracketname!: string
  numMatches!: number
  participants!: string[];
  scores!: number[];

  static parse(data:any) {
    const bracket = Object.assign(new Bracket(), data);
    return bracket
  }
}

export const participants = [
  {value: "Spencer Lee (IOWA) 7-0",  viewValue: "Spencer Lee (IOWA) 7-0"},
  {value: "Sam Latona (VT) 10-0", viewValue: 'Sam Latona (VT) 10-0'},
  {value: "Brandon Courtney (ASU) 11-0",  viewValue: 'Brandon Courtney (ASU) 11-0'},
  {value: "Drew Hildebrandt (CMU) 10-0", viewValue: 'Drew Hildebrandt (CMU) 10-0'},
  {value: "Brody Teske (UNI) 12-1",  viewValue: 'Brody Teske (UNI) 12-1'},
  {value: "Jakob Camacho (NCST) 8-2", viewValue: 'Jakob Camacho (NCST) 8-2'},
  {value: "Taylor LaMont (UVU) 9-1",  viewValue: 'Taylor LaMont (UVU) 9-1'},
  {value: "RayVon Foley (MSU) 8-4", viewValue: 'RayVon Foley (MSU) 8-4'},
  {value: "Devin Schroder (PUR) 9-4",  viewValue: 'Devin Schroder (PUR) 9-4'},
  {value: "Malik Heinselman (OHST) 10-3", viewValue: 'Malik Heinselman (OHST) 10-3'},
  {value: "Dylan Ragusin (MICH) 7-3",  viewValue: 'Dylan Ragusin (MICH) 7-3'},
  {value: "Michael DeAugustino (NW) 6-3", viewValue: 'Michael DeAugustino (NW) 6-3'},
  {value: "Liam Cronin (NEB) 9-3",  viewValue: 'Liam Cronin (NEB) 9-3'},
  {value: "Jaret Lane (LEH) 8-0", viewValue: 'Jaret Lane (LEH) 8-0'},
  {value: "Patrick McKee (MINN) 8-6",  viewValue: 'Patrick McKee (MINN) 8-6'},
  {value: "Codi Russell (APP) 15-1", viewValue: 'Codi Russell (APP) 15-1'},
  {value: "Killian Cardinale (WVU) 12-4",  viewValue: 'Killian Cardinale (WVU) 12-4'},
  {value: "Noah Surtin (MIZZ) 8-4", viewValue: 'Noah Surtin (MIZZ) 8-4'},
  {value: "Eric Barnett (WIS) 7-5",  viewValue: 'Eric Barnett (WIS) 7-5'},
  {value: "Jake Ferri (KENT) 13-2", viewValue: 'Jake Ferri (KENT) 13-2'},
  {value: "Trevor Mastrogiovanni (OKST) 13-4",  viewValue: 'Trevor Mastrogiovanni (OKST) 13-4'},
  {value: "Daniel Vega (SDSU) 14-6", viewValue: 'Daniel Vega (SDSU) 14-6'},
  {value: "Robert Howard (PSU) 5-4",  viewValue: 'Robert Howard (PSU) 5-4'},
  {value: "Fabian Gutierrez (CHAT) 14-3", viewValue: 'Fabian Gutierrez (CHAT) 14-3'},
  {value: "Logan Treaster (NAVY) 11-2",  viewValue: 'Logan Treaster (NAVY) 11-2'},
  {value: "Jackson DiSario (STAN) 7-3", viewValue: 'Jackson DiSario (STAN) 7-3'},
  {value: "Gage Curry (AMER) 4-1",  viewValue: 'Gage Curry (AMER) 4-1'},
  {value: "Brandon Kaylor (ORST) 9-5", viewValue: 'Brandon Kaylor (ORST) 9-5'},
  {value: "Zurich Storm (CAMP) 8-5",  viewValue: 'Zurich Storm (CAMP) 8-5'},
  {value: "Micah Roes (BING) 6-2", viewValue: 'Micah Roes (BING) 6-2'},
  {value: "Jonathan Tropea (RID) 6-4",  viewValue: 'Jonathan Tropea (RID) 6-4'},
  {value: "Patrick McCormick (UVA) 8-5", viewValue: 'Patrick McCormick (UVA) 8-5'},
  {value: "Kysen Terukina (ISU) 8-5",  viewValue: 'Kysen Terukina (ISU) 8-5'},
]