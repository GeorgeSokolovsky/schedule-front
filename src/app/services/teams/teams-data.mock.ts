import { Team } from '../../models/team.model';
import { instructors } from '../instructors/instructors-data.mock';
import { Responsibility } from '../../enums/responsibility.enum';

export const teams: Array<Team> = [
  {
    id: 1,
    instructors: [
      instructors[0],
      instructors[1],
      instructors[2]
    ],
    responsibility: Responsibility.ROOM
  },
  {
    id: 2,
    instructors: [
      instructors[3]
    ],
    responsibility: Responsibility.FLOOR
  },
  {
    id: 3,
    instructors: [
      instructors[0],
      instructors[1],
      instructors[2],
      instructors[3]
    ],
    responsibility: Responsibility.BIG_ROOM
  },
  {
    id: 4,
    instructors: [
      instructors[2],
      instructors[4]
    ],
    responsibility: Responsibility.ENTRANCE
  }
];
