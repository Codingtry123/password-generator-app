import { Component,OnInit, Output } from '@angular/core';
import { PasswordGenerationService } from './components/password-display/passwordGeneration.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  upperOption = false;
  lowerOption = true;
  numberOption = false;
  symbolOption = false;

  @Output() password: string = 'P4$5W0rD!';
  @Output() passwordUpdated = false;


  constructor(private passwordGenerationService: PasswordGenerationService) { }

  ngOnInit() {}
  
  changeLowerValueEvent(value: any) {
    this.lowerOption = value;
  }
  changeUpperValueEvent(value: any) {
    this.upperOption = value;
  }
  changeNumberValueEvent(value: any) {
    this.numberOption = value;
  }
  changeSymbolValueEvent(value: any) {
    this.symbolOption = value;
  }

  generateNewPassword() {
    this.passwordGenerationService.setPassword(this.upperOption, this.lowerOption, this.numberOption, this.symbolOption);
    this.passwordUpdated = true;
    this.password = this.passwordGenerationService.getPassword();
  }






}
