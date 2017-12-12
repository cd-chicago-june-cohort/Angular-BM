import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuotesMainComponent } from './quotes-main/quotes-main.component';
import { AddQuoteComponent } from './quotes-main/add-quote/add-quote.component';
import { QuotesListComponent } from './quotes-main/quotes-list/quotes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesMainComponent,
    AddQuoteComponent,
    QuotesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
