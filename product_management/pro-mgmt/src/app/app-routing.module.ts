import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
    
    {path: '', pathMatch: 'full', component: HomeComponent},
    { path: 'home', component: HomeComponent },
    { path: 'products', pathMatch: 'full', component: ProductListComponent },
    { path: 'products/new', component: CreateComponent },
    { path: 'products/edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
