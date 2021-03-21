import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MasterbracketComponent } from './masterbracket/masterbracket.component';
import { TournamentComponent } from './tournament/tournament.component';
import { HomeComponent } from './home/home.component';
import { HomecardComponent } from './homecard/homecard.component';
import { BracketformComponent } from './bracketform/bracketform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NcaawrestlingComponent } from './ncaawrestling/ncaawrestling.component';
import { Masterbracket133Component } from './masterbracket133/masterbracket133.component';
import { Masterbracket141Component } from './masterbracket141/masterbracket141.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MasterbracketComponent,
    TournamentComponent,
    HomeComponent,
    HomecardComponent,
    BracketformComponent,
    NcaawrestlingComponent,
    Masterbracket133Component,
    Masterbracket141Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,

    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
