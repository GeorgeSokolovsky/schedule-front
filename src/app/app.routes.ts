import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsComponent } from './teams.component';
import { ScheduleComponent } from './schedule.component';

const routes: Routes = [
  { path: '', component: TeamsComponent },
  { path: 'domain/teams', component: TeamsComponent },
  { path: 'domain/schedule', component: ScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
