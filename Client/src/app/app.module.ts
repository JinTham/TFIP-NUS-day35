import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UppercaseService } from './services/uppercase.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [UppercaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
