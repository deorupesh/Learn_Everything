import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewComponentComponent } from './interview-component.component';

describe('InterviewComponentComponent', () => {
  let component: InterviewComponentComponent;
  let fixture: ComponentFixture<InterviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
