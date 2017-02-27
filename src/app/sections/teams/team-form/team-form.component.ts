import { Component, OnInit, Input, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms"
import * as _ from 'lodash';
import * as $ from 'jquery';

import { Team } from '../../../models/team.model';
import { BaseForm } from '../../../shared/forms/base-form';
import { Instructor } from '../../../models/instructor.model';
import { Faculty } from '../../../models/faculty.model';
import { Department } from '../../../models/department.model';
import { InstructorsService } from '../../../services/instructors/instructors.service';
import { FacultiesService } from '../../../services/faculties/faculties.service';

@Component({
    moduleId: module.id,
    selector: 'team-form',
    templateUrl: './team-form.component.html',
    styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent extends BaseForm implements OnInit {
  @Input() public team: Team;
  public instructors: Array<Instructor>;
  public faculties: Array<Faculty>;

  public constructor(
    private formBuilder: FormBuilder,
    private instructorsService: InstructorsService,
    private facultiesService: FacultiesService
  ){
    super();
  }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      instructor: [null, Validators.required]
    });

    this.faculties = this.facultiesService.getTestData();
    this.instructors = this.instructorsService.getTestData();

    if (!_.isUndefined(this.team)) {
      this.fillFromObject(this.team);
    } else {
      this.team = new Team();
    }
  }

  // Метод выполняющий фильтрацию инструкторов, при выборе факультета.
  private filterInstructorsByFaculty(): void{
    $("#default").hide();
    $("#instructor").prop("disabled", false);
    let index = $("#faculty").val() - 1; // id выбранного факультета в select - 1
    let result;
    for (let i = 0; i != this.faculties[index].departments.length; i++){
      result = [].concat(result, this.faculties[index].departments[i].instructors);
    }
    result.splice(0, 1);
    this.instructors = result;
  }

  public create($event: Event): void {
    $event.preventDefault();
    console.log(this.team);
    this.team = new Team();
  }

  public removeInstructor(instructor: Instructor): void {
    _.pull(this.team.instructors, instructor);
  }

  public addInstructor(): void {
    this.team.instructors.push(this.form.controls['instructor'].value);

    this.form.controls['instructor'].setValue(null);
  }

  public instructorsListFormatter(data: Instructor) : string {
    return data.name;
  }
}