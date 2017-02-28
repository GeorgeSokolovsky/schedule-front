import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { Team } from '../../models/team.model';
import { TeamsService } from '../../services/teams/teams.service';
import { Instructor } from '../../models/instructor.model';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  public teams: Team[];
  public mainOrganizers: {
    [key: number]: Array<Instructor>
  } = {};

  constructor (private teamsService: TeamsService) { }

  /**
   * @inheritDoc
   */
  ngOnInit(){
    this.teams = this.teamsService.getTestData();

    _.forEach(this.teams, ({id}: Team) => {
      this.mainOrganizers[id] = [];
    });
  }

  /**
   * Добавляет инструктора в список ответственных
   *
   * @param {Instructor} instructor
   * @param {number} teamId
   */
  public addOrganizer(instructor: Instructor, teamId: number): void {
    this.mainOrganizers[teamId].push(instructor);
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

  /**
   * Проверяет есть ли у команды ответственные инструктора
   *
   * @param {number} teamId
   * @return {boolean}
   */
  public hasMainOrganizer(teamId: number): boolean {
    return !_.isEmpty(this.mainOrganizers[teamId]);
  }
}