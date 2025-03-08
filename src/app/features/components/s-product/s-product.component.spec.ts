import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SProductComponent } from './s-product.component';

describe('SProductComponent', () => {
  let component: SProductComponent;
  let fixture: ComponentFixture<SProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
