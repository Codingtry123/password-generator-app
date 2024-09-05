import { Injectable} from "@angular/core";
import { BehaviorSubject} from "rxjs";
import { CharacterCountService } from "../slider/character-count.service";

@Injectable()

export class StrengthUpdateService {

  /* Strength Value */
  levelNumber = 1
  private strengthValue = new BehaviorSubject<number>(1);
  castStrengthValue = this.strengthValue.asObservable()


  /* Strength Level */
  private strengthLevel = new BehaviorSubject<string>('');
  castStrengthLevel = this.strengthLevel.asObservable()
  strengthLevels = ['', 'too weak!', 'too weak!', 'weak',
    'weak', 'weak', 'medium', 'medium', 'strong'
  ];


  constructor(private characterCountService: CharacterCountService) { }


  updateStrength(lower: boolean, upper: boolean, number: boolean, symbol: boolean) {
    let updatedStrength = 0;

    updatedStrength =
      (this.characterCountService.currentCharCount >= 8 ? 2 : 0) +
      (upper ? 2 : 0) + (lower ? 1 : 0) +
      (number ? 1 : 0) + (symbol ? 2 : 0)
    this.levelNumber = updatedStrength;
    this.updateCurrentLevel();
  }

updateCurrentLevel() {
    let level = this.strengthLevels[this.levelNumber]
    this.levelNumber = +this.strengthValue
    this.strengthLevel.next(level)
  }

}
