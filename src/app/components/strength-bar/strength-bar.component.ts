import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { StrengthUpdateService } from './strengthUpdate.service';

@Component({
  selector: 'app-strength-bar',
  templateUrl: './strength-bar.component.html',
  styleUrls: ['./strength-bar.component.scss']
})

export class StrengthBarComponent implements OnInit {
  strengthLevel: string;


  constructor(private strengthUpdateService: StrengthUpdateService) { }

  ngOnInit(): void {
    this.strengthUpdateService.castStrengthLevel.subscribe(strengthLevel => this.strengthLevel = strengthLevel)
  }


}
