import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-bottom-box',
  templateUrl: './bottom-box.component.html',
  styleUrls: ['./bottom-box.component.css']
})
export class BottomBoxComponent implements OnInit {

  @Input() messages

  constructor(private _dataService: DataServiceService) { }

  ngOnInit() {
    this.messages = this._dataService.addGold(location, 4,4)
  }

}