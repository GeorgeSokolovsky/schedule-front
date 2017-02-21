import { Component, OnInit } from '@angular/core';

import { Team } from '../../models/team.model';
import { TeamsService } from '../../services/teams/teams.service';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  teams: Team[];

  constructor (private teamsService: TeamsService) { }

  ngOnInit(){
    this.teams = this.teamsService.getTestData();
  }
  
}