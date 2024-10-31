import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectOneComponent } from './sect-one.component';

describe('SectOneComponent', () => {
  let component: SectOneComponent;
  let fixture: ComponentFixture<SectOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
