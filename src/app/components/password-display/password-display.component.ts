import { Component, Input, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { PasswordGenerationService } from 'src/app/components/password-display/passwordGeneration.service';

@Component({
  selector: 'app-password-display',
  templateUrl: './password-display.component.html',
  styleUrls: ['./password-display.component.scss']
})
export class PasswordDisplayComponent implements OnInit {
  /* Clipboard */
  @Input() password: string = 'P4$5W0rD!';
  @Input() passwordUpdated = false;
  passwordCopied = false;

  constructor(private passwordGenerationService: PasswordGenerationService, private clipboard: Clipboard) { }

  ngOnInit(): void {
    this.password = this.passwordGenerationService.getPassword()
  }

  copyPasswordToClipboard(){
    this.clipboard.copy(this.password);

    this.passwordCopied = true;
    setTimeout(() => {
      this.passwordCopied = false
    }, 5000);
  }

}
