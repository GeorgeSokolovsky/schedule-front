import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { TeamsComponent } from './sections/teams/teams.component';
import { ScheduleComponent } from './sections/schedule/schedule.component';
import { DocumentsComponent } from './sections/documents/documents.component';
import { TeamListComponent } from './sections/teams/team-list/team-list.component';
import { AppRoutingModule } from './app.routes';
import { HeaderComponent } from './sections/header/header.component';
import { TeamsService } from './services/teams/teams.service';
import { TeamFormComponent } from './sections/teams/team-form/team-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    ScheduleComponent,
    DocumentsComponent,
    TeamListComponent,
    TeamFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    TeamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
