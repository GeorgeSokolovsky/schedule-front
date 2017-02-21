import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { BaseService } from '../base.service';
import { Service } from '../../decorators/service.decorator';

import { Faculty } from '../../models/faculty.model';
import { facultys } from './faculty-data.mock';
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
    return facultys;
  }

  public inspection(): string {
    return facultys[0].name;
  }
}

