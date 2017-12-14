import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product = {
    index: 0,
    title: '',
    price: 0,
    url: ''
  };
  constructor(private _productService: DataService, private router: Router) { 
    console.log('Constructing');    
    }
  ngOnInit() {
  }
  onSubmit(){
    this.product.index = this._productService.getIndex();
    this._productService.createProduct(this.product);
    this._productService.inc();
    this.router.navigate(['/products']);
  }

}