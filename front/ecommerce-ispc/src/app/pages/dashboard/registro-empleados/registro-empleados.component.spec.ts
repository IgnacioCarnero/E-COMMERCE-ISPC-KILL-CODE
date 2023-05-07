import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEmpleadosComponent } from './registro-empleados.component';

describe('RegistroEmpleadosComponent', () => {
  let component: RegistroEmpleadosComponent;
  let fixture: ComponentFixture<RegistroEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
