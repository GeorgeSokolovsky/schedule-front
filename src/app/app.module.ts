import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { ModalModule } from 'ngx-modal';

import { AppComponent } from './app.component';
import { TeamsComponent } from './sections/teams/teams.component';
import { ScheduleComponent } from './sections/schedule/schedule.component';
import { DocumentsComponent } from './sections/documents/documents.component';
import { TeamListComponent } from './sections/teams/team-list/team-list.component';
import { AppRoutingModule } from './app.routes';
import { HeaderComponent } from './sections/header/header.component';
import { TeamsService } from './services/teams/teams.service';
import { TeamFormComponent } from './sections/teams/team-form/team-form.component';
import { InstructorsService } from './services/instructors/instructors.service';
import { SubjectsService } from './services/subjects/subjects.service';
import { FacultiesService } from './services/faculties/faculties.service';
import { DepartmentsService } from './services/departments/departments.service';
import { ConfirmComponent } from './shared/modals/confirm.modal';


import { FacultyService } from './services/facults/faculty.service';
import { DepartmentsService } from './services/department/department.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    ScheduleComponent,
    DocumentsComponent,
    TeamListComponent,
    TeamFormComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot(),
    Ng2AutoCompleteModule,
    ModalModule
  ],
  providers: [
    TeamsService,
    InstructorsService,
    SubjectsService,
    FacultiesService,
    DepartmentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
