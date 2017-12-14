import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  productsObservable = new BehaviorSubject(null);
  
  products = []
  index = 0

  constructor() { }

  createProduct(product){
    this.products.push(product);
    for( let i = 0; i < this.products.length; i++){
      console.log(this.products[i])
    }
  }
  inc(){
    this.index ++
  }
  getIndex(){
    return this.index
  }
  getProducts(){
    return this.products;
  }
  getOne(idx){
    return this.products[idx]
  }
  update(item){
    this.products[item] = item;
  }
  remove(idx){
    this.products.splice(idx, 1)
  }

}
