import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
import { EterUiModule } from 'eter-ui';
import { PlayerListComponent } from './player-list/player-list.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http';
import { MdlPlayerInfoComponent } from './mdl-player-info/mdl-player-info.component';
import { MdlPlayerAddEditComponent } from './mdl-player-add-edit/mdl-player-add-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    PlayerListComponent,
    TeamsListComponent,
    MdlPlayerInfoComponent,
    MdlPlayerAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    EterUiModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
