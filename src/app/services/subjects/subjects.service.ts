import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { BaseService } from '../base.service';
import { Service } from '../../decorators/service.decorator';
import { Subject } from '../../models/subject.model';

import { subjects } from './subjects-data.mock';
/**
 * Сервис для работы с сущностью Предмет
 */
@Service({
  model: Subject,
  entityPath: 'subject'
})
@Injectable()
export class SubjectsService extends BaseService<Subject> {
  public constructor(private http: Http) {
    super(http);
  }
}

