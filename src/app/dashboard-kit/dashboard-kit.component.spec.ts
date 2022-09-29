import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardKitComponent } from './dashboard-kit.component';

describe('DashboardKitComponent', () => {
  let component: DashboardKitComponent;
  let fixture: ComponentFixture<DashboardKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardKitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
