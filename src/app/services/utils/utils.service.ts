import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  createAnonimousNickName(): string {
    const min = 1111;
    const max = 9999;
    const randomNumberInRange: number = Math.floor(Math.random() * (max - min + 1)) + min;
    return `Anonimous_${randomNumberInRange}`
  }
}
