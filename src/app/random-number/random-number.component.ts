import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.css']
})
export class RandomNumberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  randnumbers = [
    this.getRandomNumbers(),
    this.getRandomNumbers(),
    this.getRandomNumbers(),
    this.getRandomNumbers(),
    this.getRandomNumbers(),
    this.getRandomNumbers(),
  ] ;
  selected:any;

  getRandomNumbers(){
    return Math.floor(Math.random() * 46 + 1);
  }

  displaySelected(index: number){
    this.selected = this.randnumbers[index];
  }

}
