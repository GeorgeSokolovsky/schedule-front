import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { BaseService } from '../base.service';
import { Service } from '../../decorators/service.decorator';
import { Department } from '../../models/department.model';

/**
 * Сервис для работы с сущностью Кафедра
 */
@Service({
  model: Department,
  entityPath: 'department'
})
@Injectable()
export class DepartmentsService extends BaseService<Department> {
  public constructor(private http: Http) {
    super(http);
  }
}

