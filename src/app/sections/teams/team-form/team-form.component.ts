import { Component, OnInit, Input, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms"
import * as _ from 'lodash';

import { Team } from '../../../models/team.model';
import { BaseForm } from '../../../shared/forms/base-form';
import { Instructor } from '../../../models/instructor.model';
import { InstructorsService } from '../../../services/instructors/instructors.service';


import { Faculty } from '../../../models/faculty.model';
import { FacultyService } from '../../../services/facults/faculty.service';


@Component({
    moduleId: module.id,
    selector: 'team-form',
    templateUrl: './team-form.component.html',
    styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent extends BaseForm implements OnInit {
  @Input() public team: Team;
  public allInstructors: Array<Instructor>;

  public allFacults: Array<Faculty>;

  public constructor(
    private formBuilder: FormBuilder,
    private instructorsService: InstructorsService,
    private facultyService: FacultyService
  ){
    super();
  }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      instructor: [null, Validators.required]
    });

    this.allInstructors = this.instructorsService.getTestData();
    this.allFacults = this.facultyService.getTestData();
    
    if (!_.isUndefined(this.team)) {
      this.fillFromObject(this.team);
    } else {
      this.team = new Team();
    }
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
