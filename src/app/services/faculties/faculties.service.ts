import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { BaseService } from '../base.service';
import { Service } from '../../decorators/service.decorator';
import { Faculty } from '../../models/faculty.model';

import { faculties } from './faculties-data.mock';

/**
 * Сервис для работы с сущностью Факультет
 */
@Service({
  model: Faculty,
  entityPath: 'faculty'
})
@Injectable()
export class FacultiesService extends BaseService<Faculty> {
  public constructor(private http: Http) {
    super(http);
  }

  public getTestData(): Array<Faculty> {
    return faculties;
  }
}

