import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { NavComponent } from './components/nav/nav.component';
import { IntroComponent } from './components/intro/intro.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NavComponent,
    IntroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
