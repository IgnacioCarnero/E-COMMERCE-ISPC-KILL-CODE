import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosApiComponent } from './empleados-api.component';

describe('EmpleadosApiComponent', () => {
  let component: EmpleadosApiComponent;
  let fixture: ComponentFixture<EmpleadosApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
