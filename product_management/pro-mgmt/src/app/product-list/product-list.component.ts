import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = []

  constructor(private _dataService: DataService, private _route: ActivatedRoute) { 
    this.products = this._dataService.products;
    this._route.paramMap.subscribe(params =>{
      console.log(params.get('id'));
    })
  }

  ngOnInit() {
  }

  delete(idx){
    this._dataService.remove(idx)
  }

  edit(idx, name){
    this._dataService.update(idx, name)
  }

}
