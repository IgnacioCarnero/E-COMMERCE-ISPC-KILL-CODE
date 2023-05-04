import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorReciboDeSueldoComponent } from './generador-recibo-de-sueldo.component';

describe('GeneradorReciboDeSueldoComponent', () => {
  let component: GeneradorReciboDeSueldoComponent;
  let fixture: ComponentFixture<GeneradorReciboDeSueldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneradorReciboDeSueldoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneradorReciboDeSueldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
