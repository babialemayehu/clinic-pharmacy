import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyQueueComponent } from './empty-queue.component';

describe('EmptyQueueComponent', () => {
  let component: EmptyQueueComponent;
  let fixture: ComponentFixture<EmptyQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
