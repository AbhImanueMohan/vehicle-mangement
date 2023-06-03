import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleManagerComponent } from './vehicle-manager.component';

describe('VehicleManagerComponent', () => {
  let component: VehicleManagerComponent;
  let fixture: ComponentFixture<VehicleManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleManagerComponent]
    });
    fixture = TestBed.createComponent(VehicleManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
