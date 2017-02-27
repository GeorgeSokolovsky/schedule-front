import { Faculty } from '../../models/faculty.model';
import { departments } from '../department/department-data.mock';

export const faculties: Array<Faculty> = [
  {  
    id: 1,
    name: 'факультет 1',
    shortName: 'ИФФ',
    departments: [
      departments[0]
    ]
  },
  {
    id: 2,
    name: 'факультет 2',
    shortName: 'ФИТ',
    departments: [
      departments[1]
    ]
  },
  {
    id: 3,
    name: 'факультет 3',
    shortName: 'СПФ',
    departments: [
      departments[2]
    ]
  }
];
