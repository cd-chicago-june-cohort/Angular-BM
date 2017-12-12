import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  numbers: number[] = [1,2,3];

  constructor() { }

  retrieveNumber(): number[] {
    return this.numbers;
  }

  addNumber(num: number) {
    this.numbers.push(num);
  }

  popNumber(num: number) {
    this.numbers.pop();
  }
}
