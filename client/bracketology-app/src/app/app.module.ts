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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MasterbracketComponent,
    TournamentComponent,
    HomeComponent,
    HomecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
