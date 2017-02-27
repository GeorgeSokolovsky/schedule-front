import { Department } from '../../models/department.model';
import { instructors } from '../instructors/instructors-data.mock';

export const departments: Array<Department> = [
    {
        id: 1,
        name: 'Кафедра 1',
        facultyId: 1,
        instructors:[
            instructors[0],
            instructors[2]
        ]
    },
    {
        id: 2,
        name: 'Кафедра 2',
        facultyId: 2,
        instructors:[
            instructors[1],
            instructors[3]
        ]
    },
    {
        id: 3,
        name: 'Кафедра 3',
        facultyId: 3,
        instructors:[
            instructors[4],
            instructors[0]
        ]
    }
];
