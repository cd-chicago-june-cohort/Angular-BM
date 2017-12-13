import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceService {
  gold = 0
  location: String = ''
  rand: number
  messages: any [] = []

  constructor() { }

  goldAmt (): number {
    return this.gold
  }

  addGold(location, min, max) {
    this.rand = Math.floor(Math.random() * (max - min) + min)
    this.location = location
    console.log("ADD GOLD HITTTTT")
    this.gold += this.rand
    this.displayMessage(this.location, this.rand)
    console.log('GOLD = ', this.gold, this.location)
    return this.gold
  }

  displayMessage(location: String, gold:number){
    if(gold<0){
      this.messages.push("You lost " + gold +  " gold at the " + location)
    } else {
      this.messages.push("You earned " + gold + " gold at the " +  location) 
    }
  }
}
