import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PowerComponentComponent } from './power-component/power-component.component';
import { HumanComponentComponent } from './power-component/human-component/human-component.component';
import { SaiyanComponentComponent } from './power-component/saiyan-component/saiyan-component.component';
import { SuperSaiyanComponentComponent } from './power-component/super-saiyan-component/super-saiyan-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponentComponent,
    HumanComponentComponent,
    SaiyanComponentComponent,
    SuperSaiyanComponentComponent
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
