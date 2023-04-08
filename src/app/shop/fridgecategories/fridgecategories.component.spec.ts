import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgecategoriesComponent } from './fridgecategories.component';

describe('FridgecategoriesComponent', () => {
  let component: FridgecategoriesComponent;
  let fixture: ComponentFixture<FridgecategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FridgecategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FridgecategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
