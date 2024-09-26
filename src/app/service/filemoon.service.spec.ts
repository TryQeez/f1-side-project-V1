import { TestBed } from '@angular/core/testing';

import { FilemoonService } from './filemoon.service';

describe('FilemoonService', () => {
  let service: FilemoonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilemoonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
