import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehiclesComponent } from './add-vehicles.component';

describe('AddVehiclesComponent', () => {
  let component: AddVehiclesComponent;
  let fixture: ComponentFixture<AddVehiclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVehiclesComponent]
    });
    fixture = TestBed.createComponent(AddVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
