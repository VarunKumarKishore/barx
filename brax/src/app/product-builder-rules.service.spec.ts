import { TestBed, inject } from '@angular/core/testing';

import { ProductBuilderRulesService } from './product-builder-rules.service';

describe('ProductBuilderRulesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductBuilderRulesService]
    });
  });

  it('should ...', inject([ProductBuilderRulesService], (service: ProductBuilderRulesService) => {
    expect(service).toBeTruthy();
  }));
});
