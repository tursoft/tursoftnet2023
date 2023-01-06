import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticaltimelineComponent } from './verticaltimeline.component';

describe('VerticaltimelineComponent', () => {
  let component: VerticaltimelineComponent;
  let fixture: ComponentFixture<VerticaltimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticaltimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticaltimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
