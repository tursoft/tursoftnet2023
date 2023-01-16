import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCardViewComponent } from './grid-cardview.component';

describe('GridCardViewComponent', () => {
  let component: GridCardViewComponent;
  let fixture: ComponentFixture<GridCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCardViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
