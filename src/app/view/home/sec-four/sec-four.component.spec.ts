import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecFourComponent } from './sec-four.component';

describe('SecFourComponent', () => {
  let component: SecFourComponent;
  let fixture: ComponentFixture<SecFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
