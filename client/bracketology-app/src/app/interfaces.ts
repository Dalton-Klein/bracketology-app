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