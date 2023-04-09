import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeapplianceDetailsComponent } from './homeappliance-details.component';

describe('HomeapplianceDetailsComponent', () => {
  let component: HomeapplianceDetailsComponent;
  let fixture: ComponentFixture<HomeapplianceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeapplianceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeapplianceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
