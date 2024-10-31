import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecTwoComponent } from './sec-two.component';

describe('SecTwoComponent', () => {
  let component: SecTwoComponent;
  let fixture: ComponentFixture<SecTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
