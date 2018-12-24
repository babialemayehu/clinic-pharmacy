import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugRouteComponent } from './drug-route.component';

describe('DrugRouteComponent', () => {
  let component: DrugRouteComponent;
  let fixture: ComponentFixture<DrugRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
