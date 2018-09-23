import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HadoopComponentComponent } from './hadoop-component.component';

describe('HadoopComponentComponent', () => {
  let component: HadoopComponentComponent;
  let fixture: ComponentFixture<HadoopComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HadoopComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HadoopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
