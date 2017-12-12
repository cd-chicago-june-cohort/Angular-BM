import { Component } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quotes-main',
  templateUrl: './quotes-main.component.html',
  styleUrls: ['./quotes-main.component.css']
})
export class QuotesMainComponent {
  
  quotes = [
    {'body': 'First quote', 'author': 'Authorman'},
    {'body': 'Second quote', 'author': 'Authorwoman'},
    {'body': 'Third quote', 'author': 'Authorthey'}
  ]

  createQuote(quote) {
    this.quotes.push(quote);
  }

  constructor() { }

}
