import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeappliancescategoriesComponent } from './homeappliancescategories.component';

describe('HomeappliancescategoriesComponent', () => {
  let component: HomeappliancescategoriesComponent;
  let fixture: ComponentFixture<HomeappliancescategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeappliancescategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeappliancescategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
