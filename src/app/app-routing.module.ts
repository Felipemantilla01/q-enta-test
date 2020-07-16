import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { TeamsListComponent } from './teams-list/teams-list.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {path:'', component:HomeScreenComponent},
      {path:'players', component:PlayerListComponent},
      {path:'teams', component:TeamsListComponent}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
