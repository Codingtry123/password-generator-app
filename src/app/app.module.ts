import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StrengthBarComponent } from './components/strength-bar/strength-bar.component';
import { SliderComponent } from './components/slider/slider.component';
import { PasswordDisplayComponent } from './components/password-display/password-display.component';
import { CheckboxOptionsComponent } from './components/checkbox-options/checkbox-options.component';
import { PasswordGenerationService } from './components/password-display/passwordGeneration.service';
import { StrengthUpdateService } from './components/strength-bar/strengthUpdate.service';

@NgModule({
  declarations: [
    AppComponent,
    StrengthBarComponent,
    SliderComponent,
    PasswordDisplayComponent,
    CheckboxOptionsComponent
  ],
  imports: [
    BrowserModule,
    NgxSliderModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PasswordGenerationService,
    StrengthUpdateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
