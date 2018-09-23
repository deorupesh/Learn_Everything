import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringBootComponentComponent } from './spring-boot-component.component';

describe('SpringBootComponentComponent', () => {
  let component: SpringBootComponentComponent;
  let fixture: ComponentFixture<SpringBootComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringBootComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringBootComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
