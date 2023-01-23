import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListViewComponent } from './grid-listview.component';

describe('GridListViewComponent', () => {
  let component: GridListViewComponent;
  let fixture: ComponentFixture<GridListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
