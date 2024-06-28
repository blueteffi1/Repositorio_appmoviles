import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ApiclientService } from 'src/app/service/apiclient.service';


describe('ApirestPage', () => {
  let service: ApiclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], 
      providers: [ApiclientService] 
    });

    
    service = TestBed.inject(ApiclientService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  
});
