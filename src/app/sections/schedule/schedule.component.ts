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

  addOrganizer(instructor, id) {
    let organizers = document.getElementsByClassName('organizer');
    organizers[id - 1].innerHTML = instructor.shortName;
    let activeTeams = document.getElementsByClassName('active team');
    let glyphs = activeTeams[id-1].getElementsByClassName('glyphicon glyphicon-chevron-right');    
    for (let i = 0; i < glyphs.length; i++) {
      let glyph = <HTMLElement> glyphs[i];
      glyph.style.display = 'none';
    }
  }
}