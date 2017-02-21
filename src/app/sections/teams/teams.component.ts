import { Component } from '@angular/core';

import { Team } from '../../models/team.model';
import { TeamsService } from '../../services/teams/teams.service';
import { TeamFormComponent } from './team-form/team-form.component';

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
  
  onEdit(team) {
    console.log(team);
    this.editTeam = team;
  }

}