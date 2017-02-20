import { Component, OnInit } from '@angular/core';

import { TeamsService } from '../../services/teams/teams.service';
import { Team } from '../../models/team.model';

/**
 * Роутерный компонент для секции командб содержит пример работы с Сервисами
 */
@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  title = 'Teams';
  private teams: Array<Team>;

  public constructor(private teamsService: TeamsService){
  }

  /**
   * @inheritDoc
   */
  public ngOnInit(): void {
    // todo закомментируйте этот вызов чтобы не получать ошибки
    this.teamsService
      .findAll()
      .subscribe((teams: Array<Team>) => this.teams = teams);
  }
}