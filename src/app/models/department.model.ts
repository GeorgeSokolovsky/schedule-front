import * as _ from 'lodash';

import { Entity } from './entity.model';
import { Instructor } from './instructor.model';

/**
 * Класс представляющий сущность Кафедра
 *
 * @extends Entity
 */
export class Department extends Entity {
  public name: string;
  public facultyId: number;
  public instructors: Array<Instructor> ;

  public constructor(params?: any) {
    super(params);

    if (!_.isNil(params) && !_.isNil(params.instructors)) {
      this.instructors = _.map(params.instructors, (instructorData: any) => new Instructor(instructorData));
    }
  }
}
