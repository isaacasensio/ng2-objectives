import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveCardComponent } from './objective-card.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('ObjectiveCardComponent', () => {
  let component: ObjectiveCardComponent;
  let fixture: ComponentFixture<ObjectiveCardComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [ObjectiveCardComponent],
        imports: [ReactiveFormsModule],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
