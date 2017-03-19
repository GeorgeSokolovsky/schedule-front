import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { Team } from '../../models/team.model';
import { Instructor } from '../../models/instructor.model';
import { Testing } from '../../models/testing.model';
import { TestingService } from '../../services/testings/testings.service';
import { FacultiesService } from '../../services/faculties/faculties.service';
import { Faculty } from '../../models/faculty.model';
import { TeamsService } from '../../services/teams/teams.service';

const DEFAULT_FLOOR = 0;
const floors = _.range(1, 8);

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  public teams: Team[];
  public allTestings: Testing[] = [];
  public testings: Testing[] = [];
  public years: number[] = [];
  public mainOrganizers: {
    [key: number]: Array<Instructor>
  } = {};
  public floors: number[] = floors;
  private faculties: Faculty[];

  constructor (
    private testingService: TestingService,
    private facultyService: FacultiesService,
    private teamService: TeamsService
  ) { }

  /**
   * @inheritDoc
   */
  ngOnInit() {
    this.facultyService.findAll().subscribe((faculties) => this.faculties = faculties);

    this.testingService.findAll().subscribe(testings => {
      this.allTestings = testings;
      this.filterYear((new Date()).getFullYear().toString());

      this.years = _(testings)
        .map(({date}) => date.getFullYear())
        .uniq()
        .value();
    });

    this.teamService.findAll().subscribe((teams) => {
      this.teams = teams;

      _.forEach(this.teams, ({id}: Team) => {
        this.mainOrganizers[id] = [];
      });
    })
  }

  /**
   * Добавляет инструктора в список ответственных
   *
   * @param {Instructor} instructor
   * @param {number} teamId
   */
  public addOrganizer(instructor: Instructor, teamId: number): void {
    if(!_.includes(this.mainOrganizers[teamId], instructor)) {
      this.mainOrganizers[teamId].push(instructor);
   }
  }

  /**
   * Удаляет инструктора из списка ответственных
   *
   * @param {Instructor} instructor
   * @param {number} teamId
   */
  public removeOrganizer(instructor: Instructor, teamId: number): void {
    _.pull(this.mainOrganizers[teamId], instructor);
  }

  public filterYear(year: string): void {
    this.testings = _.filter(this.allTestings, (item) => {
      return item.date.getFullYear().toString() === year;
    });
  }

  public isYearSelected(year: string): boolean {
    return _.some(this.testings, testing => testing.date.getFullYear() === year);
  }

  public isWorking(instructorId: number, testing: Testing): boolean {
    return _.some(testing.workingInstructors, {id: instructorId})
  }

  public setWorking(instructor: Instructor, testing: Testing): void {
    this.isWorking(instructor.id, testing)
      ? _.remove(testing.workingInstructors, instructor)
      : testing.workingInstructors.push(instructor);
  }

  public setFloor(instructor: Instructor, testing: Testing, team: Team): void {
    testing.floorInstructors.push({instructor, floor: DEFAULT_FLOOR});

    this.addOrganizer(instructor, team.id);
  }

  public removeFromFloor(instructor: Instructor, testing: Testing, team: Team): void {
    _.remove(testing.floorInstructors, {instructor});

    if (team) {
      _.remove(this.mainOrganizers[team.id], instructor);
    }
  }

  public onFloor(instructor: Instructor, testing: Testing): boolean {
    return _.some(testing.floorInstructors, {instructor});
  }

  public isFloorSelected(floor: number, instructor: Instructor, testing: Testing): boolean {
    return _.some(testing.floorInstructors, (item) => {
      return item.floor === floor && _.isEqual(item.instructor, instructor);
    });
  }

  public changeFloor(floor: string, instructor: Instructor, testing: Testing): void {
    const floorInstructor = _.find(testing.floorInstructors, {instructor});

    if (floorInstructor) {
      floorInstructor.floor = Number(floor);
    }
  }

  public getFaculty(instructor: Instructor): string {
    const faculty =  _.find(this.faculties, faculty => {
      return _.some(faculty.departments, {id: instructor.departmentId});
    });

    if (faculty) {
      return faculty.shortName;
    }

    return '';
  }
}