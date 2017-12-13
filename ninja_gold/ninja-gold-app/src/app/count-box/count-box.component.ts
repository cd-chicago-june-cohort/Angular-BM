import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-count-box',
  templateUrl: './count-box.component.html',
  styleUrls: ['./count-box.component.css']
})
export class CountBoxComponent implements OnInit {

  @Input() gold

  constructor(private _dataService: DataServiceService) { }

  ngOnInit() {
    this.gold = this._dataService.goldAmt();
  }

}