import { Faculty } from '../../models/faculty.model';
import { departments } from '../departments/departments-data.mock';

export const faculties: Array<Faculty> = [
  {
    id: 1,
    name: 'Факультет информационных технологий',
    shortName: 'ФИТ',
    departments: [
      departments[0],
      departments[1]
    ]
  },
  {
    id: 2,
    name: 'Финансово-экономический факультет',
    shortName: 'ФЭФ',
    departments: [
      departments[2],
      departments[3]
    ]
  },
  {
    id: 3,
    name: 'Юридический факультет',
    shortName: 'ЮФ',
    departments: [
      departments[4],
      departments[5]
    ]
  },
  {
    id: 4,
    name: 'Инженерно-строительный факультет',
    shortName: 'ИСФ',
    departments: [
      departments[6]
    ]
  }
];
