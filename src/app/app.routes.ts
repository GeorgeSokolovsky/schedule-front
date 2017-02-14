import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsComponent } from './sections/teams/teams.component';
import { ScheduleComponent } from './sections/schedule/schedule.component';

const routes: Routes = [
  { path: '', component: TeamsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'schedule', component: ScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
