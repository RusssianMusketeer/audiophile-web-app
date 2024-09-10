import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadphoneDetailComponent } from './headphone-detail.component';

describe('HeadphoneDetailComponent', () => {
  let component: HeadphoneDetailComponent;
  let fixture: ComponentFixture<HeadphoneDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadphoneDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadphoneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
