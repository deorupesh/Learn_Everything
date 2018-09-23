import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringComponentComponent } from './spring-component.component';

describe('SpringComponentComponent', () => {
  let component: SpringComponentComponent;
  let fixture: ComponentFixture<SpringComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
