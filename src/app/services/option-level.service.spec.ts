import { TestBed } from '@angular/core/testing';

import { OptionLevelService } from './option-level.service';

describe('OptionLevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptionLevelService = TestBed.get(OptionLevelService);
    expect(service).toBeTruthy();
  });
});
