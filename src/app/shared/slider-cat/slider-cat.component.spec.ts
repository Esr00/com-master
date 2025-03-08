import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCatComponent } from './slider-cat.component';

describe('SliderCatComponent', () => {
  let component: SliderCatComponent;
  let fixture: ComponentFixture<SliderCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderCatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
