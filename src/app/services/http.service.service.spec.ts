import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service.service';

describe('Http.ServiceService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
