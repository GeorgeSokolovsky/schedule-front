import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsComponent } from './sections/teams/teams.component';
import { ScheduleComponent } from './sections/schedule/schedule.component';
import { DocumentsComponent } from './sections/documents/documents.component';

const routes: Routes = [
  { path: '', component: ScheduleComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'documents', component: DocumentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
