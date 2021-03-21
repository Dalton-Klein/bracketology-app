import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ncaawrestling',
  templateUrl: './ncaawrestling.component.html',
  styleUrls: ['./ncaawrestling.component.scss']
})
export class NcaawrestlingComponent implements OnInit {
  
  public weight: string;
  weightClasses= [
    '125', '133', '141', '149', '157',
    '165', '174', '184', '197', '285'
  ];
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.weight = this.route.snapshot.paramMap.get('weight');
  }

  setWeight(weight:string) {
    this.weight = weight 
  }

}
