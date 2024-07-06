import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryShoppingComponent } from './category-shopping.component';

describe('CategoryShoppingComponent', () => {
  let component: CategoryShoppingComponent;
  let fixture: ComponentFixture<CategoryShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryShoppingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
