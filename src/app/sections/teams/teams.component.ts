import { Component, ViewChild } from '@angular/core';

import { Team } from '../../models/team.model';
import { TeamsService } from '../../services/teams/teams.service';
import { TeamFormComponent } from './team-form/team-form.component';
import { TeamListComponent } from './team-list/team-list.component';

/**
 * Роутерный компонент для секции команд содержит пример работы с Сервисами
 */
@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  editTeam: Team;
  @ViewChild('list') private teamList: TeamListComponent;

  onEdit(team) {
    this.editTeam = team;
  }

  onAdd() {
    this.teamList.loadTeams();
  }
}