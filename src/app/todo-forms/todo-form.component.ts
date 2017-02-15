import { Component } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
    form: FormGroup;
    formBuilder: FormBuilder;

    public costrructor(formBuilder: FormBuilder){}

    public ngOnInit(): void{
          this.form = this.formBuilder.group({
            name: [''],
            count: ['']
        })

    }
    create(){
        console.log(this.form.value);
    }
 
}