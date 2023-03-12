import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFilterAndSortComponent } from './table-filter-and-sort.component';

describe('TableFilterAndSortComponent', () => {
  let component: TableFilterAndSortComponent;
  let fixture: ComponentFixture<TableFilterAndSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFilterAndSortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFilterAndSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
