import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TournamentComponent } from './tournament/tournament.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '2021-NCAA-Wrestling',
    component: TournamentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
