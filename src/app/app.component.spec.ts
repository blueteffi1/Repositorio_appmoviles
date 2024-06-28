import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display "Inbox" in the title', () => {
    const compiled = fixture.nativeElement;

    
    const titleElement = compiled.querySelector('ion-list-header');
    expect(titleElement).toBeTruthy(); 
    expect(titleElement.textContent).toContain('MENÚ'); 
  });
});
