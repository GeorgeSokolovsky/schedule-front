import * as _ from 'lodash';

import { Entity } from './entity.model';
import { Subject } from './subject.model';
import { Team } from './team.model';
import { Instructor } from './instructor.model';

/**
 * Представляет сущность одного дня в рамках ЦТ
 *
 * @extends Entity
 */
export class Testing extends Entity {
  public subject: Subject;
  public date: Date;
  public teams: Team[];
  public workingInstructors: Instructor[];
  public floorInstructors: {instructor: Instructor, floor: number}[] = [];

  public constructor(params?: any) {
    super(params);

    if (!_.isUndefined(params.subject)) {
      this.subject = new Subject(params.subject);
    }

    if (!_.isUndefined(params.date)) {
      this.date = new Date(params.date);
    }

    if (!_.isUndefined(params.teams) && !_.isEmpty(params.teams)) {
      this.teams = _.map(params.teams, data => new Team(data));
      this.workingInstructors = _.reduce(this.teams, (res, team) => {
        return res.concat(team.instructors);
      }, []);
    }
  }
}
