import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabResponceDialogComponent } from './lab-responce-dialog.component';

describe('LabResponceDialogComponent', () => {
  let component: LabResponceDialogComponent;
  let fixture: ComponentFixture<LabResponceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabResponceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabResponceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
