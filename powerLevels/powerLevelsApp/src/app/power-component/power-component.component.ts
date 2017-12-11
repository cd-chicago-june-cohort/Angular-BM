import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-component',
  templateUrl: './power-component.component.html',
  styleUrls: ['./power-component.component.css']
})
export class PowerComponentComponent implements OnInit {
  power: number;
  
  constructor() { }

  ngOnInit() {

    this.power = 10;
    
  }

}
