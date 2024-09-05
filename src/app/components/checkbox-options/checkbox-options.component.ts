import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StrengthUpdateService } from '../strength-bar/strengthUpdate.service';

@Component({
  selector: 'app-checkbox-options',
  templateUrl: './checkbox-options.component.html',
  styleUrls: ['./checkbox-options.component.scss']
})
export class CheckboxOptionsComponent implements OnInit {

  upper = false;
  lower = false;
  number = false;
  symbol = false;


  @Output() changeUpperValueEvent = new EventEmitter<{}>();
  @Output() changeLowerValueEvent = new EventEmitter<{}>();
  @Output() changeNumberValueEvent = new EventEmitter<{}>();
  @Output() changeSymbolValueEvent = new EventEmitter<{}>();

  error = false;

  constructor(private strengthUpdateService: StrengthUpdateService) { }

  ngOnInit(): void { }

  checkForError() {
    if (this.lower == false && this.upper == false && this.number == false && this.symbol == false) {
      this.error = true;
      setTimeout(() => {
        this.error = false;
        this.lower = true;
      }, 5000)
    }
    else {
      this.error = false;
    }
  }

  updateLowerOption() {
    this.lower = !this.lower
    this.strengthUpdateService.updateStrength(this.lower, this.upper, this.number, this.symbol)
    this.changeLowerValueEvent.emit(this.lower)
    this.checkForError()
  }

  updateUpperOption() {
    this.upper = !this.upper;
    this.strengthUpdateService.updateStrength(this.lower, this.upper, this.number, this.symbol)
    this.changeUpperValueEvent.emit(this.upper)
    this.checkForError()
  }

  updateNumberOption() {
    this.number = !this.number;
    this.strengthUpdateService.updateStrength(this.lower, this.upper, this.number, this.symbol)
    this.changeNumberValueEvent.emit(this.number)
    this.checkForError()
  }

  updateSymbolOption() {
    this.symbol = !this.symbol
    this.strengthUpdateService.updateStrength(this.lower, this.upper, this.number, this.symbol)
    this.changeSymbolValueEvent.emit(this.symbol)
    this.checkForError()
  }

}
