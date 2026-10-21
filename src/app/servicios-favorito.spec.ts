import { TestBed } from '@angular/core/testing';

import { ServiciosFavorito } from './servicios-favorito';

describe('ServiciosFavorito', () => {
  let service: ServiciosFavorito;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosFavorito);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
