import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { BaseService } from '../base.service';
import { Service } from '../../decorators/service.decorator';
import { Instructor } from '../../models/instructor.model';

import { instructors } from './instructors-data.mock';

/**
 * Сервис для работы с сущностью Предмет
 */
@Service({
  model: Instructor,
  entityPath: 'subjects'
})
@Injectable()
export class InstructorsService extends BaseService<Instructor> {
  public constructor(private http: Http) {
    super(http);
  }

  public getTestData(): Array<Instructor> {
    return instructors;
  }
}

