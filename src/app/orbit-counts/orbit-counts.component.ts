import { Component, Input, OnInit } from '@angular/core';

import { Satellite } from '../satellite';
@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  total: number = 0;
  debris: number = 0;
  comms: number = 0;
  probe: number = 0;
  positioning: number = 0;
  station: number = 0;
  telescope: number = 0;
  constructor() {
  }

  ngOnInit() {

  }
 
  counter(type: string): number {
    let count = 0;
    for(let i = 0; i< this.satellites.length; i++){
      if(this.satellites[i].type === type){
        count += 1;
      }
    }
    return count
  }
}