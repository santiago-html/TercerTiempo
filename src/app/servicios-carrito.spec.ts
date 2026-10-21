import { TestBed } from '@angular/core/testing';

import { ServiciosCarrito } from './servicios-carrito';

describe('ServiciosCarrito', () => {
  let service: ServiciosCarrito;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosCarrito);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
