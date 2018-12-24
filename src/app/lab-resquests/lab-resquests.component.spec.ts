import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabResquestsComponent } from './lab-resquests.component';

describe('LabResquestsComponent', () => {
  let component: LabResquestsComponent;
  let fixture: ComponentFixture<LabResquestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabResquestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabResquestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
