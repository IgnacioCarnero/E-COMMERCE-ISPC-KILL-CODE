import { TestBed } from '@angular/core/testing';

import { GeneradorReciboSueldoService } from './generador-recibo-sueldo.service';

describe('GeneradorReciboSueldoService', () => {
  let service: GeneradorReciboSueldoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneradorReciboSueldoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
