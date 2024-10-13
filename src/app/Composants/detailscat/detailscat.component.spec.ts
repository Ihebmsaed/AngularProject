import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscatComponent } from './detailscat.component';

describe('DetailscatComponent', () => {
  let component: DetailscatComponent;
  let fixture: ComponentFixture<DetailscatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailscatComponent]
    });
    fixture = TestBed.createComponent(DetailscatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
