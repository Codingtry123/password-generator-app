import { Injectable } from "@angular/core";
import { CharacterCountService } from "../slider/character-count.service";

@Injectable()

export class PasswordGenerationService {
  password: string = 'P4$5W0rD!';

  upperChars: string[] =
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  lowerChars: string[] =
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  symbolChars: string[] =
    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+'];
  numChars: string[] =
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  availableChars: string[] = [];

  constructor(private characterCountService: CharacterCountService) { }

  getAvailableChars(upper: boolean, lower: boolean, number: boolean, symbol: boolean) {

    if (upper) {
      this.availableChars = [...this.upperChars];
    }
    if (lower) {
      this.availableChars = [...this.availableChars, ...this.lowerChars];
    }
    if (number) {
      this.availableChars = [...this.availableChars, ...this.numChars];
    }
    if (symbol) {
      this.availableChars = [...this.availableChars, ...this.symbolChars];
    }
    return this.availableChars;
  }

  setPassword(upper: boolean, lower: boolean, number: boolean, symbol: boolean) {
    const currentCharCount = this.characterCountService.getCurrentCharacterCount()
    this.getAvailableChars(upper, lower, number, symbol)
    const createPassword = []
    for (let i = 1; i <= currentCharCount; i++) {
      createPassword.push(this.availableChars[Math.floor(Math.random() * this.availableChars.length)]);
    }
    this.availableChars = [];
    this.password = createPassword.join('');
  }

  getPassword() {
    return this.password;
  }
}
