import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CountBoxComponent } from './count-box/count-box.component';
import { MainBoxComponent } from './main-box/main-box.component';
import { BottomBoxComponent } from './bottom-box/bottom-box.component';

import { DataServiceService } from './data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CountBoxComponent,
    MainBoxComponent,
    BottomBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpModule

  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
