import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableDetalisComponent } from './datatable-detalis.component';

describe('DatatableDetalisComponent', () => {
  let component: DatatableDetalisComponent;
  let fixture: ComponentFixture<DatatableDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatableDetalisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatableDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
