import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms"
import * as _ from 'lodash';

import { Team } from '../../../models/team.model';
import { BaseForm } from '../../../shared/forms/base-form';
import { Instructor } from '../../../models/instructor.model';
import { Faculty } from '../../../models/faculty.model';
import { FacultiesService } from '../../../services/faculties/faculties.service';
import { TeamsService } from '../../../services/teams/teams.service';
import { Responsibility } from '../../../enums/responsibility.enum';
import { NotificationsService } from 'angular2-notifications';

@Component({
    moduleId: module.id,
    selector: 'team-form',
    templateUrl: './team-form.component.html',
    styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent extends BaseForm implements OnInit {
  @Input('team') public set team(team: Team) {
    if (_.isUndefined(team)) {
      return;
    }

    this.isEdit = true;
    this._team = _.cloneDeep(team);
  };

  @Output() public onAdd = new EventEmitter<void>();
  private _team: Team;
  public allInstructors: Array<Instructor> = [];
  public instructors: Array<Instructor> = [];
  public faculties: Array<Faculty>;
  private isEdit: boolean;

  public constructor(
    private formBuilder: FormBuilder,
    private facultiesService: FacultiesService,
    private teamsService: TeamsService,
    private notificationsService: NotificationsService
  ){
    super();
  }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      instructors: [null, Validators.required]
    });

    this.facultiesService
      .findAll()
      .subscribe(faculties => {
        this.faculties = faculties;
        this.handleInstructors();
      });

      this._team = new Team();
  }

  public filterInstructor(facultyId: number): void {
    // проверка что не выбран пустой id
    if (facultyId) {
      const faculty = _.find(this.faculties, ['id', Number(facultyId)]);
      const departmentsIds = _.map(faculty.departments, 'id');

      this.instructors = _.filter(this.allInstructors, (instructor) => {
        return _.includes(departmentsIds, instructor.departmentId);
      });
    } else {
      this.instructors = this.allInstructors;
    }

    this.updateInstructors();
  }

  public create($event: Event): void {
    $event.preventDefault();
    if (_.isEmpty(this._team.instructors)) {
      this.notificationsService.error('Ошибка', 'Проверьте правильность формы');

      return;
    }

    this.addTeamResponsibilityType();

    const eventObs = this.isEdit ? this.teamsService.update(this._team) : this.teamsService.create(this._team);

    eventObs
      .subscribe(() => {
        this.onAdd.emit();
        this.isEdit = false;
      });

    this._team = new Team();
  }

  public removeInstructor(instructor: Instructor): void {
    _.pull(this._team.instructors, instructor);
  }

  public addInstructor(): void {
    this._team.instructors.push(this.form.controls['instructors'].value);

    this.form.controls['instructors'].setValue(null);
  }

  public instructorsListFormatter(data: Instructor) : string {
    return data.name;
  }

  public updateInstructors(): void {
    this.form.controls['instructors'].setValue(null);
  }

  private handleInstructors(): void {
      _.forEach(this.faculties, ({departments}) => {
        _.forEach(departments, ({instructors}) => {
          this.allInstructors = this.allInstructors.concat(instructors)
        });
      });

      this.instructors = this.allInstructors;
  }

  private addTeamResponsibilityType(): void {
    switch (this._team.instructors.length) {
      case 0:
        return;
      case 1:
        this._team.responsibility = Responsibility.FLOOR;
        return;
      case 2:
        this._team.responsibility = Responsibility.ENTRANCE;
        return;
      case 3:
        this._team.responsibility = Responsibility.ROOM;
        return;
      case 4:
        this._team.responsibility = Responsibility.BIG_ROOM;
        return;
      default:
        return;
    }
  }
}