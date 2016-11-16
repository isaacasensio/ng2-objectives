import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
  selector: 'spr-objective-card',
  templateUrl: './objective-card.component.html',
  styleUrls: ['./objective-card.component.scss']
})
export class ObjectiveCardComponent implements OnInit {

  objectiveForm: FormGroup;

  private objective = {
    type: 'Objective Type',
    target: 8,
    progress: 5,
    date: '2016/09/12',
    completedOn: null,
    notes: 'Description of this thing',
  };

  get targetSummary(): string {
    return `Target ${this.objective.progress} of ${this.objective.target}`;
  }

  get progressProportion(): string {
    let progress = this.objective.progress / this.objective.target;
    return `${progress * 100}%`;
  }

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.objectiveForm = this.builder.group({
      notes: [this.objective.notes],
      date: [this.objective.date],
    });
    this.objectiveForm.valueChanges
      .debounceTime(300)
      .map(values => Object.assign(this.objective, values))
      .subscribe(console.log);
  }

}
