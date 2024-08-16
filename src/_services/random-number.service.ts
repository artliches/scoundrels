import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {

  constructor() { }

  getRandomNumber(min: number, max: number, numToReroll?: number) {
    let numToReturn = Math.floor(Math.random() * (max - min) ) + min;
    if (numToReroll !== undefined && numToReroll > -1 && numToReroll === numToReturn) {
      do {
        numToReturn = Math.floor(Math.random() * (max - min) ) + min;
      } while (numToReroll === numToReturn);
    }
    return numToReturn;
  }
}
