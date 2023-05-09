import { TestBed } from '@angular/core/testing';

import { ShareProductCartService } from './share-product-cart.service';

describe('ShareProductCartService', () => {
  let service: ShareProductCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareProductCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
