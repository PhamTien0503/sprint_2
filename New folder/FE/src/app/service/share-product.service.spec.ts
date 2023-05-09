import { TestBed } from '@angular/core/testing';

import { ShareProductService } from './share-product.service';

describe('ShareProductService', () => {
  let service: ShareProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
