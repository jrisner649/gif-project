import { TestBed } from '@angular/core/testing';

import { AddGifService } from './add-gif.service';

describe('AddGifService', () => {
  let service: AddGifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddGifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
