import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabRequestsTableComponent } from './lab-requests-table.component';

describe('LabRequestsTableComponent', () => {
  let component: LabRequestsTableComponent;
  let fixture: ComponentFixture<LabRequestsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabRequestsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabRequestsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
