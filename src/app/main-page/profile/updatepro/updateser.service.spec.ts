import { TestBed } from '@angular/core/testing';

import { UpdateserService } from './updateser.service';

describe('UpdateserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateserService = TestBed.get(UpdateserService);
    expect(service).toBeTruthy();
  });
});
