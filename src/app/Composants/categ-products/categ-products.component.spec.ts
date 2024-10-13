import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategProductsComponent } from './categ-products.component';

describe('CategProductsComponent', () => {
  let component: CategProductsComponent;
  let fixture: ComponentFixture<CategProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategProductsComponent]
    });
    fixture = TestBed.createComponent(CategProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
