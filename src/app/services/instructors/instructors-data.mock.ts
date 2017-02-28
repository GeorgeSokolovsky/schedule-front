import { Instructor } from '../../models/instructor.model';
import { subjects } from '../subjects/subjects-data.mock';

export const instructors: Array<Instructor> = [
  {
    id: 1,
    name: 'Андрей Николаевич Иванов',
    shortName: 'А.Н.Иванов',
    position: 'Зав. кафедры',
    departmentId: 5,
    subjects: [
      subjects[0],
      subjects[2]
    ]
  },
  {
    id: 2,
    name: 'Сергей Николаевич Воробьев',
    shortName: 'С.Н.Воробьев',
    position: 'Старший преподаватель',
    departmentId: 2,
    subjects: [
      subjects[1],
      subjects[4]
    ]
  },
  {
    id: 3,
    name: 'Андрей Павлович Некрасов',
    shortName: 'А.П.Некрасов',
    position: 'Преподаватель',
    departmentId: 3,
    subjects: [
      subjects[3]
    ]
  },
  {
    id: 4,
    name: 'Николай Николаевич Воробьев',
    shortName: 'Н.Н.Воробьев',
    position: 'Старший преподаватель',
    departmentId: 2,
    subjects: [
      subjects[1],
      subjects[4]
    ]
  },
  {
    id: 5,
    name: 'Алексей Александрович Красавин',
    shortName: 'А.А.Красавин',
    position: 'Преподаватель',
    departmentId: 4,
    subjects: [
      subjects[0],
      subjects[1]
    ]
  },
  {
    id: 6,
    name: 'Никита Михайлович Семенник',
    shortName: 'Н.М.Семенник',
    position: 'Ассистент',
    departmentId: 1,
    subjects: [
      subjects[0],
      subjects[3]
    ]
  },
  {
    id: 7,
    name: 'Евгений Александрович Плюшкин',
    shortName: 'Е.А.Плюшкин',
    position: 'Преподаватель',
    departmentId: 6,
    subjects: [
      subjects[1],
      subjects[4]
    ]
  },
  {
    id: 8,
    name: 'Эдуард Романович Новиков',
    shortName: 'Э.Р.Новиков',
    position: 'Преподаватель',
    departmentId: 7,
    subjects: [
      subjects[1],
      subjects[2]
    ]
  }
];
