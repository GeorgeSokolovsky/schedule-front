import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

    create(Name: string, Count: string){
        console.log("Name>"+Name+"//"+"Count>"+Count);
    }
 
}