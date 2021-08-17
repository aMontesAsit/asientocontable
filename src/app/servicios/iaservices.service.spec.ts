import { TestBed } from '@angular/core/testing';

import { IaservicesService } from './iaservices.service';

describe('IaservicesService', () => {
  let service: IaservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
