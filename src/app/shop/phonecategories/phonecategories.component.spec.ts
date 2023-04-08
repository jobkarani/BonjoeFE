import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonecategoriesComponent } from './phonecategories.component';

describe('PhonecategoriesComponent', () => {
  let component: PhonecategoriesComponent;
  let fixture: ComponentFixture<PhonecategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonecategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonecategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
