import * as _ from 'lodash';

import { Entity } from './entity.model';
import { Subject } from './subject.model';

/**
 * Базовый класс представляющий сущность Преподавателя/Инструктора в рамках ЦТ
 *
 * @extends Entity
 */
export class Instructor extends Entity {
  public name: string;
  public shortName: string;
  public position: string;
  public departmentId: number;
  public subjects: Array<Subject>;

  public constructor(params?: any) {
    super(params);

    if (!_.isNil(params) && !_.isNil(params.subjects)) {
      this.subjects = _.map(params.subjects, (subjectData: any) => new Subject(subjectData));
    }
  }
}