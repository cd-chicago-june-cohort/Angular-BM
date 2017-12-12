import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
  
  @Input() quotes

  constructor() { }

  ngOnInit() {
  }

}
