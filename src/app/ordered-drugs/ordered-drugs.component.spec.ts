import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedDrugsComponent } from './ordered-drugs.component';

describe('OrderedDrugsComponent', () => {
  let component: OrderedDrugsComponent;
  let fixture: ComponentFixture<OrderedDrugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderedDrugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
