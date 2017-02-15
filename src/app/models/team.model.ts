import * as _ from 'lodash';

import { Entity } from './entity.model';
import { Instructor } from './instructor.model';
import { Responsibility } from '../enums/responsibility.enum';

/**
 * Представляет сущность Команда, которая будет назначаться на различный дни при проведении ЦТ
 *
 * @extends Entity
 */
export class Team extends Entity {
  public instructors: Array<Instructor>;
  private responsibility: Responsibility;

  public constructor(params?: any) {
    super(params);

    if (!_.isNil(params) && !_.isNil(params.instructors)) {
      this.instructors = _.map(params.instructors, (instructorData: any) => new Instructor(instructorData));
    }
  }
}
