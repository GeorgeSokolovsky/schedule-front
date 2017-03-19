import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { Team } from '../../../models/team.model';
import { TeamsService } from '../../../services/teams/teams.service';
import { ConfirmComponent } from '../../../shared/modals/confirm.modal';
import { Observable } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'team-list',
  templateUrl: 'team-list.component.html',
  styleUrls: ['team-list.component.css']
})
export class TeamListComponent implements OnInit{
  public teams: Array<Team>;
  @Output() onEdit = new EventEmitter<Team>();

  @ViewChild('confirm') public confirmComponent: ConfirmComponent;

  public constructor(private teamService: TeamsService){}

  public ngOnInit(): void {
    this.loadTeams();
  }

  public editTeam(team: Team): void {
    this.confirmComponent
      .show(`Вы действительно хотите отредактировать команду номер ${team.id}`)
      .subscribe((result: boolean) => {
        if (result) {
          this.onEdit.emit(team);
        }
      });
  }

  public removeTeam(team: Team): void {
    this.confirmComponent
      .show(`Вы действительно хотите удалить команду номер ${team.id}`)
      .switchMap((result: boolean) => {
        return result
          ? this.teamService.remove(team.id)
          : Observable.throw('remove canceled');
      })
      .subscribe(() => this.loadTeams(), () => {});
  }

  public loadTeams(): void {
    this.teamService.findAll().subscribe((data) => this.teams = data);
  }
}
