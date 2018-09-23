import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaComponentComponent } from './java-component.component';

describe('JavaComponentComponent', () => {
  let component: JavaComponentComponent;
  let fixture: ComponentFixture<JavaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
