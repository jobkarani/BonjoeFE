import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHomeappliancesComponent } from './top-homeappliances.component';

describe('TopHomeappliancesComponent', () => {
  let component: TopHomeappliancesComponent;
  let fixture: ComponentFixture<TopHomeappliancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHomeappliancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopHomeappliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
