import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStudentComponent } from './data-student.component';

describe('DataStudentComponent', () => {
  let component: DataStudentComponent;
  let fixture: ComponentFixture<DataStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
