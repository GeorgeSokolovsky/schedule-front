import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { BaseService } from '../base.service';
import { Service } from '../../decorators/service.decorator';
import { Team } from '../../models/team.model';

/**
 * Сервис созданный для примера, как использовать BaseService и декоратор Service
 */
@Service({
  model: Team,
  entityPath: 'teams'
})
@Injectable()
export class TeamsService extends BaseService<Team> {
  public constructor(private http: Http) {
    super(http);
  }
}
