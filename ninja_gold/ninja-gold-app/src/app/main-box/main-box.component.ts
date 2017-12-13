import { Component, OnInit, Output } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { EventEmitter } from '@angular/core/src/event_emitter';

@Component({
  selector: 'app-main-box',
  templateUrl: './main-box.component.html',
  styleUrls: ['./main-box.component.css']
})
export class MainBoxComponent implements OnInit {

  gold = 0

  constructor(private _dataService: DataServiceService) { }
  
  getGold(location, min, max) {

    this._dataService.addGold(location, min, max)
    console.log('getGold BUTTON WORKING: ', event, this.gold)
  }


  ngOnInit() {
  }

}
