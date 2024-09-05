import { Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CharacterCountService {

  @Output() currentCharCount = 0;


  constructor() { }

  updateCharCount(value: number) {
    this.currentCharCount = value;
  }
  getCurrentCharacterCount() {
    return this.currentCharCount;
  }
}
