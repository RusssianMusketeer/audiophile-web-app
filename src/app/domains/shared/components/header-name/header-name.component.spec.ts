import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNameComponent } from './header-name.component';

describe('HeaderNameComponent', () => {
  let component: HeaderNameComponent;
  let fixture: ComponentFixture<HeaderNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
