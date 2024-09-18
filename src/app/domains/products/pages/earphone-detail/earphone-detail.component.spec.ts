import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarphoneDetailComponent } from './earphone-detail.component';

describe('EarphoneDetailComponent', () => {
  let component: EarphoneDetailComponent;
  let fixture: ComponentFixture<EarphoneDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarphoneDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarphoneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
