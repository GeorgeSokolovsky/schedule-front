import { Component, OnInit, ViewChild } from '@angular/core';

import { Team } from '../../../models/team.model';
import { TeamsService } from '../../../services/teams/teams.service';
import { ConfirmComponent } from '../../../shared/modals/confirm.modal';

@Component({
  moduleId: module.id,
  selector: 'team-list',
  templateUrl: 'team-list.component.html',
  styleUrls: ['team-list.component.css']
})
export class TeamListComponent implements OnInit{
  public teams: Array<Team>;

  @ViewChild('confirm') public confirmComponent: ConfirmComponent;

  public constructor(private teamService: TeamsService){}

  public ngOnInit(): void {
    this.teams = this.teamService.getTestData();
  }

  public editTeam(team: Team): void {
    this.confirmComponent
      .show(`Вы действительно хотите отредактировать команду номер ${team.id}`)
      .subscribe((result: boolean) => {
        console.log(`Попытка отредактировать команду номер ${team.id} с результатом ${result}`);
      });
  }

  public removeTeam(team: Team): void {
    this.confirmComponent
      .show(`Вы действительно хотите удалить команду номер ${team.id}`)
      .subscribe((result: boolean) => {
        console.log(`Попытка удалить команду номер ${team.id} с результатом ${result}`);
      });
  }
}
