import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { BaseService } from '../base.service';
import { Service } from '../../decorators/service.decorator';
import { Team } from '../../models/team.model';

import { teams } from '../teams/teams-data.mock';

/**
 * Сервис созданный для примера, как использовать BaseService и декоратор Service
 */
@Service({
  model: Team,
  entityPath: 'team'
})
@Injectable()
export class TeamsService extends BaseService<Team> {
  public constructor(private http: Http) {
    super(http);
  }

  public getTestData(): Array<Team> {
    return teams;
  }

  public addTestData(newTeam: Team){
    teams.push(newTeam);
  }
}
