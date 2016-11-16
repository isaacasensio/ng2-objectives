import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spr-objective-card',
  templateUrl: './objective-card.component.html',
  styleUrls: ['./objective-card.component.scss']
})
export class ObjectiveCardComponent implements OnInit {

  private objective = {
    type: 'Objective Type',
    target: 8,
    progress: 5,
    date: new Date(),
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

  constructor() { }

  ngOnInit() {
  }

}
