import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSingleCardViewComponent } from './grid-singlecardview.component';

describe('GridSingleCardViewComponent', () => {
  let component: GridSingleCardViewComponent;
  let fixture: ComponentFixture<GridSingleCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridSingleCardViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridSingleCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
