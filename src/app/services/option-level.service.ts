import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionLevelService {

  private selectLevel = '3';
  constructor() { }

  setLevel(value: string) {
    this.selectLevel = value;
  }
  getSelectLevel() {
    return this.selectLevel;
  }
}
