import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TeamsComponent } from './sections/teams/teams.component';
import { ScheduleComponent } from './sections/schedule/schedule.component';
import { TeamListComponent } from './sections/teams/team-list.component';
import { AppRoutingModule } from './app.routes';
import { HeaderComponent } from './sections/header/header.component';
import { TeamsService } from './services/teams/teams.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    ScheduleComponent,
    TeamListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    TeamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
