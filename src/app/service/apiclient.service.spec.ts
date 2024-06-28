import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ApiclientService } from './apiclient.service';

describe('ApiclientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], 
      providers: [ApiclientService], 
    });
  });

  it('should be created', () => {
    const service: ApiclientService = TestBed.inject(ApiclientService);
    expect(service).toBeTruthy();
  });

  
});
