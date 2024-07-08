import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadphonesComponent } from './headphones.component';

describe('HeadphonesComponent', () => {
  let component: HeadphonesComponent;
  let fixture: ComponentFixture<HeadphonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadphonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
