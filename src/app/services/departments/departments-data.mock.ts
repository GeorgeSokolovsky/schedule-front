import { Department } from '../../models/department.model';
import { instructors } from '../instructors/instructors-data.mock';

export const departments: Array<Department> = [
  {
    id: 1,
    name: 'Технологий программирования',
    facultyId: 1,
    instructors: [
      instructors[5]
    ]
  },
  {
    id: 2,
    name: 'Вычислительных систем и сетей',
    facultyId: 1,
    instructors: [
      instructors[1],
      instructors[3]
    ]
  },
  {
    id: 3,
    name: 'Кафедра учета и аудита, логистики и менеджмента',
    facultyId: 2,
    instructors: [
      instructors[2]
    ]
  },
  {
    id: 4,
    name: 'Кафедра финансов и отраслевой экономики',
    facultyId: 2,
    instructors: [
      instructors[4]
    ]
  },
  {
    id: 5,
    name: 'Кафедра уголовного права и криминалистики',
    facultyId: 3,
    instructors: [
      instructors[0]
    ]
  },
  {
    id: 6,
    name: 'Кафедра гражданского права',
    facultyId: 3,
    instructors: [
      instructors[6]
    ]
  },
  {
    id: 7,
    name: 'Кафедра архитектуры',
    facultyId: 4,
    instructors: [
      instructors[7]
    ]
  }
];
