import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadshopComponent } from './headshop.component';

describe('HeadshopComponent', () => {
  let component: HeadshopComponent;
  let fixture: ComponentFixture<HeadshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadshopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
