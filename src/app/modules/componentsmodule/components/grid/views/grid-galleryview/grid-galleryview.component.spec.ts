import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridGalleryViewComponent } from './grid-galleryview.component';

describe('GridGalleryViewComponent', () => {
  let component: GridGalleryViewComponent;
  let fixture: ComponentFixture<GridGalleryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridGalleryViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridGalleryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
