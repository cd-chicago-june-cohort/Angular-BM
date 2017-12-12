import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {

  numbers: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbers = this._dataService.retrieveNumber();
  }

  pushOne() {
    this._dataService.addNumber(1);
  }

  pushTwo() {
    this._dataService.addNumber(2);
  }

  popNumber() {
    this._dataService.popNumber(1);
  }

}
