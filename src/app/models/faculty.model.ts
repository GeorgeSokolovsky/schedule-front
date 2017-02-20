import * as _ from 'lodash';

import { Entity } from './entity.model';
import { Department } from './department.model';

/**
 * Класс представляющий сущность Факультет
 *
 * @extends Entity
 */
export class Faculty extends Entity {
  public name: string;
  public shortName: string;
  public departments: Array<Department>;

  public constructor(params?: any) {
    super(params);

    if (!_.isNil(params) && !_.isNil(params.departments)) {
      this.departments = _.map(params.departments, (departmentData: any) => new Department(departmentData));
    }
  }
}