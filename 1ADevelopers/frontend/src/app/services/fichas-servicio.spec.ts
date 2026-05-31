import { TestBed } from '@angular/core/testing';

import { FichasServicio } from './fichas-servicio';

describe('FichasServicio', () => {
  let service: FichasServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FichasServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
