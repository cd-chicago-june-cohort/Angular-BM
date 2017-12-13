import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChicagoComponent } from './chicago/chicago.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';

const routes: Routes = [
  
  { path: '', pathMatch: 'full', component: ChicagoComponent },
  { path: 'Chicago', component: ChicagoComponent },
  { path: 'Burbank', component: BurbankComponent },
  { path: 'Dallas', component: DallasComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
