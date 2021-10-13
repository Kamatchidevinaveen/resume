import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmsFlipComponent } from './hrms-flip.component';

describe('HrmsFlipComponent', () => {
  let component: HrmsFlipComponent;
  let fixture: ComponentFixture<HrmsFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrmsFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmsFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
