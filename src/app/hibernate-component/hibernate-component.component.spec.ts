import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HibernateComponentComponent } from './hibernate-component.component';

describe('HibernateComponentComponent', () => {
  let component: HibernateComponentComponent;
  let fixture: ComponentFixture<HibernateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HibernateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HibernateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
