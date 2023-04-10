import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFridgesComponent } from './top-fridges.component';

describe('TopFridgesComponent', () => {
  let component: TopFridgesComponent;
  let fixture: ComponentFixture<TopFridgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFridgesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopFridgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
