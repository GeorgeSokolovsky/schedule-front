import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { BaseService } from '../base.service';
import { Service } from '../../decorators/service.decorator';

import { Faculty } from '../../models/faculty.model';
import { faculties } from './faculty-data.mock';
/**
 * Сервис для работы с сущностью Faculty
 */
@Service({
  model: Faculty,
  entityPath: 'facults'
})
@Injectable()
export class FacultyService extends BaseService<Faculty> {
  public constructor(private http: Http) {
    super(http);
  }

  public getTestData(): Array<Faculty> {
    return faculties;
  }

  public inspection(): string {
    return faculties[0].name;
  }
}

