import { TestBed, inject } from '@angular/core/testing';

import { KayttajatService } from './kayttajat.service';

describe('KayttajatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KayttajatService]
    });
  });

  it('should be created', inject([KayttajatService], (service: KayttajatService) => {
    expect(service).toBeTruthy();
  }));
});
