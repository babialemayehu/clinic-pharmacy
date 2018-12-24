import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyRequestsTableComponent } from './pharmacy-requests-table.component';

describe('PharmacyRequestsTableComponent', () => {
  let component: PharmacyRequestsTableComponent;
  let fixture: ComponentFixture<PharmacyRequestsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyRequestsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyRequestsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
