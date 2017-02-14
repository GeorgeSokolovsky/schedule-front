import { Component } from '@angular/core';

class Team {
    id: number;
    name: string;
    amount: number;
}

const teams = [
    {
        id: 1,
        name: 'Cscharp',
        amount: 25
    },
    {
        id: 2,
        name: 'Java',
        amount: 17
    },
    {
        id: 3,
        name: 'JavaScript',
        amount: 21
    }
];

@Component({
    moduleId: module.id,
    selector: 'team-list',
    templateUrl: 'team-list.component.html',
    styleUrls: ['team-list.component.css']
})
export class TeamListComponent {
    team: Team;
    teams: Team[] = teams; 
}