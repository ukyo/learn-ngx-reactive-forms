import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IntroModule } from 'app/intro/intro.module';
import { ValidationModule } from 'app/validation/validation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    IntroModule,
    ValidationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
