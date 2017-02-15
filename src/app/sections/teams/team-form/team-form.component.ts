import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms"

@Component({
    moduleId: module.id,
    selector: 'team-form',
    templateUrl: './team-form.component.html',
    styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit {
  public form: FormGroup;

  public constructor(private formBuilder: FormBuilder){}

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      count: ['']
    });
  }

  public create($event: Event): void {
    $event.preventDefault();

    console.log(this.form.value);
  }
 
}